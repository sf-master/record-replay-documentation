---
id: insurance-carriers
title: Insurance Carriers
---

# Insurance Carriers

This feature allows capturing and tracking the selection of insurance carriers within forms. It observes user interactions with checkboxes or radio buttons to automatically record and update the selected options for processing.

---

## Description

To enable this functionality, add the following **class** to the input elements containing the insurance carrier names:

```plaintext
consent-confirmation-brand
```

Note: This is the class to be used for individual checkbox/radio/image elements.

### Prerequisite

The [Form Completion](form-completion) functionality must be implemented for the "Insurance Carriers" capture to work. Ensure the required steps outlined in the Form Completion section are completed before proceeding.

---

### Additional Requirements

- **`data-brand-name` Attribute**:
  - Each input element must include the `data-brand-name` attribute, which stores the name of the insurance carrier (e.g., "State Farm").
- **Unique ID**:

  - Each input checkbox or radio button element must have a unique `id`.

- **Labels**:
  - Ensure each input element has a corresponding `<label>` for better accessibility and usability.

---

### 1. Sample HTML with Checkboxes

```html
<div>
  <div>
    <input
      type="checkbox"
      id="companies_1"
      value="true"
      class="consent-confirmation-brand"
      data-brand-name="State Farm"
    />
    <label for="companies_1">
      <p>
        <img src="statefarm.png" alt="State Farm" />
      </p>
    </label>
  </div>
  <div>
    <input
      type="checkbox"
      id="companies_2"
      value="true"
      class="consent-confirmation-brand"
      data-brand-name="Allstate Insurance"
    />
    <label for="companies_2"> Allstate Insurance </label>
  </div>
</div>
```

---

### 2. Sample HTML with Radio buttons

```html
<div>
  <div>
    <input
      type="radio"
      id="companies_1"
      value="true"
      name="insurance_companies"
      class="consent-confirmation-brand"
      data-brand-name="State Farm"
    />
    <label for="companies_1">
      <p>
        <img src="statefarm.png" alt="State Farm" />
      </p>
    </label>
  </div>
  <div>
    <input
      type="radio"
      id="companies_2"
      value="true"
      name="insurance_companies"
      class="consent-confirmation-brand"
      data-brand-name="Allstate Insurance"
    />
    <label for="companies_2">
      <p>
        <img src="allstate.png" alt="Allstate Insurance" />
      </p>
    </label>
  </div>
</div>
```

---

### 3. Select All Functionality (Optional)

If the form includes a `Select All` checkbox option, it is mandatory to add the following class to this checkbox.

```plaintext
consent-confirmation-brand-selectall
```

If the form does not have a ``Select All`` checkbox, this class is not required.

#### Example:

```html
<div>
  <!-- Select All Checkbox -->
  <div>
    <input
      type="checkbox"
      id="select_all"
      class="consent-confirmation-brand-selectall"
      data-brand-name="select-all"
    />
    <label for="select_all">
      <strong>Select All</strong>
    </label>
  </div>

  <!-- Individual Insurance Carrier - State Farm -->
  <div>
    <input
      type="checkbox"
      id="companies_1"
      class="consent-confirmation-brand"
      data-brand-name="State Farm"
    />
    <label for="companies_1">
      <p>
        <img
          src="statefarm.png"
          alt="State Farm"
          class="carrier-logo"
          width="150"
          height="auto"
        />
      </p>
    </label>
  </div>

  <!-- Individual Insurance Carrier - Allstate Insurance -->
  <div>
    <input
      type="checkbox"
      id="companies_2"
      class="consent-confirmation-brand"
      data-brand-name="Allstate Insurance"
    />
    <label for="companies_2">
      <p>
        <img
          src="allstate.png"
          alt="Allstate Insurance"
          class="carrier-logo"
          width="150"
          height="auto"
        />
      </p>
    </label>
  </div>
</div>
```
