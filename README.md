# SOAR Incident Containment Engine

**Infotact Cybersecurity Internship Project**

## Project Overview

The SOAR (Security Orchestration, Automation, and Response) Incident Containment Engine is designed to automate security incident detection, threat intelligence analysis, alert management, and incident response workflows. The platform helps security teams reduce response time and improve incident handling efficiency through automation.

---

## Team Members

| Name           | Role                    |
| -------------- | ----------------------- |
| Prasad Kedar   | Team Lead               |
| Al Ameen Ayoob | Developer               |
| Adarsh         | Developer               |
| Nelna K Siyad  | Documentation & Testing |

---

## Objectives

* Automate incident detection and response processes.
* Reduce the time required to contain security threats.
* Generate alerts for suspicious activities.
* Maintain incident logs and audit trails.
* Improve overall security operations efficiency.

---

## Features

* Alert Ingestion
* Threat Intelligence Integration
* Incident Response Automation
* Dashboard Monitoring
* Logging and Monitoring
* REST API Integration
* Incident Reporting

---

## Technology Stack

* Python
* FastAPI
* SQLite
* REST APIs
* Git & GitHub
* Postman
* Pytest

---

## Database Design

The project uses SQLite for data storage.

### Tables

* Users
* Devices
* Logs

### Relationships

* Users generate logs.
* Devices are registered and monitored.
* Logs store security events and incident activities.

---

## API Research

### VirusTotal API

* Threat Intelligence
* File Hash Analysis
* URL Reputation

### AbuseIPDB API

* IP Reputation
* Malicious IP Reporting
* Threat Detection

---

## Alert Ingestion API

### POST /alerts

Receives alerts from SIEM systems and stores them for processing.

### GET /alerts

Retrieves all received alerts.

---

## Backend Updates

* Created Threat Intelligence Module.
* Added threat intelligence scoring.
* Implemented Get Alerts API endpoint.

---

## Testing Updates

* Validated threat intelligence scoring.
* Tested alert persistence workflow.
* Tested alert retrieval functionality.
* Verified API responses using Postman.

---

## Documentation Updates

* Added Threat Intelligence Workflow documentation.
* Updated README with latest project progress.
* Prepared test case documentation.
* Maintained project documentation records.

---

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

---

## Project Structure

```text
SOAR-Incident-Containment-Engine/

├── api/
├── services/
├── database/
├── tests/
├── docs/
├── ui/
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/Prasad-Kedar/SOAR-Incident-Containment-Engine.git
```

### Navigate to the Project Directory

```bash
cd SOAR-Incident-Containment-Engine
```

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

## Week 1 Progress

* Project planning completed.
* Requirements gathering completed.
* Database schema designed.
* Alert Ingestion API implemented.
* Threat Intelligence module created.
* UI wireframes prepared.
* Initial testing completed.
* Documentation updated.

---

## Future Enhancements

* Advanced Threat Intelligence Integration
* Automated Malware Analysis
* Real-Time Dashboard
* Machine Learning-Based Incident Classification
* Multi-Platform Security Integration

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
- Almeen
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

# Incident Response Workflow

Detection
    |
    v
Analysis
    |
    v
Containment
    |
    v
Eradication
    |
    v
Recovery
    |
    v
Lessons Learned

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

