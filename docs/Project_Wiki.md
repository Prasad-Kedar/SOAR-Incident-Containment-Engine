# Project Wiki

## Project Name

SOAR Incident Containment Engine

## Objective

Automate security incident handling using FastAPI and threat intelligence enrichment.

## Workflow

1. Receive alert
2. Normalize alert
3. Perform threat lookup
4. Store alert
5. Return response

## Components

### FastAPI
Handles API requests.

### SQLite
Stores alert information.

### Threat Intelligence Module
Checks IP reputation.

### Normalizer
Standardizes alert data.

## API Endpoints

GET /
POST /alert
GET /alerts

## Database

Table: alerts

Columns:
- id
- alert_id
- source_ip
- severity
- threat_status

## Testing

Verified through Swagger UI and Postman.

## Contributors

- Prasad Kedar
- Alameen Ayoob
- Adarsh
- Nelna K Siyad
