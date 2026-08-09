// ABTalks 2.0 Structured Data Store

export const ROADMAP_60_DAYS_PILLARS = [
  { id: "all", range: "1–60", focus: "All Modules (Full 60 Days)", days: [1, 60], color: "bg-indigo-600 text-white font-extrabold" },
  { id: "dsa", range: "1–15", focus: "DSA + Problem Solving", days: [1, 15], color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { id: "web", range: "16–25", focus: "Web Development / Full Stack", days: [16, 25], color: "bg-purple-50 text-purple-700 border-purple-200" },
  { id: "dbms", range: "26–32", focus: "DBMS + SQL", days: [26, 32], color: "bg-blue-50 text-blue-700 border-blue-200" },
  { id: "os", range: "33–38", focus: "Operating Systems", days: [33, 38], color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { id: "cn", range: "39–44", focus: "Computer Networks", days: [39, 44], color: "bg-teal-50 text-teal-700 border-teal-200" },
  { id: "aiml", range: "45–50", focus: "AI/ML Fundamentals", days: [45, 50], color: "bg-amber-50 text-amber-700 border-amber-200" },
  { id: "project", range: "51–56", focus: "Major Project", days: [51, 56], color: "bg-rose-50 text-rose-700 border-rose-200" },
  { id: "resume", range: "57–58", focus: "Git/GitHub + Resume", days: [57, 58], color: "bg-slate-100 text-slate-700 border-slate-300" },
  { id: "interview", range: "59", focus: "Interview Preparation", days: [59, 59], color: "bg-orange-50 text-orange-700 border-orange-200" },
  { id: "final", range: "60", focus: "Final Project + Portfolio", days: [60, 60], color: "bg-emerald-600 text-white font-extrabold" }
];

export const TRACKS = [
  {
    id: "fullstack-mern",
    title: "Full-Stack MERN & Next.js",
    icon: "Layers",
    color: "from-indigo-500 to-purple-600",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    enrolledCount: 1420,
    difficulty: "Intermediate",
    tagline: "Build production-ready web apps from database schemas to serverless deployments.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Next.js 14", "Tailwind CSS"],
  },
  {
    id: "ai-engineering",
    title: "AI Engineering & GenAI Systems",
    icon: "Cpu",
    color: "from-emerald-400 to-teal-600",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    enrolledCount: 980,
    difficulty: "Advanced",
    tagline: "Master LLM orchestration, RAG architectures, Vector DBs, and fine-tuning.",
    techStack: ["Python", "Gemini API", "LangChain", "Pinecone", "FastAPI", "Streamlit"],
  },
  {
    id: "mobile-native",
    title: "Android Native & Flutter",
    icon: "Smartphone",
    color: "from-amber-400 to-orange-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    enrolledCount: 760,
    difficulty: "Beginner to Pro",
    tagline: "Ship high-performance mobile apps to the Google Play Store with clean architecture.",
    techStack: ["Kotlin", "Jetpack Compose", "Flutter", "Dart", "Firebase", "Room DB"],
  },
  {
    id: "backend-systems",
    title: "Backend & Distributed Systems",
    icon: "Server",
    color: "from-blue-500 to-cyan-600",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    enrolledCount: 640,
    difficulty: "Advanced",
    tagline: "Design resilient microservices, caching layers, message queues, and DevOps pipelines.",
    techStack: ["Go", "Docker", "Redis", "Kafka", "PostgreSQL", "Kubernetes"],
  }
];

export const MOCK_USER_PROFILES = {
  active: {
    name: "Dev Student",
    college: "Engineering Student",
    department: "Computer Science (CSE)",
    year: "3rd Year, CSE",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    currentTrackId: "fullstack-mern",
    streak: 11,
    longestStreak: 11,
    completedDaysCount: 11,
    currentDay: 12,
    recruiterScore: 88,
    status: "ON_TRACK",
    authProvider: "google",
    streakFreezeAvailable: 1,
    githubUsername: "devstudent-codes",
    linkedinUrl: "linkedin.com/in/devstudent",
    leetcodeUrl: "leetcode.com/u/devstudent",
    proofOfWorkCount: 11,
    leetcodeStats: {
      solved: 142,
      easy: 78,
      medium: 54,
      hard: 10,
      streak: 45,
      rating: 1684
    },
    githubCommitsThisMonth: 64,
    badges: [
      { id: "b1", title: "10-Day Sentinel", icon: "Flame", date: "Yesterday" },
      { id: "b2", title: "LeetCode 100+", icon: "Code2", date: "Last Week" },
      { id: "b3", title: "Git Master", icon: "GitCommit", date: "Day 5" }
    ]
  },
  fresh: {
    name: "Priya Sharma",
    college: "Institute of Technology",
    department: "Computer Science (CSE)",
    year: "2nd Year, CSE",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    currentTrackId: "fullstack-mern",
    streak: 0,
    longestStreak: 0,
    completedDaysCount: 0,
    currentDay: 1,
    recruiterScore: 30,
    status: "FRESH_START",
    authProvider: "github",
    streakFreezeAvailable: 1,
    githubUsername: "priyasharma-dev",
    linkedinUrl: "linkedin.com/in/priyasharma",
    leetcodeUrl: "leetcode.com/u/priya_s",
    proofOfWorkCount: 0,
    leetcodeStats: {
      solved: 42,
      easy: 30,
      medium: 12,
      hard: 0,
      streak: 5,
      rating: 1420
    },
    githubCommitsThisMonth: 18,
    badges: []
  },
  missed: {
    name: "Rohan Kumar",
    college: "Tech University",
    department: "Computer Science (CSE)",
    year: "4th Year, CSE",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    currentTrackId: "fullstack-mern",
    streak: 0,
    longestStreak: 7,
    completedDaysCount: 7,
    currentDay: 9,
    recruiterScore: 65,
    status: "MISSED_DAY",
    authProvider: "linkedin",
    streakFreezeAvailable: 1,
    githubUsername: "rohankumar-dev",
    linkedinUrl: "linkedin.com/in/rohankumar",
    leetcodeUrl: "leetcode.com/u/rohankumar",
    proofOfWorkCount: 7,
    leetcodeStats: {
      solved: 98,
      easy: 50,
      medium: 40,
      hard: 8,
      streak: 22,
      rating: 1580
    },
    githubCommitsThisMonth: 42,
    badges: [
      { id: "b3", title: "Git Master", icon: "GitCommit", date: "Day 5" }
    ]
  }
};

export const INITIAL_FRIENDS_NETWORK = [
  {
    id: "f1",
    name: "Akhilesh Gautam",
    college: "ABES Engineering College",
    department: "CSE Batchmate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    streak: 12,
    leetcodeSolved: 156,
    leetcodeStreak: 38,
    status: "Online",
    lastCommit: "feat(dsa): Binary Search & Tree Traversal in C++",
    lastCommitTime: "25 mins ago",
    githubRepo: "github.com/akhilesh-gautam/dsa-cpp-pro",
    proofSnippet: "Completed Day 12 Binary Search task! Pushed 2 LeetCode solutions to GitHub. 🔥",
    hypeCount: 24
  },
  {
    id: "f2",
    name: "Ajay Chaudhary",
    college: "ABES Engineering College",
    department: "CSE Batchmate",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    streak: 10,
    leetcodeSolved: 128,
    leetcodeStreak: 52,
    status: "Coding Late Night",
    lastCommit: "fix(binary-search): Lower & Upper Bound Implementation",
    lastCommitTime: "1 hour ago",
    githubRepo: "github.com/ajay-chaudhary/leetcode-solutions",
    proofSnippet: "Solved Binary Search First/Last Position on LeetCode. Posted LinkedIn breakdown!",
    hypeCount: 19
  }
];

export const DAY_12_SPEC = {
  dayNumber: 12,
  title: "Master Binary Search & Algorithmic Complexity",
  trackId: "fullstack-mern",
  category: "DSA + Problem Solving (Days 1–15)",
  estTimeMinutes: 45,
  points: 150,
  overview: "Today is focused on Binary Search—one of the most critical algorithmic patterns in technical coding interviews. Understand logarithmic O(log N) search boundaries, implement the algorithm in your preferred language (C++, Java, or Python), and solve 2 LeetCode problems.",
  whyItMatters: "Binary Search is tested in 80%+ of CSE technical screening rounds at top tech companies (Google, Amazon, Swiggy, Razorpay). Master it to eliminate linear scan overhead!",
  learningObjectives: [
    "Master logarithmic search space reduction O(log N)",
    "Implement mid calculation preventing integer overflow: mid = low + (high - low) / 2",
    "Solve Search in Rotated Sorted Array & First/Last Position on LeetCode"
  ],
  tasksChecklist: [
    { id: 1, label: "Revise Binary Search and understand its time complexity O(log N)", completed: false },
    { id: 2, label: "Solve 2 Binary Search problems on LeetCode", completed: false },
    { id: 3, label: "Implement Binary Search in C++/Java/Python", completed: false },
    { id: 4, label: "Write down Time & Space Complexity analysis", completed: false },
    { id: 5, label: "Push your solution to GitHub repository", completed: false },
    { id: 6, label: "Create a short LinkedIn post explaining what you learned", completed: false },
    { id: 7, label: "Add your LeetCode / profile link as proof", completed: false }
  ],
  codeStarter: `// BinarySearch.cpp - Iterative Binary Search in C++
#include <iostream>
#include <vector>

int binarySearch(const std::vector<int>& nums, int target) {
    int low = 0;
    int high = nums.size() - 1;

    while (low <= high) {
        // Prevent overflow: low + (high - low) / 2
        int mid = low + (high - low) / 2;

        if (nums[mid] == target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            low = mid + 1; // Search right half
        } else {
            high = mid - 1; // Search left half
        }
    }
    return -1; // Target not found
}

// Time Complexity: O(log N)
// Space Complexity: O(1)`,
  aiLinkedInTemplates: [
    {
      title: "🚀 Recruiter Showcase (Binary Search Breakdown)",
      content: `Day 12 of #60DaysOfABTalks Challenge! 🔥

Focus: DSA & Algorithmic Problem Solving (Days 1–15)

Today I mastered Binary Search and solved 2 problems on LeetCode!

💡 Key Learnings:
- Why O(log N) divides search space exponentially vs O(N) linear scan.
- Safe mid calculation avoiding overflow: low + (high - low) / 2.
- Solved LeetCode 33 (Search in Rotated Sorted Array) & LeetCode 34.

📌 Proof Links:
- GitHub Code: {GITHUB_URL}
- LeetCode Profile: {LEETCODE_URL}

#ABTalks #DSA #BinarySearch #LeetCode #CPP #BuildInPublic #ComputerScience`
    },
    {
      title: "⚡ Quick & Punchy (LeetCode Streak)",
      content: `Day 12 / 60 Completed! ⚡

Mastered Binary Search O(log N) & pushed 2 LeetCode solutions to GitHub.

Proof: {GITHUB_URL}

#60DaysOfABTalks #DSA #LeetCode #ProblemSolving`
    }
  ],
  aiCommitMessage: "feat(dsa): implement Binary Search O(log N) with LeetCode solutions (Day 12 ABTalks)"
};

export const GENERATE_60_DAYS = (currentDay = 12, completedCount = 11, status = "ON_TRACK") => {
  const days = [];

  const getPillarForDay = (day) => {
    if (day >= 1 && day <= 15) return { pillar: "DSA + Problem Solving", range: "1–15", id: "dsa" };
    if (day >= 16 && day <= 25) return { pillar: "Web Development / Full Stack", range: "16–25", id: "web" };
    if (day >= 26 && day <= 32) return { pillar: "DBMS + SQL", range: "26–32", id: "dbms" };
    if (day >= 33 && day <= 38) return { pillar: "Operating Systems", range: "33–38", id: "os" };
    if (day >= 39 && day <= 44) return { pillar: "Computer Networks", range: "39–44", id: "cn" };
    if (day >= 45 && day <= 50) return { pillar: "AI/ML Fundamentals", range: "45–50", id: "aiml" };
    if (day >= 51 && day <= 56) return { pillar: "Major Project", range: "51–56", id: "project" };
    if (day >= 57 && day <= 58) return { pillar: "Git/GitHub + Resume", range: "57–58", id: "resume" };
    if (day === 59) return { pillar: "Interview Preparation", range: "59", id: "interview" };
    return { pillar: "Final Project + Portfolio", range: "60", id: "final" };
  };

  for (let i = 1; i <= 60; i++) {
    let dayStatus = "UPCOMING";
    if (status === "FRESH_START") {
      dayStatus = i === 1 ? "ACTIVE" : "LOCKED";
    } else if (status === "MISSED_DAY") {
      if (i < 8) dayStatus = "COMPLETED";
      else if (i === 8) dayStatus = "MISSED";
      else if (i === 9) dayStatus = "ACTIVE";
      else dayStatus = "LOCKED";
    } else {
      if (i <= completedCount) dayStatus = "COMPLETED";
      else if (i === currentDay) dayStatus = "ACTIVE";
      else dayStatus = "LOCKED";
    }

    const pillarInfo = getPillarForDay(i);

    days.push({
      day: i,
      title: i === 12 ? DAY_12_SPEC.title : `Day ${i}: ${pillarInfo.pillar} Task`,
      pillar: pillarInfo.pillar,
      pillarId: pillarInfo.id,
      range: pillarInfo.range,
      status: dayStatus,
      points: i * 15
    });
  }
  return days;
};

export const ALUMNI_SUCCESS_STORIES = [
  {
    id: "s1",
    name: "Vikram Mehta",
    role: "Backend Engineer @ Swiggy",
    college: "CSE Graduate",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    quote: "Building every day after college gave me the proof of work that Swiggy recruiters asked for on LinkedIn!",
    stipend: "₹18 LPA Package"
  },
  {
    id: "s2",
    name: "Meera Nair",
    role: "Full-Stack Dev @ Zerodha Cohort",
    college: "Tier-3 CSE Engineering",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    quote: "Maintaining my public GitHub commits & LeetCode streak got me hired without recruiters asking for GPA!",
    stipend: "₹16 LPA Package"
  }
];
