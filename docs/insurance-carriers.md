---
id: insurance-carriers
title: Insurance Carriers
---

# Insurance Carriers

This feature allows capturing and tracking the selection of insurance carriers within forms. It observes user interactions with checkboxes or radio buttons to automatically record and update the selected options for processing.

---

## Description

The below **class name** can be added to the input tag of the element containing the buyer names. 

### How It Works:
- The script will start observing changes to the checkboxes/radio buttons.
- Upon every change, the script will get the user selection against all the brands displayed and update the same to the backend.
- All the buyer selections will be preserved, and only the non-consented brands can be added in case of an update made by the user.

---

## Class Name
```plaintext
consent-confirmation-brand
```
Note: This is the class name to be used for individual checkbox/radio/image elements.

---

### Additional Requirements

- **`data-brand-name` Attribute**:
  - Each input element must include the `data-brand-name` attribute, which stores the name of the insurance carrier (e.g., "State Farm").
  
- **Unique ID**:
  - Each input checkbox or radiobutton element must have a unique `id`.

- **Labels**:
  - Ensure each input element has a corresponding `<label>` for better accessibility and usability.

---

### 1. Sample HTML with Checkboxes

```html
<div>
    <div>
        <input type="checkbox" id="companies_1" value="true"
            class="consent-confirmation-brand"
            data-brand-name="State Farm">
        <label for="companies_1">
            <p>
                <img src="statefarm.png" alt="State Farm">
            </p>
        </label>
    </div>
    <div>
        <input type="checkbox" id="companies_2" value="true"
            class="consent-confirmation-brand"
            data-brand-name="Allstate Insurance">
        <label for="companies_2">
            <p>
                <img src="allstate.png" alt="Allstate Insurance">
            </p>
        </label>
    </div>
</div>
```

---

### 2. Sample HTML with Radio-buttons

```html
<div>
  <div>
    <input type="radio" id="companies_1" value="true"
      name="insurance_companies"
      class="consent-confirmation-brand"
      data-brand-name="State Farm">
    <label for="companies_1">
      <p>
        <img src="statefarm.png" alt="State Farm">
      </p>
    </label>
  </div>
  <div>
    <input type="radio" id="companies_2" value="true"
      name="insurance_companies"
      class="consent-confirmation-brand"
      data-brand-name="Allstate Insurance">
    <label for="companies_2">
      <p>
        <img src="allstate.png" alt="Allstate Insurance">
      </p>
    </label>
  </div>
</div>
```

---

### 3. Sample HTML with Image

```html
<div>
  <div>
    <input type="checkbox" id="companies_1" class="consent-confirmation-brand"
      data-brand-name="State Farm">
    <label for="companies_1">
      <p>
        <img src="statefarm.png"
          alt="State Farm"
          class="carrier-logo"
          width="150"
          height="auto">
      </p>
    </label>
  </div>
  <div>
    <input type="checkbox" id="companies_2" class="consent-confirmation-brand"
      data-brand-name="Allstate Insurance">
    <label for="companies_2">
      <p>
        <img src="allstate.png"
          alt="Allstate Insurance"
          class="carrier-logo"
          width="150"
          height="auto">
      </p>
    </label>
  </div>
</div>
```

---



