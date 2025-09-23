---
title: "So You Want to Analyze Scheme Programs With Datalog?"
collection: publications
category: conferences
permalink: /publication/2021-10-01-so-want-to-analyze-scheme-program-with-datalog
date: 2021-10-01
venue: 'International Conference on Functional Programming(ICFP) Scheme Workshop'
paperurl: 'https://arxiv.org/abs/2107.12909'
citation: 'Y. Sun, K. Sidharth, G. Thomas, and K. Micinski, “So You Want To Analyze Scheme Programs With
Datalog?” In International Conference on Functional Programming(ICFP) Scheme Workshop, Online, 2021.'
---
Static analysis approximates the results of a program by examining only its syntax. For example, control-
flow analysis (CFA) determines which syntactic lambdas (for functional languages) or (for object-oriented)
methods may be invoked at each call site within a program. Rich theoretical results exist studying control
flow analysis for Scheme-like languages, but implementations are often complex and specialized. By contrast,
object-oriented languages (Java in particular) enjoy high-precision control-flow analyses that scale to thou-
sands (or more) of lines of code. State-of-the-art implementations (such as DOOP on Soufflé) structure the
analysis using Horn-SAT (Datalog) to enable compilation of the analysis to efficient implementations such
as high-performance relational algebra kernels. In this paper, we present an implementation of control-flow
analysis for a significant subset of Scheme (including set!, call/cc, and primitive operations) using the Souf-
flé Datalog engine. We present an evaluation on a worst-case term demonstrating the polynomial complexity
of our 𝑚-CFA and remark upon scalability results using Soufflé.
