from decimal import Decimal
from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(title="RepairDesk Decision Service", version="1.0.0")

class RecommendationRequest(BaseModel):
    currentValue: Decimal = Field(gt=0)
    repairCost: Decimal = Field(ge=0)
    deviceAgeMonths: int = Field(ge=0)
    previousRepairCount: int = Field(ge=0)
    successRate: Decimal = Field(ge=0, le=100)
    partsAvailable: bool

@app.get("/health")
def health(): return {"status": "UP"}

@app.post("/recommend")
def recommend(x: RecommendationRequest):
    ratio = float(x.repairCost / x.currentValue)
    score, reasons = 100.0, []
    if ratio >= 0.65: score -= 45; reasons.append("Repair cost is at least 65% of the current device value.")
    elif ratio >= 0.40: score -= 25; reasons.append("Repair cost is between 40% and 65% of the current device value.")
    else: reasons.append("Repair cost is below 40% of the current device value.")
    if x.deviceAgeMonths > 60: score -= 20; reasons.append("The device is older than five years.")
    if x.previousRepairCount >= 3: score -= 20; reasons.append("The device has at least three previous repairs.")
    if x.successRate < 60: score -= 25; reasons.append("Estimated repair success is below 60%.")
    elif x.successRate >= 80: score += 10; reasons.append("Estimated repair success is at least 80%.")
    if not x.partsAvailable: score -= 35; reasons.append("Required parts are currently unavailable.")
    score = round(max(0, min(100, score)), 1)
    decision = "REPAIR_RECOMMENDED" if score >= 70 else "FURTHER_DIAGNOSIS_REQUIRED" if score >= 45 else "REPLACEMENT_MAY_BE_BETTER"
    return {"decision": decision, "score": score, "repairCostToValueRatio": round(ratio, 3), "reasons": reasons, "disclaimer": "Decision support only. A qualified technician should confirm the final action."}
