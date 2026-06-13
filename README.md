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

