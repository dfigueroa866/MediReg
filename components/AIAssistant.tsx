
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      // Fix: Strictly follow Gemini API initialization guidelines by using process.env.API_KEY directly
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: 'Eres un asistente virtual de Clínica Vital. Tu objetivo es ayudar a los usuarios a entender qué tipo de especialista médico podrían necesitar basándote en sus síntomas descritos brevemente. Siempre aclara que no eres un médico real y que deben consultar a un profesional. Sé empático, profesional y conciso. Usa español.',
          temperature: 0.7,
        }
      });

      const assistantText = response.text || 'Lo siento, no pude procesar tu solicitud.';
      setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: 'Ocurrió un error al conectar con el asistente médico inteligente.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-border-color flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-bold">Asistente Vital AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-full p-1">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-text-secondary pt-10 px-4">
                <span className="material-symbols-outlined text-4xl mb-2 text-primary/30">health_and_safety</span>
                <p className="text-sm italic">"Hola, puedo ayudarte a identificar qué tipo de especialista podrías necesitar hoy."</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${m.role === 'user' ? 'bg-primary text-white' : 'bg-slate-100 text-text-main'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl px-4 py-2 text-sm flex gap-1">
                  <div className="size-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="size-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="size-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-border-color">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Describe tus síntomas..." 
                className="flex-1 border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-primary focus:border-primary"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-primary text-white rounded-xl p-2 hover:bg-primary-hover disabled:opacity-50 transition-colors"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`size-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-slate-200 text-text-main' : 'bg-primary text-white hover:scale-110 active:scale-95'}`}
      >
        <span className="material-symbols-outlined text-2xl">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>
    </div>
  );
};

export default AIAssistant;
