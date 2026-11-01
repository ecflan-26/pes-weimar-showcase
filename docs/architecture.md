# Workflow and architecture

## Inspected production design

```mermaid
flowchart LR
  A[German or English service page] --> B[Offer selection]
  B --> C[Enquiry form with browser validation]
  C --> D[Netlify Forms]
  D --> E[Human review and reply]
  A --> F[Optional public booking page]
  E --> G[Written scope, terms and price]
  G --> H[Customer decision]
```

HTML and CSS provide the content and layout. JavaScript trims inputs, preserves allowlisted service choices and provides accessible validation/status text. The production implementation includes a timeout, duplicate-submit guard and an email-text fallback when delivery cannot be confirmed. The site uses Netlify Forms; customer delivery and notifications require separate end-to-end evidence.

## Showcase design

Browser -> local validation module -> on-screen fictional preview.

No network submission, analytics, cookies, browser storage, mailing provider or booking integration. A page refresh clears the input. The absence of external requests is also checked statically. Do not deploy this sample as a real lead form without implementing and validating a separate delivery and privacy design.
