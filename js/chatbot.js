/* ============================================
   APEX HYGIENE UK — FAQ Chatbot Widget
   Self-contained: injects its own HTML + CSS
============================================ */
(function () {
  'use strict';

  // ── Knowledge Base ──────────────────────────
  const KB = [
    // ── Services overview ──
    {
      keywords: ['service', 'what do you do', 'what do you offer', 'help with', 'provide', 'our services'],
      answer: 'We offer six core services:\n\n• <b>Clinical & Medical Waste</b> — infectious & non-infectious healthcare waste\n• <b>Dental Waste</b> — amalgam, clinical & pharmaceutical dental waste\n• <b>Sanitary Bins</b> — discreet washroom hygiene units\n• <b>Sharps Disposal</b> — UN-approved containers & collections\n• <b>Nappy Waste</b> — odour-controlled units for nurseries & care homes\n• <b>Hygiene Waste</b> — PPE, gloves & general offensive waste\n\nWould you like details on a specific service?'
    },
    // ── Clinical & Medical Waste ──
    {
      keywords: ['clinical', 'medical waste', 'healthcare waste', 'infectious', 'hospital', 'gp surgery', 'nhs waste'],
      answer: 'Our <b>Clinical & Medical Waste</b> service covers:\n\n• Infectious & potentially infectious clinical waste\n• Pharmaceutical & cytotoxic waste\n• Anatomical & pathological waste\n• Tiger-stripe offensive waste\n• PPE from clinical use\n\nWe supply colour-coded, UN-approved containers and provide waste transfer notes with every collection. Ideal for GP surgeries, NHS clinics, hospitals, care homes, and veterinary practices.\n\n<a href="' + getPagePrefix() + 'clinical-medical-waste.html">Full details →</a>'
    },
    // ── Dental Waste ──
    {
      keywords: ['dental', 'amalgam', 'dentist', 'dental practice', 'dental waste', 'x-ray chemical'],
      answer: 'Our <b>Dental Waste</b> service handles:\n\n• Dental amalgam waste (fillings, capsules, separator sludge)\n• Clinical dental waste & contaminated instruments\n• Pharmaceutical & medicine waste\n• X-ray processing chemicals (fixer & developer)\n• Sharps from dental procedures\n\nPurpose-built containers supplied for each waste stream. We work with NHS & private practices, orthodontic clinics, and dental labs.\n\n<a href="' + getPagePrefix() + 'dental-waste.html">Full details →</a>'
    },
    // ── Sanitary Bins ──
    {
      keywords: ['sanitary', 'feminine', 'washroom', 'sanitary bin', 'feminine hygiene'],
      answer: 'Our <b>Sanitary Bin</b> service includes:\n\n• Choice of bin sizes & styles to suit your facilities\n• Discreet, odour-controlled units\n• Regular scheduled servicing (monthly or more frequent)\n• Liners replaced & bins sanitised at every visit\n• Waste removed for compliant disposal\n\nIdeal for offices, schools, healthcare facilities, retail venues, and leisure centres. No long-term lock-in contracts.\n\n<a href="' + getPagePrefix() + 'sanitary-bins.html">Full details →</a>'
    },
    // ── Sharps Disposal ──
    {
      keywords: ['sharp', 'needle', 'syringe', 'lancet', 'blade', 'sharps disposal', 'sharps bin'],
      answer: 'Our <b>Sharps Disposal</b> service provides:\n\n• UN-approved, colour-coded containers (0.5L to 30L)\n• Yellow-lidded bins for needles & syringes\n• Medicinally & non-medicinally contaminated sharps\n• Scalpel blades, lancets & glass ampoules\n• Scheduled exchanges or one-off collections\n• Domestic collection service for home sharps users\n\nAll sharps treated as hazardous waste — zero landfill. Suitable for GP surgeries, tattoo studios, vets, pharmacies, and home users.\n\n<a href="' + getPagePrefix() + 'sharps-disposal.html">Full details →</a>'
    },
    // ── Nappy Waste ──
    {
      keywords: ['nappy', 'nappies', 'incontinence', 'nursery', 'childcare', 'diaper', 'nappy waste', 'changing'],
      answer: 'Our <b>Nappy Waste Disposal</b> service provides:\n\n• Odour-controlled, purpose-built waste units\n• Flexible collection: weekly, fortnightly, or as needed\n• Handles used nappies, incontinence pads, wipes & PPE\n• Discreet uniformed collections\n• Dedicated account manager for your facility\n\nDesigned for nurseries, primary schools, care homes, NHS settings, SEN schools, and holiday parks.\n\n<a href="' + getPagePrefix() + 'nappy-waste.html">Full details →</a>'
    },
    // ── Hygiene Waste ──
    {
      keywords: ['hygiene waste', 'general waste', 'offensive waste', 'ppe', 'tiger stripe', 'commercial waste'],
      answer: 'Our <b>Hygiene Waste</b> service covers:\n\n• Offensive/tiger-stripe hygiene waste\n• PPE & single-use protective equipment\n• Contaminated paper & hygiene products\n• Used gloves & aprons (non-clinical)\n• Feminine hygiene products\n• Non-infectious wound dressings\n\nWe advise on waste segregation to reduce costs. Nationwide coverage with transparent pricing.\n\n<a href="' + getPagePrefix() + 'hygiene-waste.html">Full details →</a>'
    },
    // ── How it works ──
    {
      keywords: ['how it works', 'how does it work', 'process', 'steps', 'what happens', 'how do i', 'getting started', 'set up', 'setup'],
      answer: 'It\'s simple — just 3 steps:\n\n<b>1. Get in Touch</b>\nCall us on <a href="tel:03300100130">0330 010 0130</a> or fill in our quote form. We\'ll discuss your requirements and provide a free, no-obligation quote.\n\n<b>2. Setup & Install</b>\nWe deliver and install all required bins, containers, and equipment at your premises — at no extra cost.\n\n<b>3. Scheduled Service</b>\nRegular, discreet collections by uniformed professionals on a schedule that suits you. Full documentation provided every time.\n\n<a href="#quote-form">Get started with a free quote →</a>'
    },
    // ── Pricing / Quotes ──
    {
      keywords: ['price', 'cost', 'how much', 'quote', 'pricing', 'expensive', 'cheap', 'afford', 'free quote', 'budget'],
      answer: 'We offer <b>competitive, transparent pricing</b> with:\n\n• No hidden fees or surprise charges\n• No long-term lock-in contracts\n• Every quote tailored to your specific needs\n• Free, no-obligation quotes\n\nGet your free quote now:\n📞 <a href="tel:03300100130">0330 010 0130</a>\n📝 <a href="#quote-form">Online quote form</a>\n\nWe\'ll respond within 24 hours.'
    },
    // ── Coverage area ──
    {
      keywords: ['area', 'cover', 'location', 'where', 'nationwide', 'region', 'local', 'coverage', 'travel'],
      answer: 'We provide <b>nationwide coverage across the entire UK</b>. Whether you\'re in a major city or a rural area, our regional teams can service your premises on a regular, scheduled basis.\n\nFrom NHS practices in London to dental clinics in Scotland — we\'ve got you covered.'
    },
    // ── Contact details ──
    {
      keywords: ['contact', 'phone', 'call', 'email', 'get in touch', 'reach', 'speak'],
      answer: 'You can reach us by:\n\n📞 Phone: <a href="tel:03300100130">0330 010 0130</a>\n✉️ Email: <a href="mailto:hello@apexhygieneuk.co.uk">hello@apexhygieneuk.co.uk</a>\n🕐 Mon–Fri: 9am – 5pm\n\nOr fill in our <a href="#quote-form">quick quote form</a> and we\'ll get back to you within 24 hours.'
    },
    // ── Address ──
    {
      keywords: ['address', 'office', 'based', 'head office', 'find you', 'where are you'],
      answer: 'Our office is located at:\n\n📍 Unit 1 Commerce House\nCampbeltown Road\nBirkenhead, Merseyside\nCH41 9HP\n\n📞 <a href="tel:03300100130">0330 010 0130</a>\n✉️ <a href="mailto:hello@apexhygieneuk.co.uk">hello@apexhygieneuk.co.uk</a>'
    },
    // ── Collection frequency ──
    {
      keywords: ['how often', 'frequency', 'schedule', 'collection', 'how frequently', 'weekly', 'fortnightly', 'pick up'],
      answer: 'Collection frequency depends on your waste type and volume. We offer:\n\n• <b>Weekly</b> collections\n• <b>Fortnightly</b> collections\n• <b>Four-weekly</b> (monthly) collections\n• <b>Custom schedules</b> tailored to your needs\n• <b>One-off</b> collections also available\n\nYour dedicated account manager will work with you to find the right plan.'
    },
    // ── Compliance & licensing ──
    {
      keywords: ['complian', 'licen', 'regulat', 'legal', 'certified', 'accredited', 'law', 'waste transfer', 'documentation', 'audit'],
      answer: 'Yes — we are <b>fully licensed and compliant</b>.\n\n• Full waste carrier licences held\n• Strict compliance with all UK waste management regulations\n• Adherence to Hazardous Waste Regulations\n• Environment Agency guidelines followed\n• <b>Waste transfer notes</b> provided for every collection\n• Complete audit trail for your records\n\nEvery collection is documented and fully traceable, giving you peace of mind and legal coverage.'
    },
    // ── Start / sign up ──
    {
      keywords: ['start', 'sign up', 'begin', 'get going', 'next step', 'join', 'register', 'new customer'],
      answer: 'Getting started is easy! Here\'s what to do:\n\n1️⃣ <b>Call us</b> on <a href="tel:03300100130">0330 010 0130</a> or <a href="#quote-form">request a quote online</a>\n2️⃣ We\'ll discuss your needs and send a <b>free, tailored quote</b>\n3️⃣ Once agreed, we <b>deliver all containers</b> and set up your schedule\n4️⃣ <b>Regular collections</b> begin — discreet, on time, fully documented\n\nMost customers are up and running within days!'
    },
    // ── Opening hours ──
    {
      keywords: ['hours', 'open', 'when', 'available', 'time', 'office hours', 'working hours'],
      answer: 'Our office hours are:\n\n🕐 <b>Monday – Friday:</b> 9am to 5pm\n\nYou can call <a href="tel:03300100130">0330 010 0130</a> during these hours, or email <a href="mailto:hello@apexhygieneuk.co.uk">hello@apexhygieneuk.co.uk</a> anytime — we\'ll respond on the next working day.'
    },
    // ── Contracts ──
    {
      keywords: ['contract', 'lock in', 'cancel', 'commitment', 'term', 'minimum term', 'notice period'],
      answer: 'We offer <b>flexible contracts with no long-term lock-in</b>. We believe in earning your business through great service, not tying you into lengthy agreements.\n\nCompetitively priced with no surprise charges. Contact us to discuss terms that suit your business.'
    },
    // ── Environment ──
    {
      keywords: ['environment', 'green', 'sustain', 'recycle', 'eco', 'carbon', 'landfill'],
      answer: 'We are committed to <b>environmentally responsible disposal</b>:\n\n• Waste segregation to maximise recycling\n• Sustainable disposal methods prioritised\n• Reduced landfill wherever possible\n• Support for clients\' environmental & CSR goals\n• All sharps treated — zero landfill\n\nWe help you do the right thing for the environment while staying fully compliant.'
    },
    // ── Who we work with ──
    {
      keywords: ['who', 'business', 'sector', 'industry', 'work with', 'client', 'type of business', 'customer'],
      answer: 'We work with a wide range of businesses:\n\n• 🏥 GP surgeries & NHS clinics\n• 🦷 Dental practices & orthodontists\n• 👶 Nurseries & primary schools\n• 🏠 Care homes & nursing facilities\n• 🏢 Commercial offices & workplaces\n• 🏨 Hotels & hospitality venues\n• 🏋️ Leisure centres & gyms\n• 🏛️ Public buildings & transport hubs\n• 💉 Tattoo studios & aesthetics clinics\n• 🐾 Veterinary practices'
    },
    // ── About the company ──
    {
      keywords: ['about', 'company', 'who are you', 'tell me about', 'apex hygiene'],
      answer: '<b>Apex Hygiene UK</b> (CCS Group NW Limited T/A Apex Hygiene UK) is a specialist waste management and hygiene services company based in Birkenhead, Merseyside.\n\nWe\'re committed to creating cleaner, safer, and more hygienic environments for businesses across every sector. What sets us apart is our customer-first approach — responsive communication, flexible schedules, and your peace of mind at the centre of everything we do.\n\n<a href="' + getPagePrefix() + 'about.html">Read more about us →</a>'
    },
    // ── Containers / bins / equipment ──
    {
      keywords: ['container', 'bin', 'equipment', 'supplies', 'what do you supply', 'provide bins', 'colour coded'],
      answer: 'We supply all the containers and equipment you need:\n\n• <b>Colour-coded clinical waste bins</b> (yellow, orange, tiger-stripe)\n• <b>UN-approved sharps containers</b> (0.5L to 30L)\n• <b>Dental amalgam containers</b>\n• <b>Sanitary waste units</b> (various sizes & styles)\n• <b>Nappy waste units</b> (odour-controlled)\n• <b>General hygiene waste bins</b>\n\nAll containers are supplied, delivered, and maintained as part of your service — no extra charge.'
    },
    // ── Waste transfer notes / paperwork ──
    {
      keywords: ['waste transfer', 'paperwork', 'documentation', 'duty of care', 'traceable', 'receipt', 'proof'],
      answer: 'We provide <b>complete documentation</b> for every collection:\n\n• Waste transfer notes (consignment notes for hazardous waste)\n• Full audit trail for regulatory compliance\n• Traceable from point of collection to final disposal\n• Proof of compliant disposal for your records\n\nThis gives you total peace of mind and ensures you meet your Duty of Care obligations.'
    },
    // ── Account manager ──
    {
      keywords: ['account manager', 'dedicated', 'point of contact', 'support', 'customer service', 'help with account'],
      answer: 'Every customer gets a <b>dedicated account manager</b> who:\n\n• Is your single point of contact\n• Handles all queries and adjustments\n• Reviews your service plan regularly\n• Ensures collections run smoothly\n• Provides responsive, personal support\n\nWe pride ourselves on communication that puts your needs first.'
    },
    // ── Hazardous waste ──
    {
      keywords: ['hazardous', 'dangerous', 'toxic', 'cytotoxic', 'pharmaceutical', 'medicine waste'],
      answer: 'Yes, we handle <b>hazardous waste</b> including:\n\n• Cytotoxic & cytostatic medicines\n• Pharmaceutical waste & returned medicines\n• Medicinally contaminated sharps\n• Infectious clinical waste\n\nAll hazardous waste is handled under strict Hazardous Waste Regulations with full consignment notes provided. No hazardous waste goes to landfill.\n\n📞 <a href="tel:03300100130">Call us to discuss your requirements</a>'
    },
    // ── Care home specific ──
    {
      keywords: ['care home', 'nursing home', 'residential care', 'elderly care', 'supported living'],
      answer: 'We provide tailored services for <b>care homes and nursing facilities</b>:\n\n• Clinical waste from medical procedures\n• Incontinence & nappy waste with odour-controlled units\n• Sharps disposal for medication administration\n• General hygiene waste\n• Flexible scheduling around residents\' needs\n\nWe understand the sensitivity required in care environments. Discreet, uniformed collections every time.\n\n<a href="tel:03300100130">📞 Get a care home quote</a>'
    },
    // ── School / education ──
    {
      keywords: ['school', 'education', 'college', 'university', 'teacher', 'classroom'],
      answer: 'We support <b>schools and educational settings</b> with:\n\n• Sanitary bins for student & staff washrooms\n• Nappy waste disposal for nursery & reception classes\n• First-aid sharps disposal\n• General hygiene waste management\n\nDiscreet, scheduled collections that won\'t disrupt the school day.\n\n<a href="tel:03300100130">📞 Get an education quote</a>'
    },
    // ── Tattoo / aesthetics ──
    {
      keywords: ['tattoo', 'piercing', 'aesthetics', 'beauty', 'cosmetic', 'botox', 'filler'],
      answer: 'We provide waste services for <b>tattoo, piercing & aesthetics studios</b>:\n\n• Sharps disposal (needles, blades, cartridges)\n• Clinical waste from procedures\n• Colour-coded containers supplied\n• Scheduled or on-demand collections\n\nKeep your studio compliant and your clients confident.\n\n<a href="' + getPagePrefix() + 'sharps-disposal.html">Sharps service details →</a>'
    },
    // ── Vet / veterinary ──
    {
      keywords: ['vet', 'veterinary', 'animal', 'pet'],
      answer: 'We work with <b>veterinary practices</b> for:\n\n• Clinical waste from surgeries & treatments\n• Sharps disposal (needles, syringes, scalpels)\n• Pharmaceutical waste & returned medicines\n• Colour-coded containers supplied\n\nScheduled collections that fit around your clinic hours.\n\n<a href="tel:03300100130">📞 Get a vet practice quote</a>'
    },
    // ── Greetings ──
    {
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'hiya', 'yo'],
      answer: 'Hello! 👋 Welcome to Apex Hygiene UK. How can I help you today?\n\nYou can ask me about our services, pricing, coverage, how it works, or anything else!'
    },
    // ── Thanks ──
    {
      keywords: ['thank', 'thanks', 'cheers', 'ta', 'brilliant', 'great', 'perfect'],
      answer: 'You\'re welcome! 😊 If you need anything else, just ask.\n\nOr reach us directly:\n📞 <a href="tel:03300100130">0330 010 0130</a>\n✉️ <a href="mailto:hello@apexhygieneuk.co.uk">hello@apexhygieneuk.co.uk</a>'
    },
    // ── Bye ──
    {
      keywords: ['bye', 'goodbye', 'see you', 'that\'s all', 'nothing else'],
      answer: 'Thanks for chatting with us! If you ever need anything, we\'re just a call away on <a href="tel:03300100130">0330 010 0130</a>. Have a great day! 👋'
    },
    // ── Complaints ──
    {
      keywords: ['complaint', 'unhappy', 'problem', 'issue', 'wrong', 'late', 'missed'],
      answer: 'We\'re sorry to hear you\'re having an issue. We take all feedback seriously.\n\nPlease contact us directly so we can resolve this for you:\n\n📞 <a href="tel:03300100130">0330 010 0130</a>\n✉️ <a href="mailto:hello@apexhygieneuk.co.uk">hello@apexhygieneuk.co.uk</a>\n\nOur team will look into it straight away.'
    },
    // ── Safety ──
    {
      keywords: ['safe', 'safety', 'health and safety', 'risk', 'injury', 'protect'],
      answer: 'Safety is our top priority:\n\n• All waste handled by trained, uniformed professionals\n• Strict adherence to UK Health & Safety at Work regulations\n• Proper waste segregation to prevent cross-contamination\n• UN-approved containers for hazardous materials\n• Full PPE worn during all collections\n\nYour premises, your staff, and your visitors are always protected.'
    },
    // ── Discreet / uniformed ──
    {
      keywords: ['discreet', 'uniform', 'professional', 'quiet', 'private'],
      answer: 'All our collections are carried out by <b>uniformed professionals</b> who work discreetly and efficiently.\n\nWe understand that waste management should be invisible to your clients, patients, and visitors. Our team arrives on schedule, handles everything quickly, and leaves your premises clean and tidy.'
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
