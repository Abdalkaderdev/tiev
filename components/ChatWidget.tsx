'use client';

import { useState } from 'react';
import { X, Bot, Sparkles, Send } from 'lucide-react';

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <div className="relative">
        {/* Chat Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="relative w-14 h-14 bg-purple-500 hover:bg-purple-400 text-white rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 z-50"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
          {!chatOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0a0a0a] rounded-full">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
            </span>
          )}
        </button>

        {/* Chat Box */}
        <div
          className={`absolute bottom-[calc(100%+16px)] right-0 w-[380px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden flex flex-col ${
            chatOpen ? 'visible opacity-100 translate-y-0 scale-100' : 'invisible opacity-0 translate-y-4 scale-95'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 animate-breathe">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0a0a0a] rounded-full" />
              </div>
              <div>
                <span className="block text-white text-sm font-medium">ORA™ Assistant</span>
                <span className="block text-[10px] text-emerald-400">Online • Ready to help</span>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent">
            <div className="text-center">
              <span className="text-[10px] text-white/30 bg-white/5 px-3 py-1 rounded-full">Today</span>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-purple-500/20 flex-shrink-0 flex items-center justify-center border border-purple-500/20">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
                <p className="text-white/90 text-sm leading-relaxed">
                  Hi there! I&apos;m ORA™, your AI spiritual guide. How can I help deepen your faith today?
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-purple-500/20 flex-shrink-0 flex items-center justify-center border border-purple-500/20">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-3">
                <p className="text-white/70 text-xs mb-2">Quick actions:</p>
                <div className="flex flex-wrap gap-2">
                  {['Daily verse', 'Prayer help', 'Bible study'].map((action, i) => (
                    <button key={i} className="px-3 py-1.5 text-[11px] bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 hover:bg-purple-500/20 transition-colors">
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/5 bg-black/30">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Ask ORA™ anything..."
                className="bg-transparent border-none focus:outline-none text-sm text-white w-full placeholder-neutral-500"
              />
              <button className="text-purple-400 hover:text-purple-300 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
