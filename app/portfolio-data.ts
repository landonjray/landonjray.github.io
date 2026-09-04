export const expertise = [
  {
    number: "01",
    title: "Business & CTE",
    text: "Career-connected instruction shaped by firsthand experience in management, sales, real estate, and client service.",
  },
  {
    number: "02",
    title: "Curriculum & Programs",
    text: "Standards-aligned courses, assessments, and repeatable systems that make expectations clear and implementation practical.",
  },
  {
    number: "03",
    title: "Physical Education",
    text: "Inclusive, effort-based learning informed by competitive athletics, coaching, and graduate study in safe sport.",
  },
  {
    number: "04",
    title: "Technology & AI",
    text: "Purposeful tools and quality-control workflows that improve clarity, consistency, and the way educators use their time.",
  },
] as const;

export const caseStudies = [
  {
    id: "curriculum",
    index: "01",
    label: "Curriculum architecture",
    title: "Intro to Business A & B",
    previewMetric: "50 core lessons",
    summary:
      "A two-course digital curriculum designed for short, variable-length blocks—without sacrificing standards, rigor, or a dependable finish line.",
    metrics: [
      ["25", "core lessons per course"],
      ["41/46", "substandards in the core"],
      ["100", "core points per course"],
    ],
    challenge:
      "Continuation-school blocks can run six or seven weeks, and interruptions are inevitable. The course needed two independent entry points, a guaranteed core, consistent assessment, and enough flexibility for reteaching and completion.",
    solution:
      "I built a source-of-truth curriculum map for Intro to Business A and B. Each course completes its essential learning by Day 25, with Week 6 reserved for completion, reteaching, retakes, make-up work, and optional enrichment.",
    implementation: [
      "Exact Learning Intentions and Success Criteria for every lesson",
      "Teacher presentations paired with self-contained student workbooks",
      "Purposeful cooperative learning, digital evidence, checks for understanding, and revision",
      "One 10-point workbook rubric and one 10-point auto-graded knowledge check each week",
      "Cold CER pre-assessment and end-of-course CER to support growth analysis",
    ],
    impact:
      "The finished architecture gives the teacher a clear daily route, gives students the information needed to work without constant slide-jumping, and keeps grading predictable. It also protects the essential curriculum when the calendar gets compressed.",
    next:
      "Use completion, knowledge-check, and CER evidence to identify which lessons need reteaching or redesign—then document revisions in the map.",
  },
  {
    id: "pathway",
    index: "02",
    label: "Program system",
    title: "Pathway Skills & Certification Pilot",
    previewMetric: "12 essential skills",
    summary:
      "A no-script Google Forms and Sheets system that organizes common skill evidence and certification reporting across a Business pathway.",
    metrics: [
      ["1", "shared student form"],
      ["12", "essential skills"],
      ["22", "organized tracker tabs"],
    ],
    challenge:
      "A department-wide goal required a common student check, usable teacher views, evidence verification, and a shared progress picture—without creating a fragile workflow or forcing staff to manage separate files.",
    solution:
      "I designed one common assessment and a staff-only tracker that uses native Google Forms and Sheets. Student selections route records into teacher and course views while preserving a single source of truth.",
    implementation: [
      "Common essential-skill definitions and scenario questions",
      "Course and competency map plus certification and training catalog",
      "Formula-driven teacher views and searchable submission index",
      "Separate teacher answer key and evidence-verification fields",
      "Department dashboard and documented source decisions",
    ],
    impact:
      "The pilot turns a broad department goal into a repeatable process. It distinguishes student self-ratings from verified evidence, gives teachers a usable view of their own submissions, and supports program-level discussion without relying on Apps Script.",
    next:
      "Run a bounded classroom pilot, gather teacher feedback, verify reporting language, and revise the assessment before wider adoption.",
  },
  {
    id: "pe",
    index: "03",
    label: "Physical Education",
    title: "Effort-Based PE with Heart-Rate Feedback",
    previewMetric: "Effort made visible",
    summary:
      "A Physical Education approach that makes effort visible, gives students meaningful choice, and connects class participation to lifelong activity.",
    metrics: [
      ["2×", "CIF wrestling champion"],
      ["~20", "years around wrestling"],
      ["9", "graduate credits in athletic safety"],
    ],
    challenge:
      "Traditional PE can reward prior athletic experience more than personal effort. Students also vary widely in which activities feel safe, motivating, or realistic beyond high school.",
    solution:
      "I center success on participation, measurable effort, and growth. Heart-rate technology gives students objective feedback, while a broad activity menu helps competitive and noncompetitive students find ways to move that fit them. Graduate study in athletic-injury prevention and safe physical-activity environments strengthens the safety foundation behind that approach.",
    implementation: [
      "Clear expectations: show up, dress for movement, participate, and communicate needed modifications",
      "Target-zone feedback that helps students connect effort to results",
      "Structured opening weeks followed by increasing student choice",
      "Team, fitness, outdoor, recovery, and lifetime-activity pathways",
      "An explicit culture of effort over talent, safety, inclusion, and reset",
    ],
    impact:
      "Students can understand that they have meaningful control over their success. The program broadens participation beyond traditional team sports and frames Physical Education as preparation for managing one’s own health and activity.",
    next:
      "Continue expanding lifetime-activity options and use anonymized class-level trends to refine pacing, choice, and support.",
  },
  {
    id: "ai",
    index: "04",
    label: "Technology + workflow",
    title: "AI-Assisted Curriculum Quality System",
    previewMetric: "6 connected materials",
    summary:
      "A teacher-led workflow for using AI and Google Workspace to find inconsistency, strengthen materials, and reduce avoidable rework.",
    metrics: [
      ["1", "source-of-truth map"],
      ["6", "connected materials checked"],
      ["Teacher-led", "every instructional decision"],
    ],
    challenge:
      "Large course builds can drift: directions stop matching slides, activities depend on information students cannot see, grading becomes inconsistent, and small fixes create new problems elsewhere.",
    solution:
      "I use AI as a structured quality-control partner. The workflow checks alignment among the curriculum map, teacher deck, student workbook, assessment, rubric, and classroom directions—while the teacher remains responsible for every instructional decision.",
    implementation: [
      "Audit learning targets, lesson sequence, student directions, and scoring as one connected system",
      "Keep student-facing work self-contained and reduce unnecessary navigation",
      "Use reusable templates for weekly overviews, scripts, workbooks, and checks",
      "Flag mismatches, revise, and recheck downstream materials",
      "Protect student information and publish only anonymized, system-level examples",
    ],
    impact:
      "The process makes recurring problems easier to find and fix at the source. It improves consistency across a course and shifts teacher time away from preventable cleanup toward instruction and feedback.",
    next:
      "Formalize version history and measure which parts of the workflow save time or improve student completion and clarity.",
  },
] as const;

export const professionalEvidence = [
  {
    role: "Assistant principal · direct supervisor",
    observation:
      "Observed trusted relationships with at-risk students, steady collaboration with counselors and staff, and high expectations paired with individualized support.",
  },
  {
    role: "Principal · former supervisor",
    observation:
      "Saw consistent instruction, classroom management, and relationship-building across long-term substitute teaching, alternative learning, and wrestling coaching.",
  },
  {
    role: "CTE department chair · FBLA adviser",
    observation:
      "Highlighted active participation in CTE and PLC work, calm support in Alternative Classroom Placement, and practical connections between business instruction and professional experience.",
  },
  {
    role: "Master teacher · retired CTE chair",
    observation:
      "Documented engaging Business instruction, adaptation for varied learners, checks for understanding, collaborative learning, and support for FBLA and the wider school community.",
  },
] as const;

export const principles = [
  "Clarity before complexity",
  "Practice that reinforces learning",
  "Information where students need it",
  "Assessment that changes instruction",
  "Technology that solves a real problem",
] as const;
