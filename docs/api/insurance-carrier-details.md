---
id: insurance-carrier-details
title: Insurance Carrier Consent Details
---

# Insurance Carrier Consent Details API (Real-time)

This API allows you to retrieve insurance carrier consent details against a `certificate_id`. It provides both the detailed carrier consent status and TCPA (Telephone Consumer Protection Act) related disclaimers.

---

## API Endpoint

```
GET /public/consentDetails/:certificate_id
```

---

## Authorization

The API requires a **Bearer Token** for authorization. Include the token in the request headers as follows:

```http
Authorization: Bearer <your account API token>
```

---

## Request Body (Optional)

If no request body is provided, the API will return **all consented insurance carriers**. To filter specific carriers, pass the following JSON body:

```json
{
   "insurance_carriers": ["Carrier 1", "Carrier 2"]
}
```

| Parameter           | Type            | Description                         |
|---------------------|-----------------|-------------------------------------|
| `insurance_carriers` | Array of String | A list of carrier names to filter by |

---

## Response

The response contains the consent details of insurance carriers and TCPA disclaimers.

### Response Example

```json
{
    "consent_details": {
        "certificate_id": "24fc3c9f3591421891197cd2ef78645a",
        "insurance_carriers": [
            {
                "carrier_name": "carier 1",
                "consented": true
            },
            {
                "carrier_name": "carier 2",
                "consented": true
            },
            {
                "carrier_name": "21st Century Insurance new",
                "consented": true
            },
            {
                "carrier_name": "Farmers Insurance ",
                "consented": true
            },
            {
                "carrier_name": "21st Century Insurance ",
                "consented": true
            }
        ],
        "tcpa_disclaimer": "<p style=\"text-align: justify;\">\n  By clicking the \"Continue &amp; Get Quote\" button, I provide my electronic signature and represent that I am at least 18 and agree to this website's \n  <a style=\"text-decoration: underline; color: #3486e5 !important;\" href=\"/privacy-policy\">Privacy Policy</a> and \n  <a style=\"text-decoration: underline; color: #3486e5 !important;\" href=\"/terms-of-use\">Terms of Services</a>.\n</p>\n<p style=\"text-align: justify;\">\n  By clicking the \"Continue &amp; Get Quote\" button, I provide my express written consent and authorization to the owner of this website and/or of the listed agency to contact me for marketing/telemarketing purposes at the number and address provided above, including my wireless number if provided, using live operators, automated telephone dialing systems, artificial voice or pre-recorded messages, text messages and/or emails, if applicable, even if I have previously registered the provided number on any Federal or State Do Not Call Registry. I understand that my consent is not required as a condition of purchasing goods or services and can be revoked by me at any time.\n</p>\n<p style=\"text-align: justify;\">\n  Message and data rates may apply. Message frequency varies. Reply HELP for customer support or STOP to opt-out. See \n  <a style=\"text-decoration: underline; color: #3486e5 !important;\" href=\"/sms-terms\">SMS Terms of Service</a> for more details.\n</p>\n",
        "tcpa_disclaimer_text": "By clicking the \"Continue & Get Quote\" button, I provide my electronic signature and represent that I am at least 18 and agree to this website's Privacy Policy and Terms of Services. By clicking the \"Continue & Get Quote\" button, I provide my express written consent and authorization to the owner of this website and/or of the listed agency to contact me for marketing/telemarketing purposes at the number and address provided above, including my wireless number if provided, using live operators, automated telephone dialing systems, artificial voice or pre-recorded messages, text messages and/or emails, if applicable, even if I have previously registered the provided number on any Federal or State Do Not Call Registry. I understand that my consent is not required as a condition of purchasing goods or services and can be revoked by me at any time. Message and data rates may apply. Message frequency varies. Reply HELP for customer support or STOP to opt-out. See SMS Terms of Service for more details."
    },
    "status": "success"
}
```

---

## Key Response Fields

| Field                   | Type              | Description                                                           |
|-------------------------|-------------------|-----------------------------------------------------------------------|
| `certificate_id`         | String            | Unique identifier for the certificate                                 |
| `insurance_carriers`     | Array of Objects  | List of carriers with consent status                                  |
| `carrier_name`           | String            | Name of the insurance carrier                                         |
| `consented`             | Boolean           | Indicates whether consent was provided                                |
| `tcpa_disclaimer`       | String (HTML)     | TCPA disclaimer content in HTML format                                |
| `tcpa_disclaimer_text`  | String            | TCPA disclaimer content in plain text                                 |
| `status`                | String            | API status, e.g., "success"                                           |

---

## Notes
- If no body is provided, all insurance carriers' consent statuses will be returned.
- The `tcpa_disclaimer` provides HTML content for TCPA compliance, while `tcpa_disclaimer_text` provides the raw text version.

---

## Example Usage

**Request without Body:**

```http
GET /public/consentDetails/24fc3c9f3591421891197cd2ef78645a
Authorization: Bearer <your account API token>
```

**Request with Body:**

```http
POST /public/consentDetails/24fc3c9f3591421891197cd2ef78645a
Authorization: Bearer <your account API token>
Content-Type: application/json

{
   "insurance_carriers": ["Carrier 1", "Carrier 2"]
}
```

**Response:**
- Returns consent status for specified carriers along with TCPA disclaimers.

---
