
import React, { useState, useRef, useEffect } from 'react';
import { VisionService } from '../services/gemini';
import { Message } from '../types';

const ChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Awaiting input. I am Vision, your environmental intelligence coordinator. How can I assist with Kenya's air quality data today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const visionService = useRef(new VisionService());

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await visionService.current.sendMessage(input);
      const assistantMessage: Message = {
        role: 'assistant',
        content: response.text,
        timestamp: new Date(),
        sources: response.sources
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Error communicating with Lewis Industries mainframe. Please verify connection and try again.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full glass rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-slate-800/50 p-4 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-sm font-bold flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></div>
          DIRECT INTERFACE
        </h2>
        <span className="text-[10px] text-slate-500 mono uppercase tracking-widest">Encrypted Link Active</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-xl p-4 ${
              msg.role === 'user' 
                ? 'bg-blue-600/20 border border-blue-500/30 text-blue-50' 
                : 'bg-slate-800/40 border border-white/5 text-slate-200'
            }`}>
              <div className="flex items-center gap-2 mb-2 opacity-50">
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  {msg.role === 'user' ? 'Local User' : 'Vision Intelligence'}
                </span>
                <span className="text-[10px] mono">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Data Verification Sources:</span>
                  <div className="flex flex-wrap gap-2">
                    {msg.sources.map((s, idx) => (
                      <a 
                        key={idx} 
                        href={s.startsWith('http') ? s : '#'} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[10px] bg-white/5 hover:bg-white/10 px-2 py-1 rounded border border-white/5 text-blue-400 transition-colors"
                      >
                        {s.length > 30 ? s.substring(0, 30) + '...' : s}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800/40 border border-white/5 rounded-xl p-4 flex gap-2 items-center">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
              <span className="text-[10px] font-bold text-blue-400 ml-2 uppercase">Synthesizing Environmental Data...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-slate-900/50 border-t border-white/10">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Inquire about location (e.g., 'Current AQI in Kisumu')..."
            className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-slate-100 placeholder:text-slate-600"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:bg-slate-800 text-white px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPanel;
