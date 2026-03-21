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


{
  id: "organoids-stem-cell-frontier",
  title: "Organoids: How Tiny Lab-Grown Organs Are Revolutionising Stem Cell Research",
  date: "2026-03-21",
  excerpt: "From a clump of stem cells in a dish to a miniature brain that generates its own electrical activity — organoids are changing everything we thought we knew about how to study disease.",
  tags: ["stem cells", "organoids", "research", "cancer biology"],
  readTime: 10,
  content: `
Imagine growing a tiny human kidney in a petri dish. Or a miniature brain, no bigger than a lentil, that spontaneously generates electrical signals resembling those of a fetal nervous system. These are not thought experiments — they are happening in laboratories around the world right now, and they are reshaping the frontiers of biomedical research.

These structures are called **organoids**, and together with advances in stem cell biology, they represent one of the most exciting — and philosophically provocative — developments in modern science.

## What Exactly Is an Organoid?

The word organoid literally means "organ-like." An organoid is a three-dimensional, self-organising structure grown from stem cells in the laboratory that recapitulates — at least partially — the architecture and function of a real organ.

Unlike traditional cell cultures, which grow as flat sheets of identical cells on a plastic dish, organoids are three-dimensional. They contain multiple cell types arranged in spatial patterns that mirror the actual organ. A gut organoid, for instance, will develop crypt-like structures. A brain organoid will spontaneously form distinct regions resembling different parts of the cortex.

This self-organisation is the remarkable part. You don't instruct each cell where to go. You provide the right stem cells, the right growth factors, and the right scaffold — and the cells figure out the rest, following developmental programmes encoded in their own DNA.

## The Stem Cell Foundation

To understand organoids, you first need to understand the stem cells that give rise to them.

Most organoid research relies on one of two starting materials:

**Embryonic stem cells (ESCs)** are derived from the inner cell mass of a blastocyst-stage embryo. They are pluripotent — capable of differentiating into any cell type in the body. They are extraordinarily powerful scientifically, but their use raises ethical questions that have made them controversial in some contexts.

**Induced pluripotent stem cells (iPSCs)** are the game-changer. Discovered by Shinya Yamanaka in 2006, iPSCs are ordinary adult cells — a skin cell, a blood cell — that have been reprogrammed back into a pluripotent state by introducing four transcription factors. They behave like embryonic stem cells but can be made from any patient, without ethical concerns, and carry that patient's unique genetic identity.

> The iPSC revolution made personalised organoids possible. For the first time, we could grow a patient's own organ — in miniature — outside their body.

## Growing an Organoid: The Basic Recipe

The process sounds almost impossibly simple in outline, though the details are fiendishly complex.

1. **Start with iPSCs** from the patient (or a healthy donor)
2. **Apply growth factors** that mimic the signals present during embryonic development of the target organ
3. **Embed cells in a 3D matrix** — typically Matrigel, a gelatinous protein mixture — that allows three-dimensional growth
4. **Wait** — over days to weeks, the cells proliferate, differentiate, and self-organise into a structure resembling the target organ

Different organs require different induction protocols. Coaxing stem cells toward a kidney fate requires a very different cocktail of signals than nudging them toward becoming intestinal tissue. Much of the hard work in the field has been figuring out these recipes.

## The Organ Zoo: What We Can Now Grow

The range of organoid types that researchers have successfully generated is staggering:

- **Brain organoids** — perhaps the most striking, capable of generating diverse neuronal subtypes and even rudimentary electrical activity
- **Intestinal organoids** — among the earliest and most mature, now used routinely in drug testing
- **Kidney organoids** — containing early nephron structures, the functional units of the kidney
- **Liver organoids** — useful for studying drug metabolism and liver disease
- **Lung organoids** — which became critically important during the COVID-19 pandemic for studying viral infection
- **Tumour organoids** — derived directly from patient biopsies, these are perhaps the most immediately clinically relevant

Each of these represents a different chapter in the organoid story, with its own set of applications, limitations, and open questions.

## Why Organoids Matter: The Disease Modelling Revolution

The most immediate impact of organoids has been in **disease modelling** — using these miniature organs to understand how diseases develop and progress.

Consider cystic fibrosis. This genetic disease is caused by mutations in the CFTP gene, which encodes an ion channel in epithelial cells. Researchers can now take cells from a cystic fibrosis patient, generate iPSCs, grow intestinal or lung organoids, and watch — in real time — how the disease manifests at the cellular level. They can then test corrective drugs directly on that patient's organoid before prescribing them.

This was recently done with remarkable success: intestinal organoids from cystic fibrosis patients were used to predict which patients would respond to the drug ivacaftor, a result later confirmed clinically. The organoid was functioning, in effect, as a crystal ball for drug response.

## Cancer Organoids: A Tumour in a Dish

For cancer biology, organoids have opened up possibilities that were previously unimaginable.

Traditionally, cancer researchers have relied on two imperfect models: **cell lines** (cancer cells adapted to grow indefinitely in a dish, which over time diverge significantly from the original tumour) and **mouse models** (expensive, slow, and often poor predictors of human responses).

**Tumour organoids** offer a third way. A small biopsy from a patient's tumour can be grown into an organoid within weeks, preserving the genetic complexity and cellular heterogeneity of the original cancer. These living tumour models can then be used to:

- Test drug sensitivity and identify which chemotherapy regimen the patient's cancer is most vulnerable to
- Study the mechanisms of drug resistance as they emerge in real time
- Model the tumour microenvironment, including interactions with immune cells and stromal tissue

Several research groups have now demonstrated that tumour organoid drug sensitivity results correlate with patient outcomes — meaning the organoid genuinely predicts how the real tumour will behave. This is the foundation of what many call **avatar medicine** — treating the organoid as a stand-in for the patient to guide clinical decisions.

## The Brain Organoid Frontier — and Its Ethical Edge

Of all the organoid types, **cerebral organoids** are the most scientifically exciting and the most ethically complex.

In 2013, Madeline Lancaster and colleagues at the Institute of Molecular Biotechnology in Vienna published a landmark paper describing the first cerebral organoids. These structures, grown from iPSCs, spontaneously developed regions resembling the cortex, choroid plexus, and other brain areas. They were used almost immediately to model **microcephaly**, a condition causing abnormal brain development, by growing organoids from patients with the condition.

Since then, brain organoids have been used to study Alzheimer's disease, autism spectrum disorders, Zika virus-induced brain damage, and schizophrenia. Researchers have even begun **fusing** organoids from different brain regions — a so-called **assembloid** — to study how different parts of the brain communicate and develop connections.

But brain organoids raise a question that most other organoid types do not: **could they develop sentience?**

Current brain organoids are tiny, lack blood vessels, and have no sensory input or output. Most neuroscientists are confident that existing organoids are nowhere near capable of conscious experience. But as the technology improves, as organoids grow larger and more complex, the question becomes harder to dismiss. Several leading bioethicists have called for proactive ethical frameworks to govern this research before the technology races ahead of our ability to think through its implications.

## Current Limitations — What Organoids Can't Yet Do

For all their promise, organoids have significant limitations that are important to acknowledge honestly.

**Lack of vasculature** is perhaps the biggest. Real organs are permeated by blood vessels that supply oxygen and nutrients and remove waste. Organoids lack this vascular network, which means their cores often become necrotic as they grow larger. Several groups are working on **vascularising** organoids — either by co-culturing them with endothelial cells or by implanting them into mice where host blood vessels can grow in.

**Incomplete maturation** is another challenge. Most organoids resemble fetal rather than adult tissue. A brain organoid more closely mirrors a developing embryonic brain than a mature adult brain, which limits its utility for studying age-related diseases like Parkinson's or Alzheimer's.

**Batch-to-batch variability** remains a practical problem. Even with identical protocols, organoids grown from the same iPSC line can differ substantially from one experiment to the next, making quantitative comparisons difficult.

**Absence of immune cells** in most organoid systems means that immune-related aspects of disease — critical in cancer, infection, and autoimmunity — are often missing from the model.

## The Road Ahead

Despite these limitations, the trajectory of organoid research is unmistakably upward. Several directions seem particularly promising:

**Organ-on-a-chip technology** combines organoids with microfluidic devices — tiny engineered channels through which fluids can flow — to better mimic the mechanical and chemical environment of real organs. Liver-on-a-chip, gut-on-a-chip, and even body-on-a-chip systems that link multiple organ organoids together are being actively developed.

**Bioprinting** may eventually allow organoids to be printed into more controlled three-dimensional architectures, overcoming some of the variability inherent in self-organisation.

**CRISPR integration** — editing the genomes of iPSCs before growing organoids — allows researchers to introduce or correct specific disease-causing mutations with extraordinary precision, creating isogenic pairs of healthy and diseased organoids that differ only at the locus of interest.

## A Personal Note

I find organoid research compelling not just for its scientific promise, but for what it represents philosophically. We are, in a very real sense, learning to speak the language of development — to give cells instructions in their own native tongue and watch them build the structures they were always capable of building.

There is something humbling about watching a clump of undifferentiated stem cells, given nothing more than the right molecular signals, spontaneously organise themselves into something that looks — and in some ways acts — like a piece of a human brain or kidney or gut.

It is a reminder that the information required to build an extraordinarily complex organ is already present in every cell. We are not building these structures. We are just learning to get out of the way.

As I continue my studies at IISc, organoids and the stem cell biology underlying them are an area I hope to engage with deeply — whether in the context of cancer modelling, neurodevelopmental disease, or regenerative medicine. The field is young, the questions are profound, and the tools are only getting better.
  `
},
];
