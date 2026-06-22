---
id: notices
title: Third-Party Notices
sidebar_label: Third-Party Notices
---

# Third-Party Notices

**Effective date:** June 20, 2026 · **Version:** 1.2

GhostMap includes third-party components. Each keeps its own upstream license. The GhostMap Free Non-Commercial License applies only to original GhostMap code and does not relicense, replace, or override these components.

The exact upstream LICENSE text for every bundled component listed below ships inside the extension under `wasm/licenses/<component>/`, alongside a `SOURCE.txt` provenance file (upstream URL, SPDX id, fetch date, default-branch HEAD commit at fetch time). The same files are present in the source repository.

## Runtime dependencies

**web-tree-sitter** · `0.26.8` · MIT. WebAssembly parsing runtime that powers the Tree-sitter layer of the Ghost Engine. Authored by the tree-sitter project. Source: [github.com/tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter). Exact LICENSE shipped at `wasm/licenses/web-tree-sitter/LICENSE`.

## Bundled Tree-sitter grammars

The following 19 grammars ship as precompiled WebAssembly files inside the extension. Each is the work of its respective authors and is redistributed unmodified. The exact upstream LICENSE text is shipped under `wasm/licenses/<folder>/LICENSE`.

| Grammar | Upstream | License (SPDX) |
|---|---|---|
| `tree-sitter-c` | [tree-sitter/tree-sitter-c](https://github.com/tree-sitter/tree-sitter-c) | MIT |
| `tree-sitter-cpp` | [tree-sitter/tree-sitter-cpp](https://github.com/tree-sitter/tree-sitter-cpp) | MIT |
| `tree-sitter-c_sharp` | [tree-sitter/tree-sitter-c-sharp](https://github.com/tree-sitter/tree-sitter-c-sharp) | MIT |
| `tree-sitter-dart` | [UserNobody14/tree-sitter-dart](https://github.com/UserNobody14/tree-sitter-dart) | MIT |
| `tree-sitter-elixir` | [elixir-lang/tree-sitter-elixir](https://github.com/elixir-lang/tree-sitter-elixir) | Apache-2.0 |
| `tree-sitter-go` | [tree-sitter/tree-sitter-go](https://github.com/tree-sitter/tree-sitter-go) | MIT |
| `tree-sitter-groovy` | [murtaza64/tree-sitter-groovy](https://github.com/murtaza64/tree-sitter-groovy) | MIT |
| `tree-sitter-java` | [tree-sitter/tree-sitter-java](https://github.com/tree-sitter/tree-sitter-java) | MIT |
| `tree-sitter-javascript` | [tree-sitter/tree-sitter-javascript](https://github.com/tree-sitter/tree-sitter-javascript) | MIT |
| `tree-sitter-julia` | [tree-sitter/tree-sitter-julia](https://github.com/tree-sitter/tree-sitter-julia) | MIT |
| `tree-sitter-objc` | [jiyee/tree-sitter-objc](https://github.com/jiyee/tree-sitter-objc) | MIT |
| `tree-sitter-php` | [tree-sitter/tree-sitter-php](https://github.com/tree-sitter/tree-sitter-php) | MIT |
| `tree-sitter-python` | [tree-sitter/tree-sitter-python](https://github.com/tree-sitter/tree-sitter-python) | MIT |
| `tree-sitter-ruby` | [tree-sitter/tree-sitter-ruby](https://github.com/tree-sitter/tree-sitter-ruby) | MIT |
| `tree-sitter-rust` | [tree-sitter/tree-sitter-rust](https://github.com/tree-sitter/tree-sitter-rust) | MIT |
| `tree-sitter-scala` | [tree-sitter/tree-sitter-scala](https://github.com/tree-sitter/tree-sitter-scala) | MIT |
| `tree-sitter-solidity` | [JoranHonig/tree-sitter-solidity](https://github.com/JoranHonig/tree-sitter-solidity) | MIT |
| `tree-sitter-tsx` | [tree-sitter/tree-sitter-typescript](https://github.com/tree-sitter/tree-sitter-typescript) | MIT |
| `tree-sitter-typescript` | [tree-sitter/tree-sitter-typescript](https://github.com/tree-sitter/tree-sitter-typescript) | MIT |

### Provenance note

The exact git commit/tag used to compile each shipped WASM artifact is not recorded in this repository: the WASMs are checked-in artifacts rather than reproducibly built. Each per-component `SOURCE.txt` records the upstream default-branch HEAD commit at the time the LICENSE text was fetched. The shipped LICENSE files are the best available license notices for the bundled artifacts under that provenance disclosure; if the upstream license for a grammar later changes, the notice that shipped with a given release continues to govern that release. This provenance gap is acknowledged here, not hidden, and will be closed when the WASM build job becomes reproducible (see the language-pack expansion gate in [Disclaimer](/legal/disclaimer)).

## VS Code Extension API

GhostMap calls into the VS Code Extension API published by Microsoft. The API contract is governed by the [VS Code Extension Guidelines](https://code.visualstudio.com/api).

## Site fonts

The documentation site and marketing site use the **Space Grotesk**, **Inter**, and **JetBrains Mono** typefaces under the SIL Open Font License 1.1, served via Google Fonts.

## Reporting an attribution issue

If you believe a component is missing from this page, or that an attribution or license is incorrect, contact [getghostmap@proton.me](mailto:getghostmap@proton.me) so it can be corrected.
