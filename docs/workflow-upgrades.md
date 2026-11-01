# Workflow improvements — 1 November 2026

The private toolkit candidate has developed beyond the original release. Its full source and buyer materials remain excluded from this public portfolio.

## Implemented in private candidates

- Corrupt-storage handling preserves unreadable records instead of silently replacing them with empty lists.
- Call Prep agenda allocations add up to the chosen duration.
- Five meeting stages and nine independent topics supply editable preparation suggestions.
- Template preview and explicit replacement protect existing preparation; actual outcomes and agreed actions remain separate.
- Conversation search, follow-up drafts from prior context and one main action with owner/date/completion state.
- Versioned JSON backup, schema/size checks, merge preview, duplicate skipping and conflict rejection. Optional draft restore does not overwrite an ongoing preparation.
- A start page for the four tools and a private release register.

The topics are first customer meeting, presentation rehearsal, product demonstration, proposal discussion, negotiation, partner/distributor meeting, support/complaint, training needs assessment and project progress review.

## Public sample

[Open the topic demonstration](../demo/call-prep.html) after downloading the repository. It is newly written for this portfolio, runs in memory and uses fictional examples. It illustrates topic/stage separation and protection of actual outcomes. It is not the paid toolkit, a CRM or a copy of customer records.

## Verification boundaries

| Scope | Evidence | Limit |
|---|---|---|
| Earlier maintenance candidate | 104 syntax/storage assertions and 960 agenda assertions | These do not certify later changes |
| Workflow candidate | 34 isolated app assertions; HTTP browser checks for save/export, duplicate merge, search, action completion and follow-up/reload | Mocked-service tests and HTTP browser tests are distinct |
| Latest topic candidate | 221 isolated assertions including all 45 topic/stage combinations; browser save/reload of a topic and preparation tasks | Not a complete native-browser or direct-file acceptance suite |
| Owner checks | Earlier ICP and Call Prep saved records remained after closing/reopening local files | Owner reports; browser unspecified; earlier versions only |

The 221 assertions include the 34 workflow assertions; do not add overlapping counts together. The public sample has its own smaller tests. No customer, revenue, conversion or legal-clearance result is implied.

## Remaining work

Structured recovery for the other three tools, a complete English/German interface, existing-user migration and current live-distribution verification remain open. Agent browser policy blocks file://; no workaround or direct-file test is claimed. The full owner-reported 18-month development history remains incompletely evidenced. The paid product has not been replaced by these candidates.


## Consolidated candidate.3 follow-up

The next private candidate adds structured saved-data JSON recovery to Evidence Capture, ICP Profiler and Release Checklist. The first two merge records with duplicate/conflict protection. Checklist protects a different active review. Unfinished drafts in these three tools are not included. Call Prep retains its separate JSON schema and draft controls.

Verification: 223 Call Prep regression/compatibility assertions and a separate 32-assertion recovery suite pass against the consolidated candidate. The latter uses fictional JSON files actually downloaded from the three tools. Browser checks verify exports for all three and duplicate-import preview/merge for ICP. Form labels were associated and checklist heading contrast repaired. These are partial usability checks, not accessibility certification.

The current live delivery was independently rechecked by download and checksum comparison and remains the original release. The new candidate was not deployed. A requested mobile override did not apply; no mobile pass is claimed. Current-version direct-file, complete browser restore/migration, guide refresh and full interface translation remain open.
