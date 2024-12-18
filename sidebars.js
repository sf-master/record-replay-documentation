// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Manually defining the sidebar
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'form-completion',
      label: 'Form Completion',
    },
    {
      type: 'doc',
      id: 'tcpa-disclosure',
      label: 'TCPA Disclosure',
    },
    {
      type: 'doc',
      id: 'insurance-carriers',
      label: 'Insurance Carriers',
    },
    {
      type: 'category',
      label: 'API',
      collapsible: true, // Makes the category dropdown collapsible
      collapsed: true,   // By default, it will be collapsed
      items: [
        'api/insurance-carrier-details'
        
      ],
    },
  ],
};


export default sidebars;
