import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useChallenge } from '../context/ChallengeContext';
import { AIProofGeneratorModal } from '../components/AIProofGeneratorModal';
import { 
  Flame, GitCommit, CheckCircle2, Copy, Check, Sparkles, 
  ArrowLeft, Clock, Award, Code2, Terminal, Send, ShieldCheck, ExternalLink, Link2
} from 'lucide-react';

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
  </svg>
);

export const ChallengeDay = () => {
  const { 
    day12Spec, 
    day12Submitted, 
    day12SubmissionData, 
    submitDay12Proof, 
    showToast,
    currentUser
  } = useChallenge();

  const [githubUrl, setGithubUrl] = useState(
    day12SubmissionData?.githubUrl || `https://github.com/${currentUser.githubUsername || 'student-dev'}/binary-search-lab`
  );
  const [commitHash, setCommitHash] = useState(
    day12SubmissionData?.commitHash || 'a7f39b12'
  );
  const [linkedinUrl, setLinkedinUrl] = useState(
    day12SubmissionData?.linkedinUrl || `https://linkedin.com/in/${currentUser.linkedinUrl || 'student-dev'}/status/60day-day12`
  );
  const [leetcodeUrl, setLeetcodeUrl] = useState(
    day12SubmissionData?.leetcodeUrl || currentUser.leetcodeUrl || `https://leetcode.com/u/${currentUser.name ? currentUser.name.toLowerCase().replace(/\s+/g, '_') : 'student_cse'}`
  );

  const [checklist, setChecklist] = useState(day12Spec.tasksChecklist);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const handleChecklistToggle = (id) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const copyStarterCode = () => {
    navigator.clipboard.writeText(day12Spec.codeStarter);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2500);
    showToast("📋 Starter code copied to clipboard!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!githubUrl || !linkedinUrl) {
      showToast("Please provide both GitHub commit URL & LinkedIn post URL!", "error");
      return;
    }
    submitDay12Proof({ githubUrl, commitHash, linkedinUrl, leetcodeUrl });
  };

  return (
    <div className="min-h-screen pb-28 pt-2">
      <div className="max-w-md mx-auto px-4 space-y-4">
        
        {/* TOP BAR / BACK NAVIGATION */}
        <div className="flex items-center justify-between">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-xl bg-white border border-slate-200 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </Link>

          <div className="flex items-center gap-1 text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
            <Flame className="w-3.5 h-3.5 fill-amber-500" />
            <span>Day {day12Spec.dayNumber} / 60</span>
          </div>
        </div>

        {/* DAY TASK HEADER */}
        <div className="light-card rounded-2xl p-4 space-y-2 relative">
          <div className="flex items-center justify-between">
            <span className="text-[9.5px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              {day12Spec.category}
            </span>
            <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> +{day12Spec.points} Pts
            </span>
          </div>

          <h1 className="text-base font-extrabold text-slate-900 leading-tight">
            {day12Spec.title}
          </h1>

          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-indigo-600" /> {day12Spec.estTimeMinutes} Mins
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <Code2 className="w-3 h-3 text-purple-600" /> C++ / Java / Python
            </span>
          </div>
        </div>

        {/* EXACT 7-STEP CHECKLIST */}
        <div className="light-card rounded-2xl p-3.5 space-y-2.5">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Day 12 Task Checklist (7 Steps)</span>
          </h2>

          <div className="space-y-1.5">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => handleChecklistToggle(item.id)}
                className={`flex items-center gap-2 p-2 rounded-xl border transition-all cursor-pointer ${
                  item.completed
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border ${
                  item.completed ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                }`}>
                  {item.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
                <span className={`text-[11.5px] font-sans ${item.completed ? 'line-through opacity-70' : ''}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* STARTER BOILERPLATE CODE */}
        <div className="light-card rounded-2xl p-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-800 flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>BinarySearch.cpp</span>
            </span>
            <button
              onClick={copyStarterCode}
              className="flex items-center gap-1 text-[11px] font-semibold text-indigo-700 px-2 py-0.5 rounded bg-indigo-50 border border-indigo-200"
            >
              {codeCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{codeCopied ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>

          <div className="p-2.5 bg-slate-900 rounded-xl font-mono text-[10.5px] text-slate-200 overflow-x-auto leading-relaxed max-h-40">
            <pre>{day12Spec.codeStarter}</pre>
          </div>
        </div>

        {/* PROOF OF WORK SUBMISSION FORM */}
        <div className="light-card rounded-2xl p-4 space-y-3 shadow-md relative">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div>
              <h2 className="text-xs font-extrabold text-slate-900 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Submit Proof of Work</span>
              </h2>
              <p className="text-[10px] text-slate-500 font-mono">Lock your Day 12 streak</p>
            </div>
            <button
              onClick={() => setIsAiModalOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold shadow-xs hover:bg-purple-100 transition-all"
            >
              <Sparkles className="w-3 h-3 text-purple-600" />
              <span>AI Drafter</span>
            </button>
          </div>

          {day12Submitted ? (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5 text-center">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-extrabold text-emerald-900">Day 12 Proof Verified!</h3>
              <p className="text-[10.5px] text-emerald-800 font-mono">
                Submitted today at {day12SubmissionData?.submittedAt || '11:45 PM'}
              </p>
              <div className="text-[10px] font-mono text-slate-600 bg-white p-2 rounded border border-slate-200 text-left space-y-0.5">
                <div className="truncate">GitHub: <span className="text-emerald-700 font-bold">{githubUrl}</span></div>
                <div className="truncate">LinkedIn: <span className="text-blue-700 font-bold">{linkedinUrl}</span></div>
                <div className="truncate">LeetCode: <span className="text-amber-700 font-bold">{leetcodeUrl}</span></div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              
              <div className="space-y-0.5">
                <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                  <GitCommit className="w-3 h-3 text-emerald-600" />
                  <span>GitHub Repository / Commit URL *</span>
                </label>
                <input
                  type="url"
                  required
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username/repo/commit/..."
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-mono focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                    <Linkedin className="w-3 h-3 text-blue-600" />
                    <span>LinkedIn Post URL *</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsAiModalOpen(true)}
                    className="text-[10px] text-indigo-600 font-mono underline"
                  >
                    Generate draft
                  </button>
                </div>
                <input
                  type="url"
                  required
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://linkedin.com/posts/username-..."
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-mono focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="space-y-0.5">
                <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                  <Link2 className="w-3 h-3 text-amber-600" />
                  <span>LeetCode Profile / Solution Link *</span>
                </label>
                <input
                  type="url"
                  value={leetcodeUrl}
                  onChange={(e) => setLeetcodeUrl(e.target.value)}
                  placeholder="https://leetcode.com/u/username"
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-mono focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-sm transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Lock Day 12 & Increment Streak</span>
              </button>

            </form>
          )}

        </div>

        <AIProofGeneratorModal
          isOpen={isAiModalOpen}
          onClose={() => setIsAiModalOpen(false)}
          githubUrl={githubUrl}
        />

      </div>
    </div>
  );
};
