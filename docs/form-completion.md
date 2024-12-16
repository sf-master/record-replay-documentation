---
id: form-completion
title: Form Completion
---

# Form Completion

Form completion refers to capturing the event when a user successfully submits a form. This solution automates the process, eliminating the need for manual integration and ensuring seamless tracking of form submissions.

## Description

To enable form completion on your forms, add the following **class** to the Submit button of your form:

```plaintext
consent-confirmation-form-submit
```
When this class is added to the button element, our script will:
1. Extend the `onclick` functionality and capture the form's completion.
2. Add its own function to the button if no `onclick` is present for the button with this class.

Additionally, **observers** will ensure that:
- Whenever a button with the target class is rendered, the above functionality is added.
- It also looks for the parent element with the form label and adds the same functionality to the `onsubmit` event to handle any edge cases.

---

### 1. Basic Submit Button

```html
<div>
    <button type="submit" class="consent-confirmation-form-submit">Submit</button>
</div>
```

---

### 2. Button Within a Form

```html
<form id="submit-form">
    <button type="submit" class="consent-confirmation-form-submit">Submit Form</button>
</form>
```

---