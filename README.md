# PES Weimar — business tools and workflow showcase

## Paid toolkit release — 1 November 2026

The separate paid toolkit is now version **1.1.0**, with bilingual tools/guides and a tested portable Windows x64 local launch mode. The Gumroad download was retrieved after saving and matched the tested archive. See [release verification and limits](docs/bilingual-repair-2026-11-01.md). Full paid source and bundled runtime are excluded from this public showcase.

A portfolio of Earl Flanagan’s business direction, training expertise and review of AI-assisted tools and service workflows. The original stack includes a four-tool sales-readiness product and a later bilingual service website. See [stack inventory](docs/stack-inventory.md).

This is a **sanitized educational demonstration**, not the production website or a customer-management system. All enquiry examples are fictional. It sends no messages, creates no bookings and stores no enquiry data.

## Try it

Open `demo/index.html` in a browser. No installation, account or server is needed. Choose English or German, select a service, and preview a fictional enquiry. Use invented information only.

A second [topic and meeting-stage demo](demo/call-prep.html) shows editable fictional preparation suggestions.

Run the public sample checks with Node.js: `node --test tests/*.test.cjs`.

## What this demonstrates

- Explaining services and guiding a user to an appropriate next step.
- Bilingual support language and accessible form feedback.
- Validating and trimming required input, and restricting service selection to known options.
- Separating an enquiry from a paid order, and a submission acknowledgement from actual email delivery.
- Documenting a workflow, checking changes and keeping private material out of a public repository.

## My role and AI assistance

I supplied the business context, service direction and subject-matter experience; reviewed wording and behaviour; and directed revisions and testing. Skywork performed most of the original development, as confirmed by Earl. ChatGPT/Codex supported later implementation, debugging, documentation and checks. This showcase and its small fictional enquiry demo were newly assembled with Codex assistance in November 2026; the demo is not the original paid toolkit. It should not be read as evidence of independent professional software-engineering employment.

## Real workflow vs this demo

The inspected PES source uses static HTML, CSS and JavaScript, with Netlify hosting/Forms and a public Cal.com booking route. Its public site has German and English pages and practical business-communication guides. Enquiry handling and proposals remain human-led. See [architecture](docs/architecture.md) and [case study](docs/case-study.md).

This demo replaces production submission with an in-memory preview. It excludes actual form endpoints, booking links, mailbox addresses, client records, private analytics, original recommendation letters, account identifiers and verification tokens. No production history is included.

## Evidence and limits

The 30 October 2026 project records report 31 form assertions, 165 local-link checks and seven page metadata checks for the production release. Those are dated records, not tests rerun by this showcase. This package has its own smaller tests. No traffic, customer, revenue, accessibility certification or ranking improvement is claimed.

## Contents

- `demo/`: runnable sample, without external dependencies.
- `src/workflow.js`: small reusable validation/preview module.
- `tests/`: focused workflow checks.
- `samples/`: original fictional training and editing examples.
- `docs/`: workflow, attribution and publication boundaries.

No open-source licence is granted by this repository. See `NOTICE.md`; request permission before reusing the materials.

## Later workflow improvements

See [workflow upgrades and verification](docs/workflow-upgrades.md) and the [stack roadmap](docs/stack-roadmap.md) for the later Call Prep work, topic selector, backup/restore boundaries and outstanding validation. Private candidate results are documented separately from the small public demo tests.

