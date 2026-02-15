
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ChatPanel from './components/ChatPanel';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      <Header />
      
      <main className="flex-1 max-w-[1600px] mx-auto w-full p-4 md:p-8 grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column: Data and Analytics */}
        <div className="xl:col-span-7 space-y-8 order-2 xl:order-1">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
              ENVIRONMENTAL COMMAND CENTER
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Real-time spatial interpolation of Kenyan air quality parameters. Data sourced from physical sensors 
              and meteorological inference models optimized for the East African Rift region.
            </p>
          </div>
          
          <Dashboard />

          <div className="glass rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Vision Operational Protocols</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                   <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 mb-1 uppercase">Live Ingestion</h4>
                  <p className="text-slate-500 leading-relaxed">Direct telemetry from WAQI and Kenya Meteorological Department stations.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center shrink-0">
                   <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.487V5.487a2 2 0 011.132-1.803l6-3a2 2 0 011.736 0l6 3A2 2 0 0119 5.487v10.001a2 2 0 01-1.132 1.803L12.42 20a2 2 0 01-1.839 0L9 20z" />
                   </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 mb-1 uppercase">Spatial Inference</h4>
                  <p className="text-slate-500 leading-relaxed">Automatic virtual sensor generation for regions >10km from physical hardware.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Interface */}
        <div className="xl:col-span-5 h-[calc(100vh-140px)] sticky top-28 order-1 xl:order-2">
           <ChatPanel />
        </div>
      </main>

      <footer className="py-6 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase font-bold tracking-widest bg-slate-950/50">
        <div className="flex gap-8">
          <span>&copy; 2024 Lewis Industries</span>
          <span>Security Protocol: Encrypted-AES</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          VISION AI V4.2 - Kenya Regional Node
        </div>
      </footer>
    </div>
  );
};

export default App;
