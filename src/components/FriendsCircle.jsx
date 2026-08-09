import React, { useState } from 'react';
import { useChallenge } from '../context/ChallengeContext';
import { Users, GitCommit, Flame, Heart, Sparkles, Plus, Trash2, X, Check, Code2 } from 'lucide-react';

export const FriendsCircle = () => {
  const { friendsList, addFriend, removeFriend } = useChallenge();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Friend Form inputs
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [leetcodeSolved, setLeetcodeSolved] = useState('85');

  const [hypedFriendIds, setHypedFriendIds] = useState([]);

  const handleHype = (id) => {
    if (hypedFriendIds.includes(id)) return;
    setHypedFriendIds(prev => [...prev, id]);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    addFriend({
      name,
      college: college || 'ABES Engineering College',
      department: 'CSE Batchmate',
      leetcodeSolved: parseInt(leetcodeSolved) || 45
    });

    setName('');
    setCollege('');
    setIsAddModalOpen(false);
  };

  return (
    <div className="light-card rounded-2xl p-4 space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <div>
          <h2 className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
            <Users className="w-4 h-4 text-indigo-600" />
            <span>Dev Friends Network</span>
          </h2>
          <p className="text-[10px] text-slate-500 font-mono">CSE Batchmates • Activity Feed</p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-xs transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Friend</span>
        </button>
      </div>

      {/* ADD FRIEND FORM DRAWER */}
      {isAddModalOpen && (
        <form onSubmit={handleAddSubmit} className="p-3 bg-indigo-50/80 border border-indigo-200 rounded-xl space-y-2 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-indigo-200 pb-1.5">
            <span className="text-xs font-extrabold text-indigo-900 flex items-center gap-1">
              <Plus className="w-3.5 h-3.5 text-indigo-600" /> Add New CSE Batchmate
            </span>
            <button type="button" onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-700">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Friend's Full Name"
              className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
            />
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="College Name"
              className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1 text-[10.5px] font-mono text-slate-600">
              <span>LeetCode Solved:</span>
              <input
                type="number"
                value={leetcodeSolved}
                onChange={(e) => setLeetcodeSolved(e.target.value)}
                className="w-14 px-1.5 py-0.5 rounded bg-white border border-slate-200 text-xs text-slate-900 font-mono"
              />
            </div>
            <button
              type="submit"
              className="py-1 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-xs"
            >
              Add Friend
            </button>
          </div>
        </form>
      )}

      {/* Friends Cards List */}
      <div className="space-y-3">
        {friendsList.length === 0 ? (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <Users className="w-6 h-6 text-slate-400 mx-auto" />
            <p className="text-xs font-bold text-slate-700">No friends added yet!</p>
            <p className="text-[10.5px] text-slate-500 font-mono">Click "+ Add Friend" above to add your batchmates.</p>
          </div>
        ) : (
          friendsList.map((friend) => {
            const isHyped = hypedFriendIds.includes(friend.id);
            const currentHypeCount = friend.hypeCount + (isHyped ? 1 : 0);

            return (
              <div key={friend.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 hover:border-indigo-200 transition-all relative group">
                
                {/* Friend Info Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <img 
                        src={friend.avatar} 
                        alt={friend.name} 
                        className="w-9 h-9 rounded-xl object-cover border border-slate-300"
                      />
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></span>
                    </div>
                    <div>
                      <h3 className="text-xs font-extrabold text-slate-900 leading-tight">{friend.name}</h3>
                      <p className="text-[10px] text-slate-500 font-medium">{friend.department || friend.college}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Streaks Pill */}
                    <div className="flex items-center gap-1 text-[10.5px] font-mono">
                      <span className="flex items-center gap-0.5 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-700 font-bold">
                        <Flame className="w-3 h-3 fill-amber-500" /> {friend.streak}d
                      </span>
                      <span className="flex items-center gap-0.5 px-2 py-0.5 rounded bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold">
                        ⚡ {friend.leetcodeSolved} LC
                      </span>
                    </div>

                    {/* Remove Friend Button */}
                    <button
                      onClick={() => removeFriend(friend.id)}
                      title="Remove Friend from Dev Circle"
                      className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all opacity-80 hover:opacity-100"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* GitHub Commit Activity Stream */}
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-slate-700 font-semibold">
                      <GitCommit className="w-3 h-3 text-emerald-600" /> Latest GitHub Code
                    </span>
                    <span>{friend.lastCommitTime}</span>
                  </div>
                  <p className="font-mono text-slate-800 text-[10.5px] font-medium bg-slate-50 p-1.5 rounded border border-slate-150 truncate">
                    {friend.lastCommit}
                  </p>
                  <div className="text-[10px] font-mono text-indigo-600 hover:underline truncate">
                    {friend.githubRepo}
                  </div>
                </div>

                {/* Social Action Bar */}
                <div className="flex items-center justify-between pt-0.5 text-xs">
                  <button
                    onClick={() => handleHype(friend.id)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition-all border ${
                      isHyped
                        ? 'bg-rose-50 border-rose-200 text-rose-600'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-rose-300 hover:text-rose-600'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isHyped ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{currentHypeCount} Hype</span>
                  </button>

                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-indigo-500" /> Dev Network
                  </span>
                </div>

              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
