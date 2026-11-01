# Bilingual toolkit repair — 1 November 2026

The private 1.1.0 review build replaces broad text translation with explicit application labels and structured generated strings. User names, notes, CSV data cells, storage keys and JSON schemas stay unchanged. It includes English/German controls, checklist content, criteria, messages, template suggestions and generated export headings; 411 UI dictionary entries and 124 template sentences are included.

Two matching four-page buyer PDFs and editable guides were rebuilt. Portable tests run against a fresh extraction: 223 Call Prep assertions, 36 recovery/syntax assertions and 846 localisation/preservation assertions passed. Dictionary coverage is not exhaustive browser coverage.

HTTP browser checks covered all four tools, language switching, fictional save/reload, German template preview and English TXT/report downloads with preserved user text. All four had no page overflow at an actual 390-pixel viewport (375-pixel content plus scrollbar). A phone-sized viewport is not a physical phone test.

Native Chrome automation stopped because its safety control could not establish the current browser address. Native/direct-file/cross-browser and physical-device checks remain unverified; tablet/desktop expansion and Gumroad replacement were not completed after the stop. The live paid delivery remains the last verified pilot.3. This is a local review build, not a verified live release.

Skywork was the principal original developer; Earl provided business direction, professional expertise and review; Codex performed later repairs, localisation, independent checks and guide production. Full paid source, customer data and confidential records are excluded from this public repository.
