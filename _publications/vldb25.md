---
title: "Datalog with First-Class Facts"
collection: publications
category: conferences
permalink: /publication/vldb25
date: 2025-08-23
venue: 'Proceedings of the VLDB Endowment, Volume 18'
paperurl: 'https://arxiv.org/pdf/2211.11573'
citation: 'G. Thomas, S. Arash, S. Yihao, K. Sowmith, K. Sidharth, and M. Kristopher, “Datalog with First-Class
Facts,” in Proceedings of the VLDB Endowment, Volume 18, London, United Kingdom, 2025.'
---
State-of-the-art Datalog engines include expressive features such as ADTs (structured heap values), stratified
aggregation and negation, various primitive operations, and the opportunity for further extension using FFIs.
Current parallelization approaches for state-of-art Datalogs target shared-memory locking data-structures
using conventional multi-threading, or use the map-reduce model for distributed computing. Furthermore,
current state-of-art approaches cannot scale to formal systems which pervasively manipulate structured data
due to their lack of indexing for structured data stored in the heap.
In this paper, we describe a new approach to data-parallel structured deduction that involves a key semantic
extension of Datalog to permit first-class facts and higher-order relations via defunctionalization, an imple-
mentation approach that enables parallelism uniformly both across sets of disjoint facts and over individual
facts with nested structure. We detail a core language, DL𝑠 , whose key invariant (subfact closure) ensures that
each subfact is materialized as a top-class fact. We extend DL𝑠 to Slog, a fully-featured language whose forms
facilitate leveraging subfact closure to rapidly implement expressive, high-performance formal systems. We
demonstrate Slog by building a family of control-flow analyses from abstract machines, systematically, along
with several implementations of classical type systems (such as STLC and LF). We performed experiments on
EC2, Azure, and ALCF’s Theta at up to 1000 threads, showing orders-of-magnitude scalability improvements
versus competing state-of-art systems.