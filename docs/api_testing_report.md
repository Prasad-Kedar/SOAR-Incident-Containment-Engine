# API Testing Report

## Test Case 1
Endpoint: POST /alerts

Input:
Valid alert data

Expected Result:
Alert stored successfully

Actual Result:
PASS

---

## Test Case 2
Endpoint: POST /alerts

Input:
Missing src_ip

Expected Result:
Validation error

Actual Result:
PASS

---

## Test Case 3
Endpoint: GET /dashboard/summary

Expected Result:
Dashboard statistics displayed

Actual Result:
PASS
