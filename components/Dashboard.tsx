
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { KENYA_REGIONS, AQI_COLORS } from '../constants';
import { AQICategory } from '../types';

const mockData = [
  { time: '00:00', nairobi: 42, mombasa: 35, kisumu: 38 },
  { time: '04:00', nairobi: 65, mombasa: 48, kisumu: 45 },
  { time: '08:00', nairobi: 110, mombasa: 55, kisumu: 62 },
  { time: '12:00', nairobi: 95, mombasa: 60, kisumu: 75 },
  { time: '16:00', nairobi: 125, mombasa: 72, kisumu: 90 },
  { time: '20:00', nairobi: 88, mombasa: 50, kisumu: 55 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Real-time Ticker */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass p-4 rounded-xl border-l-4 border-green-500">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Status: Optimum</h3>
          <p className="text-2xl font-bold">Good</p>
          <div className="mt-2 text-[10px] text-green-400 flex items-center gap-1">
             <span className="font-bold">Eldoret</span> Current Index: 34
          </div>
        </div>
        <div className="glass p-4 rounded-xl border-l-4 border-yellow-500">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Status: Alert</h3>
          <p className="text-2xl font-bold">Moderate</p>
          <div className="mt-2 text-[10px] text-yellow-400 flex items-center gap-1">
             <span className="font-bold">Mombasa</span> Current Index: 62
          </div>
        </div>
        <div className="glass p-4 rounded-xl border-l-4 border-orange-500">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Status: Warning</h3>
          <p className="text-2xl font-bold">Unhealthy</p>
          <div className="mt-2 text-[10px] text-orange-400 flex items-center gap-1">
             <span className="font-bold">Nairobi</span> Current Index: 124
          </div>
        </div>
        <div className="glass p-4 rounded-xl border-l-4 border-red-500">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Status: High Risk</h3>
          <p className="text-2xl font-bold">Poor</p>
          <div className="mt-2 text-[10px] text-red-400 flex items-center gap-1">
             <span className="font-bold">Thika Rd</span> Current Index: 168
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-2xl p-6 border border-white/5 relative overflow-hidden">
          <div className="scanner-line absolute top-0 left-0 right-0 z-0 opacity-10"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                REGIONAL TREND ANALYSIS
              </h2>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Nairobi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-sm"></span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Mombasa</span>
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockData}>
                  <defs>
                    <linearGradient id="colorNairobi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorMombasa" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                  <XAxis dataKey="time" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                    itemStyle={{ fontSize: '12px' }}
                  />
                  <Area type="monotone" dataKey="nairobi" stroke="#3b82f6" fillOpacity={1} fill="url(#colorNairobi)" strokeWidth={2} />
                  <Area type="monotone" dataKey="mombasa" stroke="#10b981" fillOpacity={1} fill="url(#colorMombasa)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center relative min-h-[400px]">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 absolute top-6">Satellite Visualization</h2>
          
          {/* Simple Vector Kenya Map representation */}
          <div className="relative w-full aspect-square max-w-[280px]">
            <svg viewBox="0 0 100 120" className="w-full h-full fill-slate-800/50 stroke-slate-700">
               <path d="M40,10 L60,5 L85,20 L95,60 L80,90 L60,110 L40,115 L15,100 L5,80 L5,40 L15,20 Z" />
               {/* Hotspots */}
               <circle cx="45" cy="65" r="3" className="fill-orange-500 animate-ping" />
               <circle cx="45" cy="65" r="2" className="fill-orange-500 shadow-[0_0_8px_orange]" />
               <circle cx="80" cy="85" r="2" className="fill-green-500" />
               <circle cx="25" cy="65" r="2" className="fill-yellow-500" />
               <circle cx="48" cy="45" r="2" className="fill-green-500" />
            </svg>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-500/10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/10 rounded-full animate-pulse [animation-delay:-1s]"></div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 w-full">
            {KENYA_REGIONS.map(region => (
              <div key={region.id} className="bg-white/5 p-2 rounded-lg border border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold">{region.name}</p>
                <p className="text-sm font-bold text-slate-200">Active Sensors</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
