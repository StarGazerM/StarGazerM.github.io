---
title: "Column-Oriented Datalog on the GPU"
collection: publications
category: conferences
permalink: /publication/aaai25
date: 2025-08-23
venue: 'The 39th Annual AAAI Conference on Artificial Intelligence'
paperurl: 'https://arxiv.org/abs/2501.13051'
citation: 'S. Yihao, K. Sidharth, G. Thomas, and M. Kristopher, “Column-Oriented Datalog on the GPU
” In Proceedings of the AAAI Conference on Artificial Intelligence 2025 Apr 11 (Vol. 39, No. 14, pp. 15177-15185'
---
Datalog is a logic programming language widely used in knowledge representation and reasoning (KRR), program analysis, and social media mining due to its expressiveness and high performance. Traditionally, Datalog engines use either row-oriented or column-oriented storage. Engines like VLog and Nemo favor column-oriented storage for efficiency on limited-resource machines, while row-oriented engines like Souffle use advanced data structures with locking to perform better on multi-core CPUs. The advent of modern datacenter GPUs, such as the NVIDIA H100 with its ability to run over 16k threads simultaneously and high memory bandwidth, has reopened the debate on which storage layout is more effective. This paper presents the first column-oriented Datalog engines tailored to the strengths of modern GPUs. We present VFLog, a CUDA-based Datalog runtime library with a column-oriented GPU datastructure that supports all necessary relational algebra operations. Our results demonstrate over 200x performance gains over SOTA CPU-based column-oriented Datalog engines and a 2.5x speedup over GPU Datalog engines in various workloads, including KRR. 