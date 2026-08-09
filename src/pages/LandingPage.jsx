import React from 'react';
import { Link } from 'react-router-dom';
import { TRACKS, ALUMNI_SUCCESS_STORIES } from '../data/mockChallengeData';
import { useChallenge } from '../context/ChallengeContext';
import { Flame, GitCommit, CheckCircle2, ArrowRight, ShieldCheck, Trophy, Sparkles, Code2, Users, Award } from 'lucide-react';

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
  </svg>
);

export const LandingPage = () => {
  const { activeTrackId, setActiveTrackId } = useChallenge();

  return (
    <div className="min-h-screen pb-28 pt-2">
      <div className="max-w-md mx-auto px-4 space-y-6">
        
        {/* HERO SECTION */}
        <div className="text-center pt-3 space-y-3">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>ABTalks 2.0 • 60-Day Challenge</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Build Daily. <br />
            <span className="text-indigo-600">Prove Your Work.</span> <br />
            Get Hired.
          </h1>

          <p className="text-xs text-slate-600 leading-relaxed font-sans px-3">
            A 60-day coding streak for engineering students. Pick a track, build 45 minutes daily after college, and post proof of work.
          </p>

          {/* Action CTA */}
          <div className="pt-1">
            <Link
              to="/dashboard"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md shadow-indigo-600/20 transition-all"
            >
              <span>Start 60-Day Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center gap-3 text-[11px] font-mono text-slate-500 pt-2">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Free
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> No Credit Card
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 3.8k Students
              </span>
            </div>
          </div>
        </div>

        {/* 3-STEP PROOF WORKFLOW */}
        <div className="light-card rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>How It Works</span>
            </h2>
            <span className="text-[10px] font-mono text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
              Proof System
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold inline-flex items-center justify-center">1</span>
              <h3 className="text-[11px] font-bold text-slate-900 leading-tight">Pick Track</h3>
              <p className="text-[9.5px] text-slate-500 leading-none">MERN/AI/Android</p>
            </div>

            <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold inline-flex items-center justify-center">2</span>
              <h3 className="text-[11px] font-bold text-slate-900 leading-tight">Build 45m</h3>
              <p className="text-[9.5px] text-slate-500 leading-none">Daily Task</p>
            </div>

            <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-200 space-y-1">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold inline-flex items-center justify-center">3</span>
              <h3 className="text-[11px] font-bold text-indigo-900 leading-tight flex items-center justify-center gap-0.5">
                <span>Proof</span>
                <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
              </h3>
              <p className="text-[9.5px] text-indigo-700 leading-none">Git + LinkedIn</p>
            </div>

          </div>
        </div>

        {/* SPECIALTY TRACKS */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-purple-600" />
              <span>Specialty Tracks</span>
            </h2>
            <span className="text-[10px] font-mono text-slate-500">4 Tracks</span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {TRACKS.map((track) => {
              const isSelected = activeTrackId === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => setActiveTrackId(track.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-300 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">{track.title}</h3>
                      <p className="text-[10.5px] text-slate-500 mt-0.5">{track.tagline}</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-100/60 px-2 py-0.5 rounded shrink-0 ml-2">
                      {track.enrolledCount} enrolled
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ALUMNI PLACEMENTS */}
        <div className="light-card rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Student Placements</span>
            </h2>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
              Tier 2/3 Grads
            </span>
          </div>

          <div className="space-y-2">
            {ALUMNI_SUCCESS_STORIES.map((alumni) => (
              <div key={alumni.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={alumni.avatar} alt={alumni.name} className="w-9 h-9 rounded-full object-cover border border-slate-300" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{alumni.name}</h3>
                    <p className="text-[10.5px] text-indigo-600 font-medium">{alumni.role}</p>
                  </div>
                </div>
                <span className="text-[10.5px] font-mono font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                  {alumni.stipend}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
