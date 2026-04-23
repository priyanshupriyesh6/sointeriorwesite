/* ================================================================
   SO Interiors — Dialogflow ES Chatbot Integration
   ================================================================
   SETUP INSTRUCTIONS:
   1. Go to dialogflow.cloud.google.com
   2. Create your agent (see the setup guide)
   3. Go to Integrations → Dialogflow Messenger → Enable
   4. Copy your agent-id from the embed code shown
   5. Replace 'YOUR-AGENT-ID-HERE' below with your actual agent-id
   ================================================================ */

(function () {
  'use strict';

  // ── CONFIGURATION — EDIT THIS ──────────────────────────────────
  const DIALOGFLOW_AGENT_ID = '64f8729d-365b-43b0-8a7b-adab695768b8';
  const CHAT_TITLE          = 'ALLIE';
  const LANGUAGE_CODE       = 'en';
  const WELCOME_INTENT      = 'WELCOME';
  // ───────────────────────────────────────────────────────────────

  // Don't inject if agent ID hasn't been configured yet
  if (!DIALOGFLOW_AGENT_ID || DIALOGFLOW_AGENT_ID === 'YOUR-AGENT-ID-HERE') {
    console.warn(
      '%c[SO Interiors Chatbot] Agent ID not configured. ' +
      'Open frontend/chatbot.js and replace YOUR-AGENT-ID-HERE with your Dialogflow agent ID.',
      'color: #c9a96e; font-weight: bold;'
    );
    showPlaceholderWidget();
    return;
  }

  injectDialogflowMessenger();

  // ── Inject Google's Dialogflow Messenger widget ─────────────────
  function injectDialogflowMessenger() {
    // 1. Stylesheet
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.css?v=1';
    document.head.appendChild(link);

    // 2. Messenger element
    const messenger = document.createElement('df-messenger');
    messenger.setAttribute('intent',        WELCOME_INTENT);
    messenger.setAttribute('chat-title',    CHAT_TITLE);
    messenger.setAttribute('agent-id',      DIALOGFLOW_AGENT_ID);
    messenger.setAttribute('language-code', LANGUAGE_CODE);
    messenger.setAttribute('expand',        'false');
    document.body.appendChild(messenger);

    // 3. Script (async)
    const script = document.createElement('script');
    script.src   = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    // 4. Decorative elements
    addBadge();
    addPulse();

    // 5. Deep Style Injection for shadow DOM overrides
    const interval = setInterval(() => {
      const dfMessenger = document.querySelector('df-messenger');
      if (dfMessenger && dfMessenger.shadowRoot) {
        const dfChat = dfMessenger.shadowRoot.querySelector('df-messenger-chat');
        if (dfChat && dfChat.shadowRoot) {
          const dfUserInput = dfChat.shadowRoot.querySelector('df-messenger-user-input');
          const dfMessageList = dfChat.shadowRoot.querySelector('df-message-list');
          if (dfUserInput && dfUserInput.shadowRoot && dfMessageList && dfMessageList.shadowRoot) {
            
            // Fix input wrapper white background
            if (!dfUserInput.shadowRoot.querySelector('#so-custom-input-style')) {
              const style1 = document.createElement('style');
              style1.id = 'so-custom-input-style';
              style1.textContent = 'div.input-box-wrapper, .input-box-wrapper.valid { background-color: #000000 !important; background: #000000 !important; border-top: 1px solid rgba(201, 169, 110, 0.15) !important; padding: 5px !important; } input { background-color: #000000 !important; color: #ffffff !important; }';
              dfUserInput.shadowRoot.appendChild(style1);
            }
            
            // Fix chat wrapper height
            if (!dfChat.shadowRoot.querySelector('#so-custom-chat-style')) {
              const style2 = document.createElement('style');
              style2.id = 'so-custom-chat-style';
              style2.textContent = '.chat-wrapper { height: 480px !important; max-height: 75vh !important; bottom: 85px !important; background-color: #000000 !important; } df-message-list { background-color: #000000 !important; }';
              dfChat.shadowRoot.appendChild(style2);
            }

            // Fix message list scrollbar
            if (!dfMessageList.shadowRoot.querySelector('#so-custom-scroll-style')) {
              const style3 = document.createElement('style');
              style3.id = 'so-custom-scroll-style';
              style3.textContent = '#messageList::-webkit-scrollbar { width: 6px; } #messageList::-webkit-scrollbar-track { background: #000000 !important; } #messageList::-webkit-scrollbar-thumb { background: #1a1a24 !important; border-radius: 10px; } #messageList::-webkit-scrollbar-thumb:hover { background: #c9a96e !important; }';
              dfMessageList.shadowRoot.appendChild(style3);
            }
          }
        }
      }
    }, 100);
  }

  // ── "Ask us anything" tooltip badge ─────────────────────────────
  function addBadge() {
    const badge = document.createElement('div');
    badge.className   = 'chatbot-badge';
    badge.textContent = 'Ask us anything ✦';
    document.body.appendChild(badge);

    // Remove after fade animation ends (8s delay + 0.4s fade = 8.4s)
    setTimeout(() => badge.remove(), 8500);
  }

  // ── Pulse ring animation around chat button ──────────────────────
  function addPulse() {
    const pulse = document.createElement('div');
    pulse.className = 'chatbot-pulse';
    document.body.appendChild(pulse);

    // 3 pulses × 2s + 1s delay = 7s total
    setTimeout(() => pulse.remove(), 7500);
  }

  // ── Placeholder widget shown when agent ID is not yet set ─────────
  function showPlaceholderWidget() {
    const el = document.createElement('div');
    el.id = 'chatbot-placeholder';
    el.innerHTML = `
      <div class="chatbot-ph-bubble" id="chatbotPhBubble" title="Configure Dialogflow agent to activate">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        <span class="chatbot-ph-dot"></span>
      </div>
      <div class="chatbot-ph-panel" id="chatbotPhPanel" style="display:none;">
        <div class="chatbot-ph-header">
          <span>SO Interiors Assistant</span>
          <button id="chatbotPhClose">✕</button>
        </div>
        <div class="chatbot-ph-body">
          <div class="chatbot-ph-msg bot">
            👋 Hi! I'm the SO Interiors assistant.<br><br>
            <strong>⚙️ Setup required:</strong> The chatbot is not yet connected to Dialogflow. 
            Follow the setup guide to activate me!
          </div>
          <div class="chatbot-ph-msg bot" style="margin-top:10px;">
            In the meantime, you can reach us at:<br>
            📞 <a href="tel:+919599317145">+91 95993 17145</a><br>
            📧 <a href="mailto:contact@sointeriors.in">contact@sointeriors.in</a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(el);

    addPlaceholderStyles();

    const bubble = document.getElementById('chatbotPhBubble');
    const panel  = document.getElementById('chatbotPhPanel');
    const close  = document.getElementById('chatbotPhClose');

    bubble.addEventListener('click', () => {
      panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
    });
    close.addEventListener('click', () => {
      panel.style.display = 'none';
    });
  }

  function addPlaceholderStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #chatbot-placeholder { position:fixed; bottom:20px; right:20px; z-index:9999; font-family:inherit; }
      .chatbot-ph-bubble {
        width:56px; height:56px; border-radius:50%; cursor:pointer;
        background:linear-gradient(135deg,#c9a96e,#b8924a);
        display:flex; align-items:center; justify-content:center;
        color:#0b0b0f; box-shadow:0 4px 20px rgba(201,169,110,0.45);
        position:relative; transition:transform .2s, box-shadow .2s;
      }
      .chatbot-ph-bubble:hover { transform:scale(1.1); box-shadow:0 6px 28px rgba(201,169,110,0.6); }
      .chatbot-ph-dot {
        position:absolute; top:4px; right:4px; width:10px; height:10px;
        border-radius:50%; background:#2ecc71; border:2px solid #0b0b0f;
        animation:dotPulse 1.5s ease infinite;
      }
      @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:.4;} }
      .chatbot-ph-panel {
        position:absolute; bottom:70px; right:0; width:300px;
        background:#111118; border-radius:16px; overflow:hidden;
        border:1px solid rgba(201,169,110,0.2);
        box-shadow:0 16px 50px rgba(0,0,0,0.6);
        flex-direction:column;
      }
      .chatbot-ph-header {
        background:linear-gradient(135deg,#c9a96e,#b8924a);
        padding:14px 18px; display:flex; justify-content:space-between; align-items:center;
        color:#0b0b0f; font-weight:700; font-size:14px; letter-spacing:.5px;
      }
      .chatbot-ph-header button {
        background:none; border:none; color:#0b0b0f; cursor:pointer; font-size:16px; padding:0;
      }
      .chatbot-ph-body { padding:16px; flex:1; }
      .chatbot-ph-msg {
        background:#1a1a24; border:1px solid rgba(201,169,110,0.1);
        border-radius:12px; padding:12px 14px; font-size:13px;
        color:#e8e0d0; line-height:1.5;
      }
      .chatbot-ph-msg a { color:#c9a96e; text-decoration:none; }
      .chatbot-ph-msg a:hover { text-decoration:underline; }
    `;
    document.head.appendChild(style);
  }

})();
