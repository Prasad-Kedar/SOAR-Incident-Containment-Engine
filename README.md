# SOAR Incident Containment Engine

**Infotact Cybersecurity Internship Project**

## Project Overview


The SOAR (Security Orchestration, Automation, and Response) Incident Containment Engine is designed to automate security incident detection, threat intelligence analysis, alert management, and incident response workflows. The platform helps security teams reduce response time and improve incident handling efficiency through automation.

---

# Overview

The SOAR Incident Containment Engine provides a centralized platform for:

- Security Alert Ingestion
- Threat Intelligence Enrichment
- Incident Management
- Analyst Assignment
- Automated Response Actions
- Notification Management
- Audit Logging
- Dashboard Analytics
- Security Reporting
- Role-Based Access Control

The platform helps SOC analysts investigate alerts, enrich incidents with threat intelligence, perform containment actions, and generate operational reports from a single interface.

---

# Features

## Alert Management

- Alert ingestion API
- Alert normalization
- Alert storage in SQLite
- Recent alerts tracking
- High-risk incident identification

## Threat Intelligence

- IP reputation lookup
- IOC investigation
- Malicious indicator detection
- Threat scoring
- Threat statistics dashboard

## Incident Management

- Incident enrichment
- Incident assignment
- Analyst workload tracking
- Incident escalation
- Incident status management

## Response Automation

- Block malicious IP addresses
- Host isolation actions
- Response history tracking
- Response metrics dashboard

## Notifications

- Incident notification system
- Notification history
- Alert escalation workflow

## Reporting

- Incident reports
- Severity distribution reports
- Analyst workload reports
- Dashboard analytics

## Authentication & Authorization

- User creation
- JWT authentication
- Secure dashboard access
- Role-based permissions
- Admin and Analyst dashboards

---

# Architecture

```text
SOC Analyst / Security User
            │
            ▼
     React Frontend
            │
            ▼
      FastAPI Backend
            │
 ┌──────────┼──────────┐
 │          │          │
 ▼          ▼          ▼

Threat      Incident   Response
Intel       Mgmt       Engine

            │
            ▼

      SQLite Database
```

## Core Modules

- Alert Ingestion Engine
- Threat Intelligence Engine
- Incident Management Engine
- Automated Response Engine
- Reporting Engine
- Notification Engine
- Authentication Module

---

# Technology Stack

## Backend

- FastAPI
- Python
- SQLAlchemy
- Pydantic

## Database

- SQLite

## Security

- JWT Authentication
- Role-Based Access Control

## Frontend

- React.js
- Axios

## Development Tools

- Git
- GitHub
- Swagger UI
- VS Code

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Prasad-Kedar/SOAR-Incident-Containment-Engine.git 
cd SOAR-Incident-Containment-Engine


## Create Virtual Environment

```bash
python -m venv venv
```

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Linux / Mac

```bash
source venv/bin/activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run Backend

```bash
cd backend
uvicorn main:app --reload
```

Backend:

```text
http://127.0.0.1:8001
```

Swagger Documentation:

```text
http://127.0.0.1:8001/docs
```

---

# API Endpoints

## Alerts

| Method | Endpoint |
|----------|----------|
| POST | /alerts |
| GET | /alerts |

## Dashboard

| Method | Endpoint |
|----------|----------|
| GET | /dashboard/summary |
| GET | /dashboard/recent |
| GET | /dashboard/security-metrics |
| GET | /dashboard/response-metrics |
| GET | /dashboard/trends |
| GET | /dashboard/recent-cases |

## Threat Intelligence

| Method | Endpoint |
|----------|----------|
| GET | /threat/{ip} |
| GET | /ioc/{ip} |
| GET | /threats/malicious |
| GET | /threats/stats |

## Incident Management

| Method | Endpoint |
|----------|----------|
| GET | /incident/{incident_id}/intel |
| GET | /incidents/high-risk |
| PUT | /incident/{incident_id}/assign/{analyst_name} |
| POST | /incident/{incident_id}/escalate |

## Response Actions

| Method | Endpoint |
|----------|----------|
| POST | /response/block-ip/{incident_id} |
| POST | /response/isolate-host/{incident_id} |
| GET | /responses |

## Notifications

| Method | Endpoint |
|----------|----------|
| POST | /notify/{incident_id} |
| GET | /notifications |

## Authentication

| Method | Endpoint |
|----------|----------|
| POST | /users |
| POST | /login |
| GET | /secure/dashboard |
| GET | /admin/dashboard |
| GET | /analyst/dashboard |
| GET | /role/{role} |

## Reporting

| Method | Endpoint |
|----------|----------|
| GET | /reports/incidents |
| GET | /reports/severity |
| GET | /reports/analysts |

## Audit Logging

| Method | Endpoint |
|----------|----------|
| POST | /audit/log |
| GET | /audit/logs |

---

# Project Structure

```text
SOAR-Incident-Containment-Engine
│
├── backend
│   ├── main.py
│   ├── models.py
│   ├── models_db.py
│   ├── database.py
│   ├── db_session.py
│   ├── normalizer.py
│   ├── threat_intel.py
│   ├── alerts.py
│   └── sample_alert.json
│
├── Frontend
│
├── docs
│   ├── Threat_Intelligence_Documentation.md
│   ├── dashboard_analytics.md
│   ├── response_workflow.md
│   ├── notification_workflow.md
│   ├── audit_workflow.md
│   └── Projectplan.md
│
├── Screenshots
│
└── README.md
```

# Team Members

| Name | Role | Responsibilities |
|--------|--------|----------------|
| Prasad Kedar | Team Lead | Backend Development, Architecture, Threat Intelligence, Reporting APIs, Documentation, Deployment Planning | README.md 
| Almeen | Frontend Developer | React Integration, Dashboard UI, API Integration |
| Adarsh | QA & Testing | API Testing, Validation, Security Testing |
| Nelna | Documentation | User Guides, Screenshots, Documentation Support |



# Screenshots

## Dashboard



## Threat Intelligence

Add IOC and Threat Lookup screenshots here.

## Incident Management

Add incident management screenshots here.

## Reports



## Swagger API



## GitHub Project

Add project board, issues, commits, and PR screenshots here.

---

# Future Improvements

- Real-time alert streaming
- SIEM integration
- VirusTotal API integration
- AbuseIPDB integration
- Email and Slack notifications
- Multi-user authentication
- Advanced analytics dashboard
- Automated playbooks
- Docker deployment
- Kubernetes deployment
- CI/CD pipeline integration
- Cloud deployment support
- AI-powered threat correlation



# Project Status

Current Status: Active Development

This project was developed as a cybersecurity internship project to demonstrate Security Orchestration, Automation, and Response (SOAR) concepts including threat intelligence, incident management, automated response, reporting, and SOC workflow automation.---



## UI Design

The dashboard UI includes:

* Header Navigation
* Sidebar Navigation
* Active Alerts Section
* Incident Statistics
* Recent Activities

### UI Files

* `ui/wireframes/dashboard-wireframe.md`
* `ui/ui-requirements.md`



### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run the Application

```bash
uvicorn main:app --reload
```

---

## Testing

### Testing Activities

* Functional Testing
* API Testing
* Integration Testing
* User Acceptance Testing

### Testing Tools

* Postman
* Pytest

---

## Documentation

The project documentation includes:

* Software Requirements Specification (SRS)
* Test Cases
* Test Reports
* API Documentation
* User Guide
* Bug Reports

---
## Project Demo

Demo Video:

https://youtu.be/VqMqUd9eYB8?si=RdB9dlTFJiotBA5b

---
## Project Structure

```text
SOAR-Incident-Containment-Engine/
├── api/        # API endpoints and request handling
├── services/   # Core business logic and automation services
├── database/   # Database models and data management
├── tests/      # Unit and integration tests
├── docs/       # Project documentation and diagrams
├── ui/         # User interface and dashboard components
└── README.md   # Project overview and setup instructions
```
## Features

- Automated incident containment workflows
- Threat intelligence integration
- Alert monitoring and management
- Security incident tracking
- API-based backend communication
- Dashboard for security operations visibility
- Incident response automation

# Technology Stack

Component| Technology
Backend| Python
Frontend| HTML, CSS, JavaScript
APIs| REST API
Version Control| Git & GitHub

# Installation

1. Clone the Repository

git clone https://github.com/Prasad-Kedar/SOAR-Incident-Containment-Engine.git
cd SOAR-Incident-Containment-Engine

2. Create Virtual Environment

python3 -m venv venv

3. Activate Virtual Environment

source venv/bin/activate

4. Install Dependencies

pip install -r requirements.txt

5. Run the Application

python Backend/main.py

## API Summary

| Endpoint   | Method | Description |
|------------|--------|-------------|
| /alerts    | GET    | Retrieve security alerts |
| /incidents | GET    | Retrieve incidents |
| /threats   | GET    | Retrieve threat intelligence data |
| /contain   | POST   | Execute containment actions |

# Future Scope

- User authentication and authorization
- SIEM integration
- Email and Slack notifications
- Advanced analytics dashboard
- Automated response playbooks
- Enhanced threat intelligence correlation

# Contributors

- Prasad Kedar
- Alameen
- Nelna
- Adarsh
  
## System Architecture Diagram

```text
+--------+
|  User  |
+--------+
     |
     v
+--------------+
| UI Dashboard |
+--------------+
     |
     v
+-----------+
| API Layer |
+-----------+
     |
     v
+-----------+
| Services  |
+-----------+
     |
     v
+-----------+
| Database  |
+-----------+

     |
     v

+--------------+
| Threat Intel |
+--------------+
```

 Description

- User interacts with the dashboard.
- UI sends requests to API endpoints.
- API communicates with service modules.
- Services process incidents and alerts.
- Database stores incident and alert data.
- Threat Intelligence enriches security events
  
## SOAR Workflow Diagram

```text
+-----------------+
| Alert Generated |
+-----------------+
         |
         v
+-----------------+
| Alert Ingestion |
+-----------------+
         |
         v
+------------------------------+
| Threat Intelligence Enrichment |
+------------------------------+
         |
         v
+------------------+
| Incident Creation|
+------------------+
         |
         v
+-------------------+
| Automated Analysis|
+-------------------+
         |
         v
+-------------------+
| Containment Action|
+-------------------+
         |
         v
+---------------+
| Investigation |
+---------------+
         |
         v
+------------+
| Resolution |
+------------+
         |
         v
+---------+
| Closure |
+---------+
```

 Description

The SOAR platform automates incident handling from alert ingestion to final closure.

## Incident Response Workflow

```text
+-----------+
| Detection |
+-----------+
      |
      v
+----------+
| Analysis |
+----------+
      |
      v
+-------------+
| Containment |
+-------------+
      |
      v
+-------------+
| Eradication |
+-------------+
      |
      v
+----------+
| Recovery |
+----------+
      |
      v
+-----------------+
| Lessons Learned |
+-----------------+
```

 Description

1. Detection of security events.
2. Analysis and validation.
3. Containment of affected assets.
4. Removal of threats.
5. Recovery of systems.
6. Documentation and improvement.

## Document Alert Lifecycle

```text
Alert Generated
      |
      v
Alert Collected
      |
      v
Alert Validated
      |
      v
Alert Prioritized
      |
      v
Incident Created
      |
      v
Investigation
      |
      v
Response Executed
      |
      v
Incident Closed
```

 Description

The alert lifecycle tracks a security alert from creation through investigation, response, and closure.

## Dashboard Workflow Explanation

```text
+----------------+
| Dashboard Load |
+----------------+
        |
        v
+-------------+
| API Request |
+-------------+
        |
        v
+--------------------+
| Service Processing |
+--------------------+
        |
        v
+----------------+
| Database Query |
+----------------+
        |
        v
+------------------+
| Data Aggregation |
+------------------+
        |
        v
+------------------+
| Dashboard Display|
+------------------+
        |
        v
+--------------+
| User Actions |
+--------------+
```

Description
- Dashboard requests data through APIs.
- Services process alerts and incidents.
- Data is retrieved from the database.
- Results are displayed as widgets, tables, and charts.
- Users can investigate alerts and trigger containment actions.

