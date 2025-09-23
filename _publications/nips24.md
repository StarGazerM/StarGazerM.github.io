---
title: "Assemblage: Automatic Binary Dataset Construction for Machine Learning"
collection: publications
category: conferences
permalink: /publication/nips24
date: 2024-12-06
venue: 'NeurIPS 2024 Datasets and Benchmarks Track'
paperurl: 'https://arxiv.org/pdf/2405.03991'
citation: 'C. Liu, R. Saul, Y. Sun, et al., “Assemblage: Automatic Binary Dataset Construction for Machine
Learning,” in NeurIPS 2024 Datasets and Benchmarks Track, 2024.'
---
Binary code is pervasive, and binary analysis is a key task in reverse engineering,
malware classification, and vulnerability discovery. Unfortunately, while there
exist large corpora of malicious binaries, obtaining high-quality corpora of benign
binaries for modern systems has proven challenging (e.g., due to licensing issues).
Consequently, machine learning based pipelines for binary analysis utilize either
costly commercial corpora (e.g., VirusTotal) or open-source binaries (e.g., coreutils)
available in limited quantities. To address these issues, we present ASSEMBLAGE:
an extensible distributed system that crawls, configures, and builds Windows PE
binaries to obtain high-quality binary corpora suitable for training state-of-the-art
models in binary analysis. We have run ASSEMBLAGE on AWS over the past year,
producing 890k Windows PE and 428k Linux ELF binaries across 29 configurations.
ASSEMBLAGE is designed to be both reproducible and extensible, enabling users
to publish “recipes” for their datasets, and facilitating the extraction of a wide
array of features. We evaluated ASSEMBLAGE by using its data to train modern
learning-based pipelines for compiler provenance and binary function similarity.
Our results illustrate the practical need for robust corpora of high-quality Windows
PE binaries in training modern learning-based binary analyses. ASSEMBLAGE
code is open sourced under the MIT license, and the dataset can be downloaded
from https://assemblage-dataset.net/
