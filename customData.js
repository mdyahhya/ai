// ============================================================
// YAHYA MUNDEWADI — COMPLETE KNOWLEDGE BASE
// Used for semantic context retrieval in Dominal AI chatbot.
// Structure: each section is a named chunk for quick matching.
// ============================================================

const KNOWLEDGE_BASE = [

    {
        id: "identity",
        topics: ["who is yahya", "about yahya", "yahya mundewadi", "founder", "ceo", "background", "yourself", "who are you", "introduce", "tell me about"],
        content: `Yahya Mundewadi (full legal name: Mundewadi Md. Yahya Ab. Wahid) is a full-stack developer, Android engineer, Python developer, AI engineer, and tech entrepreneur from Solapur, Maharashtra, India. He was born and raised in Solapur and is currently based between Solapur and Pune, Maharashtra. His primary email is yahyabuilds@gmail.com and his LinkedIn is https://www.linkedin.com/in/yahyamundewadi. He is the Co-Founder and CEO of Dominal Tech (dominal.in) and has been working as a Full Stack Developer at CiteWorks Studio, Pune since February 2026. His personal portfolio is at https://yahya.in and his older portfolio at https://yahya.dominal.in.`
    },

    {
        id: "education",
        topics: ["education", "college", "university", "degree", "study", "cgpa", "marks", "12th", "engineering", "vvpiet", "dbatu", "academic", "student", "batch", "placement incharge", "kiran academy"],
        content: `Yahya is pursuing a Bachelor of Technology in Computer Science Engineering (BTech CSE) from VVPIET — Vidya Vikas Pratishthan Institute of Engineering and Technology, Solapur, affiliated with Dr. Babasaheb Ambedkar Technological University (DBATU), batch of 2022–2026. He scored 87% in his 12th Board exams and has maintained a 7.5 CGPA throughout engineering with no backlogs, completing all four years clean. He was selected for Kiran Academy, Pune (listed under CSE Achievements at vvpengineering.org). He also served as the Training & Placement Student In-Charge at VVPIET, managing company drives, student placements, and industry–student connections.`
    },

    {
        id: "skills",
        topics: ["skills", "technologies", "tech stack", "programming", "languages", "tools", "what can you build", "expertise", "android", "python", "react", "flutter", "ai engineering", "supabase", "nodejs", "firebase", "three.js", "remotion", "electron", "webgl"],
        content: `Yahya's technical skill set includes: Android Development (Kotlin, Java), Python (Advanced), Full Stack Web Development (HTML, CSS, JavaScript, React, TypeScript), PostgreSQL and Supabase, Node.js, Flutter/Dart, MERN Stack, Firebase, Netlify, Vercel, Railway, AI engineering (RAG pipelines, AI Agents, Prompt Engineering, Ollama for local LLMs, Groq, Claude/ChatGPT APIs), Remotion for video generation, Three.js/WebGL for 3D, Electron for desktop apps, and mobile optimization.`
    },

    {
        id: "company",
        topics: ["dominal", "dominal tech", "company", "startup", "co-founder", "cto", "amir", "mohseen", "services", "web development", "pwa", "chatbot", "ai integration"],
        content: `Yahya is the Co-Founder and CEO of Dominal Tech (dominal.in), an indie IT company that provides full-stack web development, Android app development, Progressive Web Apps (PWA), AI integration, AI chatbots, domain registration, and end-to-end tech partnership for startups. The company was co-founded with Amir Rangrez (Co-Founder & CTO) and Mohseen Pajnighar. Dominal Tech is based in Maharashtra, India.`
    },

    {
        id: "job",
        topics: ["job", "work", "citeworks", "employed", "current job", "pune", "full stack developer", "february 2026", "professional experience"],
        content: `Since February 2026, Yahya has been working as a Full Stack Developer at CiteWorks Studio, Pune, alongside running Dominal Tech as CEO. He manages professional client projects at CiteWorks while continuing to build and ship products under Dominal.`
    },

    {
        id: "shadow_browser",
        topics: ["shadow browser", "privacy browser", "android browser", "ad blocking", "tracker", "fingerprint", "dark mode", "incognito", "shadow.dominal.in"],
        content: `Shadow Browser (shadow.dominal.in) is Yahya's flagship product — a privacy-first Android browser featuring 98%+ ad blocking, zero data collection, tracker and fingerprint blocking, a pure black dark mode, incognito-by-default browsing, and 24 dedicated privacy features. It is one of the most complete privacy-focused Android browsers built independently.`
    },

    {
        id: "dominal_ai",
        topics: ["dominal ai", "ai chatbot", "custom chatbot", "ai.dominal.in", "knowledge base chatbot", "context-aware", "conversational ai"],
        content: `Dominal AI (ai.dominal.in) is Yahya's own custom AI chatbot built in ChatGPT style. It is trained on a custom knowledge base about Yahya and Dominal, capable of context-aware conversational replies and domain-specific answers. It is live and publicly accessible.`
    },

    {
        id: "ppt_maker",
        topics: ["ppt maker", "ai ppt", "presentation", "slides", "pdf", "ppt.yahya.in", "central railway", "government project"],
        content: `Yahya built the AI PPT Maker (available at ppt.yahya.in), a conversational AI agent that generates complete presentation slides from a topic, tone, and page count, and exports them as downloadable PDFs and PPTX files. A live deployment was done for Central Railway (Indian Government), making it one of his most significant real-world deployments.`
    },

    {
        id: "edtech_projects",
        topics: ["youbuddy", "coderverse", "pythonbuddy", "python ide", "engineering students", "ai chatbot", "maths", "notes", "pyq", "mcq", "analytics", "learning games", "data science"],
        content: `In EdTech, Yahya built: YouBuddy — an all-in-one app for engineering students featuring an AI chatbot for syllabus doubts (Maths M1, M2, M3 etc.), notes, PYQ question banks, and 15+ learning games. Coderverse — a coding learning platform with MCQ tests and AI-powered analytics on study patterns. PythonBuddy — a browser-based Python IDE supporting 200+ libraries including NumPy, Pandas, Matplotlib, and scikit-learn, enabling data science in the browser. Dominal Python AI IDE — a Python code editor with AI integration that displays intelligent error explanations during coding, named "Python AI Compiler by Yahya".`
    },

    {
        id: "college_projects",
        topics: ["vvpiet chatbot", "college chatbot", "staff portal", "tp data", "placement tracking", "student cv", "multilingual", "hindi", "marathi", "english", "faculty", "fees", "2000 students"],
        content: `For his college (VVPIET), Yahya singlehandedly built a complete digital ecosystem: an AI Chatbot (multilingual in English, Hindi, Marathi) deployed on vvpengineering.org that answers questions about fees, faculty, placements, and branches for 2,000+ students; a Staff Profile Portal for faculty photo and profile management; a T&P Data System for real-time placement tracking; and a Student CV System that auto-generates professional CVs and social profiles.`
    },

    {
        id: "other_projects",
        topics: ["faceattend", "heart ai", "smileup", "safechats", "maidly", "sharp kolors", "facial recognition", "attendance", "heart disease", "mental wellness", "smile", "whatsapp chat", "maid booking", "photography"],
        content: `Other major projects by Yahya include: FaceAttend AI (facial recognition attendance system), Heart AI (heart disease prediction web app with symptom checker and doctor directory), SmileUp (AI-powered mental wellness app that rewards users for smiling), SafeChats (real-time WhatsApp-style web chat with push notifications), Maidly (live maid booking platform), and Sharp Kolors Photopoint (client website for a photography business). He has built and deployed 18+ live production applications across AI, EdTech, privacy, healthcare, and marketplace domains.`
    },

    {
        id: "open_source",
        topics: ["pydefine", "pypi", "open source", "python library", "exceptions", "traceback", "beginner", "error explanation", "hugging face"],
        content: `In open source, Yahya published pydefine on PyPI (https://pypi.org/project/pydefine/) — a Python library (v1.0.2) that converts raw Python exceptions and tracebacks into beginner-friendly explanations with fix suggestions, covering 88+ exception types via an explain() function. He is also active on Hugging Face under the handle MdYahya for AI/ML exploration.`
    },

    {
        id: "links",
        topics: ["website", "portfolio", "link", "contact", "linkedin", "github", "pypi", "url", "social media", "find online", "reach", "email"],
        content: `Yahya's key online links: Portfolio — https://yahya.in | Company — https://dominal.in | Shadow Browser — https://shadow.dominal.in | Dominal AI — https://ai.dominal.in | AI PPT Maker — https://ppt.yahya.in | PyPI Library — https://pypi.org/project/pydefine | LinkedIn — https://www.linkedin.com/in/yahyamundewadi | College — https://vvpengineering.org | Email — yahyabuilds@gmail.com`
    }

];

// ============================================================
// CONTEXT RETRIEVAL ENGINE
// Scores each knowledge chunk by keyword overlap with the query.
// Returns the top N most relevant chunks.
// ============================================================

function retrieveContext(userQuery, topN = 3) {
    const query = userQuery.toLowerCase();
    const queryWords = query.split(/\s+/).filter(w => w.length > 2);

    const scored = KNOWLEDGE_BASE.map(chunk => {
        let score = 0;

        // Check topic keyword matches
        chunk.topics.forEach(topic => {
            if (query.includes(topic)) score += 3; // exact phrase match → high weight
            else {
                topic.split(" ").forEach(word => {
                    if (word.length > 2 && query.includes(word)) score += 1;
                });
            }
        });

        // Check content word matches
        queryWords.forEach(word => {
            if (chunk.content.toLowerCase().includes(word)) score += 0.5;
        });

        return { chunk, score };
    });

    // Sort by score descending, take top N with score > 0
    return scored
        .sort((a, b) => b.score - a.score)
        .filter(item => item.score > 0)
        .slice(0, topN)
        .map(item => item.chunk);
}
