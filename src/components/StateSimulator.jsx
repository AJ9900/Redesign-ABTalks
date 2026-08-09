import React, { useState } from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { SlidersHorizontal, ChevronUp, ChevronDown } from 'lucide-react';

export const StateSimulator = () => {
  const { profileStateKey, switchProfileScenario } = useChallenge();
  const [collapsed, setCollapsed] = useState(false);

  const states = [
    { key: 'active', label: 'Day 12 Active', icon: '🔥', desc: '11-Day Streak' },
    { key: 'fresh', label: 'Fresh Start', icon: '🌱', desc: '0-Day Streak' },
    { key: 'missed', label: 'Missed Day', icon: '⚠️', desc: 'Broken Streak' },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-30 w-full max-w-[360px] px-3">
      <div className="bg-white/95 border border-slate-300 backdrop-blur-md rounded-2xl p-2 shadow-mobile-dock">
        
        {/* Simulator Title Header */}
        <div className="flex items-center justify-between px-2 pb-1 border-b border-slate-200 mb-1.5">
          <div className="flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-700">
              Reviewer State Switcher
            </span>
          </div>
          <button 
            onClick={() => setCollapsed(!collapsed)} 
            className="text-slate-500 hover:text-slate-900 p-0.5"
          >
            {collapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* State Toggle Buttons */}
        {!collapsed && (
          <div className="grid grid-cols-3 gap-1">
            {states.map((st) => {
              const isSelected = profileStateKey === st.key;
              return (
                <button
                  key={st.key}
                  onClick={() => switchProfileScenario(st.key)}
                  className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-center transition-all border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm scale-[1.02] font-bold'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  <span className="text-xs mb-0.5">{st.icon}</span>
                  <span className="text-[10.5px] leading-tight font-bold">{st.label}</span>
                  <span className={`text-[8.5px] font-mono ${isSelected ? 'text-indigo-100' : 'text-slate-400'}`}>{st.desc}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
