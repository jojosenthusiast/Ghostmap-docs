---
id: privacy
title: Privacy Policy
sidebar_label: Privacy Policy
---

# Privacy Policy

**Effective date:** June 20, 2026 · **Version:** 1.1

> **The whole policy in one line:**
> The GhostMap extension runs on your machine, makes no network calls of its own, transmits no source code or metadata off your machine, ships no telemetry or analytics, and does not communicate with the maintainers. Site and support-platform caveats are covered below.

## 1. What data we collect

The maintainers collect none. GhostMap does not transmit personally identifiable information, source code, file contents, file paths, telemetry, crash reports, usage statistics, or any other data about you, your machine, or your projects to the maintainers or any third party.

The extension does store a local cache on your own filesystem, described in Section 3. That cache is not collected by the maintainers and is never transmitted by GhostMap.

## 2. What the extension reads locally

To do its job, GhostMap reads the following inside the VS Code Extension Host process running on your computer:

- The text of the file currently open in the active editor.
- The list of open and visible editors (used for the optional background indexing queue, which is off by default).
- Symbol information returned by VS Code Language Servers you have installed.
- A SHA-256 fingerprint of file contents, used purely for cache validation.

All of the above stays inside the VS Code process. None of it is transmitted off your machine by GhostMap.

## 3. What the extension stores locally

GhostMap maintains a per-workspace cache file at `<workspace>/.ghostmap/ghostmap.json`. This file contains the symbol tree, anchors, and metadata for files you have opened. It is capped at 2 megabytes and is stored exclusively on your filesystem. It is never transmitted anywhere. You can delete it at any time without consequence beyond a slower first-open of recently used files.

## 4. Network activity

The GhostMap extension itself makes zero outbound network requests. The VS Code application and the Language Servers you have installed may make their own network requests according to their respective policies. GhostMap has no involvement in those.

## 5. Third-party services

The GhostMap **extension** integrates with no third-party services, no analytics provider, no error-tracking service, no advertising network, and no AI service. The Tree-sitter parsers shipped inside the extension are static WebAssembly files that run locally with no network capability.

The GhostMap **marketing site and documentation site** load typography from Google Fonts (`fonts.googleapis.com` and `fonts.gstatic.com`) on page render. This is a request from your browser to Google in order to fetch the font files; Google may log the request as it would any HTTP request to its servers. We use no other third-party services on these surfaces: no analytics, no tag manager, no advertising, no embeds. A future revision of the sites may self-host the fonts to remove this last external request.

Possible future voluntary supporter platforms (Lemon Squeezy, Patreon, and Ko-fi) would each process payment, account, receipt, and supporter data under their own privacy policies if and when adopted; none are active today. Direct supporter contact at [getghostmap@proton.me](mailto:getghostmap@proton.me) is the canonical channel. Any voluntary support flow is separate from the GhostMap extension. It does not add extension telemetry, does not make the extension transmit project data, and does not grant any commercial-use rights.

## 6. Cookies and tracking

The GhostMap extension is not a web property and uses no cookies. The marketing site and documentation site do not set cookies and do not run analytics. Server access logs may be kept by the hosting provider for the standard short retention window; consult the provider's policy for details. The maintainers do not access or use those logs.

## 7. Children's privacy

GhostMap is a developer tool not directed at children under 13. The extension does not send user data to GhostMap maintainers or GhostMap servers. Site font requests, hosting logs, and voluntary support platforms are covered in sections 5 and 6.

## 8. Your rights

Because the maintainers do not receive or maintain user data from the V1 extension, there is no maintainer-held dataset for us to access, export, correct, restrict, or delete. You control the local cache on your own machine and may delete `<workspace>/.ghostmap/ghostmap.json` at any time.

This statement describes the current technical design and maintainer data posture; it is not a legal conclusion about GDPR, CCPA, or any equivalent regime. If you operate under a regulated compliance program, review the local-cache behavior and your own use case with qualified counsel.

## 9. Future enterprise-oriented roadmap and server services

The enterprise-oriented integrations described in [Roadmap: v2 vision](/roadmap/v2) (Jira / Slack flow, Ghost Threads, Ghost Graph, dashboards, AI explanations, permissions and audit log) are **not implemented today** and no part of GhostMap currently communicates with any of those services. Nothing in this policy should be read as a commitment that those integrations will exist, or that they will preserve the current local-only posture.

If a future version of GhostMap ever introduces an optional feature that involves data collection or transmission (for example, an optional opt-in telemetry signal, or an Enterprise capability with server services), that feature will be:

- Off by default.
- Clearly disclosed in this Privacy Policy before being shipped, including the exact data fields, retention period, recipients, and any third-party processors involved.
- Accompanied by an in-extension consent prompt before any data leaves your machine.
- Documented as a separate processing context from the current local-only V1 behavior described above.

This policy will carry an updated effective date and version when that happens. The current version says the V1 extension does not transmit project data to GhostMap maintainers or GhostMap servers, and explicitly does **not** promise that future integrations with server services will preserve that posture without their own notice and review.

## 10. Contact

Privacy questions, data-protection requests, DPA inquiries, and bug reports all go to [getghostmap@proton.me](mailto:getghostmap@proton.me). This email is the canonical channel for legal, privacy, and support correspondence about GhostMap.

## 11. Disclaimer

This document is provided in good faith and reflects the design of the extension as published. It is not a substitute for legal advice. If you operate under a regulated regime that requires a Data Processing Agreement or similar instrument, please reach out before deploying GhostMap at scale.
