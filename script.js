// ============================================
// CONFIGURATION (edit only this section)
// ============================================

const CONFIG = {
    userName: "Digvijay Simkhada",
    userTitle: "Computer Science Student | Honors Program",
    userEmail: "dsimkhada@caldwell.edu",
    userPhone: "+1 (475) 257-2067",
    userLocation: "Caldwell, NJ",
    profileImage: "./profile.jpg",
  
    aboutText: `I'm a dedicated Computer Science student at Caldwell University, currently pursuing my Bachelor's degree with a perfect 4.0 GPA in the Honors Program.
  With a passion for programming, design, and AI, I've worked on various projects including home chef booking apps, face detection systems, and voice assistants.
  I'm also a campus-certified tutor, helping fellow students excel in programming.`,
  
    yearsExperience: "2+",
    projectsCount: "4+",
    clientsCount: "20+",
  
    // Weather API
    weatherAPIKey: "b274ffcf25df2f311d16051068ced176",
    defaultLocation: "Caldwell, NJ",
  
    // Resume
    resumeLink: "resume.pdf",
  
    // Chatbot KB (simple + fast)
    knowledgeBase: {
      education:
        "B.S. in Computer Science (Honors Program), Caldwell University — 4.0 GPA — Expected May 2028",
      experience:
        "Computer Science Tutor at Caldwell University; Marketing Staff at Earthbound Expeditions; High School Tutor at Malpi Institute",
      projects: ["Chef on Call", "Face Filter", "Voice Assistant", "Face Detection"],
      skills: ["Python", "HTML/CSS", "Figma", "TensorFlow", "OpenCV", "Wireframing", "Responsive Web", "Canva"]
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
  // CHATBOT (stable with your inline onclick)
  // ============================================
  
  function initializeChatbot() {
    const toggle = document.getElementById("chatbotToggle");
    const windowEl = document.getElementById("chatbotWindow");
    const closeBtn = document.getElementById("chatbotClose");
    const sendBtn = document.getElementById("chatbotSend");
    const input = document.getElementById("chatbotInput");
  
    if (!toggle || !windowEl) return;
  
    // Add listeners even though HTML has onclick (safe)
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleChatbot();
    });
  
    closeBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeChatbot();
    });
  
    sendBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      sendChatMessage();
    });
  
    input?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendChatMessage();
      }
    });
  }
  
  function toggleChatbot() {
    const windowEl = document.getElementById("chatbotWindow");
    const input = document.getElementById("chatbotInput");
    if (!windowEl) return;
  
    windowEl.classList.toggle("active");
    if (windowEl.classList.contains("active")) {
      setTimeout(() => input?.focus(), 120);
    }
  }
  
  function closeChatbot() {
    const windowEl = document.getElementById("chatbotWindow");
    windowEl?.classList.remove("active");
  }
  
  function sendChatMessage() {
    const input = document.getElementById("chatbotInput");
    const message = input?.value?.trim();
    if (!message) return;
  
    addChatMessage(message, "user");
    input.value = "";
  
    setTimeout(() => addChatMessage(getBotResponse(message), "bot"), 450);
  }
  
  function addChatMessage(message, type) {
    const container = document.getElementById("chatbotMessages");
    if (!container) return;
  
    const msgEl = document.createElement("div");
    msgEl.className = `chat-message ${type}-message`;
  
    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = message;
  
    msgEl.appendChild(content);
    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
  }
  
  function getBotResponse(message) {
    const m = message.toLowerCase();
    const kb = CONFIG.knowledgeBase;
  
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)$/.test(m)) {
      return `Hi! Ask me about ${CONFIG.userName}'s education, experience, skills, projects, or contact info.`;
    }
    if (/contact|email|phone|reach/.test(m)) {
      return `📧 ${CONFIG.userEmail}\n📱 ${CONFIG.userPhone}\n📍 ${CONFIG.userLocation}`;
    }
    if (/education|university|gpa|honors/.test(m)) return kb.education;
    if (/experience|work|job|tutor|marketing/.test(m)) return kb.experience;
    if (/projects|portfolio|built/.test(m)) return `Projects: ${kb.projects.join(", ")}.`;
    if (/skills|tech|stack/.test(m)) return `Skills: ${kb.skills.join(", ")}.`;
    if (/resume|cv/.test(m)) return `Click “Download Resume” or open: ${CONFIG.resumeLink}`;
  
    return `Try asking: "What projects did you build?" or "How can I contact you?"`;
  }
  
  window.toggleChatbot = toggleChatbot;
  window.closeChatbot = closeChatbot;
  window.sendChatMessage = sendChatMessage;
  
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
  