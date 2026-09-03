# RepairDesk LK

RepairDesk LK is a full-stack repair service management platform designed to manage the complete repair workflow, from device registration and diagnosis to quotation approval and repair completion.

The project demonstrates full-stack application development using Java Spring Boot, React, Spring Security, REST APIs and relational database technologies.

## Live Demo

[Open RepairDesk LK](https://repairdesk-springboot.vercel.app/)

### Demo Mode

The hosted version currently runs as an interactive frontend demonstration.

- Any valid email address and password can be used.
- Users can access the repair dashboard.
- Users can search existing repair requests.
- Users can create sample repair requests.
- Demo records are stored temporarily in the browser.
- The hosted demo is not currently connected to the Spring Boot backend.

## Key Features

- Interactive repair-management dashboard
- Device registration and repair-request management
- Customer and technician information
- Repair status tracking
- Search and filtering
- Technician assignment
- Diagnosis and quotation workflow
- Role-based application structure
- Form validation and error handling
- Pagination and sorting support
- REST API architecture
- Database migration scripts
- Responsive user interface
- Docker development configuration
- API and architecture documentation

## Repair Workflow

```text
Customer submits a repair request
                ↓
Device is registered
                ↓
Technician is assigned
                ↓
Device diagnosis is recorded
                ↓
Quotation is prepared
                ↓
Customer approves or rejects quotation
                ↓
Repair work is completed
                ↓
Device becomes ready for collection
```

## Technology Stack

### Backend

- Java 17
- Spring Boot
- Spring Security
- Spring Data JPA
- Maven
- JWT authentication
- Bean Validation
- Flyway database migrations

### Frontend

- React
- Vite
- JavaScript
- CSS
- REST API integration

### Database

- MySQL
- JPA and Hibernate
- Flyway migration scripts

### Development and Deployment

- Git and GitHub
- Docker
- Docker Compose
- Vercel
- Postman

## Project Architecture

```text
repairdesk-springboot
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── domain
│   ├── dto
│   ├── security
│   ├── exception
│   └── database migrations
│
├── frontend
│   ├── components
│   ├── API configuration
│   ├── application pages
│   └── styles
│
├── decision-service
│   ├── application
│   └── tests
│
├── docs
│   ├── API.md
│   ├── ARCHITECTURE.md
│   └── PORTFOLIO.md
│
├── docker-compose.yml
├── .env.example
└── README.md
```

## Main Backend Modules

- Authentication and authorisation
- User management
- Device management
- Repair-request management
- Technician work management
- Diagnosis management
- Quotation management
- Repair-status management
- Global exception handling

## User Roles

### Customer

- Register devices
- Create repair requests
- View repair progress
- Review quotations

### Technician

- View assigned repair requests
- Record device diagnoses
- Update repair progress
- Add repair information

### Manager or Administrator

- Manage repair requests
- Assign technicians
- Manage quotations
- Monitor the repair workflow

## Repair Statuses

```text
REQUESTED
UNDER_INSPECTION
WAITING_APPROVAL
REPAIR_IN_PROGRESS
WAITING_PARTS
COMPLETED
READY_FOR_PICKUP
DELIVERED
CANCELLED
```

## Run the Project Locally

### Prerequisites

- Java 17
- Maven
- Node.js
- MySQL
- Docker, optional

### Using Docker Compose

Create an environment file using `.env.example`, configure the required values and run:

```bash
docker compose up --build
```

### Run the Backend

```bash
cd backend
mvn spring-boot:run
```

### Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Documentation

Additional project documentation is available in the `docs` directory:

- `API.md`
- `ARCHITECTURE.md`
- `PORTFOLIO.md`

## Testing

Backend tests:

```bash
cd backend
mvn test
```

Decision-service tests:

```bash
cd decision-service
pytest
```

## Current Deployment Status

| Component | Status |
|---|---|
| GitHub source code | Available |
| React frontend | Deployed on Vercel |
| Public demo mode | Available |
| Spring Boot backend | Source code available, not publicly deployed |
| Production database | Not publicly connected |
| Full authentication workflow | Requires backend deployment |

## Future Improvements

- Deploy the Spring Boot backend
- Connect a managed production database
- Enable complete JWT authentication online
- Add repair invoice generation
- Add email notifications
- Add file uploads for device photographs and documents
- Add audit logs and status-history tracking
- Improve automated test coverage

## Disclaimer

The public website currently demonstrates the frontend interface and repair-management workflow. Features that require authentication, permanent database storage and backend processing need the Spring Boot API to be deployed separately.

## Author

**MAC Oshadha**  
Data Science Undergraduate  
NSBM Green University, Sri Lanka

## Licence

This project is available for educational and portfolio purposes.
