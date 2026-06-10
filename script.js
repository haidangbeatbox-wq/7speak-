/* -------------------------------------------------------------
 * 7Speak App Script (Pure ES6 JavaScript)
 * Purpose: Manage interactive catalog, search/filter, theme switches,
 *          and scroll-triggered animations.
 * Author: Antigravity AI Pair
 * ------------------------------------------------------------- */

// 1. ENGLISH PDF RESOURCES DATA DIRECTORY
// To add new materials, simply append a new object to this array. No databases needed.
const PDF_CATALOG = [
  {
    id: 1,
    title: "English Speaking Practice: After the Exam",
    description: "Essential vocabulary and conversation structures to discuss exam performance, results, and future steps with friends or teachers.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/conversation.svg",
    pdfUrl: "pdf/AFTER EXAM .pdf",
    pages: 12,
    downloads: 1240
  },
  {
    id: 2,
    title: "English Practice: Ordering Black Coffee",
    description: "Learn vocabulary, phrasal verbs, and dialogues for cafe settings, ordering drinks, and socializing in coffee shops.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/conversation.svg",
    pdfUrl: "pdf/BẢN BLACK COFFEE .pdf",
    pages: 8,
    downloads: 942
  },
  {
    id: 3,
    title: "Speaking Topic: Children and Childhood",
    description: "Common IELTS and daily speaking questions, vocabulary, and model answers related to children, parenting, and childhood memories.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/conversation.svg",
    pdfUrl: "pdf/CHILDREN.pdf",
    pages: 10,
    downloads: 1530
  },
  {
    id: 4,
    title: "Daily Speaking Topic: Exercise & Physical Fitness",
    description: "Useful phrases, idioms, and discussion prompts about fitness routines, sports, and maintaining a healthy lifestyle.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/conversation.svg",
    pdfUrl: "pdf/EXERCISE EVERYDAY.pdf",
    pages: 14,
    downloads: 1124
  },
  {
    id: 5,
    title: "Speaking Guide: Describing Your Hometown",
    description: "Master descriptions of cities, countryside, transport, and local culture. Perfect preparation for IELTS Speaking Part 1 hometown questions.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/HOMETOWN .pdf",
    pages: 12,
    downloads: 1780
  },
  {
    id: 6,
    title: "IELTS Speaking Part 1: Watches & Time Management",
    description: "Comprehensive vocabulary, idioms, and Band 8.0+ model answers for IELTS Speaking Part 1 questions on wearing watches and managing time.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 - WATCHES.pdf",
    pages: 15,
    downloads: 2450
  },
  {
    id: 7,
    title: "Daily English: Describing Favorites",
    description: "How to express preferences, talk about your favorite movies, books, foods, and hobbies naturally and fluently.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/conversation.svg",
    pdfUrl: "pdf/MAY FAVORITE .pdf",
    pages: 10,
    downloads: 890
  },
  {
    id: 8,
    title: "IELTS Speaking Part 1: Architecture & Views",
    description: "Essential vocabulary and model answers for IELTS Speaking Part 1 questions about views from windows, skyscrapers, and architecture.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/PART 1 VIEW.pdf",
    pages: 16,
    downloads: 1345
  },
  {
    id: 9,
    title: "English Speaking: Music & Musical Instruments",
    description: "Speak fluently about genres, instruments, concerts, and how music influences emotions. Great for IELTS and daily conversations.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/conversation.svg",
    pdfUrl: "pdf/PART MUSIC .pdf",
    pages: 12,
    downloads: 955
  },
  {
    id: 10,
    title: "Speaking Practice: Describe a Photo (TOEIC Style)",
    description: "Targeted practice materials for reading aloud, describing pictures, and responding to questions in speaking tests.",
    category: "part2",
    categoryLabel: "IELTS Part 2",
    coverUrl: "assets/covers/toeic.svg",
    pdfUrl: "pdf/PRACTICE SPEAKING - Copy.pdf",
    pages: 14,
    downloads: 620
  },
  {
    id: 11,
    title: "Ultimate Daily English Speaking Practice Guide",
    description: "Comprehensive workbook featuring varied prompts, self-check rubrics, and intensive exercises to build English fluency.",
    category: "part3",
    categoryLabel: "IELTS Part 3",
    coverUrl: "assets/covers/pronunciation.svg",
    pdfUrl: "pdf/PRACTICE SPEAKING.pdf",
    pages: 50,
    downloads: 4120
  },
  {
    id: 12,
    title: "Speaking Topic: Family, Friends & Relationships",
    description: "Learn terms of endearment, descriptive adjectives, and structured templates to talk about relationships, family values, and close friendships.",
    category: "part3",
    categoryLabel: "IELTS Part 3",
    coverUrl: "assets/covers/vocabulary.svg",
    pdfUrl: "pdf/THE IMPORTANT OF FAMILY AND FIREND .pdf",
    pages: 15,
    downloads: 1845
  },
  {
    id: 13,
    title: "Motivations & Speaking Habits Guide",
    description: "Construct positive habits, expressions of diligence, and routines to keep practicing English speaking effectively day by day.",
    category: "part3",
    categoryLabel: "IELTS Part 3",
    coverUrl: "assets/covers/grammar.svg",
    pdfUrl: "pdf/TRY MY BEST EVERY DAY.pdf",
    pages: 18,
    downloads: 1290
  },
  {
    id: 14,
    title: "IELTS Speaking Part 2: Describing a Funny Picture",
    description: "Band 8.5 guide on how to describe an amusing image or painting, structure your 2-minute speech, and use advanced humor-related vocabulary.",
    category: "part2",
    categoryLabel: "IELTS Part 2",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/part 2 speaking FUNNY PICTURE .pdf",
    pages: 15,
    downloads: 2110
  },
  {
    id: 15,
    title: "IELTS Speaking Part 1: Mirrors",
    description: "Learn vocabulary, common Q&As, and response strategies for IELTS Speaking Part 1 questions on mirrors and self-reflection.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – MIRRORS.pdf",
    pages: 15,
    downloads: 780
  },
  {
    id: 16,
    title: "IELTS Speaking Part 1: Public Gardens & Parks",
    description: "Useful vocabulary, collocations, and high-scoring answers to speak naturally about visiting public parks and gardens.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – PUBLIC GARDENS AND PARKS.pdf",
    pages: 15,
    downloads: 690
  },
  {
    id: 17,
    title: "IELTS Speaking Part 1: Websites & Internet Habits",
    description: "Comprehensive vocabulary guide and model responses to talk about your favorite websites, internet usage, and online study tools.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – WEBSITES.pdf",
    pages: 15,
    downloads: 820
  },
  {
    id: 18,
    title: "IELTS Speaking Part 1: Cars & Driving",
    description: "Learn vocabulary, phrasal verbs, and sample responses to talk about cars, public transport, and driving habits.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – CARS.pdf",
    pages: 12,
    downloads: 890
  },
  {
    id: 19,
    title: "IELTS Speaking Part 1: Clothing & Fashion",
    description: "A complete guide to discussing fashion trends, daily clothing preferences, and shopping habits with native structures.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – CLOTHING.pdf",
    pages: 14,
    downloads: 750
  },
  {
    id: 20,
    title: "IELTS Speaking Part 1: Coffee & Cafe Culture",
    description: "Detailed study guide on describing coffee habits, visiting cafes, and socializing over hot beverages.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – COFFEE.pdf",
    pages: 15,
    downloads: 940
  },
  {
    id: 21,
    title: "IELTS Speaking Part 1: Dreams & Future Ambitions",
    description: "Learn terms and sentence structures to discuss childhood dreams, sleep dreams, and career goals fluently.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – DREAMS & AMBITIONS.pdf",
    pages: 16,
    downloads: 820
  },
  {
    id: 22,
    title: "IELTS Speaking Part 1: Films, Movies & Cinemas",
    description: "Essential vocabulary for movie genres, talking about going to the cinema, and describing your favorite films.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – FILMS & CINEMAS.pdf",
    pages: 14,
    downloads: 1100
  },
  {
    id: 23,
    title: "IELTS Speaking Part 1: Music Genres & Instruments",
    description: "Enhance your responses when talking about musical instruments, local concerts, and how music affects your mood.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – MUSIC.pdf",
    pages: 12,
    downloads: 950
  },
  {
    id: 24,
    title: "IELTS Speaking Part 1: Shopping & Consumer Habits",
    description: "Speak confidently about online shopping, malls, purchasing decisions, and seasonal discounts.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – SHOPPING.pdf",
    pages: 15,
    downloads: 830
  },
  {
    id: 25,
    title: "IELTS Speaking Part 1: Social Media & Networking",
    description: "A comprehensive guide to talking about Instagram, TikTok, screen time, and virtual connections.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – SOCIAL MEDIA.pdf",
    pages: 14,
    downloads: 1200
  },
  {
    id: 26,
    title: "IELTS Speaking Part 1: Teachers & School Memories",
    description: "Vocabulary and high-scoring answers to describe your favorite teachers and your school experiences.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – TEACHERS.pdf",
    pages: 15,
    downloads: 780
  },
  {
    id: 27,
    title: "IELTS Speaking Part 1: Tidiness & Organization",
    description: "Structured templates to discuss keeping your room clean, personal organization habits, and tidiness.",
    category: "part1",
    categoryLabel: "IELTS Part 1",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/IELTS SPEAKING PART 1 – TIDINESS.pdf",
    pages: 12,
    downloads: 670
  },
  {
    id: 28,
    title: "IELTS Speaking Part 2: Cue Card Practice Book (DOCX)",
    description: "A Word Document workbook compiling several high-yield IELTS Speaking Part 2 cue cards and vocabulary cheats.",
    category: "part2",
    categoryLabel: "IELTS Part 2",
    coverUrl: "assets/covers/ielts.svg",
    pdfUrl: "pdf/part 2 speaking.docx",
    pages: 25,
    downloads: 1350
  }
];

// State variables
let currentCategory = "all";
let searchQuery = "";

// 2. INITIALIZE THE THEME ENGINE (DARK/LIGHT SYSTEM)
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // Set theme to saved value or default to system dark mode preference
  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    // Default to dark mode for modern high-tech visual branding
    const targetTheme = systemPrefersDark ? "dark" : "dark"; // Force dark theme by default, user can toggle
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  }
}

// Immediately invoke theme check to prevent visual flash
initTheme();

// 3. APPS FUNCTIONALITY & EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM Elements
  const themeToggleBtn = document.getElementById("themeToggle");
  const mobileMenuToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const searchInput = document.getElementById("searchInput");
  const categoryCards = document.querySelectorAll(".category-card");
  const libraryGrid = document.getElementById("libraryGrid");
  const docCount = document.getElementById("docCount");
  const totalCount = document.getElementById("totalCount");
  const backToTopBtn = document.getElementById("backToTop");
  const contactForm = document.getElementById("contactForm");

  // Dynamic initialization values
  totalCount.textContent = PDF_CATALOG.length;
  renderLibrary();

  // A. Theme Switcher Handler
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
    });
  }

  // B. Responsive Mobile Menu
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("mobile-open");
      
      // Update hamburger icon visual status (Optional toggle effect)
      const isExpanded = navMenu.classList.contains("mobile-open");
      mobileMenuToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("mobile-open") && !navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove("mobile-open");
      }
    });
  }

  // Close mobile navigation drawer when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("mobile-open");
      
      // Set active visual state
      navLinks.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // C. Live Search Feature
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderLibrary();
    });
  }

  // D. Category Filters
  categoryCards.forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      
      // Set active layout states
      categoryCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      
      currentCategory = category;
      renderLibrary();
      
      // Smooth scroll back to library view context
      const librarySection = document.getElementById("pdfs");
      if (librarySection) {
        const offset = 80; // height of header
        const elementPosition = librarySection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // E. Dynamic Rendering Engine
  function renderLibrary() {
    if (!libraryGrid) return;
    
    // Filter dataset based on current search and category conditions
    const filteredPDFs = PDF_CATALOG.filter(pdf => {
      const matchesCategory = currentCategory === "all" || pdf.category === currentCategory;
      const matchesSearch = pdf.title.toLowerCase().includes(searchQuery) || 
                            pdf.description.toLowerCase().includes(searchQuery) ||
                            pdf.categoryLabel.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    // Update result counters
    if (docCount) docCount.textContent = filteredPDFs.length;

    // Clear existing children
    libraryGrid.innerHTML = "";

    if (filteredPDFs.length === 0) {
      // Empty Search/Filter State Markup
      libraryGrid.innerHTML = `
        <div class="empty-library reveal active">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <h3>No PDF files found</h3>
          <p>We couldn't find anything matching "${searchQuery}". Try modifying your search or select another category.</p>
        </div>
      `;
      return;
    }

    // Append dynamic cards
    filteredPDFs.forEach(pdf => {
      const card = document.createElement("article");
      card.className = "pdf-card reveal";
      
      // Dynamic rendering with responsive image loading strategies
      card.innerHTML = `
        <div class="pdf-cover-wrapper">
          <img 
            data-src="${pdf.coverUrl}" 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 280'%3E%3Crect width='400' height='280' fill='%231E293B'/%3E%3C/svg%3E"
            alt="${pdf.title} Cover" 
            class="pdf-cover lazy-load" 
          />
          <span class="pdf-badge">${pdf.categoryLabel}</span>
        </div>
        <div class="pdf-info">
          <h3 class="pdf-title">${pdf.title}</h3>
          <p class="pdf-desc">${pdf.description}</p>
          <div class="pdf-actions">
            <a href="${pdf.pdfUrl}" target="_blank" class="btn btn-secondary btn-card view-pdf-btn" data-id="${pdf.id}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View
            </a>
            <a href="${pdf.pdfUrl}" download class="btn btn-primary btn-card download-pdf-btn" data-id="${pdf.id}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download
            </a>
          </div>
        </div>
      `;

      libraryGrid.appendChild(card);
    });

    // Lazy load observer registration
    initLazyLoading();

    // Trigger reveal checks immediately for new items
    triggerScrollReveals();
  }

  // F. Lazy Loading Image Optimization
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll(".lazy-load");
    
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy-load");
            imageObserver.unobserve(image);
          }
        });
      });
      lazyImages.forEach(image => imageObserver.observe(image));
    } else {
      // Fallback
      lazyImages.forEach(image => {
        image.src = image.dataset.src;
      });
    }
  }

  // G. Scroll-Triggered Reveal Animations
  const revealElements = document.querySelectorAll(".reveal");

  function triggerScrollReveals() {
    const elementsToReveal = document.querySelectorAll(".reveal:not(.active)");
    const triggerBottom = (window.innerHeight / 5) * 4.5; // Trigger early for smooth flow
    
    elementsToReveal.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        el.classList.add("active");
      }
    });
  }

  // Call on load and on scroll
  window.addEventListener("scroll", triggerScrollReveals);
  triggerScrollReveals(); // Init triggers

  // H. Back to Top Button Toggle
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // I. Contact Form Handler (Mock visual feedback)
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      
      // Visual feedback loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" style="animation: spin 1s linear infinite; width: 18px; height: 18px;" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="opacity: 0.25;"></circle>
          <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" style="opacity: 0.75;"></path>
        </svg>
        Sending...
      `;

      // Mock API delay
      setTimeout(() => {
        submitBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 18px; height: 18px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Message Sent!
        `;
        submitBtn.style.background = "linear-gradient(135deg, #10B981 0%, #059669 100%)"; // Success emerald gradient
        
        // Reset form
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = ""; // Restore default primary styling
        }, 3000);
      }, 1500);
    });
  }

  // Add styles for the spin animation in JavaScript context
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // Monitor view/download events (Simulation logic for interaction tracking)
  document.body.addEventListener("click", (e) => {
    const viewBtn = e.target.closest(".view-pdf-btn");
    const downloadBtn = e.target.closest(".download-pdf-btn");
    
    if (viewBtn) {
      const id = parseInt(viewBtn.dataset.id);
      const pdfItem = PDF_CATALOG.find(p => p.id === id);
      if (pdfItem) {
        console.log(`User viewing: ${pdfItem.title}`);
      }
    }
    
    if (downloadBtn) {
      const id = parseInt(downloadBtn.dataset.id);
      const pdfItem = PDF_CATALOG.find(p => p.id === id);
      if (pdfItem) {
        pdfItem.downloads++;
        console.log(`User downloaded: ${pdfItem.title}. New downloads: ${pdfItem.downloads}`);
      }
    }
  });
});
