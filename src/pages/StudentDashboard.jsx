import React from 'react';
import { Link } from 'react-router-dom';
import { useChallenge } from '../context/ChallengeContext';
import { TRACKS, ROADMAP_60_DAYS_PILLARS } from '../data/mockChallengeData';
import { FriendsCircle } from '../components/FriendsCircle';
import { Flame, AlertTriangle, ShieldAlert, Award, ArrowRight, Calendar, Sparkles, Clock, Zap, Check, GitCommit, GraduationCap, Edit3, Filter } from 'lucide-react';

export const StudentDashboard = () => {
  const { 
    currentUser, 
    daysList, 
    day12Spec, 
    day12Submitted, 
    useStreakFreeze,
    setIsLoginModalOpen,
    selectedPillarId,
    setSelectedPillarId
  } = useChallenge();

  const totalDays = 60;
  const completedCount = currentUser.completedDaysCount;
  const completionPercentage = Math.round((completedCount / totalDays) * 100);

  // Filter 60 days list according to selected pillar
  const filteredDaysList = selectedPillarId === "all" 
    ? daysList 
    : daysList.filter(d => d.pillarId === selectedPillarId);

  const selectedPillarObj = ROADMAP_60_DAYS_PILLARS.find(p => p.id === selectedPillarId) || ROADMAP_60_DAYS_PILLARS[0];

  return (
    <div className="min-h-screen pb-28 pt-2">
      <div className="max-w-md mx-auto px-4 space-y-4">
        
        {/* DYNAMIC STUDENT PROFILE HEADER */}
        <div className="light-card rounded-2xl p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-11 h-11 rounded-xl object-cover border border-slate-200"
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                  <Check className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-sm font-extrabold text-slate-900 leading-tight flex items-center gap-1.5">
                  <span>{currentUser.name}</span>
                  {currentUser.authProvider && (
                    <span className="text-[9px] uppercase font-mono text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.2 rounded font-bold">
                      {currentUser.authProvider}
                    </span>
                  )}
                </h1>
                <p className="text-[11px] text-slate-600 font-medium flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>{currentUser.college}</span>
                </p>
                <p className="text-[10px] text-slate-400 font-mono">{currentUser.department || 'Computer Science (CSE)'}</p>
              </div>
            </div>

            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="text-[10.5px] font-mono text-indigo-600 hover:text-indigo-700 font-bold bg-indigo-50 px-2 py-1 rounded-lg border border-indigo-200 shrink-0 flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>

          {/* CSE ESSENTIALS METRICS BAR */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900">
              <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center font-bold text-amber-700 shrink-0">
                ⚡
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800">LeetCode Metrics</div>
                <div className="text-xs font-black font-mono text-slate-900">
                  {currentUser.leetcodeStats?.solved || 142} Solved <span className="text-[10px] text-amber-700 font-bold">({currentUser.leetcodeStats?.streak || 45}d streak)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <GitCommit className="w-4 h-4 text-emerald-700" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">GitHub Activity</div>
                <div className="text-xs font-black font-mono text-slate-900">
                  {currentUser.githubCommitsThisMonth || 64} Commits <span className="text-[10px] text-emerald-700 font-bold">(This Month)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REAL-WORLD EDGE CASE BANNERS */}
        {currentUser.status === "MISSED_DAY" && (
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-extrabold text-amber-900">Streak Alert: Day 8 Missed Yesterday</h3>
                <p className="text-[11px] text-amber-800 leading-snug mt-0.5">
                  Semester exams happen! Use your 1-click Streak Freeze to protect your momentum.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-amber-200">
              <span className="text-[10px] text-amber-800 font-mono flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> 1 Freeze Available
              </span>
              <button
                onClick={useStreakFreeze}
                className="py-1 px-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-sm transition-all flex items-center gap-1"
              >
                <Flame className="w-3.5 h-3.5 fill-white" />
                <span>Use Streak Freeze</span>
              </button>
            </div>
          </div>
        )}

        {currentUser.status === "FRESH_START" && (
          <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <h3 className="text-xs font-extrabold text-indigo-900">Welcome {currentUser.name}!</h3>
            </div>
            <p className="text-[11px] text-indigo-800 leading-relaxed">
              Start Day 1 tonight! Build for 45 minutes and post your proof of work to lock your streak.
            </p>
          </div>
        )}

        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-3 gap-2">
          <div className="light-card rounded-xl p-2.5 text-center space-y-0.5">
            <div className="flex items-center justify-center gap-1 text-amber-600">
              <Flame className="w-3.5 h-3.5 fill-amber-500" />
              <span className="text-base font-black font-mono">{currentUser.streak}</span>
            </div>
            <span className="text-[9.5px] text-slate-500 uppercase font-bold tracking-wider block">ABTalks Streak</span>
          </div>

          <div className="light-card rounded-xl p-2.5 text-center space-y-0.5">
            <div className="text-base font-black font-mono text-indigo-600">
              {completionPercentage}%
            </div>
            <span className="text-[9.5px] text-slate-500 uppercase font-bold tracking-wider block">{completedCount}/60 Days</span>
          </div>

          <div className="light-card rounded-xl p-2.5 text-center space-y-0.5">
            <div className="text-base font-black font-mono text-emerald-600">
              {currentUser.proofOfWorkCount}
            </div>
            <span className="text-[9.5px] text-slate-500 uppercase font-bold tracking-wider block">Proof Shipped</span>
          </div>
        </div>

        {/* TODAY'S TASK CARD (DAY 12) */}
        <div className="light-card rounded-2xl p-4 space-y-2.5 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center font-mono">
                12
              </span>
              <div>
                <span className="text-[9.5px] font-mono text-indigo-600 font-bold uppercase tracking-wider block">Today's Challenge Task</span>
                <h2 className="text-xs font-extrabold text-slate-900 leading-snug">{day12Spec.title}</h2>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 py-0.5 border-y border-slate-100">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-indigo-600" /> {day12Spec.estTimeMinutes} Mins
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-500" /> +{day12Spec.points} Pts
            </span>
          </div>

          <Link
            to="/day/12"
            className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition-all shadow-sm ${
              day12Submitted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            <span>{day12Submitted ? '✓ Day 12 Verified (View Task)' : 'Open Challenge Day 12'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* FRIENDS NETWORK CIRCLE */}
        <FriendsCircle />

        {/* 60-DAY PILLAR STREAK FILTER GRID */}
        <div className="light-card rounded-2xl p-3.5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-indigo-600" />
              <span>Module Streak Filters</span>
            </h2>
            <span className="text-[10px] font-mono text-slate-500 font-bold">
              Showing: {selectedPillarObj.focus}
            </span>
          </div>

          {/* 10 Core Pillar Filter Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {ROADMAP_60_DAYS_PILLARS.map((p) => {
              const isSelected = selectedPillarId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPillarId(p.id)}
                  className={`whitespace-nowrap px-2.5 py-1 rounded-xl font-sans text-[11px] border transition-all shrink-0 ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-700 font-extrabold shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="font-mono text-[9.5px] opacity-80 mr-1">Days {p.range}</span>
                  <span>{p.focus.split('/')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Filtered Days Streak Grid */}
          <div className="space-y-1.5 pt-1 border-t border-slate-100">
            <div className="flex justify-between items-center text-[10.5px] font-mono text-slate-500">
              <span>Module: <strong className="text-slate-900">{selectedPillarObj.focus}</strong></span>
              <span>{filteredDaysList.length} Days in Module</span>
            </div>

            <div className="grid grid-cols-5 gap-1.5">
              {filteredDaysList.map((d) => {
                let cellClass = "bg-slate-100 text-slate-600 border-slate-200";
                if (d.status === "COMPLETED") {
                  cellClass = "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold";
                } else if (d.status === "ACTIVE") {
                  cellClass = "bg-indigo-600 text-white border-indigo-700 font-extrabold shadow-sm";
                } else if (d.status === "MISSED") {
                  cellClass = "bg-amber-100 text-amber-800 border-amber-300 font-bold";
                }

                return (
                  <Link
                    key={d.day}
                    to={d.day === 12 ? "/day/12" : "#"}
                    title={`Day ${d.day}: ${d.title} (${d.pillar})`}
                    className={`p-2 rounded-xl text-center border transition-all hover:scale-105 ${cellClass}`}
                  >
                    <div className="text-xs font-mono font-black">Day {d.day}</div>
                    <div className="text-[9px] font-sans truncate opacity-90">{d.status}</div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
