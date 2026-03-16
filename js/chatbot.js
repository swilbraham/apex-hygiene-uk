/* ============================================
   APEX HYGIENE UK — FAQ Chatbot Widget
   Self-contained: injects its own HTML + CSS
============================================ */
(function () {
  'use strict';

  // ── Knowledge Base ──────────────────────────
  const KB = [
    {
      keywords: ['service', 'what do you do', 'what do you offer', 'help with', 'provide'],
      answer: 'We offer six core services:\n\n• Clinical & Medical Waste\n• Dental Waste\n• Sanitary Bins\n• Sharps Disposal\n• Nappy Waste Disposal\n• Hygiene Waste\n\nWould you like to know more about a specific service?'
    },
    {
      keywords: ['clinical', 'medical waste', 'healthcare waste', 'infectious'],
      answer: 'Our Clinical & Medical Waste service covers safe, compliant disposal of infectious and non-infectious healthcare waste with full traceability. We work with NHS facilities, GP surgeries, hospitals, and private clinics.\n\n<a href="' + getPagePrefix() + 'clinical-medical-waste.html">Learn more about Clinical Waste →</a>'
    },
    {
      keywords: ['dental', 'amalgam', 'dentist'],
      answer: 'We provide specialist dental waste collection including amalgam, clinical waste, and sharps for dental practices of all sizes. UN-approved containers are supplied and exchanged on schedule.\n\n<a href="' + getPagePrefix() + 'dental-waste.html">Learn more about Dental Waste →</a>'
    },
    {
      keywords: ['sanitary', 'feminine', 'washroom', 'bin'],
      answer: 'Our Sanitary Bin service provides discreet, hygienic feminine hygiene waste units for offices, schools, healthcare sites, and public venues. Units are serviced regularly by uniformed professionals.\n\n<a href="' + getPagePrefix() + 'sanitary-bins.html">Learn more about Sanitary Bins →</a>'
    },
    {
      keywords: ['sharp', 'needle', 'syringe', 'lancet'],
      answer: 'We supply UN-approved, colour-coded sharps containers (0.5L to 30L) with scheduled collections. Suitable for clinical environments, home users, tattoo studios, and veterinary practices.\n\n<a href="' + getPagePrefix() + 'sharps-disposal.html">Learn more about Sharps Disposal →</a>'
    },
    {
      keywords: ['nappy', 'nappies', 'incontinence', 'nursery', 'childcare', 'diaper'],
      answer: 'Our Nappy Waste Disposal service provides odour-controlled, purpose-built units with flexible collection schedules for nurseries, schools, care homes, and NHS settings.\n\n<a href="' + getPagePrefix() + 'nappy-waste.html">Learn more about Nappy Waste →</a>'
    },
    {
      keywords: ['hygiene waste', 'general waste', 'offensive waste', 'ppe', 'tiger stripe'],
      answer: 'Our Hygiene Waste service covers offensive and non-infectious waste including PPE, gloves, aprons, and contaminated paper products. We supply suitable containers and provide scheduled collections.\n\n<a href="' + getPagePrefix() + 'hygiene-waste.html">Learn more about Hygiene Waste →</a>'
    },
    {
      keywords: ['price', 'cost', 'how much', 'quote', 'pricing', 'expensive', 'cheap', 'afford'],
      answer: 'We offer competitive, transparent pricing with no hidden fees or surprise charges. Every quote is tailored to your specific needs.\n\nGet a free, no-obligation quote by:\n• Calling <a href="tel:03300100130">0330 010 0130</a>\n• Filling in our <a href="#quote-form">online quote form</a>'
    },
    {
      keywords: ['area', 'cover', 'location', 'where', 'nationwide', 'region', 'local'],
      answer: 'We provide nationwide coverage across the entire UK. Whether you\'re in a major city or a rural area, our regional teams can service your premises on a regular, scheduled basis.'
    },
    {
      keywords: ['contact', 'phone', 'call', 'email', 'get in touch', 'reach'],
      answer: 'You can reach us by:\n\n📞 Phone: <a href="tel:03300100130">0330 010 0130</a>\n✉️ Email: <a href="mailto:hello@apexhygieneuk.co.uk">hello@apexhygieneuk.co.uk</a>\n🕐 Mon–Fri: 9am – 5pm\n\nOr fill in our <a href="#quote-form">quick quote form</a> and we\'ll get back to you within 24 hours.'
    },
    {
      keywords: ['address', 'office', 'based', 'head office', 'find you'],
      answer: 'Our office is located at:\n\nUnit 1 Commerce House\nCampbeltown Road\nBirkenhead, Merseyside\nCH41 9HP\n\n📞 <a href="tel:03300100130">0330 010 0130</a>'
    },
    {
      keywords: ['how often', 'frequency', 'schedule', 'collection', 'how frequently', 'weekly', 'fortnightly'],
      answer: 'Collection frequency depends on your needs and waste type. We offer:\n\n• Weekly collections\n• Fortnightly collections\n• Four-weekly collections\n• Custom schedules\n\nYour account manager will work with you to find the right plan.'
    },
    {
      keywords: ['complian', 'licen', 'regulat', 'legal', 'certified', 'accredited', 'law'],
      answer: 'Yes — we are fully licensed and compliant. We hold full waste carrier licences and operate in strict compliance with all UK waste management and environmental regulations. Every collection is documented and fully traceable.'
    },
    {
      keywords: ['start', 'sign up', 'begin', 'get going', 'how does it work', 'process', 'next step'],
      answer: 'Getting started is simple:\n\n1️⃣ Get in touch — call us or fill in our quote form\n2️⃣ We deliver and install all required bins and containers\n3️⃣ Regular, discreet collections on a schedule that suits you\n\nCall <a href="tel:03300100130">0330 010 0130</a> or <a href="#quote-form">request a quote online</a>.'
    },
    {
      keywords: ['hours', 'open', 'when', 'available', 'time'],
      answer: 'Our office hours are Monday to Friday, 9am – 5pm.\n\nYou can reach us on <a href="tel:03300100130">0330 010 0130</a> or email <a href="mailto:hello@apexhygieneuk.co.uk">hello@apexhygieneuk.co.uk</a> anytime and we\'ll respond during business hours.'
    },
    {
      keywords: ['contract', 'lock in', 'cancel', 'commitment', 'term'],
      answer: 'We offer flexible contracts with no long-term lock-in. We believe in earning your business through great service, not tying you into lengthy agreements. Contact us to discuss terms that suit you.'
    },
    {
      keywords: ['environment', 'green', 'sustain', 'recycle', 'eco'],
      answer: 'We are committed to environmentally responsible disposal. We prioritise waste segregation, recycling, and sustainable disposal methods to reduce environmental impact and support our clients\' green goals.'
    },
    {
      keywords: ['who', 'business', 'sector', 'industry', 'work with', 'client'],
      answer: 'We work with a wide range of businesses including:\n\n• Healthcare facilities & GP surgeries\n• Dental practices\n• Nurseries & schools\n• Care homes\n• Commercial offices\n• Hotels & hospitality venues\n• Leisure centres\n• Public buildings'
    },
    {
      keywords: ['about', 'company', 'who are you', 'tell me about'],
      answer: 'Apex Hygiene UK (CCS Group NW Limited T/A Apex Hygiene UK) is a specialist waste management and hygiene services company. We\'re committed to creating cleaner, safer, and more hygienic environments for businesses across every sector.\n\n<a href="' + getPagePrefix() + 'about.html">Read more about us →</a>'
    },
    {
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
      answer: 'Hello! 👋 Welcome to Apex Hygiene UK. How can I help you today?\n\nYou can ask me about our services, pricing, coverage area, or how to get started.'
    },
    {
      keywords: ['thank', 'thanks', 'cheers', 'ta'],
      answer: 'You\'re welcome! If you need anything else, just ask. You can also reach us directly on <a href="tel:03300100130">0330 010 0130</a>. Have a great day! 😊'
    }
  ];

  // ── Helpers ─────────────────────────────────
  function getPagePrefix() {
    // Detect if we're on the homepage or in /pages/
    var path = window.location.pathname;
    if (path.indexOf('/pages/') !== -1) return '';
    return 'pages/';
  }

  function matchQuery(input) {
    var q = input.toLowerCase().trim();
    if (!q) return null;

    var bestMatch = null;
    var bestScore = 0;

    for (var i = 0; i < KB.length; i++) {
      var entry = KB[i];
      var score = 0;
      for (var j = 0; j < entry.keywords.length; j++) {
        var kw = entry.keywords[j].toLowerCase();
        if (q.indexOf(kw) !== -1) {
          score += kw.length; // longer keyword matches = higher relevance
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    return bestMatch;
  }

  function getFallback() {
    return 'I\'m not sure about that one, but our team can help!\n\n📞 Call us: <a href="tel:03300100130">0330 010 0130</a>\n✉️ Email: <a href="mailto:hello@apexhygieneuk.co.uk">hello@apexhygieneuk.co.uk</a>\n\nOr <a href="#quote-form">request a free quote</a> and we\'ll get back to you within 24 hours.';
  }

  // ── Inject CSS ──────────────────────────────
  var css = `
    .chatbot-bubble {
      position: fixed;
      bottom: 90px;
      left: 24px;
      z-index: 998;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #033374;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(3,51,116,0.35);
      transition: all 0.25s ease;
      border: none;
      outline: none;
    }
    .chatbot-bubble:hover {
      background: #1E3876;
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(3,51,116,0.4);
    }
    .chatbot-bubble svg { width: 26px; height: 26px; fill: currentColor; }
    .chatbot-bubble__badge {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 18px;
      height: 18px;
      background: #BE0210;
      border-radius: 50%;
      font-size: 10px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border: 2px solid #fff;
    }

    .chatbot-window {
      position: fixed;
      bottom: 90px;
      left: 24px;
      z-index: 999;
      width: 380px;
      max-height: 520px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 12px 48px rgba(3,51,116,0.2);
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: 'DM Sans', sans-serif;
      border: 1px solid #DCE4EB;
    }
    .chatbot-window.open { display: flex; }

    .chatbot-header {
      background: #033374;
      color: #fff;
      padding: 18px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
    }
    .chatbot-header__info {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .chatbot-header__avatar {
      width: 36px;
      height: 36px;
      background: rgba(255,255,255,0.15);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    .chatbot-header__name {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 14px;
    }
    .chatbot-header__status {
      font-size: 11px;
      color: rgba(255,255,255,0.6);
    }
    .chatbot-close {
      background: none;
      border: none;
      color: rgba(255,255,255,0.6);
      cursor: pointer;
      padding: 4px;
      font-size: 20px;
      line-height: 1;
      transition: color 0.2s;
    }
    .chatbot-close:hover { color: #fff; }

    .chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px 16px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      min-height: 200px;
      max-height: 340px;
      background: #F7F9FB;
    }

    .chatbot-msg {
      max-width: 85%;
      padding: 12px 16px;
      border-radius: 14px;
      font-size: 13.5px;
      line-height: 1.6;
      white-space: pre-line;
      word-wrap: break-word;
    }
    .chatbot-msg a {
      color: #033374;
      text-decoration: underline;
      text-underline-offset: 2px;
      font-weight: 500;
    }
    .chatbot-msg--bot {
      background: #fff;
      color: #313844;
      align-self: flex-start;
      border: 1px solid #e8ecf0;
      border-bottom-left-radius: 4px;
    }
    .chatbot-msg--user {
      background: #033374;
      color: #fff;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
    }
    .chatbot-msg--user a { color: #fbbf24; }

    .chatbot-suggestions {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 0 16px 12px;
      background: #F7F9FB;
    }
    .chatbot-suggestion {
      background: #fff;
      border: 1px solid #DCE4EB;
      border-radius: 20px;
      padding: 6px 14px;
      font-size: 12px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      color: #033374;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }
    .chatbot-suggestion:hover {
      background: #033374;
      color: #fff;
      border-color: #033374;
    }

    .chatbot-input {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 14px 16px;
      border-top: 1px solid #e8ecf0;
      background: #fff;
      flex-shrink: 0;
    }
    .chatbot-input input {
      flex: 1;
      border: 1px solid #DCE4EB;
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 13.5px;
      font-family: 'DM Sans', sans-serif;
      color: #313844;
      outline: none;
      transition: border-color 0.2s;
    }
    .chatbot-input input:focus {
      border-color: #033374;
      box-shadow: 0 0 0 3px rgba(3,51,116,0.08);
    }
    .chatbot-input input::placeholder { color: #a0aab4; }
    .chatbot-input button {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      background: #BE0210;
      color: #fff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
      flex-shrink: 0;
    }
    .chatbot-input button:hover { background: #a50010; }
    .chatbot-input button svg { width: 18px; height: 18px; fill: currentColor; }

    /* Mobile */
    @media (max-width: 768px) {
      .chatbot-bubble {
        bottom: 82px;
        left: 16px;
        width: 50px;
        height: 50px;
      }
      .chatbot-bubble svg { width: 22px; height: 22px; }
      .chatbot-window {
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        max-height: 100vh;
        max-height: 100dvh;
        border-radius: 0;
      }
      .chatbot-messages {
        max-height: calc(100vh - 200px);
        max-height: calc(100dvh - 200px);
      }
    }
  `;

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── Inject HTML ─────────────────────────────
  // Chat bubble
  var bubble = document.createElement('button');
  bubble.className = 'chatbot-bubble';
  bubble.setAttribute('aria-label', 'Open chat');
  bubble.innerHTML = '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg><span class="chatbot-bubble__badge">1</span>';
  document.body.appendChild(bubble);

  // Chat window
  var win = document.createElement('div');
  win.className = 'chatbot-window';
  win.innerHTML =
    '<div class="chatbot-header">' +
      '<div class="chatbot-header__info">' +
        '<div class="chatbot-header__avatar">💬</div>' +
        '<div>' +
          '<div class="chatbot-header__name">Apex Hygiene UK</div>' +
          '<div class="chatbot-header__status">Ask us anything</div>' +
        '</div>' +
      '</div>' +
      '<button class="chatbot-close" aria-label="Close chat">&times;</button>' +
    '</div>' +
    '<div class="chatbot-messages" id="chatbot-messages"></div>' +
    '<div class="chatbot-suggestions" id="chatbot-suggestions"></div>' +
    '<div class="chatbot-input">' +
      '<input type="text" id="chatbot-input" placeholder="Type your question..." />' +
      '<button id="chatbot-send" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></button>' +
    '</div>';
  document.body.appendChild(win);

  // ── References ──────────────────────────────
  var messagesEl = document.getElementById('chatbot-messages');
  var suggestionsEl = document.getElementById('chatbot-suggestions');
  var inputEl = document.getElementById('chatbot-input');
  var sendBtn = document.getElementById('chatbot-send');
  var closeBtn = win.querySelector('.chatbot-close');
  var badge = bubble.querySelector('.chatbot-bubble__badge');
  var isOpen = false;

  // ── Functions ───────────────────────────────
  function addMessage(text, sender) {
    var msg = document.createElement('div');
    msg.className = 'chatbot-msg chatbot-msg--' + sender;
    msg.innerHTML = text;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showSuggestions(items) {
    suggestionsEl.innerHTML = '';
    items.forEach(function (item) {
      var btn = document.createElement('button');
      btn.className = 'chatbot-suggestion';
      btn.textContent = item;
      btn.addEventListener('click', function () {
        handleUserInput(item);
      });
      suggestionsEl.appendChild(btn);
    });
  }

  function hideSuggestions() {
    suggestionsEl.innerHTML = '';
  }

  function handleUserInput(text) {
    addMessage(text, 'user');
    hideSuggestions();
    inputEl.value = '';

    // Small delay to feel natural
    setTimeout(function () {
      var match = matchQuery(text);
      if (match) {
        addMessage(match.answer, 'bot');
      } else {
        addMessage(getFallback(), 'bot');
      }

      // Show follow-up suggestions
      showSuggestions(['Our services', 'Get a quote', 'Contact details', 'How it works']);
    }, 400);
  }

  // ── Event listeners ─────────────────────────
  bubble.addEventListener('click', function () {
    isOpen = true;
    win.classList.add('open');
    bubble.style.display = 'none';
    inputEl.focus();
  });

  closeBtn.addEventListener('click', function () {
    isOpen = false;
    win.classList.remove('open');
    bubble.style.display = 'flex';
    badge.style.display = 'none'; // Hide badge after first open
  });

  sendBtn.addEventListener('click', function () {
    var val = inputEl.value.trim();
    if (val) handleUserInput(val);
  });

  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      var val = inputEl.value.trim();
      if (val) handleUserInput(val);
    }
  });

  // Close on escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) {
      closeBtn.click();
    }
  });

  // ── Initial state ───────────────────────────
  addMessage('Hi there! 👋 I\'m the Apex Hygiene assistant. I can help you with questions about our services, pricing, coverage, and more.\n\nWhat would you like to know?', 'bot');
  showSuggestions(['Our services', 'Get a quote', 'Coverage area', 'How it works', 'Contact details']);

})();
