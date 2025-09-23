---
title: "Declarative Demand-Driven Reverse Engineering"
collection: publications
category: conferences
permalink: /publication/2021-5-01-declarative-demand-driven-reverse-engineering
date: 2021-5-01
venue: 'NDSS Workshop on Binary Analysis Research (BAR)'
paperurl: 'https://arxiv.org/abs/2101.04718'
citation: 'Y. Sun, J. Ching, and K. Micinski, “Declarative Demand-Driven Reverse Engineering,” in NDSS Workshop on Binary Analysis Research (BAR), Online, 2021'
---

Binary reverse engineering is a challenging task because it often necessitates reasoning using both domain-specific knowledge (e.g., understanding entrypoint idioms common to an ABI) and logical inference (e.g., reconstructing interprocedural control flow). To help perform these tasks, reverse engineers often use toolkits (such as IDA Pro or Ghidra) that allow them to interactively explicate properties of binaries. We argue that deductive databases serve as a natural abstraction for interfacing between visualization-based binary analysis tools and high-performance logical inference engines that compute facts about binaries. In this paper, we present a vision for the future in which reverse engineers use a visualization-based tool to understand binaries while simultaneously querying a logical-inference engine to perform arbitrarily-complex deductive inference tasks. We call our vision declarative demand-driven reverse engineering (D^3RE for short), and sketch a formal semantics whose goal is to mediate interaction between a logical-inference engine (such Souffle) and a reverse engineering tool. We describe aprototype tool, d3re, which are using to explore the D^3RE vision. While still a prototype, we have used d3re to reimplement several common querying tasks on binaries. Our evaluation demonstrates that d3re enables both better performance and more succinct implementation of these common RE tasks. 

