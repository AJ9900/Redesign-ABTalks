import React, { createContext, useContext, useState } from 'react';
import { MOCK_USER_PROFILES, GENERATE_60_DAYS, DAY_12_SPEC, INITIAL_FRIENDS_NETWORK } from '../data/mockChallengeData';
import confetti from 'canvas-confetti';

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [profileStateKey, setProfileStateKey] = useState("active");
  const [lateNightMode, setLateNightMode] = useState(false);
  const [lofiPlaying, setLofiPlaying] = useState(false);
  const [activeTrackId, setActiveTrackId] = useState("fullstack-mern");

  // Dynamic logged in profile state
  const [customProfile, setCustomProfile] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Dynamic Friends List (Add & Remove Friends)
  const [friendsList, setFriendsList] = useState(INITIAL_FRIENDS_NETWORK);

  // Selected Pillar Filter for 60-Day Streak Grid
  const [selectedPillarId, setSelectedPillarId] = useState("all");

  // Day 12 Submission local state
  const [day12Submitted, setDay12Submitted] = useState(false);
  const [day12SubmissionData, setDay12SubmissionData] = useState(null);

  // Active Toast notification
  const [toast, setToast] = useState(null);

  const baseProfile = MOCK_USER_PROFILES[profileStateKey];
  const [customUserOverrides, setCustomUserOverrides] = useState({});

  const currentUser = {
    ...baseProfile,
    ...(customProfile || {}),
    ...(customUserOverrides[profileStateKey] || {})
  };

  const daysList = GENERATE_60_DAYS(
    currentUser.currentDay,
    currentUser.completedDaysCount,
    currentUser.status
  );

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const switchProfileScenario = (key) => {
    setProfileStateKey(key);
    setDay12Submitted(false);
    setDay12SubmissionData(null);
    showToast(`Switched scenario to: ${key.toUpperCase()} STATE`, "info");
  };

  const loginUser = (profileData) => {
    setCustomProfile(prev => ({
      ...prev,
      ...profileData,
      avatar: profileData.authProvider === 'google' 
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' 
        : profileData.authProvider === 'github'
        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
        : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }));
  };

  // Add Friend to Dev Network
  const addFriend = (newFriend) => {
    const friendObj = {
      id: `f_${Date.now()}`,
      name: newFriend.name,
      college: newFriend.college || 'Engineering College',
      department: newFriend.department || 'CSE Batchmate',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      streak: 1,
      leetcodeSolved: newFriend.leetcodeSolved || 25,
      leetcodeStreak: 5,
      status: 'Just Connected',
      lastCommit: `init(project): start learning streak on ABTalks 2.0`,
      lastCommitTime: 'Just now',
      githubRepo: `github.com/${newFriend.name.toLowerCase().replace(/\s+/g, '')}/proof-repo`,
      proofSnippet: `Connected with my CSE dev network on ABTalks 2.0! Ready to build daily. 🚀`,
      hypeCount: 1
    };

    setFriendsList(prev => [friendObj, ...prev]);
    showToast(`🎉 Added ${newFriend.name} to your Dev Circle!`);
  };

  // Remove Friend from Dev Network
  const removeFriend = (friendId) => {
    setFriendsList(prev => prev.filter(f => f.id !== friendId));
    showToast(`Removed friend from your Dev Circle.`, "info");
  };

  const useStreakFreeze = () => {
    if (currentUser.streakFreezeAvailable > 0 && currentUser.status === "MISSED_DAY") {
      setCustomUserOverrides(prev => ({
        ...prev,
        [profileStateKey]: {
          ...currentUser,
          streak: currentUser.longestStreak || 7,
          status: "ON_TRACK",
          streakFreezeAvailable: 0,
          completedDaysCount: 8
        }
      }));
      triggerConfetti();
      showToast("🔥 Streak Freeze Used! Day 8 Restored & Streak Recovered!", "success");
    }
  };

  const submitDay12Proof = ({ githubUrl, commitHash, linkedinUrl, leetcodeUrl }) => {
    setDay12Submitted(true);
    setDay12SubmissionData({
      githubUrl,
      commitHash,
      linkedinUrl,
      leetcodeUrl,
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    const newStreak = currentUser.streak + 1;
    const newRecruiterScore = Math.min(100, currentUser.recruiterScore + 4);

    setCustomUserOverrides(prev => ({
      ...prev,
      [profileStateKey]: {
        ...currentUser,
        streak: newStreak,
        completedDaysCount: Math.max(currentUser.completedDaysCount, 12),
        recruiterScore: newRecruiterScore,
        proofOfWorkCount: currentUser.proofOfWorkCount + 1,
        status: "ON_TRACK"
      }
    }));

    triggerConfetti();
    showToast("🎉 Proof of Work Shipped! Day 12 Verified. Streak +1!", "success");
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <ChallengeContext.Provider value={{
      profileStateKey,
      switchProfileScenario,
      currentUser,
      loginUser,
      isLoginModalOpen,
      setIsLoginModalOpen,
      friendsList,
      addFriend,
      removeFriend,
      selectedPillarId,
      setSelectedPillarId,
      daysList,
      day12Spec: DAY_12_SPEC,
      day12Submitted,
      day12SubmissionData,
      submitDay12Proof,
      useStreakFreeze,
      lateNightMode,
      setLateNightMode,
      lofiPlaying,
      setLofiPlaying,
      activeTrackId,
      setActiveTrackId,
      toast,
      showToast
    }}>
      <div className={lateNightMode ? "late-night-mode transition-all duration-300" : ""}>
        {children}
      </div>
    </ChallengeContext.Provider>
  );
};

export const useChallenge = () => useContext(ChallengeContext);
