import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChallengeProvider, useChallenge } from './context/ChallengeContext';
import { Navbar } from './components/Navbar';
import { StateSimulator } from './components/StateSimulator';
import { AIChatbot } from './components/AIChatbot';
import { LoginModal } from './components/LoginModal';
import { LandingPage } from './pages/LandingPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { ChallengeDay } from './pages/ChallengeDay';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const ToastNotification = () => {
  const { toast } = useChallenge();
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />,
    info: <Info className="w-4 h-4 text-indigo-600 shrink-0" />
  };

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs px-2 animate-in fade-in slide-in-from-top-4 duration-200">
      <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-semibold shadow-xl">
        {icons[toast.type] || icons.info}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};

const ModalWrapper = () => {
  const { isLoginModalOpen, setIsLoginModalOpen } = useChallenge();
  return (
    <LoginModal
      isOpen={isLoginModalOpen}
      onClose={() => setIsLoginModalOpen(false)}
    />
  );
};

export function App() {
  return (
    <ChallengeProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans relative selection:bg-indigo-500 selection:text-white">
          <ToastNotification />
          <Navbar />
          <ModalWrapper />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<StudentDashboard />} />
              <Route path="/day/12" element={<ChallengeDay />} />
            </Routes>
          </main>

          <AIChatbot />
          <StateSimulator />
        </div>
      </Router>
    </ChallengeProvider>
  );
}

export default App;
