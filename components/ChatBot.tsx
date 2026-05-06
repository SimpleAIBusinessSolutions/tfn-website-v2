"use client";
import { useRef, useState } from 'react';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role:'assistant', text:'Hi 👋 Ask me about memberships, classes, nutrition or getting started.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const send = async () => {
    if (!input.trim() || loading) return;
    const next = [...messages, { role:'user', text: input }];
    setMessages(next);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = '48px';
    }
    setLoading(true);

    try {
  // ✅ GET SITE + PREVIEW MODE FROM URL
  const params = new URLSearchParams(window.location.search);
  const siteId = params.get("site");
  const preview = params.get("key") === "preview";

  if (!siteId) {
    setMessages(prev => [
      ...prev,
      { role: "assistant", text: "No site selected." }
    ]);
    return;
  }

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: next.map(m => ({
        role: m.role,
        content: m.text
      })),
      siteId,       // ✅ CRITICAL FIX
      preview       // ✅ allows draft vs published
    }),
  });

  const data = await res.json();

  setMessages(prev => [
    ...prev,
    {
      role: "assistant",
      text: data.reply || "Sorry, something went wrong.",
    },
  ]);
} catch {
  setMessages(prev => [
    ...prev,
    {
      role: "assistant",
      text: "Connection issue. Please try again.",
    },
  ]);
} finally {
  setLoading(false);
}
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} style={{position:'fixed',right:20,bottom:20,zIndex:9999,width:64,height:64,borderRadius:'50%',border:'none',background:'#F97316',color:'#fff',fontSize:28,cursor:'pointer',boxShadow:'0 10px 30px rgba(0,0,0,.3)'}}>💬</button>
      {open && (
        <div style={{position:'fixed',right:20,bottom:95,width:360,maxWidth:'calc(100vw - 40px)',background:'#111',border:'1px solid #333',borderRadius:20,padding:16,zIndex:9999}}>
          <h3 style={{marginTop:0}}>TFN AI Assistant</h3>
          <div style={{maxHeight:360,overflowY:'auto',marginBottom:12}}>
            {messages.map((m,i)=>(
              <div key={i} style={{margin:'8px 0',textAlign:m.role==='user'?'right':'left'}}>
                <span style={{display:'inline-block',padding:'10px 12px',borderRadius:14,background:m.role==='user'?'#6294AE':'#222',maxWidth:'85%',whiteSpace:'pre-wrap',overflowWrap:'break-word'}}>{m.text}</span>
              </div>
            ))}
            {loading && <div><span style={{display:'inline-block',padding:'10px 12px',borderRadius:14,background:'#222'}}>Typing...</span></div>}
          </div>
          <div style={{display:'flex',gap:8,alignItems:'flex-end'}}>
            <textarea
              value={input}
              onChange={(e)=>{
                setInput(e.target.value);
                const el = e.target;
                el.style.height = '48px';
                el.style.height = `${Math.min(el.scrollHeight,120)}px`;
              }}
              ref={textareaRef}
              onKeyDown={(e)=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(); } }}
              placeholder='Ask a question...'
              rows={1}
              className='chat-input'
              style={{flex:1,padding:12,borderRadius:12,border:'1px solid #333',background:'#0a0a0a',color:'#fff',resize:'none',minHeight:48,maxHeight:120,overflowY:'auto'}}
            />
            <button onClick={send} className='btn' style={{background:'#F97316'}}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}