import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useChallenge } from '../context/ChallengeContext';
import { Flame, Moon, Sun, LayoutDashboard, Home, Code2, Music, UserCheck, LogIn } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const { 
    currentUser, 
    lateNightMode, 
    setLateNightMode, 
    lofiPlaying, 
    setLofiPlaying,
    setIsLoginModalOpen 
  } = useChallenge();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/day/12', label: 'Day 12', icon: Code2 },
  ];

  return (
    <header className="sticky top-0 z-40 light-nav px-4 py-2 border-b border-slate-200">
      <div className="max-w-md mx-auto flex items-center justify-between">
        
        {/* Brand Logo & ABTalks 2.0 Tag */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <span className="font-black text-white text-xs tracking-tighter">AB</span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-slate-900 text-base tracking-tight">ABTalks</span>
              <span className="text-[10px] font-black tracking-wider px-1.5 py-0.2 bg-indigo-600 text-white rounded-md">2.0</span>
            </div>
            <p className="text-[9.5px] text-slate-500 font-mono -mt-0.5">Proof of Work</p>
          </div>
        </Link>

        {/* Action Controls & Profile Button */}
        <div className="flex items-center gap-1.5">
          
          {/* Social Sign-In / Edit Profile Button */}
          <button
            onClick={() => setIsLoginModalOpen(true)}
            title="Sign In or Edit Student Profile"
            className="flex items-center gap-1 px-2 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-all"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span className="text-[10.5px] truncate max-w-[70px] font-mono hidden sm:inline">
              {currentUser.name ? currentUser.name.split(' ')[0] : 'Sign In'}
            </span>
          </button>

          {/* Late-Night Warm Light Toggle */}
          <button
            onClick={() => setLateNightMode(!lateNightMode)}
            title="Toggle Eye-Comfort Filter"
            className={`p-1.5 rounded-xl border transition-all ${
              lateNightMode 
                ? 'bg-amber-100 text-amber-800 border-amber-300 font-bold'
                : 'bg-slate-100 text-slate-600 border-slate-200 hover:text-slate-900'
            }`}
          >
            {lateNightMode ? <Moon className="w-3.5 h-3.5 text-amber-600 fill-amber-600" /> : <Sun className="w-3.5 h-3.5" />}
          </button>

          {/* Lo-Fi Beats Companion Toggle */}
          <button
            onClick={() => setLofiPlaying(!lofiPlaying)}
            title="Toggle Ambient Focus Beats"
            className={`p-1.5 rounded-xl border transition-all flex items-center gap-1 text-xs ${
              lofiPlaying 
                ? 'bg-purple-100 text-purple-700 border-purple-300 font-bold shadow-sm'
                : 'bg-slate-100 text-slate-600 border-slate-200 hover:text-slate-900'
            }`}
          >
            <Music className={`w-3.5 h-3.5 ${lofiPlaying ? 'text-purple-600 animate-spin' : ''}`} />
          </button>

          {/* User Streak Pill */}
          <Link
            to="/dashboard"
            className={`flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-bold border transition-all ${
              currentUser.streak > 0 
                ? 'bg-amber-50 border-amber-300 text-amber-700 shadow-sm'
                : 'bg-slate-100 border-slate-200 text-slate-500'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${currentUser.streak > 0 ? 'text-amber-500 fill-amber-500 animate-bounce' : 'text-slate-400'}`} />
            <span className="font-mono text-xs">{currentUser.streak}d</span>
          </Link>
        </div>
      </div>

      {/* Mobile Screen Selector Tab Bar */}
      <nav className="max-w-md mx-auto mt-1.5 flex items-center justify-around bg-slate-100 rounded-xl p-1 border border-slate-200">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex-1 flex items-center justify-center gap-1 py-1 px-2 rounded-lg text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-white text-indigo-600 shadow-sm font-extrabold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
