"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./scroll-reveal";

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat() as any;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-16 w-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95",
          isOpen 
            ? "bg-slate-900 text-white rotate-90" 
            : "bg-blue-600 text-white hover:bg-blue-500"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-400 rounded-full animate-ping"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          {/* Header */}
          <div className="bg-slate-950 p-6 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-medium text-sm">Polaris Assistant</h3>
                <div className="flex items-center space-x-1">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Systems Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/50"
          >
            {messages.length === 0 && (
              <div className="text-center py-10">
                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-slate-950 font-heading font-medium mb-2">Institutional Support</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[200px] mx-auto">
                  How can I assist you with information regarding Polaris VCC today?
                </p>
              </div>
            )}

            {messages.map((m: any) => (
              <div 
                key={m.id} 
                className={cn(
                  "flex items-start gap-3",
                  m.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div className={cn(
                  "h-8 w-8 rounded-lg flex items-center justify-center shrink-0",
                  m.role === "user" ? "bg-slate-200 text-slate-600" : "bg-blue-600 text-white"
                )}>
                  {m.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={cn(
                  "p-4 rounded-2xl text-sm leading-relaxed max-w-[80%]",
                  m.role === "user" 
                    ? "bg-slate-950 text-white rounded-tr-none" 
                    : "bg-white border border-slate-100 text-slate-700 shadow-sm rounded-tl-none"
                )}>
                  {m.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="p-4 rounded-xl bg-red-50 text-red-600 text-[10px] text-center">
                An error occurred. Please ensure the API configuration is correct.
              </div>
            )}
          </div>

          {/* Input */}
          <form 
            onSubmit={handleSubmit}
            className="p-6 bg-white border-t border-slate-100 flex items-center gap-3"
          >
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Inquire about Polaris..."
              className="flex-grow bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
            />
            <button
              type="submit"
              disabled={isLoading || !input}
              className="h-11 w-11 bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
