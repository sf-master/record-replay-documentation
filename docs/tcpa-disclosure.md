---
id: tcpa-disclosure
title: TCPA Disclosure
---

# TCPA Disclosure

TCPA disclosure refers to the message displayed to users regarding consent for communications. This solution automatically captures the TCPA disclosure text from forms using a unique identifier, ensuring it is recorded and processed without manual effort.

---

## Description

The **TCPA Disclosure** label should be placed around the disclosure text displayed on forms. The class will allow us to capture the entire text contained within the element.

To enable this functionality, add the following **class** to the HTML element containing the TCPA disclosure text:

```plaintext
consent-confirmation-tcpa-disclosure
```

This class will be used to extract and display the TCPA on the **certificate details page** in a pop-up after applying any required formatting (in the case of HTML).

---

### Sample HTML with TCPA Disclosure

```html
<div class="consent-confirmation-tcpa-disclosure">
  <p>
    TCPA Consent: By submitting this form, I expressly consent to receive
    marketing communications from [Company Name] and its representatives via:
  </p>
  <ul>
    <li>Automated telephone dialing system</li>
    <li>Prerecorded messages</li>
    <li>Text messages</li>
    <li>Emails</li>
  </ul>
  <p>
    at the number/email provided, even if my number is on a do-not-call list. I
    understand consent is not required for purchase.
  </p>
</div>
```

---
