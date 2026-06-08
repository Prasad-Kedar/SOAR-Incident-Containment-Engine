# Threat Intelligence Workflow

## Overview

The Threat Intelligence module enriches incoming security alerts by evaluating the reputation and risk level of source IP addresses. This helps security analysts prioritize incidents and make informed response decisions.

## Objectives

* Identify potentially malicious IP addresses.
* Assign risk scores to alerts.
* Improve alert prioritization.
* Support automated response workflows.

## Workflow

### 1. Alert Reception

Incoming alerts are received through the Alert Ingestion API.

Example:

```json
{
  "src_ip": "192.168.1.100",
  "severity": "high",
  "event_type": "brute_force"
}
```

### 2. Alert Normalization

The alert is normalized into a standard structure to ensure consistency across different alert sources.

### 3. Threat Intelligence Check

The source IP address is evaluated using the Threat Intelligence module.

Parameters analyzed:

* Source IP
* Event Type
* Alert Severity

### 4. Risk Scoring

A risk score is generated based on predefined rules.

Example:

| Risk Score | Classification |
| ---------- | -------------- |
| 0-30       | Low            |
| 31-70      | Medium         |
| 71-100     | High           |

### 5. Database Storage

The enriched alert is stored in SQLite for future analysis and reporting.

### 6. Analyst Review

Security analysts can retrieve alerts through the API and investigate high-risk events.

## Current Implementation

* IP reputation simulation
* Risk score generation
* Threat classification
* Alert enrichment

## Future Enhancements

* Integration with AbuseIPDB
* VirusTotal enrichment
* GeoIP analysis
* Automated containment actions
* MITRE ATT&CK mapping

## Benefits

* Faster incident triage
* Better alert prioritization
* Improved SOC visibility
* Foundation for automated response workflows
