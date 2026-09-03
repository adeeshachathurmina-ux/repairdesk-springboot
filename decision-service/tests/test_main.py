from fastapi.testclient import TestClient
from app.main import app
client=TestClient(app)
def test_low_cost_repair_is_recommended():
 r=client.post('/recommend',json={'currentValue':1000,'repairCost':200,'deviceAgeMonths':12,'previousRepairCount':0,'successRate':90,'partsAvailable':True})
 assert r.status_code==200 and r.json()['decision']=='REPAIR_RECOMMENDED'
def test_expensive_old_device_prefers_replacement():
 r=client.post('/recommend',json={'currentValue':500,'repairCost':400,'deviceAgeMonths':72,'previousRepairCount':4,'successRate':40,'partsAvailable':False})
 assert r.status_code==200 and r.json()['decision']=='REPLACEMENT_MAY_BE_BETTER'
