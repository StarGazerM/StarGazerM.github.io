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

**Fall 2026 — Draft syllabus**

> How does a short declarative reasoning query become an efficient executable program?

## Course facts

| | |
|---|---|
| Dates | August 31–December 11, 2026 |
| Level | Graduate; advanced undergraduates with permission |
| Format | Lecture, paper discussion, and a cumulative implementation project |
| Course notes | [Read online](https://pldi.me/modern-query-processing-notes/) · [GitHub source](https://github.com/StarGazerM/modern-query-processing-notes) |
| Exams | None |
| Office hours | TBD |
| Meeting time, location, and course site | To be announced |

The [Fall 2026 academic calendar](https://www.usu.edu/calendar/academic/?year=2026)
includes Labor Day, Fall Break, Thanksgiving recess, and No-Test Week. These
dates are marked below.

## Course introduction

This course follows conjunctive queries (CQs) from logical rules to executable
code. We study binary joins, execution control, join ordering, output-size
bounds, semijoin reduction, and worst-case-optimal joins. An early Rust bridge
introduces the language and the staged macro pipeline used by the course
project. We then treat positive Datalog as recursive CQ evaluation and study
fixed points and semi-naive execution. Graph, ontology-style, probabilistic,
and neuro-symbolic reasoning provide recurring examples.

The course is one focused path through semantics, algorithms, and systems—not
a survey of SQL, storage, transactions, or every form of logic. All
nonrecursive queries considered are CQs; every positive Datalog rule body is a
CQ.

By the end of the course, students should be able to:

1. explain CQ and positive Datalog semantics;
2. move among rules, hypergraphs, typed intermediate representations, plans,
   and executable operators;
3. trace binary, semijoin, trie-based, and semi-naive evaluation;
4. use query shape, cardinality, and AGM bounds to choose an algorithm; and
5. test an implementation claim with correctness checks and interpretable work
   counters.

### Prerequisites

Students should know undergraduate algorithms and data structures, be
comfortable with mathematical notation, and be able to program in at least one
language. Prior Rust experience is not required: Week 3 introduces the subset
of Rust and metaprogramming used in the project. Prior database coursework is
helpful but not required.

## Course format

A typical meeting combines one lecture or board derivation, discussion of the
week's primary reading, and a short shared trace, code inspection, or result
comparison. There is no recurring full-class coding lab. A later meeting may
begin by comparing results from the previous activity.

Each content week has one primary reading and no reading response. Each student
leads one paper discussion. Outside class, students complete three releases of
one cumulative code project. There are no weekly problem sets, quizzes,
midterm, or final exam.

## Weekly plan and primary readings

| Week | Center | In class | Primary reading / due |
|---|---|---|---|
| 1 · Aug. 31–Sep. 4 | CQ meaning | Rules, valuations, and query hypergraphs | Abiteboul, Hull, and Vianu, [*Foundations of Databases*](https://webdam.di.ens.fr/Alice/), §§3.1–3.3, 4.1–4.2 |
| 2 · Sep. 7–11 | Binary joins | Nested-loop and hash join; build/probe state | Garcia-Molina, Ullman, and Widom, [*Database System Implementation*](https://i.stanford.edu/~ullman/dbsi.html), selected §§6.2–6.4; **Labor Day adjustment** |
| 3 · Sep. 14–18 | Rust and staged query programs | Ownership and borrowing; enums and pattern matching; traits and iterators; trace a CQ through typed IRs to generated Rust | *The Rust Programming Language*: [Ch. 4](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html), [Ch. 6](https://doc.rust-lang.org/book/ch06-00-enums.html), and [§20.5 overview](https://doc.rust-lang.org/book/ch20-05-macros.html) |
| 4 · Sep. 21–25 | Pull and push | Run the same fixed plan under both control models | Neumann, [*Efficiently Compiling Efficient Query Plans for Modern Hardware*](https://www.vldb.org/pvldb/vol4/p539-neumann.pdf), §§1, 3.1–3.2; **practicum 1** |
| 5 · Sep. 28–Oct. 2 | AGM bounds | Compute a fractional cover; compare bounds with measured work | Atserias, Grohe, and Marx, [*Size Bounds and Query Plans for Relational Joins*](https://arxiv.org/abs/1711.03860), §§2–3.1; **practicum 2; R1 due** |
| 6 · Oct. 5–9 | Yannakakis | Join trees, two semijoin passes, and enumeration | Yannakakis, [*Algorithms for Acyclic Database Schemes*](https://dblp.org/rec/conf/vldb/Yannakakis81), §§2, 4; **Fall Break adjustment** |
| 7 · Oct. 12–16 | Practical join filtering | **Hangdong Zhao guest lecture:** predicate transfer and runtime filters | Yang et al., [*Predicate Transfer*](https://www.vldb.org/cidrdb/papers/2024/p22-yang.pdf) |
| 8 · Oct. 19–23 | Worst-case-optimal joins | Contrast binary and variable-at-a-time plans; trace Generic Join and Leapfrog Triejoin under a supplied variable order | Veldhuizen, [*Leapfrog Triejoin*](https://www.openproceedings.org/2014/conf/icdt/Veldhuizen14.pdf), §§1, 3.1–3.5; **practicum 3** |
| 9 · Oct. 26–30 | Positive Datalog | Model, fixed-point, and proof views of recursion | *Foundations of Databases*, §§12.1–12.4 |
| 10 · Nov. 2–6 | Semi-naive evaluation | Track full, delta, candidates, duplicates, and termination | *Foundations of Databases*, §13.1; **R2 due** |
| 11 · Nov. 9–13 | Extending Datalog to ontology reasoning | Negation and disjunction | [Ontology-Based Data Access: A Study through Disjunctive Datalog, CSP, and MMSNP](https://dl.acm.org/doi/abs/10.1145/2661643) |
| 12 · Nov. 16–20 | Probabilistic and neuro-symbolic Datalog | Compare exact, top-k, and differentiable proof evaluation | Huang et al., [*Scallop*](https://proceedings.neurips.cc/paper/2021/hash/d367eef13f90793bd8121e2f675f0dc2-Abstract.html), §§2–4.2 |
| 13 · Nov. 23–27 | Thanksgiving break | No class | **No reading or work due** |
| 14 · Nov. 30–Dec. 4 | Project clinic | Correctness, work counters, baselines, and failure cases | No reading; **R3 due** |
| 15 · Dec. 7–11 | Synthesis | Short project presentations (can be zoom) and connections across the course | No reading; **No-Test Week** |

<!-- | 4 · Sep. 21–25 | Cardinality and order | Compare left-deep relation orders and intermediate sizes | Selinger et al., [*Access Path Selection in a Relational Database Management System*](https://research.ibm.com/publications/access-path-selection-in-a-relational-database-management-system), §5 | -->

Week 13 is a full course break. Week 15 has no quiz or examination; project
presentations are the only graded activity, as permitted by the university's
[No-Test Days policy](https://catalog.usu.edu/pages/TRt784ev1WOEs7vivhnO).

## Assessment

| Component | Points |
|---|---:|
| Three guided in-class practica | 30 |
| Cumulative engine project | 50 |
| Paper-discussion leadership | 10 |
| Prepared participation | 10 |
| **Total** | **100** |

### In-class practica — 30 points

The three open-note, collaborative practica ask students to trace an
execution, compute or apply a bound, and interpret supplied measurements. Each
is worth 10 points: correctness (4), use of evidence (3), and explanation (3).
They assess reasoning, not mere attendance, and create no separate report or
implementation assignment.

### Cumulative engine project — 50 points

Students work individually or in pairs in a supplied Rust codebase. The
planned starter engine will include a proc-macro CQ frontend, relation and
index representations, a reference evaluator, workloads, tests, and work
counters. Students extend the same codebase through five stages:

| Stage | Required implementation | Points |
|---|---|---:|
| 1. Binary physical plan | Lower a supplied **relation order** into a left-deep build/probe plan; count intermediate work | 6 |
| 2. Execution control | Run the same plan through pull and push interfaces using the supplied execution context | 4 |
| 3. Semijoin reduction | Implement a semijoin and both Yannakakis passes over a supplied join tree | 8 |
| 4. Triejoin | Implement leapfrog intersection and variable-at-a-time enumeration using a supplied **variable order** and tries | 12 |
| 5. Semi-naive evaluation | Maintain full and delta relations, remove duplicates, and run to a fixed point | 10 |
| Final presentation | Demonstrate one result and explain the relevant choices, evidence, and limitations | 10 |
| **Total** | | **50** |

The stages are submitted as three releases: **R1** (Stages 1–2) at the end of
Week 5, **R2** (Stages 3–4) at the end of Week 10, and **R3** (Stage 5) at the
end of Week 14. Required recursion will be bounded to linear positive rules
unless the starter code supplies general delta-rule generation.

Each release consists of code, tests, and one-command benchmark output—no
proposal or long report. Correctness tests and algorithm-specific counters,
not raw speed, determine the stage score. DuckDB is a diagnostic baseline; the
goal is to explain differences, not beat it.

After R1 and R2, staff will release compatible reference checkpoints. Students
may use them for later stages without losing later-stage points.

### Discussion and participation — 20 points

Each student leads one reading discussion: accurate central claim (4), useful
connection or counterexample (3), and questions that advance discussion (3).
The remaining 10 points reflect prepared contributions to reading discussions,
derivations, and result clinics. 

## Project tools and AI policy

The project uses Rust with a procedural-macro CQ frontend. Week 3 teaches enough
Rust and metaprogramming to read the pipeline from surface CQ through typed IRs
to generated code. Staff supplies and documents the macro parser, initial IRs,
expansion pipeline, and crate structure. Students inspect macro expansions and
implement ordinary Rust transformations inside the supplied interfaces; they
do not build a token parser or procedural-macro infrastructure from scratch.
When a stage emits Rust code, students use the `quote!` macro from the `quote`
crate with provided examples.

Staff also supplies storage, reference semantics, the test harness, and
benchmark infrastructure. Students implement only the named execution stages;
they do not build SQL parsing, transactions, a storage manager, a cost-based
optimizer, or a parallel runtime.

AI-assisted coding, testing, debugging, and writing are allowed. Each release
must include a brief `AI-USE.md` naming material assistance and how it was
checked; prompt transcripts are not required. Students remain responsible for
all submitted code, measurements, claims, and citations and must be able to
explain them in the final presentation.

## Optional references

- Ullman, [*Principles of Database and Knowledge-Base Systems*](https://dblp.org/db/books/dbtext/ullman89.html), and Ceri, Gottlob, and Tanca, [*What You Always Wanted to Know About Datalog (And Never Dared to Ask)*](https://doi.org/10.1109/69.43410).
- Graefe, [*Query Evaluation Techniques for Large Databases*](https://doi.org/10.1145/152610.152611).
- Ngo, [*Worst-Case Optimal Join Algorithms: Techniques, Results, and Open Problems*](https://arxiv.org/abs/1803.09930).
- Koutris et al., [*Database Theory in Action: Yannakakis' Algorithm*](https://doi.org/10.4230/LIPIcs.ICDT.2026.25).
- Abo Khamis, Ngo, and Suciu, [*PANDA: Query Evaluation in Submodular Width*](https://arxiv.org/abs/2402.02001).

## Policies and draft status

Official university statements on accessibility, accommodations, academic
integrity, safety, and related policies will be inserted before publication.
Meeting details, deadlines, grade thresholds, and late-work rules remain to be
finalized.
