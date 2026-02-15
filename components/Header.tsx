
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">VISION <span className="text-blue-400 font-light">AI</span></h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">Lewis Industries Environmental System</p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium text-slate-300">SYSTEMS ONLINE</span>
        </div>
        <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
          <span className="text-xs mono text-blue-400">KENYA_V4.2.1</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
