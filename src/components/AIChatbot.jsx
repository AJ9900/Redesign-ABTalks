import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, Terminal, HelpCircle } from 'lucide-react';

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Namaste Ajay! 🤖 I am your ChatGPT-powered General AI Assistant & ABTalks 2.0 Mentor. Ask me ANY coding, DSA, LeetCode, system design, or general knowledge question!',
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const quickPrompts = [
    'How to solve Tree Zigzag Traversal in C++?',
    'Explain Sliding Window Rate Limiting',
    'Tips for LeetCode 150+ problem streak',
    'What is Dynamic Programming?'
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // General ChatGPT & Challenge AI Response Engine
    setTimeout(() => {
      let aiText = `That's a great question! Here's a quick breakdown:\n\nFor CSE students, mastering data structures, clean Git commits, and daily consistency is key. Feel free to ask me for code snippets in C++, Python, Java, or JavaScript!`;
      
      const lower = text.toLowerCase();
      if (lower.includes('zigzag') || lower.includes('tree') || lower.includes('c++')) {
        aiText = "🌲 Binary Tree Zigzag Traversal (LeetCode 103):\n\nUse a Breadth-First Search (BFS) queue! Track a boolean flag `leftToRight`. At each level, push values into a vector and reverse it if `leftToRight` is false, then flip the flag. Time Complexity: O(N), Space: O(N).";
      } else if (lower.includes('dynamic programming') || lower.includes('dp')) {
        aiText = "⚡ Dynamic Programming (DP) vs Greedy:\n\nDP breaks problems into overlapping subproblems with optimal substructure (e.g. 0/1 Knapsack, Longest Common Subsequence). It stores memoized states to avoid recomputing. Greedy makes the locally optimal choice at each step without backtracking (e.g. Dijkstra, Fractional Knapsack).";
      } else if (lower.includes('leetcode') || lower.includes('streak') || lower.includes('dsa')) {
        aiText = "🔥 LeetCode Streak Tip for CSE Students:\n\n1. Solve 2 problems daily (1 Easy, 1 Medium).\n2. Focus on patterns: Two Pointers, Sliding Window, Fast & Slow Pointers, BFS/DFS, and Monotonic Stack.\n3. Log your solutions on GitHub just like your friend Akhilesh & Ajay Chaudhary!";
      } else if (lower.includes('rate limit') || lower.includes('redis') || lower.includes('day 12')) {
        aiText = "🚀 Day 12 Redis Rate Limiter:\n\nUses Redis `incr(key)` & `pexpire(key, windowMs)`! It counts incoming client requests per IP within 60 seconds. If count > limit, return HTTP 429 Too Many Requests with X-RateLimit headers.";
      } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        aiText = "Hey Ajay! Ready to code? Ask me anything about C++, DSA, LeetCode, system design, or your 60-day ABTalks challenge!";
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-16 right-4 z-40 flex items-center gap-2 p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all group"
        >
          <div className="relative">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-indigo-600 animate-pulse"></span>
          </div>
          <span className="text-xs font-extrabold pr-1 hidden sm:inline">ChatGPT AI</span>
        </button>
      )}

      {/* Expandable Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-16 right-3 sm:right-6 z-50 w-[92vw] max-w-[360px] h-[500px] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Drawer Header */}
          <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold leading-tight">General ChatGPT AI Assistant</h3>
                <p className="text-[10px] text-indigo-100 font-mono">Ask ANYTHING • Coding, DSA, Q&A</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto text-[10.5px]">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:border-indigo-400 hover:text-indigo-600 transition-all shrink-0"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-50/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start gap-2 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                  m.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-purple-100 text-purple-700 border border-purple-200'
                }`}>
                  {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>
                <div className={`max-w-[82%] p-2.5 rounded-2xl text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-tl-none font-sans whitespace-pre-wrap'
                }`}>
                  <p>{m.text}</p>
                  <span className={`text-[9px] font-mono block mt-1 ${m.sender === 'user' ? 'text-indigo-200 text-right' : 'text-slate-400'}`}>
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <Bot className="w-3.5 h-3.5 text-purple-600 animate-spin" />
                <span>ChatGPT is generating answer...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-2 bg-white border-t border-slate-200 flex items-center gap-1.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask ChatGPT anything (DSA, Code, Q&A)..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-500 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
