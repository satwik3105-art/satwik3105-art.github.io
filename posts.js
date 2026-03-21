// ============================================================
//  POSTS.JS — Your blog database
//  To add a new post: copy one entry below, paste it at the
//  TOP of the array, fill in your content, and save the file.
//  Use Markdown in the `content` field for formatting.
// ============================================================

const POSTS = [
  {
    id: "cancer-biology-reflection",
    title: "What Drew Me to Cancer Biology — A Personal Reflection",
    date: "2025-01-10",
    excerpt: "Tracing the curiosity that led me from a general interest in biology to a deep fascination with the molecular underpinnings of cancer.",
    tags: ["cancer biology", "personal", "research"],
    readTime: 5,
    content: `
When people ask me why I chose cancer biology, I often struggle to give a clean, single-sentence answer. The truth is, it wasn't one moment — it was a slow accumulation of questions that refused to leave me alone.

## The First Encounter

Growing up, like most people, I had a vague awareness of cancer as something feared and serious. But it was only when I started reading about the science behind it — the mutations, the signalling pathways gone haywire, the way a single cell can essentially betray the entire organism — that something clicked for me.

> "Cancer is, in essence, a disease of the genome." — Robert Weinberg, *The Biology of Cancer*

Reading Weinberg's textbook during my first year at IISc was a turning point. The clarity with which he described oncogenes and tumour suppressor genes made the disease feel, for the first time, *understandable* — not just frightening.

## What Keeps Me Hooked

What fascinates me most about cancer biology is how it sits at the intersection of so many biological disciplines:

- **Cell biology** — how cells grow, divide, and die
- **Genetics & genomics** — mutations, copy number variations, epigenetic changes
- **Immunology** — how tumours evade immune surveillance
- **Systems biology** — how all these pieces interact as a network

No single perspective is enough. You need all of them simultaneously, which makes it one of the most intellectually demanding — and rewarding — areas of modern biology.

## Where I Want to Go

Right now I am building my foundations. But eventually, I hope to work on questions around **targeted therapy resistance** — why cancers that initially respond to treatment so often find a way around it.

That question, to me, is one of the most important unsolved problems in medicine. And I want to be part of solving it.
    `
  },
  {
    id: "stem-cells-explained",
    title: "Stem Cells Explained: From Basics to Breakthroughs",
    date: "2024-10-22",
    excerpt: "An accessible introduction to stem cell biology — what they are, why they matter, and where the science is heading.",
    tags: ["stem cells", "explainer", "regenerative medicine"],
    readTime: 6,
    content: `
Few topics in modern biology generate as much excitement — and as much confusion — as stem cells. In this post, I want to break down the basics in plain language and then zoom in on why this field is so important right now.

## What Are Stem Cells?

At their core, stem cells are defined by two properties:

1. **Self-renewal** — they can divide and produce more copies of themselves
2. **Differentiation** — they can give rise to specialised cell types

Think of them as the original raw material of the body.

## Induced Pluripotent Stem Cells (iPSCs)

In 2006, Shinya Yamanaka showed that ordinary adult cells could be *reprogrammed* back into a pluripotent state by introducing just four genes. He won the Nobel Prize for this in 2012.

> iPSCs changed everything. Suddenly, we could make pluripotent cells from any patient without ethical concerns.

## Why Does This Matter?

If a patient has a genetic neurological disorder, we can take their skin cells, convert them to iPSCs, and then differentiate those into neurons. We now have a dish full of *that patient's own neurons* to study — something unimaginable 20 years ago.

The applications span disease modelling, drug testing, and ultimately regenerative medicine — replacing damaged tissues with healthy, patient-derived cells.
    `
  },
  {
    id: "first-semester-iisc",
    title: "My First Semester at IISc — Lessons and Surprises",
    date: "2024-07-05",
    excerpt: "Honest reflections on navigating one of India's most rigorous research environments as a first-year undergraduate student.",
    tags: ["IISc", "student life", "personal"],
    readTime: 4,
    content: `
Now that my first year at IISc is behind me, it feels like a good time to reflect — honestly — on what I expected, what I found, and what surprised me.

## The Pace

In school, I was used to topics being covered thoroughly before moving on. At IISc, the expectation is different. You are expected to read ahead, fill in gaps yourself, and come to class prepared to go deep.

The key adjustment: **stop trying to understand everything perfectly in real time.** Take notes, move forward, and revisit. Clarity comes with repetition.

## Unexpected Lessons

**1. Asking for help is a skill.** At IISc, professors genuinely enjoy discussing ideas. The doors are more open than you think.

**2. Your peers are your best resource.** The students here are exceptional, and study groups make an enormous difference.

**3. Rest is not wasted time.** Sustainable effort beats intense sprints that leave you depleted.

## Looking Ahead

I'm heading into my second year with a clearer sense of what I want — more lab exposure, deeper engagement with primary literature, and a research project in cancer biology or neuroscience.
    `
  },
  {
    id: "interdisciplinary-neuroscience",
    title: "Why Neuroscience Needs More Interdisciplinary Researchers",
    date: "2024-04-18",
    excerpt: "A case for bridging computational, molecular, and clinical approaches to truly understand the brain.",
    tags: ["neuroscience", "interdisciplinary", "opinion"],
    readTime: 5,
    content: `
The brain is the most complex object in the known universe. With roughly 86 billion neurons forming trillions of synaptic connections, the brain defies any single disciplinary approach.

## The Silos Problem

Molecular neuroscientists, systems neuroscientists, cognitive neuroscientists, computational modellers, and clinical neurologists all speak different languages, use different tools, and publish in different journals. Important discoveries in one area can take years to percolate into another.

## Why Integration Matters

Take Alzheimer's disease. For decades, research focused heavily on amyloid plaques. But the story turned out to be far more complex — involving tau tangles, neuroinflammation, metabolic dysfunction, and genetic risk factors. No single disciplinary lens was sufficient.

> The most exciting breakthroughs — optogenetics, brain organoids, single-cell RNA sequencing — all came from people who crossed traditional disciplinary boundaries.

## What This Means for Students

If you're a biology student interested in neuroscience, my advice: **don't narrow too early.**

- Take that bioinformatics course even if it feels uncomfortable
- Read papers from computational neuroscience even if the maths is hard
- Talk to people in psychology, computer science, and clinical medicine

The researchers who make the biggest contributions in the next 20 years will be those fluent in multiple languages of neuroscience.
    `
  }
];
