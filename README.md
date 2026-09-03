# RepairDesk LK

A portfolio-ready electronic repair management and decision-support platform built with Spring Boot, React, MySQL and FastAPI.

## Highlights
- JWT authentication and role-based authorisation
- Device registration and repair request lifecycle
- Technician assignment, diagnosis and quotations
- Search, filtering, sorting and pagination
- Explainable repair-or-replace recommendation
- OpenAPI documentation, validation and global error handling
- Docker Compose development environment

## Architecture
```text
React client :5173 -> Spring Boot API :8080 -> MySQL :3306
                               |
                               +-> FastAPI decision service :8000
```

## Roles
- CUSTOMER: manages devices, submits requests, reviews quotations and tracks work
- TECHNICIAN: views assigned work and records diagnoses
- MANAGER: assigns technicians, creates quotations and manages workflow
- ADMIN: full operational access

## Quick start with Docker
1. Copy `.env.example` to `.env`.
2. Run `docker compose up --build`.
3. Open the web application at `http://localhost:5173`.
4. Open API documentation at `http://localhost:8080/swagger-ui.html`.

Development accounts are seeded only when `APP_SEED_DEMO=true`:
- admin@repairdesk.lk / Admin@123
- manager@repairdesk.lk / Manager@123
- technician@repairdesk.lk / Technician@123
- customer@repairdesk.lk / Customer@123

Change or disable demo credentials before public deployment.

## Local development
### Backend
Requires Java 17+, Maven 3.6.3+ and MySQL.
```bash
cd backend
mvn spring-boot:run
```

### Decision service
```bash
cd decision-service
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Quality checks
```bash
cd backend && mvn test
cd ../decision-service && pytest
cd ../frontend && npm run lint && npm run build
```

## Repository structure
- `backend`: Spring Boot REST API
- `frontend`: React client
- `decision-service`: explainable recommendation microservice
- `docs`: architecture, API and portfolio notes

## Responsible use
The recommendation is decision support, not a guarantee. It exposes the factors behind the result. A qualified technician must diagnose safety-critical defects.

## Licence
MIT
