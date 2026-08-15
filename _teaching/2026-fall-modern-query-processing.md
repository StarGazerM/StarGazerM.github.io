---
title: "Modern Query Processing: Databases and Reasoning"
collection: teaching
type: "Graduate course"
venue: "Utah State University"
date: 2026-08-31
location: "Logan, Utah"
permalink: /teaching/modern-query-processing-fall-2026/
excerpt: "A graduate course on conjunctive queries, join processing, and recursive Datalog."
author_profile: false
share: false
comments: false
---

**Fall 2026 · Graduate course · Work in progress**

> How does a short declarative reasoning query become an efficient executable
> program?

The public course materials now live together in one course website: syllabus,
weekly schedule, project contract, conversational notes, and the Rust
quick-reference page all share one navigation system and one source repository.

[Enter the course website](https://pldi.me/modern-query-processing-notes/){: .btn .btn--primary }
[Browse the source](https://github.com/StarGazerM/modern-query-processing-notes){: .btn .btn--inverse }
[Homework repository](https://github.com/StarGazerM/modern-query-processing-homework){: .btn .btn--inverse }

## Course at a glance

| | |
|---|---|
| Dates | August 31–December 11, 2026 |
| Level | Graduate; advanced undergraduates with permission |
| Format | Lecture, paper discussion, guided practica, and one cumulative project |
| Exams | None |
| Language | Rust is introduced in the course; prior Rust experience is not required |
| Through-line | CQ meaning → joins → bounds → execution → recursive Datalog |
| Advanced work | Complete the common core, then pick one released extension |

## What the course follows

Modern Query Processing follows conjunctive queries from logical rules to
executable systems. Students move among relations, valuations, hypergraphs,
typed intermediate representations, physical plans, and Rust operators. Query
shape, intermediate work, and AGM bounds connect the mathematical object to the
algorithm that evaluates it.

The second half treats positive Datalog as recursive conjunctive-query
evaluation. Fixed points, deltas, duplicate elimination, and termination make
the same semantic and physical questions recur over time.

After the shared implementation core, each team completes one advanced
extension. Teams rank their preferences, and with the expected class size below
20 the instructor will balance assignments so groups investigate different
language, execution, parallel, incremental, or index-sharing decisions when
practical.

## Public course materials

- [Syllabus](https://pldi.me/modern-query-processing-notes/syllabus.html) — outcomes, prerequisites, assessment, and policies
- [Schedule](https://pldi.me/modern-query-processing-notes/schedule.html) — weekly topics, primary readings, practica, and releases
- [Course project](https://pldi.me/modern-query-processing-notes/project.html) — the supplied Rust engine and required stages
- [Homework repository](https://github.com/StarGazerM/modern-query-processing-homework) — stable `hw1`, `hw2`, `hw3`, and assigned `pick-one/*` starter branches
- [Course notes](https://pldi.me/modern-query-processing-notes/#course-notes) — conversational chapters and quick-reference material

Meeting details and institution-specific policies remain provisional until the
course syllabus is finalized. The course website is the authoritative public
source; private announcements, submissions, and grades will use the university
course system.
