import React, { useState } from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { X, User, GraduationCap, Building2, Calendar, Check, Sparkles, LogIn, ExternalLink, ShieldCheck } from 'lucide-react';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.31 7.31 24 12 24z"/>
    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.18 0 9.99 0 12s.46 3.82 1.26 5.42l4.02-3.15z"/>
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-600">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-pink-600">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const LoginModal = ({ isOpen, onClose }) => {
  const { currentUser, loginUser, showToast } = useChallenge();

  const [activeOAuthProvider, setActiveOAuthProvider] = useState(null);

  const [name, setName] = useState(currentUser.name || '');
  const [college, setCollege] = useState(currentUser.college || '');
  const [department, setDepartment] = useState(currentUser.department || 'Computer Science & Engineering');
  const [year, setYear] = useState(currentUser.year || '3rd Year, CSE');
  const [githubUsername, setGithubUsername] = useState(currentUser.githubUsername || '');

  if (!isOpen) return null;

  // Interactive OAuth Accounts list
  const oauthAccounts = {
    google: [
      { name: 'Student Developer', email: 'student.dev@gmail.com', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' },
      { name: 'Alex Chen', email: 'alex.chen.cse@gmail.com', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
    ],
    github: [
      { name: 'akhilesh-gautam', email: 'akhilesh@github.com', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
      { name: 'ajay-chaudhary', email: 'ajay.chaudhary@github.com', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    ],
    linkedin: [
      { name: 'Priya Sharma (LinkedIn Profile)', email: 'priya.sharma@linkedin.com', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
    ],
    instagram: [
      { name: 'rohan_kumar_insta', email: 'rohan.kumar@insta.com', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
    ]
  };

  const handleSelectOAuthAccount = (acc, provider) => {
    loginUser({
      name: acc.name,
      college: 'ABES Engineering College, Ghaziabad',
      department: 'Computer Science & Engineering (CSE)',
      year: '3rd Year, CSE',
      authProvider: provider,
      githubUsername: `${acc.name.toLowerCase().replace(/\s+/g, '-')}-dev`
    });

    setActiveOAuthProvider(null);
    showToast(`🎉 Signed in successfully as ${acc.name} via ${provider.toUpperCase()}!`);
    onClose();
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !college.trim()) {
      showToast("Please enter your name and college name!", "error");
      return;
    }

    loginUser({
      name,
      college,
      department,
      year,
      authProvider: 'custom',
      githubUsername: githubUsername || `${name.toLowerCase().replace(/\s+/g, '-')}-dev`
    });

    showToast(`🎉 Welcome ${name}! Your profile has been updated.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold leading-tight">Student Sign In & Details</h3>
              <p className="text-[10.5px] text-indigo-100 font-mono">Customize profile or Login via OAuth</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 space-y-4 max-h-[78vh] overflow-y-auto">
          
          {/* INTERACTIVE OAUTH POPUP SIMULATION IF OPEN */}
          {activeOAuthProvider ? (
            <div className="p-3 bg-indigo-50/90 border border-indigo-200 rounded-xl space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center justify-between border-b border-indigo-200 pb-2">
                <span className="text-xs font-extrabold text-indigo-900 flex items-center gap-1.5 capitalize">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>Choose Account ({activeOAuthProvider})</span>
                </span>
                <button
                  onClick={() => setActiveOAuthProvider(null)}
                  className="text-[10px] font-mono text-indigo-600 underline font-bold"
                >
                  Cancel
                </button>
              </div>

              <div className="space-y-1.5">
                {(oauthAccounts[activeOAuthProvider] || []).map((acc, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOAuthAccount(acc, activeOAuthProvider)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-left transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <img src={acc.avatar} alt={acc.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">{acc.name}</h4>
                        <p className="text-[10px] text-slate-500 font-mono">{acc.email}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded">
                      Sign In
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* 1-Tap Social Sign-In Grid */
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                1-Tap Social Sign In (Click to Authenticate)
              </label>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveOAuthProvider('google')}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-xs font-semibold text-slate-800 transition-all shadow-xs"
                >
                  <GoogleIcon />
                  <span>Google</span>
                </button>

                <button
                  onClick={() => setActiveOAuthProvider('github')}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold transition-all shadow-xs"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </button>

                <button
                  onClick={() => setActiveOAuthProvider('linkedin')}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 hover:bg-blue-100 text-xs font-semibold transition-all shadow-xs"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </button>

                <button
                  onClick={() => setActiveOAuthProvider('instagram')}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-pink-50 border border-pink-200 text-pink-900 hover:bg-pink-100 text-xs font-semibold transition-all shadow-xs"
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 text-[10.5px] font-mono text-slate-400">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span>OR ENTER CUSTOM DETAILS</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* Custom Student Form */}
          <form onSubmit={handleCustomSubmit} className="space-y-2.5">
            <div className="space-y-0.5">
              <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <User className="w-3 h-3 text-indigo-600" /> Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Student Developer"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="space-y-0.5">
              <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <Building2 className="w-3 h-3 text-indigo-600" /> College Name *
              </label>
              <input
                type="text"
                required
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="e.g. Engineering College"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-0.5">
                <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                  <GraduationCap className="w-3 h-3 text-indigo-600" /> Branch / Dept
                </label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="Computer Science (CSE)"
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-0.5">
                <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-indigo-600" /> Year
                </label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="3rd Year, CSE"
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-0.5">
              <label className="text-[11px] font-semibold text-slate-700">GitHub Username</label>
              <input
                type="text"
                value={githubUsername}
                onChange={(e) => setGithubUsername(e.target.value)}
                placeholder="e.g. student-dev"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 font-mono focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md shadow-indigo-600/20 transition-all mt-2"
            >
              <Check className="w-4 h-4" />
              <span>Save & Update Dashboard Profile</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
