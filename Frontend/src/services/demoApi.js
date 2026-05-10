const STORAGE_KEYS = {
  userState: "demo_user_state",
  testResult: "demo_test_result",
};

const DEMO_SECTIONS = [
  {
    section_name: "Visual Reasoning",
    questions: [
      { id: "v1", question: "What do you understand faster with diagrams and charts?", options: ["Images", "Definitions", "Examples", "Steps"] },
      { id: "v2", question: "Which material do you remember better from lectures?", options: ["Diagrams", "Bullet points", "Exercises", "Step-by-step guides"] },
      { id: "v3", question: "What do you prefer to understand new concepts?", options: ["Flowcharts", "Theory", "Practice", "Checklists"] },
      { id: "v4", question: "What is your style when making notes?", options: ["Sketches", "Summary text", "Examples", "Action items"] },
      { id: "v5", question: "What is your study space like?", options: ["Visual boards", "Concept maps", "Practice sheets", "Task lists"] },
    ],
  },
  {
    section_name: "Conceptual Thinking",
    questions: [
      { id: "c1", question: "What helps you understand new ideas?", options: ["Videos", "Theory", "Hands-on", "Process"] },
      { id: "c2", question: "What do you say first when explaining a concept?", options: ["Picture", "Definition", "Example", "Steps"] },
      { id: "c3", question: "What do you focus on first when solving problems?", options: ["Structure", "Principles", "Practice", "Sequence"] },
      { id: "c4", question: "What do you prefer when receiving feedback?", options: ["Diagrams", "Logic", "Results", "Checklist"] },
      { id: "c5", question: "What do you value most in learning style?", options: ["Observation", "Understanding", "Doing", "Planning"] },
    ],
  },
  {
    section_name: "Practice Focus",
    questions: [
      { id: "p1", question: "What do you do to master a skill?", options: ["Watch examples", "Read explanations", "Solve problems", "Follow instructions"] },
      { id: "p2", question: "What do you do first before taking a test?", options: ["Visualize answer", "Review concept", "Practice questions", "Prepare checklist"] },
      { id: "p3", question: "What do you find best for learning coding?", options: ["Code diagrams", "Algorithm logic", "Executing code", "Stepwise debugging"] },
      { id: "p4", question: "How do you understand new tools?", options: ["Tutorial video", "Documentation", "Hands-on session", "Step-by-step guide"] },
      { id: "p5", question: "How does your typical study session end?", options: ["Review notes", "Summarize concept", "Build something", "Checklist complete"] },
    ],
  },
  {
    section_name: "Step-by-Step",
    questions: [
      { id: "s1", question: "How do you proceed when learning something new?", options: ["Visualize patterns", "Understand theory", "Do tasks", "Follow steps"] },
      { id: "s2", question: "What do you find easiest in problem solving?", options: ["See the picture", "Understand rule", "Practice examples", "Stepwise process"] },
      { id: "s3", question: "How do you track your progress?", options: ["Graphs", "Concept notes", "Worked examples", "Checklists"] },
      { id: "s4", question: "What gives you most support in following lectures?", options: ["Visual cues", "Theory notes", "Practice tasks", "Clear steps"] },
      { id: "s5", question: "What do you prefer for revision?", options: ["Mind maps", "Concept summaries", "Exercises", "Sequential notes"] },
    ],
  },
  {
    section_name: "Memory & Attention",
    questions: [
      { id: "m1", question: "What do you remember after a lecture?", options: ["Images", "Key ideas", "Examples", "Process steps"] },
      { id: "m2", question: "What do you look at when revising a topic?", options: ["Charts", "Summary notes", "Practice problems", "Action list"] },
      { id: "m3", question: "When is your attention most active?", options: ["Visual content", "Concept discussion", "Exercises", "Step-by-step walk-through"] },
      { id: "m4", question: "How do you quickly revise a concept?", options: ["Visual cues", "Theory points", "Practice examples", "Sequential notes"] },
      { id: "m5", question: "How do you simplify a complex topic?", options: ["Diagrams", "Concept map", "Hands-on example", "Stepwise breakdown"] },
    ],
  },
];

const DEMO_CONTENT = [
  {
    content_id: "c1",
    title: "Python Basics: Variables & Data Types",
    description: "Understand basic Python concepts like variables, strings and lists.",
    subject: "Python",
    type: "video",
    duration_min: 12,
    difficulty: 2,
    prerequisites_met: true,
    material_url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
  },
  {
    content_id: "c2",
    title: "DSA Fundamentals: Arrays & Loops",
    description: "Practice array traversal and loops step-by-step.",
    subject: "DSA",
    type: "exercise",
    duration_min: 25,
    difficulty: 3,
    prerequisites_met: true,
    material_url: "https://www.example.com/arrays-loops",
  },
  {
    content_id: "c3",
    title: "ML Concepts: Supervised Learning",
    description: "See basic concepts and examples of supervised learning.",
    subject: "ML",
    type: "article",
    duration_min: 18,
    difficulty: 3,
    prerequisites_met: false,
    material_url: "https://www.example.com/supervised-learning",
  },
  {
    content_id: "c4",
    title: "Web Dev: HTML & CSS Introduction",
    description: "Start making web pages with HTML and CSS.",
    subject: "Web Dev",
    type: "tutorial",
    duration_min: 20,
    difficulty: 2,
    prerequisites_met: true,
    material_url: "https://www.example.com/html-css",
  },
  {
    content_id: "c5",
    title: "Database Basics: SQL Queries",
    description: "Practice simple SQL queries and database operations.",
    subject: "DBMS",
    type: "notes",
    duration_min: 15,
    difficulty: 3,
    prerequisites_met: false,
    material_url: "https://www.example.com/sql-basics",
  },
  {
    content_id: "c6",
    title: "Python Project: Build a Quiz App",
    description: "Practice project to build a simple quiz application.",
    subject: "Python",
    type: "project",
    duration_min: 40,
    difficulty: 4,
    prerequisites_met: false,
    material_url: "https://www.example.com/quiz-app",
  },
  {
    content_id: "c7",
    title: "Algorithms: Binary Search",
    description: "Visualize and implement the binary search algorithm.",
    subject: "DSA",
    type: "video",
    duration_min: 14,
    difficulty: 3,
    prerequisites_met: true,
    material_url: "https://www.example.com/binary-search",
  },
  {
    content_id: "c8",
    title: "ML: Train/Test Split Explained",
    description: "Understand the reasoning behind data splitting in machine learning.",
    subject: "ML",
    type: "article",
    duration_min: 16,
    difficulty: 2,
    prerequisites_met: true,
    material_url: "https://www.example.com/train-test-split",
  },
  {
    content_id: "c9",
    title: "Web Dev: Responsive Layouts",
    description: "How to make web pages mobile-friendly.",
    subject: "Web Dev",
    type: "infographic",
    duration_min: 10,
    difficulty: 2,
    prerequisites_met: true,
    material_url: "https://www.example.com/responsive-layouts",
  },
  {
    content_id: "c10",
    title: "DBMS: ER Diagrams Simplified",
    description: "Understand basic rules of entity-relationship diagrams.",
    subject: "DBMS",
    type: "notes",
    duration_min: 12,
    difficulty: 2,
    prerequisites_met: true,
    material_url: "https://www.example.com/er-diagrams",
  },
  {
    content_id: "c11",
    title: "Python: Functions and Modules",
    description: "Learn to write functions and organize modules.",
    subject: "Python",
    type: "tutorial",
    duration_min: 22,
    difficulty: 3,
    prerequisites_met: true,
    material_url: "https://www.example.com/python-functions",
  },
  {
    content_id: "c12",
    title: "DSA: Sorting Algorithms Overview",
    description: "Compare basic sorting algorithms.",
    subject: "DSA",
    type: "article",
    duration_min: 18,
    difficulty: 3,
    prerequisites_met: true,
    material_url: "https://www.example.com/sorting-algorithms",
  },
];

const STYLE_DETAILS = {
  visual_learner: {
    description: "You learn quickly from images, charts, and diagrams.",
    strengths: ["Quick pattern recognition", "Strong visual memory", "Good at charts"],
    content_types: ["Video", "Infographic", "Diagram-based notes"],
    study_tip: "Color-code your notes and create flowcharts.",
  },
  conceptual_thinker: {
    description: "You focus on theory and logic to understand concepts.",
    strengths: ["Strong reasoning", "Abstract understanding", "Good at models"],
    content_types: ["Articles", "Concept notes", "Theory videos"],
    study_tip: "Analyze why/what/when for each concept.",
  },
  practice_based: {
    description: "You learn best through practice and examples.",
    strengths: ["Hands-on learning", "Quick application", "Problem solving"],
    content_types: ["Exercises", "Projects", "Interactive tasks"],
    study_tip: "Try to immediately solve every learned idea.",
  },
  step_by_step: {
    description: "You prefer learning through sequential processes.",
    strengths: ["Organized approach", "Attention to detail", "Methodical learning"],
    content_types: ["Tutorials", "Checklists", "Step-by-step guides"],
    study_tip: "Write down each step and take the next step only when the first is clear.",
  },
};

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function simulateDelay(ms = 250) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getCurrentDemoState() {
  return readStorage(STORAGE_KEYS.userState, {
    learning_style: null,
    completed_ids: [],
    completed_history: [],
  });
}

function saveDemoState(state) {
  writeStorage(STORAGE_KEYS.userState, state);
}

function formatContentItem(item) {
  return {
    ...item,
    title: item.title,
    description: item.description,
    subject: item.subject,
    type: item.type,
    duration_min: item.duration_min,
    difficulty: item.difficulty,
    content_id: item.content_id,
  };
}

function buildProgress() {
  const state = getCurrentDemoState();
  const total = DEMO_CONTENT.length;
  const completed = state.completed_ids;
  const overall_percentage = total === 0 ? 0 : Math.round((completed.length / total) * 100);
  const subject_breakdown = DEMO_CONTENT.reduce((acc, item) => {
    const current = acc[item.subject] || { total: 0, completed: 0 };
    current.total += 1;
    if (completed.includes(item.content_id)) current.completed += 1;
    acc[item.subject] = current;
    return acc;
  }, {});

  return {
    total_available: total,
    total_completed: completed.length,
    overall_percentage,
    learning_style: state.learning_style,
    subject_breakdown: Object.fromEntries(
      Object.entries(subject_breakdown).map(([subject, stats]) => [subject, {
        ...stats,
        percentage: stats.total === 0 ? 0 : Math.round((stats.completed / stats.total) * 100),
      }])
    ),
    completed_ids: completed,
    recently_completed: state.completed_history.slice(-4).reverse(),
  };
}

function getSectionAnswerStyle(answers) {
  const counts = { a: 0, b: 0, c: 0, d: 0 };
  const entries = Array.isArray(answers) ? answers : Object.values(answers);

  for (const entry of entries) {
    const answer = typeof entry === "string" ? entry : entry?.answer;
    if (typeof answer !== "string") continue;
    const normalized = answer.trim().toLowerCase();
    if (normalized.startsWith("a")) counts.a += 1;
    else if (normalized.startsWith("b")) counts.b += 1;
    else if (normalized.startsWith("c")) counts.c += 1;
    else if (normalized.startsWith("d")) counts.d += 1;
  }
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];

  if (top === "a") return "visual_learner";
  if (top === "b") return "conceptual_thinker";
  if (top === "c") return "practice_based";
  return "step_by_step";
}

function buildTestResult(style) {
  const scores = {
    logical: 70,
    verbal: 75,
    numerical: 68,
    memory: 72,
    attention: 74,
  };
  const total = Math.round((scores.logical + scores.verbal + scores.numerical + scores.memory + scores.attention) / 5);

  return {
    learning_style: style,
    style_details: STYLE_DETAILS[style],
    scores: { ...scores, total },
    confidence: 0.86,
    correct_answers: 20,
    total_marks: total * 5,
    out_of: 500,
    days_until_retake: 30,
    can_retake: false,
    ml_mode: "ensemble",
    recommendations: DEMO_CONTENT.slice(0, 6).map((item) => formatContentItem(item)),
  };
}

function createUser(email, name, role) {
  return {
    id: `demo_${Math.random().toString(36).slice(2, 10)}`,
    name: name || "Demo Student",
    email: email || "demo@student.com",
    role: role || "student",
    learning_style: getCurrentDemoState().learning_style,
  };
}

const demoApi = {
  async get(url) {
    await simulateDelay(250);
    const request = new URL(url, "http://demo");
    const pathname = request.pathname;
    const params = Object.fromEntries(request.searchParams.entries());

    if (pathname === "/test/questions") {
      return { data: { sections: DEMO_SECTIONS } };
    }

    if (pathname === "/test/result") {
      const stored = readStorage(STORAGE_KEYS.testResult, null);
      if (stored) return { data: stored };
      const style = getCurrentDemoState().learning_style || "visual_learner";
      const result = buildTestResult(style);
      writeStorage(STORAGE_KEYS.testResult, result);
      return { data: result };
    }

    if (pathname === "/content/progress") {
      return { data: buildProgress() };
    }

    if (pathname === "/content/all") {
      let items = DEMO_CONTENT;
      if (params.subject && params.subject !== "All") {
        items = items.filter((item) => item.subject === params.subject);
      }
      if (params.type && params.type !== "All") {
        items = items.filter((item) => item.type === params.type);
      }
      const page = Number(params.page || 1);
      const limit = Number(params.limit || 12);
      const totalPages = Math.max(1, Math.ceil(items.length / limit));
      const start = (page - 1) * limit;
      const content = items.slice(start, start + limit).map(formatContentItem);
      return { data: { content, total_pages: totalPages } };
    }

    if (pathname.startsWith("/content/") && pathname !== "/content/progress") {
      const contentId = pathname.replace("/content/", "");
      if (contentId === "search") {
        const query = params.q?.toLowerCase() || "";
        const results = DEMO_CONTENT.filter((item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.subject.toLowerCase().includes(query)
        ).map(formatContentItem);
        return { data: { results } };
      }

      const item = DEMO_CONTENT.find((content) => content.content_id === contentId);
      if (!item) {
        throw { response: { status: 404, data: { detail: "Content nahi mila." } } };
      }
      const completedIds = getCurrentDemoState().completed_ids;
      return {
        data: {
          content: formatContentItem(item),
          my_progress: { completed: completedIds.includes(contentId) },
        },
      };
    }

    if (pathname === "/content/recommendations") {
      const top_n = Number(params.top_n || 6);
      const completed = getCurrentDemoState().completed_ids;
      const items = DEMO_CONTENT.filter((item) => !completed.includes(item.content_id)).slice(0, top_n);
      return { data: { recommendations: items.map(formatContentItem) } };
    }

    throw { response: { status: 404, data: { detail: "Endpoint not found" } } };
  },

  async post(url, payload) {
    await simulateDelay(300);
    const request = new URL(url, "http://demo");
    const pathname = request.pathname;
    const params = Object.fromEntries(request.searchParams.entries());

    if (pathname === "/auth/login") {
      const user = createUser(payload.email, null, payload.role || "student");
      return {
        data: {
          access_token: "demo_access_token",
          refresh_token: "demo_refresh_token",
          user,
        },
      };
    }

    if (pathname === "/auth/register") {
      const user = createUser(payload.email, payload.name, payload.role || "student");
      return {
        data: {
          access_token: "demo_access_token",
          refresh_token: "demo_refresh_token",
          user,
        },
      };
    }

    if (pathname === "/auth/refresh") {
      return { data: { access_token: "demo_new_access_token" } };
    }

    if (pathname === "/test/submit") {
      const style = getSectionAnswerStyle(payload.answers || {});
      const result = buildTestResult(style);
      writeStorage(STORAGE_KEYS.testResult, result);
      const state = getCurrentDemoState();
      state.learning_style = style;
      saveDemoState(state);
      return { data: { ...result, cluster_id: "demo_cluster" } };
    }

    if (pathname === "/content/complete/" || pathname.startsWith("/content/complete/")) {
      const contentId = pathname.replace("/content/complete/", "");
      const state = getCurrentDemoState();
      if (!state.completed_ids.includes(contentId)) {
        state.completed_ids.push(contentId);
        state.completed_history.push({
          content_id: contentId,
          title: DEMO_CONTENT.find((item) => item.content_id === contentId)?.title || "Completed Content",
          subject: DEMO_CONTENT.find((item) => item.content_id === contentId)?.subject || "General",
          completed_at: new Date().toISOString(),
        });
      }
      saveDemoState(state);
      return { data: { success: true } };
    }

    if (pathname === "/content/rate/" || pathname.startsWith("/content/rate/")) {
      return { data: { success: true } };
    }

    if (pathname === "/chatbot/ask") {
      const question = String(payload.question || "").toLowerCase();
      const lectureContext = String(payload.lecture_context || "");
      let answer = "Yeh ek demo answer hai. Aapka sawaal samajh aaya, aur main aapko iske baare mein bata raha hoon.";
      if (/summarize|summary|samjhao|explain/.test(question)) {
        answer = "Yeh lecture ka short summary hai: key concepts ko step-by-step samjho aur practical examples par dhyaan do.";
      } else if (/python|code/.test(question)) {
        answer = "Python mein aapko sabse pehle syntax aur data types clear hone chahiye. Fir practice karke functions aur loops pe mastery paayen.";
      } else if (/concept|logic|why/.test(question)) {
        answer = "Conceptual learning ke liye aapko chhote examples aur logic ko samajhna zaroori hai.";
      }
      if (lectureContext && !/summarize|summary|samjhao|explain/.test(question)) {
        answer += " Agar aap chahein, to main is lecture context ke base par specific examples bhi de sakta hoon.";
      }
      return { data: { answer } };
    }

    if (pathname === "/chatbot/summarize") {
      const context = payload.lecture_text || payload.lecture_context || "Yeh lecture ka summary yahan aayega.";
      return { data: { summary: `Summary: ${context.slice(0, 120)}...` } };
    }

    throw { response: { status: 404, data: { detail: "Endpoint not found" } } };
  },
};

export default demoApi;
