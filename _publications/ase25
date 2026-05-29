---
title: "Superset Decompilation"
collection: publications
category: conferences
permalink: /publication/ase26
date: 2026-04-15
venue: 'Submmitted to related top-tier conferences'
paperurl: 'https://arxiv.org/abs/2603.28002'
citation: 'C Liu, Y Sun, T Gilray, K Micinski, “Superset Decompilation,” in
Arxiv preprint, 2026.'
---

Reverse engineering tools remain monolithic and imperative compared to the advancement of modern compiler architectures: analyses are tied to a single mutable representation, making them difficult to extend or refine, and forcing premature choices between soundness and precision. We observe that decompilation is the reverse of compilation and can be structured as a sequence of modular passes, each performing a granular and clearly defined interpretation of the binary at a progressively higher level of abstraction. We formalize this as provenance-guided superset decompilation (PGSD), a framework that monotonically derives facts about the binary into a relation store. Instead of committing early to a single interpretation, the pipeline retains ambiguous interpretations as parallel candidates with provenance, deferring resolution until the final selection phase. Manifold implements PGSD as a declarative reverse engineering framework that lifts Linux ELF binaries to C99 through a granular intermediate representation in ~35K lines of Rust and Datalog. On GNU coreutils, Manifold's output quality matches Ghidra, IDA Pro, angr, and RetDec on multiple metrics while producing fewer compiler errors, and generalizes across compilers and optimization levels. 

