import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Deanna's AI assistant. How can I help you with your real estate needs today?", timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const streamResponse = await sendMessageToGemini(userMessage.text);
      
      let fullText = '';
      const modelMessageId = Date.now() + 1;
      
      // Initialize empty model message
      setMessages(prev => [...prev, { role: 'model', text: '', timestamp: modelMessageId }]);

      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse;
        const text = c.text || '';
        fullText += text;
        
        setMessages(prev => prev.map(msg => 
          msg.timestamp === modelMessageId 
            ? { ...msg, text: fullText }
            : msg
        ));
      }

    } catch (error) {
      console.error("Error communicating with AI:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I apologize, but I'm having trouble connecting right now. Please call Deanna directly at (956) 346-6244.", 
        timestamp: Date.now() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-slate-500 text-white' : 'bg-slate-900 text-white'
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 transform transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-full">
            <Sparkles size={18} className="text-yellow-400" />
          </div>
          <div>
            <h3 className="font-medium text-lg">Deanna's Assistant</h3>
            <p className="text-xs text-slate-400">Powered by Gemini AI</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-slate-900 text-white rounded-br-none'
                    : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1].role === 'user' && (
             <div className="flex justify-start">
               <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm rounded-bl-none flex items-center gap-2">
                 <Loader2 size={16} className="animate-spin text-slate-500" />
                 <span className="text-xs text-slate-400">Thinking...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about listings..."
              className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm transition-colors"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;