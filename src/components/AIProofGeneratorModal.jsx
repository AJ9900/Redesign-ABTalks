import React, { useState } from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { Sparkles, Copy, Check, X, GitCommit } from 'lucide-react';

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
  </svg>
);

export const AIProofGeneratorModal = ({ isOpen, onClose, githubUrl }) => {
  const { day12Spec, showToast } = useChallenge();
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);
  const [copiedCommit, setCopiedCommit] = useState(false);

  if (!isOpen) return null;

  const currentTemplate = day12Spec.aiLinkedInTemplates[selectedTemplateIndex];
  const postText = currentTemplate.content.replace('{GITHUB_URL}', githubUrl || 'https://github.com/your-username/abtalks-day12-ratelimiter');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'linkedin') {
      setCopiedLinkedIn(true);
      setTimeout(() => setCopiedLinkedIn(false), 2500);
      showToast("📋 LinkedIn Post copied! Paste it into LinkedIn.");
    } else {
      setCopiedCommit(true);
      setTimeout(() => setCopiedCommit(false), 2500);
      showToast("📋 Commit message copied!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-[#131B2E] border border-indigo-500/30 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="p-4 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border-b border-indigo-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
              <Sparkles className="w-4 h-4 text-indigo-300 animate-pulse" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base leading-tight">AI Proof-of-Work Assistant</h3>
              <p className="text-[11px] text-indigo-200 font-mono">Instant Recruiter-Grade LinkedIn Drafter</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* Template Selector Tabs */}
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Select Post Style</label>
            <div className="grid grid-cols-2 gap-2">
              {day12Spec.aiLinkedInTemplates.map((tmpl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTemplateIndex(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold text-left border transition-all ${
                    selectedTemplateIndex === idx
                      ? 'bg-indigo-600/30 border-indigo-500 text-indigo-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {tmpl.title}
                </button>
              ))}
            </div>
          </div>

          {/* Generated LinkedIn Post Preview Box */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Post Copy</span>
              </span>
              <button
                onClick={() => copyToClipboard(postText, 'linkedin')}
                className="flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20"
              >
                {copiedLinkedIn ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLinkedIn ? 'Copied!' : 'Copy Post'}</span>
              </button>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 font-sans text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
              {postText}
            </div>
          </div>

          {/* Conventional Git Commit Message */}
          <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
                <span>Suggested Git Commit Message</span>
              </span>
              <button
                onClick={() => copyToClipboard(day12Spec.aiCommitMessage, 'commit')}
                className="flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20"
              >
                {copiedCommit ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCommit ? 'Copied!' : 'Copy Commit'}</span>
              </button>
            </div>
            <div className="p-2.5 bg-slate-950/90 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 font-medium">
              {day12Spec.aiCommitMessage}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
          >
            Done & Return to Submission
          </button>
        </div>
      </div>
    </div>
  );
};
