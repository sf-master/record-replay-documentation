---
id: tcpa-capture
title: TCPA Capture
---

# TCPA Capture

TCPA disclosure refers to the message displayed to users regarding consent for communications. This solution automatically captures the TCPA disclosure text from forms using a unique identifier, ensuring it is recorded and processed without manual effort.

---

## Description

The **TCPA Disclosure** label should be placed around the disclosure text displayed on forms. The class name will allow us to capture the entire text contained within the element.

- This class will be used to extract and display the TCPA on the **certificate details page** in a popup after applying any required formatting (in the case of HTML).

---

## Class Name
```plaintext
consent-confirmation-tcpa-disclosure
```

---

### 1. Sample HTML with Basic TCPA Disclosure

```html
<div class="consent-confirmation-tcpa-disclosure">
    By clicking submit, I agree to receive calls and texts at the number provided. Carrier rates may apply. 
    I understand these calls may be generated using automated technology.
</div>
```

---

### 2. Sample HTML with Advanced TCPA Disclosure (Formatted Version)

```html
<div class="consent-confirmation-tcpa-disclosure">
    <p>
        TCPA Consent: By submitting this form, I expressly consent to receive marketing communications from 
        [Company Name] and its representatives via:
    </p>
    <ul>
        <li>Automated telephone dialing system</li>
        <li>Prerecorded messages</li>
        <li>Text messages</li>
        <li>Emails</li>
    </ul>
    <p>
        at the number/email provided, even if my number is on a do-not-call list. 
        I understand consent is not required for purchase.
    </p>
</div>
```
---