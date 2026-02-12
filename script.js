// ============================================

// CONFIGURATION
// ============================================

const CONFIG = {
  userName: "Digvijay Simkhada",
  userTitle: "Computer Science Student | Honors Program",

  // ---------- API KEYS (add your keys here) ----------
  // Weather widget: get a free key at https://openweathermap.org/api
  weatherAPIKey: "b274ffcf25df2f311d16051068ced176",
  defaultLocation: "Caldwell, NJ",

  // Google Maps: add your key in index.html in the <script> tag that loads maps.googleapis.com
  // (Maps key must be in the HTML script src; no variable here.)

  // ---------- Profile (optional overrides) ----------
  // profileImage: "profile.jpg",
  // userEmail: "dsimkhada@caldwell.edu",
  // userPhone: "+1 (475) 257-2067",
  // userLocation: "Caldwell, NJ",
  // aboutText: "...",
  // yearsExperience: "2+",
  // projectsCount: "4+",
  // clientsCount: "20+",
  // resumeLink: "resume.pdf",

  // Rich knowledge base: many ways to ask map to the same answers (longer phrases first for matching)
  knowledgeBase: {
      // Greetings & intro
      "hello": "Hi there! 👋 I'm Digvijay's virtual assistant. Ask me anything about **Digvijay**—skills, projects, experience, education, contact, or even ask me to **change the theme** or **play music**!",
      "hi": "Hello! How can I help you learn more about Digvijay?",
      "hey": "Hey! Ask me about Digvijay's background, projects, skills, or contact.",
      "who are you": "I'm the virtual assistant for **Digvijay Simkhada**. I can tell you about his education, experience, projects, skills, and how to reach him!",
      "what can you do": "I can answer questions about Digvijay—his **education**, **experience**, **projects**, **skills**, **contact**, and **location**. I can also **change the site theme** or **turn music on/off** if you ask!",
      "tell me about yourself": "I'm here to represent **Digvijay Simkhada**! He's a Computer Science student at Caldwell University. Ask me about his **education**, **experience**, **projects**, or **skills** for details.",
      "introduce yourself": "I'm Digvijay's portfolio assistant. I know about his studies, work, projects, and how to get in touch. What would you like to know?",

      // Education (many phrasings)
      "what is your degree": "I am pursuing a **B.S. in Computer Science** at **Caldwell University** (Honors Program) with a **4.0 GPA**. Expected graduation: May 2028.",
      "what degree are you pursuing": "I am pursuing a **B.S. in Computer Science** at **Caldwell University** (Honors Program) with a **4.0 GPA**. Expected graduation: May 2028.",
      "where do you study": "I study at **Caldwell University** in the **Honors Program**, pursuing a **B.S. in Computer Science** (expected graduation May 2028).",
      "which university": "I attend **Caldwell University** for a **B.S. in Computer Science** (Honors Program, 4.0 GPA).",
      "what is your gpa": "I maintain a **4.0 GPA** at Caldwell University in the Computer Science Honors Program.",
      "when do you graduate": "I expect to graduate in **May 2028** with a B.S. in Computer Science from Caldwell University.",
      "education": "I am currently pursuing a **B.S. in Computer Science** at **Caldwell University** (Honors Program) with a **4.0 GPA**. Expected graduation: May 2028.",
      "studying": "I'm studying **Computer Science** at **Caldwell University** (Honors Program, 4.0 GPA). Graduation: May 2028.",
      "school": "I'm at **Caldwell University** in the Honors Program, majoring in **Computer Science**.",
      "caldwell": "**Caldwell University** is where I'm studying for my **B.S. in Computer Science** (Honors, 4.0 GPA).",

      // Experience / job / work
      "what do you do": "I'm currently a **Computer Science Tutor** at Caldwell University. I've also been a High School Tutor at Malpi Institute and worked in Marketing at Earthbound Expeditions.",
      "what is your job": "My current role is **Computer Science Tutor** at Caldwell University. I've also tutored at Malpi Institute and worked in marketing at Earthbound Expeditions.",
      "where do you work": "I work as a **Computer Science Tutor** at **Caldwell University**. I've also worked at Malpi Institute and Earthbound Expeditions.",
      "your experience": "I am currently a **Computer Science Tutor** at Caldwell University. Previously: High School Tutor at Malpi Institute, and Marketing Staff at Earthbound Expeditions.",
      "experience": "I am currently a **Computer Science Tutor** at Caldwell University. Previously, I was a High School Tutor at Malpi Institute and worked in Marketing at Earthbound Expeditions.",
      "work experience": "Current: **Computer Science Tutor** at Caldwell University. Past: **High School Tutor** at Malpi Institute, **Marketing Staff** at Earthbound Expeditions.",
      "job": "I'm a **Computer Science Tutor** at Caldwell University. I've also been a tutor at Malpi Institute and did marketing at Earthbound Expeditions.",
      "tutor": "I'm a **Computer Science Tutor** at Caldwell University (Programming I / Python) and have tutored at Malpi Institute in AS and A-level subjects.",
      "earthbound": "I worked at **Earthbound Expeditions** as Marketing Staff (Nov 2023–June 2024)—client communication, bookings on Booking.com and GetYourGuide, and marketing materials.",
      "malpi": "I was a **High School Tutor** at **Malpi Institute** (March 2024), tutoring AS and A-level subjects and helping grade papers.",
      "caldwell university job": "At **Caldwell University** I'm a campus-certified **Computer Science Tutor** for Programming I (Python), helping students with coding and problem-solving.",

      // Skills
      "what are your skills": "I'm proficient in **Python**, **HTML/CSS**, **Figma**, **Canva**, and AI/ML tools like **OpenCV** and **TensorFlow**. I also do **wireframing** and **responsive web** design.",
      "what can you build": "I work with **Python**, **HTML/CSS**, **Figma**, **OpenCV**, **TensorFlow**, and **Canva**—from web and UI/UX to computer vision and voice assistants.",
      "skills": "I am proficient in **Python**, **HTML/CSS**, **Figma**, **Canva**, and AI libraries like **OpenCV** and **TensorFlow**.",
      "python": "I use **Python** for tutoring (Programming I), and in projects like Voice Assistant, Face Detection, and Face Filter (OpenCV, speech recognition, etc.).",
      "figma": "I use **Figma** for UI/UX—e.g. the **Chef on Call** project (wireframes, prototypes).",
      "opencv": "I've used **OpenCV** in **Face Detection** and **Face Filter** projects for real-time face detection and filters.",
      "tensorflow": "I have experience with **TensorFlow** as part of my AI/ML skill set.",
      "programming": "I program in **Python** and **HTML/CSS**, and have used **OpenCV**, **TensorFlow**, speech recognition, and more in projects.",
      "languages": "I work with **Python** and **HTML/CSS** primarily, plus tools like Figma, OpenCV, and TensorFlow.",

      // Projects (general + specific)
      "what projects have you done": "My main projects: <b>Chef on Call</b> (UI/UX, Figma), <b>Voice Assistant</b> (Python), <b>Face Filter</b> and <b>Face Detection</b> (OpenCV, computer vision).",
      "projects": "Here are some of my key projects:<br>1. <b>Chef on Call</b>: A home chef booking app (UI/UX).<br>2. <b>Voice Assistant</b>: A Python-based desktop assistant.<br>3. <b>Face Detection</b> & <b>Face Filter</b>: Computer vision with OpenCV.",
      "chef on call": "**Chef on Call** is a home chef booking app. I did user research, wireframes, and interactive prototypes in **Figma** (March 2025).",
      "voice assistant": "The **Voice Assistant** is a Python project (June 2024) using speech_recognition, pyttsx3, pywhatkit, and pyjokes for voice commands and responses.",
      "face filter": "**Face Filter** (March 2024) is a Python program using **OpenCV** and **cvzone** for real-time face detection and filter application.",
      "face detection": "**Face Detection** (June 2024) is a Python program using **OpenCV** and **matplotlib** for real-time face detection and visualization.",
      "portfolio": "My portfolio includes **Chef on Call** (UI/UX), **Voice Assistant** (Python), **Face Filter** and **Face Detection** (OpenCV). You can browse the Projects and Games sections on this site!",

      // Contact & location
      "how can i contact you": "You can reach me at <a href='mailto:dsimkhada@caldwell.edu'>dsimkhada@caldwell.edu</a> or call <b>+1 (475) 257-2067</b>.",
      "contact": "You can reach me at <a href='mailto:dsimkhada@caldwell.edu'>dsimkhada@caldwell.edu</a> or call <b>+1 (475) 257-2067</b>.",
      "email": "My email is <a href='mailto:dsimkhada@caldwell.edu'>dsimkhada@caldwell.edu</a>.",
      "phone": "You can call me at <b>+1 (475) 257-2067</b>.",
      "where are you located": "I am currently based in **Caldwell, NJ**.",
      "location": "I am currently based in **Caldwell, NJ**.",
      "based": "I'm based in **Caldwell, NJ**.",
      "linkedin": "You can find me on LinkedIn: <a href='https://www.linkedin.com/in/digvijay-simkhada-5891b6316' target='_blank' rel='noopener'>Digvijay Simkhada</a>.",
      "resume": "You can download my resume using the **Download Resume** button on this site, or ask me about my experience and education!",

      // About / general
      "about you": "I'm **Digvijay Simkhada**—a Computer Science student (Honors, 4.0 GPA) at Caldwell University. I tutor CS, love building projects (Python, UI/UX, computer vision), and am based in Caldwell, NJ. Ask me anything specific!",
      "about digvijay": "**Digvijay Simkhada** is a CS student at Caldwell University (Honors), a CS tutor, and has experience in tutoring and marketing. He builds projects in Python, Figma, and OpenCV. Want details on education, experience, or projects?",
      "about": "I'm **Digvijay Simkhada**, a Computer Science student and tutor. Ask me about my **education**, **experience**, **projects**, **skills**, or **contact**!",
      "name": "My name is **Digvijay Simkhada**.",
      "who is digvijay": "**Digvijay Simkhada** is a Computer Science student at Caldwell University (Honors), a tutor, and a builder of projects like Chef on Call, Voice Assistant, and face detection apps.",
      "help": "I can tell you about **Digvijay**—his **education**, **experience**, **projects**, **skills**, **contact**, and **location**. You can also say &quot;change theme to blue&quot; or &quot;play music&quot;!",
      "thanks": "You're welcome! Ask me anything else about Digvijay.",
      "thank you": "You're welcome! Feel free to ask more.",
      "bye": "Goodbye! Reach out anytime via the contact section.",
      "goodbye": "Bye! Have a great day.",

      // Fallback (keep last so it's not used when a longer key matches)
      "default": "I'm not sure I caught that. You can ask about my **education**, **experience**, **projects**, **skills**, **contact**, or **location**. Or try: &quot;What can you do?&quot; for ideas!"
  }
};

// ============================================
// GLOBALS
// ============================================

let weatherWidget;
let map, geocoder, marker;

// ============================================
// INIT
// ============================================

function initializeAll() {
  initializePersonalInfo();
  initializeMusicPlayer();
  initializeNavigationActiveLink();
  initializeSmoothScroll();
  initializeScrollAnimations();
  initializeSkillBars();
  initializeStatsCounter();
  initializeWeatherWidget();
  initializeChatbot();
  initializeContactForm();
  initializeGames();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeAll);
} else {
  initializeAll();
}

// ============================================
// PERSONAL INFO
// ============================================

function initializePersonalInfo() {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("userName", CONFIG.userName);
  setText("userTitle", CONFIG.userTitle);
  setText("userEmail", CONFIG.userEmail);
  setText("userPhone", CONFIG.userPhone);
  setText("userLocation", CONFIG.userLocation);
  setText("aboutText", CONFIG.aboutText);
  setText("yearsExperience", CONFIG.yearsExperience);
  setText("projectsCount", CONFIG.projectsCount);
  setText("clientsCount", CONFIG.clientsCount);

  const profileImageEl = document.getElementById("profileImage");
  if (profileImageEl) {
    profileImageEl.alt = CONFIG.userName;
    // Only set if blank or placeholder
    const currentSrc = profileImageEl.getAttribute("src") || "";
    if (!currentSrc || currentSrc.includes("placeholder")) {
      profileImageEl.src = CONFIG.profileImage;
    }
  }

  // Footer
  const footerP = document.querySelector(".footer p");
  if (footerP) {
    footerP.innerHTML = `&copy; ${new Date().getFullYear()} ${CONFIG.userName}. All rights reserved.`;
  }
}

// ============================================
// MUSIC PLAYER (click-to-play; autoplay is blocked by browsers)
// ============================================

function initializeMusicPlayer() {
  const musicToggle = document.getElementById("musicToggle");
  const audio = document.getElementById("backgroundMusic");
  if (!musicToggle || !audio) return;

  let playing = false;

  // start paused by default
  musicToggle.classList.add("paused");

  musicToggle.addEventListener("click", async () => {
    try {
      if (playing) {
        audio.pause();
        musicToggle.classList.remove("playing");
        musicToggle.classList.add("paused");
      } else {
        await audio.play();
        musicToggle.classList.add("playing");
        musicToggle.classList.remove("paused");
      }
      playing = !playing;
    } catch (err) {
      console.log("Audio play blocked until user interaction:", err);
    }
  });

  audio.addEventListener("error", () => {
    musicToggle.style.opacity = "0.5";
    musicToggle.style.cursor = "not-allowed";
  });

  // Expose simple controls so the chatbot can toggle music
  window.playBackgroundMusic = async () => {
    // #region agent log
    debugLogControl("H2", "playBackgroundMusic_called", { playing, hasAudio: !!audio, hasToggle: !!musicToggle });
    // #endregion
    try {
      if (!playing) {
        await audio.play();
        musicToggle.classList.add("playing");
        musicToggle.classList.remove("paused");
        playing = true;
        // #region agent log
        debugLogControl("H2", "playBackgroundMusic_success", { playing: true });
        // #endregion
      } else {
        // #region agent log
        debugLogControl("H2", "playBackgroundMusic_already_playing", {});
        // #endregion
      }
    } catch (err) {
      // #region agent log
      debugLogControl("H2", "playBackgroundMusic_error", { error: err.message });
      // #endregion
      console.log("Audio play blocked until user interaction (chatbot):", err);
    }
  };

  window.pauseBackgroundMusic = () => {
    // #region agent log
    debugLogControl("H3", "pauseBackgroundMusic_called", { playing, hasAudio: !!audio, hasToggle: !!musicToggle });
    // #endregion
    if (playing) {
      audio.pause();
      musicToggle.classList.remove("playing");
      musicToggle.classList.add("paused");
      playing = false;
      // #region agent log
      debugLogControl("H3", "pauseBackgroundMusic_success", { playing: false });
      // #endregion
    } else {
      // #region agent log
      debugLogControl("H3", "pauseBackgroundMusic_already_paused", {});
      // #endregion
    }
  };
}

// ============================================
// NAV ACTIVE LINK
// ============================================

function initializeNavigationActiveLink() {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const section = document.querySelector(href);
      if (!section) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });

    if (navbar) {
      navbar.style.background = window.scrollY > 50 ? "rgba(15, 23, 42, 0.95)" : "rgba(15, 23, 42, 0.8)";
    }
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      scrollToSection(href.substring(1));
    });
  });
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const top = section.offsetTop - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

window.scrollToSection = scrollToSection;

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
  const els = document.querySelectorAll(".section, .stat-card, .timeline-item, .skill-card, .project-card, .tool-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  els.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(el);
  });
}

// ============================================
// SKILL BARS
// ============================================

function initializeSkillBars() {
  const bars = document.querySelectorAll(".skill-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        const finalWidth = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => (bar.style.width = finalWidth), 120);
        observer.unobserve(bar);
      });
    },
    { threshold: 0.5 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

// ============================================
// STATS COUNTER
// ============================================

function initializeStatsCounter() {
  const stats = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((s) => observer.observe(s));
}

function animateCounter(el) {
  const text = el.textContent.trim();
  const number = parseInt(text.replace(/\D/g, ""), 10);
  const suffix = text.replace(/[0-9]/g, "");
  if (Number.isNaN(number)) return;

  let current = 0;
  const steps = 45;
  const increment = number / steps;
  const interval = 2000 / steps;

  const t = setInterval(() => {
    current += increment;
    if (current >= number) {
      el.textContent = number + suffix;
      clearInterval(t);
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
  }, interval);
}

// ============================================
// WEATHER (shows weather on load + when map search changes)
// ============================================

function initializeWeatherWidget() {
  weatherWidget = document.getElementById("weatherWidget");
  if (!weatherWidget) return;

  if (!CONFIG.weatherAPIKey) {
    showWeatherError("Weather API key missing in CONFIG.");
    return;
  }

  // Load default weather
  getWeatherByCity(CONFIG.defaultLocation);
}

async function getWeatherByCity(city) {
  const loadingEl = weatherWidget.querySelector(".weather-loading");
  const contentEl = weatherWidget.querySelector(".weather-content");

  try {
    loadingEl.style.display = "block";
    contentEl.style.display = "none";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${CONFIG.weatherAPIKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather request failed");

    const data = await res.json();
    renderWeather(data, `${data.name}, ${data.sys.country}`);
  } catch (err) {
    console.error(err);
    showWeatherError("Unable to load weather. Check your API key or location.");
  }
}

async function getWeatherByCoords(lat, lng, label = "") {
  const loadingEl = weatherWidget.querySelector(".weather-loading");
  const contentEl = weatherWidget.querySelector(".weather-content");

  try {
    loadingEl.style.display = "block";
    contentEl.style.display = "none";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${CONFIG.weatherAPIKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather request failed");

    const data = await res.json();
    renderWeather(data, label || `${data.name}, ${data.sys.country}`);
  } catch (err) {
    console.error(err);
    showWeatherError("Unable to load weather. Check your API key.");
  }
}

function renderWeather(data, locationLabel) {
  document.getElementById("weatherIcon").textContent = getWeatherEmoji(data.weather?.[0]?.main);
  document.getElementById("weatherTemp").textContent = `${Math.round(data.main?.temp ?? 0)}°C`;
  document.getElementById("weatherDesc").textContent = (data.weather?.[0]?.description || "--");
  document.getElementById("weatherLocation").textContent = locationLabel;
  document.getElementById("weatherHumidity").textContent = `${data.main?.humidity ?? "--"}%`;
  document.getElementById("weatherWind").textContent = `${Math.round((data.wind?.speed ?? 0) * 3.6)} km/h`;

  const loadingEl = weatherWidget.querySelector(".weather-loading");
  const contentEl = weatherWidget.querySelector(".weather-content");
  loadingEl.style.display = "none";
  contentEl.style.display = "block";
}

function getWeatherEmoji(main = "") {
  const map = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Fog: "🌫️",
    Haze: "🌫️"
  };
  return map[main] || "🌤️";
}

function showWeatherError(message) {
  const loadingEl = weatherWidget.querySelector(".weather-loading");
  const contentEl = weatherWidget.querySelector(".weather-content");
  contentEl.style.display = "none";
  loadingEl.style.display = "block";
  loadingEl.style.color = "#ef4444";
  loadingEl.textContent = message;
}

// ============================================
// GOOGLE MAPS (callback from Google Maps script tag)
// ============================================

function initMap() {
  const mapEl = document.getElementById("map");
  if (!mapEl) return;

  const defaultCenter = { lat: 40.8398, lng: -74.2765 }; // Caldwell

  map = new google.maps.Map(mapEl, {
    zoom: 12,
    center: defaultCenter,
    styles: [
      { featureType: "all", elementType: "geometry", stylers: [{ color: "#1e293b" }] },
      { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#cbd5e1" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#0f172a" }] }
    ]
  });

  geocoder = new google.maps.Geocoder();

  marker = new google.maps.Marker({
    position: defaultCenter,
    map: map,
    animation: google.maps.Animation.DROP
  });

  // Input: Enter key triggers geocode
  const input = document.getElementById("locationInput");
  if (input) {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        geocodeAddress(input.value);
      }
    });
  }

  // Click on map -> move marker + weather
  map.addListener("click", (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarker(lat, lng);
    getWeatherByCoords(lat, lng, "Selected location");
  });

  // Try to locate user (optional)
  tryLocateUser();
}
window.initMap = initMap;

function geocodeAddress(address) {
  if (!geocoder || !address.trim()) return;

  geocoder.geocode({ address }, (results, status) => {
    if (status === "OK" && results[0]) {
      const loc = results[0].geometry.location;
      const lat = loc.lat();
      const lng = loc.lng();

      map.setCenter(loc);
      map.setZoom(14);
      setMarker(lat, lng);

      // ✅ Sync weather with map location
      getWeatherByCoords(lat, lng, results[0].formatted_address);
    } else {
      alert("Location not found. Try a different place.");
    }
  });
}

function setMarker(lat, lng) {
  const pos = { lat, lng };
  if (marker) marker.setPosition(pos);
  else marker = new google.maps.Marker({ map, position: pos });
}

function tryLocateUser() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      map.setCenter({ lat, lng });
      map.setZoom(14);
      setMarker(lat, lng);
      getWeatherByCoords(lat, lng, "Your current location");
    },
    () => {
      // user denied location; ignore quietly
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

// ============================================
// CHATBOT (UI + simple command system)
// ============================================

function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  if (!chatbotWindow) return;
  chatbotWindow.classList.toggle("active");

  // Focus input when opened
  if (chatbotWindow.classList.contains("active")) {
    setTimeout(() => document.getElementById("chatbotInput")?.focus(), 100);
  }
}
window.toggleChatbot = toggleChatbot;

function closeChatbot() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  if (!chatbotWindow) return;
  chatbotWindow.classList.remove("active");
}
window.closeChatbot = closeChatbot;

function initializeChatbot() {
  const input = document.getElementById("chatbotInput");
  if (!input) return;
  // Extra safety: ensure Enter sends the message
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendChatMessage();
    }
  });
}

function sendChatMessage() {
  const input = document.getElementById("chatbotInput");
  const messagesContainer = document.getElementById("chatbotMessages");
  if (!input || !messagesContainer) return;

  const userText = input.value.trim();
  if (!userText) return;

  // 1. Add User Message
  addMessageToChat(userText, "user-message");
  input.value = "";

  // 2. Generate Bot Response (match longest phrase first so "tell me about your education" matches before "your")
  const lowerText = userText.toLowerCase().trim();
  let botResponse = CONFIG.knowledgeBase["default"];

  const keys = Object.keys(CONFIG.knowledgeBase).filter(k => k !== "default");
  keys.sort((a, b) => b.length - a.length); // longest first

  for (const key of keys) {
    if (lowerText.includes(key)) {
      botResponse = CONFIG.knowledgeBase[key];
      break;
    }
  }

  // 3. Let bot try to control the page (colors, music)
  const controlResult = handleChatbotControl(lowerText, userText);
  if (controlResult?.botResponseOverride) {
    botResponse = controlResult.botResponseOverride;
  }

  // 4. Simulate "Thinking" delay
  setTimeout(() => {
    addMessageToChat(botResponse, "bot-message");
  }, 600);
}
window.sendChatMessage = sendChatMessage;

function addMessageToChat(text, className) {
  const messagesContainer = document.getElementById("chatbotMessages");
  if (!messagesContainer) return;

  const messageDiv = document.createElement("div");
  messageDiv.className = `chat-message ${className}`;
  messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
  messagesContainer.appendChild(messageDiv);

  // Auto-scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Chatbot control: colors + music
function handleChatbotControl(lowerText, originalText) {
  // #region agent log
  debugLogControl("H0", "chatbot_command_received", { lowerText, originalText, hasPlayMusic: typeof window.playBackgroundMusic === "function", hasPauseMusic: typeof window.pauseBackgroundMusic === "function" });
  // #endregion

  // Color control - more flexible matching with typo tolerance
  const colorMap = {
    "blue": "blue",
    "blu": "blue",
    "navy": "navy",
    "purple": "purple",
    "purpl": "purple",
    "violet": "purple",
    "pink": "pink",
    "magenta": "pink",
    "rose": "pink",
    "green": "green",
    "gren": "green",
    "gre": "green",
    "lime": "green",
    "emerald": "green",
    "teal": "teal",
    "aqua": "teal",
    "cyan": "teal",
    "turquoise": "teal",
    "red": "red",
    "rd": "red",
    "crimson": "red",
    "orange": "orange",
    "amber": "orange",
    "yellow": "yellow",
    "gold": "yellow"
  };
  
  const knownColors = ["blue", "navy", "purple", "pink", "green", "teal", "red", "orange", "yellow"];
  let matchedColor = null;
  let matchedVariant = null;
  
  // #region agent log
  debugLogControl("H1", "chatbot_color_checking", { lowerText, colorVariants: Object.keys(colorMap) });
  // #endregion
  
  // First, try to find any color word (with typo tolerance)
  for (const [colorVariant, actualColor] of Object.entries(colorMap)) {
    // Use word boundary or check if it's part of a phrase
    const colorRegex = new RegExp(`\\b${colorVariant}\\b`, 'i');
    if (colorRegex.test(lowerText) || lowerText.includes(colorVariant)) {
      matchedVariant = colorVariant;
      // #region agent log
      debugLogControl("H1", "chatbot_color_variant_detected", { colorVariant, actualColor, lowerText });
      // #endregion
      
      // Check if there's context indicating they want to change colors
      const contextWords = ["background", "color", "colour", "theme", "change", "make", "set", "switch", "turn", "webpage", "page", "site", "to", "be"];
      const hasContext = contextWords.some(word => lowerText.includes(word));
      
      // Also match if it's a direct command like "make it blue", "to blue", "be blue"
      const isDirectCommand = /\b(to|be|make|change|set)\s+\w*\s*(blue|purple|pink|green|red|blu|purpl|gren|gre|rd|pink)\b/i.test(lowerText) ||
                              /\b(blue|purple|pink|green|red|blu|purpl|gren|gre|rd|pink)\s+(theme|color|colour|background)\b/i.test(lowerText);
      
      // #region agent log
      debugLogControl("H1", "chatbot_color_context_check", { colorVariant, actualColor, hasContext, isDirectCommand });
      // #endregion
      
      if (hasContext || isDirectCommand) {
        matchedColor = actualColor;
        // #region agent log
        debugLogControl("H1", "chatbot_color_match_found", { colorVariant, actualColor, hasContext, isDirectCommand });
        // #endregion
        break;
      }
    }
  }
  
  // #region agent log
  if (!matchedColor && matchedVariant) {
    debugLogControl("H1", "chatbot_color_no_context", { matchedVariant, lowerText });
  }
  // #endregion

  if (matchedColor) {
    // #region agent log
    debugLogControl("H1", "chatbot_color_match_found", { matchedColor, text: originalText });
    // #endregion
    const changed = setThemeColor(matchedColor);
    // #region agent log
    debugLogControl("H1", "chatbot_set_theme_color_result", { color: matchedColor, changed, text: originalText });
    // #endregion
    if (changed) {
      return {
        botResponseOverride: `Got it! I changed the site theme to <b>${matchedColor}</b>.`
      };
    }
  }

  // Music control - improved regex patterns (more flexible)
  const musicOnPatterns = [
    /\b(play|start|turn on|resume|enable)\b.*\bmusic\b/i,
    /\bmusic\b.*\b(on|play|start)\b/i,
    /\bplay\b.*\bmusic\b/i,
    /\bstart\b.*\bmusic\b/i
  ];
  
  const musicOffPatterns = [
    /\b(stop|pause|turn off|mute|disable)\b.*\bmusic\b/i,
    /\bmusic\b.*\b(off|stop|pause|mute)\b/i,
    /\bstop\b.*\bmusic\b/i,
    /\bpause\b.*\bmusic\b/i,
    /\bmute\b.*\bmusic\b/i,
    /\bturn off\b.*\bmusic\b/i
  ];
  
  const wantsMusicOn = musicOnPatterns.some(pattern => pattern.test(lowerText));
  const wantsMusicOff = musicOffPatterns.some(pattern => pattern.test(lowerText));

  // #region agent log
  debugLogControl("H2", "chatbot_music_parsing", { wantsMusicOn, wantsMusicOff, hasPlayMusic: typeof window.playBackgroundMusic === "function", hasPauseMusic: typeof window.pauseBackgroundMusic === "function", lowerText });
  // #endregion

  if (wantsMusicOn) {
    if (typeof window.playBackgroundMusic === "function") {
      // #region agent log
      debugLogControl("H2", "chatbot_calling_play_music", { text: originalText });
      // #endregion
      window.playBackgroundMusic();
      return {
        botResponseOverride: "🎵 Music turned <b>on</b> for you!"
      };
    } else {
      // #region agent log
      debugLogControl("H2", "chatbot_play_music_not_available", { text: originalText });
      // #endregion
    }
  }

  if (wantsMusicOff) {
    if (typeof window.pauseBackgroundMusic === "function") {
      // #region agent log
      debugLogControl("H3", "chatbot_calling_pause_music", { text: originalText });
      // #endregion
      window.pauseBackgroundMusic();
      return {
        botResponseOverride: "🔇 Music turned <b>off</b>."
      };
    } else {
      // #region agent log
      debugLogControl("H3", "chatbot_pause_music_not_available", { text: originalText });
      // #endregion
    }
  }

  return null;
}

function setThemeColor(colorKey) {
  // #region agent log
  debugLogControl("H1", "setThemeColor_called", { colorKey });
  // #endregion
  const root = document.documentElement;
  if (!root) {
    // #region agent log
    debugLogControl("H1", "setThemeColor_no_root", { colorKey });
    // #endregion
    return false;
  }

  const themes = {
    blue: {
      "--primary-color": "#6366f1",
      "--secondary-color": "#3b82f6",
      "--accent-color": "#22d3ee",
      "--gradient-1": "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)",
      "--gradient-2": "linear-gradient(135deg, #0ea5e9 0%, #22c55e 100%)"
    },
    purple: {
      "--primary-color": "#8b5cf6",
      "--secondary-color": "#6366f1",
      "--accent-color": "#a855f7",
      "--gradient-1": "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
      "--gradient-2": "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)"
    },
    pink: {
      "--primary-color": "#ec4899",
      "--secondary-color": "#f97316",
      "--accent-color": "#f472b6",
      "--gradient-1": "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
      "--gradient-2": "linear-gradient(135deg, #fb7185 0%, #eab308 100%)"
    },
    green: {
      "--primary-color": "#22c55e",
      "--secondary-color": "#14b8a6",
      "--accent-color": "#84cc16",
      "--gradient-1": "linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)",
      "--gradient-2": "linear-gradient(135deg, #22c55e 0%, #4ade80 100%)"
    },
    red: {
      "--primary-color": "#ef4444",
      "--secondary-color": "#f97316",
      "--accent-color": "#facc15",
      "--gradient-1": "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
      "--gradient-2": "linear-gradient(135deg, #f97316 0%, #facc15 100%)"
    },
    navy: {
      "--primary-color": "#1d4ed8",
      "--secondary-color": "#0f172a",
      "--accent-color": "#38bdf8",
      "--gradient-1": "linear-gradient(135deg, #1d4ed8 0%, #0f172a 100%)",
      "--gradient-2": "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)"
    },
    teal: {
      "--primary-color": "#14b8a6",
      "--secondary-color": "#0f766e",
      "--accent-color": "#2dd4bf",
      "--gradient-1": "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
      "--gradient-2": "linear-gradient(135deg, #2dd4bf 0%, #22c55e 100%)"
    },
    orange: {
      "--primary-color": "#f97316",
      "--secondary-color": "#ea580c",
      "--accent-color": "#fed7aa",
      "--gradient-1": "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
      "--gradient-2": "linear-gradient(135deg, #fb923c 0%, #facc15 100%)"
    },
    yellow: {
      "--primary-color": "#eab308",
      "--secondary-color": "#f59e0b",
      "--accent-color": "#fef9c3",
      "--gradient-1": "linear-gradient(135deg, #eab308 0%, #f59e0b 100%)",
      "--gradient-2": "linear-gradient(135deg, #fde047 0%, #f97316 100%)"
    }
  };

  const theme = themes[colorKey];
  if (!theme) {
    // #region agent log
    debugLogControl("H1", "setThemeColor_invalid_color", { colorKey });
    // #endregion
    return false;
  }

  // #region agent log
  debugLogControl("H1", "setThemeColor_applying", { colorKey, themeKeys: Object.keys(theme) });
  // #endregion
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  // #region agent log
  debugLogControl("H1", "setThemeColor_complete", { colorKey });
  // #endregion
  return true;
}
window.setThemeColor = setThemeColor;

// #region agent log
function debugLogControl(hypothesisId, message, data) {
  fetch("http://127.0.0.1:7242/ingest/df512b59-c458-4821-b065-7e693904603e", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: `log_${Date.now()}_${Math.random().toString(16).slice(2)}`,
      timestamp: Date.now(),
      location: "script.js:chatbot-control",
      runId: "initial-feature",
      hypothesisId,
      message,
      data
    })
  }).catch(() => {});
}
// #endregion

// ============================================
// CONTACT FORM
// ============================================

function initializeContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showFormMessage("Thank you for your message! I'll get back to you soon.", "success");
    form.reset();
  });
}

function showFormMessage(message, type) {
  const existing = document.querySelector(".form-message");
  if (existing) existing.remove();

  const div = document.createElement("div");
  div.className = `form-message ${type}`;
  div.textContent = message;

  div.style.cssText = `
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 10px;
    background: ${type === "success" ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)"};
    color: ${type === "success" ? "#22c55e" : "#ef4444"};
    border: 1px solid ${type === "success" ? "#22c55e" : "#ef4444"};
    text-align: center;
  `;

  document.getElementById("contactForm")?.appendChild(div);
  setTimeout(() => div.remove(), 5000);
}

// ============================================
// RESUME DOWNLOAD
// ============================================

function downloadResume() {
  if (CONFIG.resumeLink && CONFIG.resumeLink !== "#") {
    window.open(CONFIG.resumeLink, "_blank");
  } else {
    alert("Resume link not configured. Update CONFIG.resumeLink in script.js");
  }
}
window.downloadResume = downloadResume;

// ============================================
// GAMES
// ============================================

function initializeGames() {
  initializeTicTacToe();
  initializeSnake();
}

// Tic Tac Toe Game
function initializeTicTacToe() {
  const board = document.getElementById("ticTacToeBoard");
  const status = document.getElementById("ticTacToeStatus");
  const resetBtn = document.getElementById("ticTacToeReset");
  
  if (!board || !status || !resetBtn) return;
  
  let currentPlayer = "X";
  let gameBoard = Array(9).fill("");
  let gameOver = false;
  
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
  
  function checkWinner() {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        return { winner: gameBoard[a], combo };
      }
    }
    if (gameBoard.every(cell => cell !== "")) {
      return { winner: "draw" };
    }
    return null;
  }
  
  function updateDisplay() {
    const cells = board.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
      cell.textContent = gameBoard[index];
      cell.className = "cell";
      if (gameBoard[index] === "X") cell.classList.add("x");
      if (gameBoard[index] === "O") cell.classList.add("o");
    });
  }
  
  function handleCellClick(index) {
    if (gameOver || gameBoard[index] !== "") return;
    
    gameBoard[index] = currentPlayer;
    updateDisplay();
    
    const result = checkWinner();
    if (result) {
      gameOver = true;
      if (result.winner === "draw") {
        status.textContent = "It's a draw!";
      } else {
        status.textContent = `Player ${result.winner} wins!`;
        result.combo.forEach(i => {
          board.querySelectorAll(".cell")[i].classList.add("winner");
        });
      }
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      status.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
  
  function resetGame() {
    currentPlayer = "X";
    gameBoard = Array(9).fill("");
    gameOver = false;
    status.textContent = "Player X's turn";
    updateDisplay();
  }
  
  board.querySelectorAll(".cell").forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(index));
  });
  
  resetBtn.addEventListener("click", resetGame);
}

// Snake Game
function initializeSnake() {
  const canvas = document.getElementById("snakeCanvas");
  const scoreDisplay = document.getElementById("snakeScore");
  const startBtn = document.getElementById("snakeStart");
  const stopBtn = document.getElementById("snakeStop");
  const resetBtn = document.getElementById("snakeReset");
  
  if (!canvas || !scoreDisplay || !startBtn || !stopBtn || !resetBtn) return;
  
  // Set canvas size (responsive via CSS)
  function setCanvasSize() {
    const container = canvas.parentElement;
    const maxSize = Math.min(400, container.clientWidth - 40);
    canvas.width = maxSize;
    canvas.height = maxSize;
    return canvas.width / 20; // gridSize is 20
  }
  
  const ctx = canvas.getContext("2d");
  const gridSize = 20;
  let tileCount = setCanvasSize();
  
  // Handle window resize
  window.addEventListener("resize", () => {
    tileCount = setCanvasSize();
    drawGame();
  });
  
  let snake = [{ x: 10, y: 10 }];
  let food = {};
  let dx = 0;
  let dy = 0;
  let score = 0;
  let gameRunning = false;
  let gameLoop = null;
  
  function randomFood() {
    food = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
  }
  
  function drawGame() {
    clearCanvas();
    drawSnake();
    drawFood();
    drawScore();
  }
  
  function clearCanvas() {
    ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  function drawSnake() {
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
    snake.forEach((segment, index) => {
      if (index === 0) {
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
      } else {
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--secondary-color");
      }
      ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
    });
  }
  
  function drawFood() {
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--accent-color");
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
  }
  
  function drawScore() {
    scoreDisplay.textContent = score;
  }
  
  function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    
    // Check wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      gameOver();
      return;
    }
    
    // Check self collision
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      gameOver();
      return;
    }
    
    snake.unshift(head);
    
    // Check food collision
    if (head.x === food.x && head.y === food.y) {
      score++;
      randomFood();
    } else {
      snake.pop();
    }
  }
  
  function updateButtonStates() {
    if (gameRunning) {
      startBtn.style.display = "none";
      stopBtn.style.display = "inline-block";
    } else {
      startBtn.style.display = "inline-block";
      stopBtn.style.display = "none";
    }
  }
  
  function gameOver() {
    gameRunning = false;
    if (gameLoop) {
      clearInterval(gameLoop);
      gameLoop = null;
    }
    updateButtonStates();
    alert(`Game Over! Your score: ${score}`);
    resetGame();
  }
  
  function stopGame() {
    gameRunning = false;
    if (gameLoop) {
      clearInterval(gameLoop);
      gameLoop = null;
    }
    updateButtonStates();
  }
  
  function resetGame() {
    snake = [{ x: 10, y: 10 }];
    dx = 0;
    dy = 0;
    score = 0;
    gameRunning = false;
    if (gameLoop) {
      clearInterval(gameLoop);
      gameLoop = null;
    }
    updateButtonStates();
    randomFood();
    drawGame();
  }
  
  function startGame() {
    if (gameRunning) return;
    
    // Initialize direction if not set
    if (dx === 0 && dy === 0) {
      dx = 1;
      dy = 0;
    }
    
    gameRunning = true;
    updateButtonStates();
    gameLoop = setInterval(() => {
      moveSnake();
      drawGame();
    }, 150);
  }
  
  function handleKeyPress(e) {
    // Only process arrow keys if game is running
    if (!gameRunning) return;
    
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    
    const keyPressed = e.keyCode;
    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingRight = dx === 1;
    const goingLeft = dx === -1;
    
    // Prevent default arrow key scrolling
    if ([LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY].includes(keyPressed)) {
      e.preventDefault();
    }
    
    if (keyPressed === LEFT_KEY && !goingRight) {
      dx = -1;
      dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
      dx = 0;
      dy = -1;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
      dx = 1;
      dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
      dx = 0;
      dy = 1;
    }
  }
  
  startBtn.addEventListener("click", startGame);
  stopBtn.addEventListener("click", stopGame);
  resetBtn.addEventListener("click", resetGame);
  document.addEventListener("keydown", handleKeyPress);
  
  updateButtonStates();
  
  randomFood();
  drawGame();
}
