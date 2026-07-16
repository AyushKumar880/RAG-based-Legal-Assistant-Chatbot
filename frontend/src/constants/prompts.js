export const SUGGESTED_PROMPTS = [
  {
    id: "contract-analysis",
    title: "Contract Review",
    description: "Analyze non-compete and indemnification clauses in standard employment agreements.",
    query: "Can you analyze the enforceability of standard non-compete clauses under current regulatory guidance?",
  },
  {
    id: "liability-assessment",
    title: "Liability & Damages",
    description: "Assess potential tort liabilities and statutory limitation periods.",
    query: "What are the common statutory limitations and liability factors for negligence claims?",
  },
  {
    id: "compliance-check",
    title: "Regulatory Compliance",
    description: "Review GDPR and state data privacy disclosure requirements.",
    query: "What mandatory disclosures must be included in a commercial data privacy policy?",
  },
  {
    id: "intellectual-property",
    title: "IP Licensing",
    description: "Examine key provisions in software patent and trademark licenses.",
    query: "What essential warranties and royalty clauses are standard in an IP licensing agreement?",
  },
];

export const COMPLEXITY_LEVELS = {
  SIMPLE: {
    key: "simple",
    label: "Direct LLM",
    description: "Direct response without external retrieval",
    color: "#10b981",
    bgColor: "#ecfdf5",
  },
  COMPLEX: {
    key: "complex",
    label: "Multi-Query RAG",
    description: "Semantic query expansion + BM25 & Dense retrieval",
    color: "#3b82f6",
    bgColor: "#eff6ff",
  },
  MULTI_HOP: {
    key: "multi-hop",
    label: "Multi-Hop Hybrid RRF",
    description: "Decomposed multi-step reasoning with Reciprocal Rank Fusion",
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
  },
};
