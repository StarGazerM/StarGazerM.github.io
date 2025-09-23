---
title: "Communication-Avoiding Recursive Aggregation"
collection: publications
category: conferences
permalink: /publication/cluster23
date: 2023-10-01
venue: 'IEEE International Conference on Cluster Computing (CLUSTER)'
paperurl: 'https://kmicinski.com/assets/cluster23.pdf'
citation: 'Y. Sun, K. Sidharth, G. Thomas, and K. Micinski, “Communication-Avoiding Recursive Aggregation,” in
IEEE International Conference on Cluster Computing (CLUSTER), Santa Fe, USA, 2023.'
---

Recursive aggregation has been of considerable interest due to its unifying a wide range of deductive-analytic
workloads, including social-media mining and graph analytics.
For example, Single-Source Shortest Paths (SSSP), Connected
Components (CC), and PageRank may all be expressed via
recursive aggregates. Implementing recursive aggregation has
posed a serious algorithmic challenge, with state-of-the-art work
identifying sufficient conditions (e.g., pre-mappability) under
which implementations may push aggregation within recursion,
avoiding the serious materialization overhead inherent to tradi-
tional reachability-based methods (e.g., Datalog).
State-of-the-art implementations of engines supporting recur-
sive aggregates focus on large unified machines, due to the chal-
lenges posed by mixing semi-na¨ıve evaluation with distribution.
In this work, we present an approach to implementing recursive
aggregates on high-performance clusters which avoids the com-
munication overhead inhibiting current-generation distributed
systems to scale recursive aggregates to extremely high process
counts. Our approach leverages the observation that aggregators
form functional dependencies, allowing us to implement recur-
sive aggregates via a high-parallel local aggregation to ensure
maximal throughput. Additionally, we present a dynamic join
planning mechanism, which customizes join order per-iteration
based on dynamic relation sizes. We implemented our approach
in PARALAGG, a library which allows the declarative implemen-
tation of queries which utilize recursive aggregates and executes
them using our MPI-based runtime. We evaluate PARALAGG
on a large unified node and leadership-class supercomputers,
demonstrating scalability up to 16,384 processes.