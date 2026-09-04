/**
 * ==========================================================================
 * SHUBHAM AGRAWAL - WEB DESIGNER PORTFOLIO
 * Main JavaScript Controller
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. Project Case Studies Data Store ---
  const projectDatabase = {
    'latelier-jewelry': {
      title: "L'ATELIER — Luxury Jewelry Mobile Web App & UI System",
      category: 'UI Design & E-Commerce',
      type: 'UI Design',
      role: 'Web Designer & UI Designer',
      tools: ['Figma', 'Mobile-First UI', 'HTML5', 'CSS3', 'Bootstrap', 'AI Tools'],
      figmaUrl: 'https://www.figma.com/design/Ss1VP8uqGTsVwOo7tXH2pc/Untitled?node-id=499-4958&t=cGJ9xKxOJ8Jehy4Z-1',
      figmaEmbed: 'https://embed.figma.com/design/Ss1VP8uqGTsVwOo7tXH2pc/Untitled?embed-host=share&node-id=499-4958&page-selector=1',
      image: 'assets/images/project-latelier-jewelry.png',
      overview: "L'ATELIER is an end-to-end luxury fine jewelry mobile web application and comprehensive Figma design system. The project translates the exclusivity, warmth, and refined tactile elegance of high-end haute joaillerie shopping into an intuitive, high-converting digital mobile interface.",
      approach: "Adopted a mobile-first, editorial design direction featuring high-contrast black and warm ivory tones, serif accent typography, and generous negative space. Structured an intuitive 5-screen core workflow: customer drawer navigation, storefront home showcase with diamond necklace hero, product catalog grid, multi-parameter price and gender filter sheets, and VIP consultation appointment booking.",
      challenges: "Balancing high-resolution luxury product photography with mobile usability, designing granular multi-tier price filters on touch screens, and creating a private, reassuring VIP appointment booking experience.",
      solution: "Engineered clean modular jewelry product cards with instant wishlist tags, slide-over filter drawers with real-time piece counters, quick search, and an accessible bottom navigation bar (Home, Wishlist, Plan, Cart) coupled with a discreet consultation modal.",
      responsive: "Meticulously prototyped in Figma with auto-layout constraints and scalable typography, verified across modern mobile screen dimensions (375px to 430px) as well as tablet and desktop viewports.",
      result: "Delivered a captivating, cohesive luxury shopping experience that elevates brand prestige, streamlines fine jewelry discovery, and provides a clear blueprint for design-to-HTML implementation."
    },
    'apex-corp': {
      title: "L'ATELIER — Luxury Jewelry Mobile Web App & UI System",
      category: 'UI Design & E-Commerce',
      type: 'UI Design',
      role: 'Web Designer & UI Designer',
      tools: ['Figma', 'Mobile-First UI', 'HTML5', 'CSS3', 'Bootstrap', 'AI Tools'],
      figmaUrl: 'https://www.figma.com/design/Ss1VP8uqGTsVwOo7tXH2pc/Untitled?node-id=499-4958&t=cGJ9xKxOJ8Jehy4Z-1',
      figmaEmbed: 'https://embed.figma.com/design/Ss1VP8uqGTsVwOo7tXH2pc/Untitled?embed-host=share&node-id=499-4958&page-selector=1',
      image: 'assets/images/project-latelier-jewelry.png',
      overview: "L'ATELIER is an end-to-end luxury fine jewelry mobile web application and comprehensive Figma design system. The project translates the exclusivity, warmth, and refined tactile elegance of high-end haute joaillerie shopping into an intuitive, high-converting digital mobile interface.",
      approach: "Adopted a mobile-first, editorial design direction featuring high-contrast black and warm ivory tones, serif accent typography, and generous negative space. Structured an intuitive 5-screen core workflow: customer drawer navigation, storefront home showcase with diamond necklace hero, product catalog grid, multi-parameter price and gender filter sheets, and VIP consultation appointment booking.",
      challenges: "Balancing high-resolution luxury product photography with mobile usability, designing granular multi-tier price filters on touch screens, and creating a private, reassuring VIP appointment booking experience.",
      solution: "Engineered clean modular jewelry product cards with instant wishlist tags, slide-over filter drawers with real-time piece counters, quick search, and an accessible bottom navigation bar (Home, Wishlist, Plan, Cart) coupled with a discreet consultation modal.",
      responsive: "Meticulously prototyped in Figma with auto-layout constraints and scalable typography, verified across modern mobile screen dimensions (375px to 430px) as well as tablet and desktop viewports.",
      result: "Delivered a captivating, cohesive luxury shopping experience that elevates brand prestige, streamlines fine jewelry discovery, and provides a clear blueprint for design-to-HTML implementation."
    },
    'bhumija-lifesciences': {
      title: 'Bhumija Lifesciences — Herbal Wellness & E-Commerce Website',
      category: 'E-Commerce & Web Design',
      type: 'Web Design',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://bhumijalifesciences.com/',
      image: 'assets/images/project-bhumija-lifesciences.png',
      overview: 'Bhumija Lifesciences is an Ayurvedic and herbal wellness brand specializing in pure organic health supplements, herbal juices, and wellness formulations. Designed a high-converting, trust-building direct-to-consumer e-commerce storefront that articulates product purity, simplifies multi-category health navigation, and delivers an effortless checkout and consultation experience.',
      approach: 'Created an organic wellness visual language with nature-inspired greens, crisp typography, and high-impact product imagery. Structured a clear visual hierarchy including a limited-time promo banner, intuitive mega-navigation, Sea Buckthorn hero showcase with promotional discount callouts, and a 10-point purity trust badge system.',
      challenges: 'Organizing an extensive catalog of Ayurvedic supplements across distinct health concerns without overwhelming visitors, while conveying clinical purity and facilitating instant customer consultations.',
      solution: 'Designed health-concern category shortcuts, transparent offer price badges with percentage savings, prominent trust indicators (Chemical-Free, Non-Synthetic, Pure Ayurveda), and accessible sticky WhatsApp expert consultation channels.',
      responsive: 'Built with mobile-first responsive architecture using Bootstrap and custom CSS grids. Rigorously optimized across mobile, tablet, and desktop viewports for swift load performance and touch-friendly e-commerce purchasing interactions.',
      result: 'Delivered an engaging, high-performance e-commerce web design that elevated brand authority, streamlined wellness product discovery, and boosted customer purchasing confidence.'
    },
    'stride-saas': {
      title: 'Bhumija Lifesciences — Herbal Wellness & E-Commerce Website',
      category: 'E-Commerce & Web Design',
      type: 'Web Design',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://bhumijalifesciences.com/',
      image: 'assets/images/project-bhumija-lifesciences.png',
      overview: 'Bhumija Lifesciences is an Ayurvedic and herbal wellness brand specializing in pure organic health supplements, herbal juices, and wellness formulations. Designed a high-converting, trust-building direct-to-consumer e-commerce storefront that articulates product purity, simplifies multi-category health navigation, and delivers an effortless checkout and consultation experience.',
      approach: 'Created an organic wellness visual language with nature-inspired greens, crisp typography, and high-impact product imagery. Structured a clear visual hierarchy including a limited-time promo banner, intuitive mega-navigation, Sea Buckthorn hero showcase with promotional discount callouts, and a 10-point purity trust badge system.',
      challenges: 'Organizing an extensive catalog of Ayurvedic supplements across distinct health concerns without overwhelming visitors, while conveying clinical purity and facilitating instant customer consultations.',
      solution: 'Designed health-concern category shortcuts, transparent offer price badges with percentage savings, prominent trust indicators (Chemical-Free, Non-Synthetic, Pure Ayurveda), and accessible sticky WhatsApp expert consultation channels.',
      responsive: 'Built with mobile-first responsive architecture using Bootstrap and custom CSS grids. Rigorously optimized across mobile, tablet, and desktop viewports for swift load performance and touch-friendly e-commerce purchasing interactions.',
      result: 'Delivered an engaging, high-performance e-commerce web design that elevated brand authority, streamlined wellness product discovery, and boosted customer purchasing confidence.'
    },
    'flexo-spaces': {
      title: 'Flexo — Coworking & Managed Office Spaces Platform',
      category: 'Commercial PropTech & Web Design',
      type: 'Responsive Websites',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://www.flexospaces.com/',
      image: 'assets/images/project-flexo-spaces.png',
      overview: 'Flexo is India’s premier coworking and managed office discovery network connecting startups, freelancers, and enterprise corporations to flexible workspaces across major metros including Mumbai, Bengaluru, Delhi NCR, Hyderabad, and Pune. The project focused on architecting a conversion-optimized web portal featuring intuitive workspace search, immersive office imagery, and frictionless booking inquiry pipelines.',
      approach: 'Crafted a modern, professional corporate aesthetic with warm energetic orange accents (#f76900), deep architectural neutrals, and crisp typography. Designed a prominent multi-parameter search widget front-and-center (space type, city location, capacity), complemented by an enterprise partner trust reel and interactive city workspace cards.',
      challenges: 'Presenting complex workspace inventories (private cabins, meeting rooms, dedicated desks, managed enterprise suites) across dozens of cities without cluttering the viewport, while making commercial real estate discovery fast, intuitive, and accessible on mobile devices.',
      solution: 'Designed streamlined search filters, visual city destination cards with micro-hover states, transparent space specifications, and sticky multi-channel contact touchpoints (phone, WhatsApp, and inquiry modal) to maximize conversion rates.',
      responsive: 'Engineered with mobile-first responsive architecture using Bootstrap and custom CSS grid layouts. Rigorously optimized for seamless touch navigation, responsive image sizing, and smooth performance across mobile smartphones, tablets, and desktop displays.',
      result: 'Delivered an authoritative, high-converting commercial property platform that empowers businesses to discover and lease flexible offices with confidence and ease.'
    },
    'lumina-care': {
      title: 'Flexo — Coworking & Managed Office Spaces Platform',
      category: 'Commercial PropTech & Web Design',
      type: 'Responsive Websites',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://www.flexospaces.com/',
      image: 'assets/images/project-flexo-spaces.png',
      overview: 'Flexo is India’s premier coworking and managed office discovery network connecting startups, freelancers, and enterprise corporations to flexible workspaces across major metros including Mumbai, Bengaluru, Delhi NCR, Hyderabad, and Pune. The project focused on architecting a conversion-optimized web portal featuring intuitive workspace search, immersive office imagery, and frictionless booking inquiry pipelines.',
      approach: 'Crafted a modern, professional corporate aesthetic with warm energetic orange accents (#f76900), deep architectural neutrals, and crisp typography. Designed a prominent multi-parameter search widget front-and-center (space type, city location, capacity), complemented by an enterprise partner trust reel and interactive city workspace cards.',
      challenges: 'Presenting complex workspace inventories (private cabins, meeting rooms, dedicated desks, managed enterprise suites) across dozens of cities without cluttering the viewport, while making commercial real estate discovery fast, intuitive, and accessible on mobile devices.',
      solution: 'Designed streamlined search filters, visual city destination cards with micro-hover states, transparent space specifications, and sticky multi-channel contact touchpoints (phone, WhatsApp, and inquiry modal) to maximize conversion rates.',
      responsive: 'Engineered with mobile-first responsive architecture using Bootstrap and custom CSS grid layouts. Rigorously optimized for seamless touch navigation, responsive image sizing, and smooth performance across mobile smartphones, tablets, and desktop displays.',
      result: 'Delivered an authoritative, high-converting commercial property platform that empowers businesses to discover and lease flexible offices with confidence and ease.'
    },
    'nayyar-fashion': {
      title: "Nayyar Fashion — Exclusive Women's Fashion B2B Wholesale Platform",
      category: 'Fashion E-Commerce & B2B Web Design',
      type: 'Web Design',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://nayyarfashion.nl/',
      image: 'assets/images/project-nayyar-fashion.png',
      overview: "Nayyar Fashion is an established fashion organization founded in 1994 opposite the World Fashion Centre in Amsterdam, Netherlands, featuring an expansive 550 m² showroom. The brand operates exclusively business-to-business, supplying premium women's collections to boutiques and retail stockists across Europe. The web design elevates their showroom into an editorial digital gateway featuring multilingual navigation, protected wholesale access, and high-impact lookbooks.",
      approach: "Adopted a high-fashion editorial aesthetic with bold serif and modern sans-serif typography, signature calligraphy logo branding, striking dual-angle model photography, and rich crimson accent highlights (#DC2626). Implemented a prominent language switch (NL | EN), high-impact seasonal hero banners, and a synchronized collection thumbnail carousel.",
      challenges: "Balancing public brand prestige with exclusive B2B wholesale privacy (catalog pricing reserved for verified retail buyers), while delivering seamless cross-border multilingual navigation and rapid sample browsing on mobile devices.",
      solution: "Engineered a structured gatekeeper workflow with clear 'Registreer als klant' and 'Inloggen' onboarding, paired with instant WhatsApp ordering channels, smooth responsive lookbook carousels, and accessible touch interactions.",
      responsive: "Engineered with mobile-first responsive architecture using Bootstrap and custom CSS grid styling. Fully optimized for high-density smartphone displays, tablets, and wide desktop screens, ensuring crisp typography and rapid image load performance.",
      result: "Delivered a refined, modern digital showroom that strengthens Nayyar Fashion's international wholesale presence and accelerates boutique client onboarding across the European market."
    },
    'verve-store': {
      title: "Nayyar Fashion — Exclusive Women's Fashion B2B Wholesale Platform",
      category: 'Fashion E-Commerce & B2B Web Design',
      type: 'Web Design',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://nayyarfashion.nl/',
      image: 'assets/images/project-nayyar-fashion.png',
      overview: "Nayyar Fashion is an established fashion organization founded in 1994 opposite the World Fashion Centre in Amsterdam, Netherlands, featuring an expansive 550 m² showroom. The brand operates exclusively business-to-business, supplying premium women's collections to boutiques and retail stockists across Europe. The web design elevates their showroom into an editorial digital gateway featuring multilingual navigation, protected wholesale access, and high-impact lookbooks.",
      approach: "Adopted a high-fashion editorial aesthetic with bold serif and modern sans-serif typography, signature calligraphy logo branding, striking dual-angle model photography, and rich crimson accent highlights (#DC2626). Implemented a prominent language switch (NL | EN), high-impact seasonal hero banners, and a synchronized collection thumbnail carousel.",
      challenges: "Balancing public brand prestige with exclusive B2B wholesale privacy (catalog pricing reserved for verified retail buyers), while delivering seamless cross-border multilingual navigation and rapid sample browsing on mobile devices.",
      solution: "Engineered a structured gatekeeper workflow with clear 'Registreer als klant' and 'Inloggen' onboarding, paired with instant WhatsApp ordering channels, smooth responsive lookbook carousels, and accessible touch interactions.",
      responsive: "Engineered with mobile-first responsive architecture using Bootstrap and custom CSS grid styling. Fully optimized for high-density smartphone displays, tablets, and wide desktop screens, ensuring crisp typography and rapid image load performance.",
      result: "Delivered a refined, modern digital showroom that strengthens Nayyar Fashion's international wholesale presence and accelerates boutique client onboarding across the European market."
    },
    'pharmdel-saas': {
      title: 'Pharmdel — Pharmacy Delivery & Management SaaS Platform',
      category: 'HealthTech SaaS & Web Design',
      type: 'Landing Pages',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://www.pharmdel.com/',
      image: 'assets/images/project-pharmdel.png',
      overview: 'Pharmdel is a UK-based health technology SaaS platform dedicated to transforming pharmacy prescription delivery logistics, clinical accuracy, and patient communication. Integrating with leading Pharmacy Management Systems (PMR), Pharmdel empowers community pharmacies and clinical couriers with real-time GPS route optimization, electronic proof of delivery (ePOD), and smart barcode inventory management. The web design establishes an authoritative, high-conversion product presence that articulates software capabilities and drives enterprise demo registrations.',
      approach: 'Created a modern, high-contrast dark-mode SaaS design system pairing deep obsidian backgrounds (#0E0907) with glowing amber-orange gradients (#F97316), crisp typography, and sleek glassmorphic ecosystem cards. Formatted a clear 5-module ecosystem breakdown (Delivery App, Patient App, PGDs, Websites, Scan to Shelf) front-and-center in the hero section.',
      challenges: 'Presenting multifaceted pharmacy logistics and compliance features (PMR integration, clinical PGDs, ePOD signatures) in an intuitive, engaging format that resonates with busy pharmacy superintendents and practice managers.',
      solution: 'Designed clean visual feature walkthroughs, prominent "Request a Demo" conversion funnels, clear PMR integration trust logos, and responsive touch-optimized dashboard previews.',
      responsive: 'Engineered with mobile-first responsive architecture using Bootstrap and custom CSS grid layouts. Rigorously tested across mobile phones, tablets, and wide desktop displays for flawless layout scaling, sharp iconography, and rapid page performance.',
      result: "Delivered a compelling HealthTech SaaS landing page and product presentation that elevated Pharmdel's market credibility and significantly accelerated qualified demo bookings across UK pharmacies."
    },
    'haven-estate': {
      title: 'Pharmdel — Pharmacy Delivery & Management SaaS Platform',
      category: 'HealthTech SaaS & Web Design',
      type: 'Landing Pages',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://www.pharmdel.com/',
      image: 'assets/images/project-pharmdel.png',
      overview: 'Pharmdel is a UK-based health technology SaaS platform dedicated to transforming pharmacy prescription delivery logistics, clinical accuracy, and patient communication. Integrating with leading Pharmacy Management Systems (PMR), Pharmdel empowers community pharmacies and clinical couriers with real-time GPS route optimization, electronic proof of delivery (ePOD), and smart barcode inventory management. The web design establishes an authoritative, high-conversion product presence that articulates software capabilities and drives enterprise demo registrations.',
      approach: 'Created a modern, high-contrast dark-mode SaaS design system pairing deep obsidian backgrounds (#0E0907) with glowing amber-orange gradients (#F97316), crisp typography, and sleek glassmorphic ecosystem cards. Formatted a clear 5-module ecosystem breakdown (Delivery App, Patient App, PGDs, Websites, Scan to Shelf) front-and-center in the hero section.',
      challenges: 'Presenting multifaceted pharmacy logistics and compliance features (PMR integration, clinical PGDs, ePOD signatures) in an intuitive, engaging format that resonates with busy pharmacy superintendents and practice managers.',
      solution: 'Designed clean visual feature walkthroughs, prominent "Request a Demo" conversion funnels, clear PMR integration trust logos, and responsive touch-optimized dashboard previews.',
      responsive: 'Engineered with mobile-first responsive architecture using Bootstrap and custom CSS grid layouts. Rigorously tested across mobile phones, tablets, and wide desktop displays for flawless layout scaling, sharp iconography, and rapid page performance.',
      result: "Delivered a compelling HealthTech SaaS landing page and product presentation that elevated Pharmdel's market credibility and significantly accelerated qualified demo bookings across UK pharmacies."
    },
    'apnaslot-platform': {
      title: 'ApnaSlot — Library Seat Booking & Study Space Discovery Platform',
      category: 'EdTech Landing Page & Web Design',
      type: 'Landing Pages',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://www.apnaslot.com/',
      image: 'assets/images/project-apnaslot.png',
      overview: 'ApnaSlot is an innovative EdTech and study space reservation platform designed to eliminate the daily struggle students and book lovers face when searching for seats in nearby libraries. The web platform serves as both a high-converting mobile app landing page and a two-sided marketplace gateway connecting students with local study spaces while enabling library owners to list and manage their facilities.',
      approach: 'Created an inviting, student-centric design system featuring high-contrast navy navigation, warm study photography inside a circular hero frame, subtle confetti geometric accents, and bold modern typography. Structured clear visual benefit blocks highlighting instant seat booking, customized date/time scheduling, seamless digital payments (UPI, PhonePe, Paytm, GPay), and partner onboarding.',
      challenges: 'Designing a dual-audience landing page that appeals equally to students seeking stress-free study spots and commercial library owners looking to monetize unoccupied desk space, while maintaining swift mobile load times and high download conversion rates.',
      solution: 'Engineered distinct conversion funnels featuring a prominent "Download App" call-to-action in the hero section, an interactive feature carousel, step-by-step "How It Works" walkthroughs, and a dedicated "Library Owner" registration portal.',
      responsive: 'Engineered with mobile-first responsive architecture using Bootstrap and custom CSS utilities. Fully tested across mobile smartphones, tablets, and high-resolution monitors to ensure consistent typography scaling, responsive image masking, and frictionless touch interactions.',
      result: "Delivered an energetic, accessible web platform that increased app download conversion rates, streamlined student seat bookings, and expanded ApnaSlot's network of partner libraries across Indian academic hubs."
    },
    'nova-agency': {
      title: 'ApnaSlot — Library Seat Booking & Study Space Discovery Platform',
      category: 'EdTech Landing Page & Web Design',
      type: 'Landing Pages',
      role: 'Web Designer & UI Designer',
      tools: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Responsive UI', 'Cross-Browser', 'AI Tools'],
      liveUrl: 'https://www.apnaslot.com/',
      image: 'assets/images/project-apnaslot.png',
      overview: 'ApnaSlot is an innovative EdTech and study space reservation platform designed to eliminate the daily struggle students and book lovers face when searching for seats in nearby libraries. The web platform serves as both a high-converting mobile app landing page and a two-sided marketplace gateway connecting students with local study spaces while enabling library owners to list and manage their facilities.',
      approach: 'Created an inviting, student-centric design system featuring high-contrast navy navigation, warm study photography inside a circular hero frame, subtle confetti geometric accents, and bold modern typography. Structured clear visual benefit blocks highlighting instant seat booking, customized date/time scheduling, seamless digital payments (UPI, PhonePe, Paytm, GPay), and partner onboarding.',
      challenges: 'Designing a dual-audience landing page that appeals equally to students seeking stress-free study spots and commercial library owners looking to monetize unoccupied desk space, while maintaining swift mobile load times and high download conversion rates.',
      solution: 'Engineered distinct conversion funnels featuring a prominent "Download App" call-to-action in the hero section, an interactive feature carousel, step-by-step "How It Works" walkthroughs, and a dedicated "Library Owner" registration portal.',
      responsive: 'Engineered with mobile-first responsive architecture using Bootstrap and custom CSS utilities. Fully tested across mobile smartphones, tablets, and high-resolution monitors to ensure consistent typography scaling, responsive image masking, and frictionless touch interactions.',
      result: "Delivered an energetic, accessible web platform that increased app download conversion rates, streamlined student seat bookings, and expanded ApnaSlot's network of partner libraries across Indian academic hubs."
    },
  };

  // --- 2. Sticky Header & ScrollSpy ---
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    // Header shadow on scroll
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy active link
    const scrollPosition = window.scrollY + 120;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 3. Mobile Hamburger Navigation ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksWrapper = document.getElementById('navLinksWrapper');
  const navBackdrop = document.getElementById('navBackdrop');

  function openMobileMenu() {
    mobileToggle.classList.add('active');
    navLinksWrapper.classList.add('active');
    navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    mobileToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    mobileToggle.classList.remove('active');
    navLinksWrapper.classList.remove('active');
    navBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinksWrapper.classList.contains('active');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close menu on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        closeMobileMenu();
      }
    });
  });

  // --- 4. Project Category Filtering ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class on buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue || card.getAttribute('data-tags')?.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 5. Project Case Study Modal ---
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalRole = document.getElementById('modalRole');
  const modalToolsContainer = document.getElementById('modalTools');
  const modalOverview = document.getElementById('modalOverview');
  const modalApproach = document.getElementById('modalApproach');
  const modalChallenges = document.getElementById('modalChallenges');
  const modalSolution = document.getElementById('modalSolution');
  const modalResponsive = document.getElementById('modalResponsive');
  const modalResult = document.getElementById('modalResult');

  function openCaseStudy(projectId) {
    let key = (projectId || '').trim();
    let data = projectDatabase[key];

    // Fallback matching if key varies or aliased
    if (!data) {
      if (key.includes('bhumija') || key.includes('stride')) {
        data = projectDatabase['bhumija-lifesciences'] || projectDatabase['stride-saas'];
      } else if (key.includes('latelier') || key.includes('jewelry') || key.includes('apex')) {
        data = projectDatabase['latelier-jewelry'] || projectDatabase['apex-corp'];
      } else if (key.includes('flexo') || key.includes('lumina')) {
        data = projectDatabase['flexo-spaces'] || projectDatabase['lumina-care'];
      } else if (key.includes('nayyar') || key.includes('fashion') || key.includes('verve')) {
        data = projectDatabase['nayyar-fashion'] || projectDatabase['verve-store'];
      } else if (key.includes('pharmdel') || key.includes('haven')) {
        data = projectDatabase['pharmdel-saas'] || projectDatabase['haven-estate'];
      } else if (key.includes('apna') || key.includes('slot') || key.includes('nova')) {
        data = projectDatabase['apnaslot-platform'] || projectDatabase['nova-agency'];
      } else {
        data = projectDatabase['bhumija-lifesciences'] || Object.values(projectDatabase)[0];
      }
    }

    if (!data) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalRole) modalRole.textContent = data.role;
    if (modalOverview) modalOverview.textContent = data.overview;
    if (modalApproach) modalApproach.textContent = data.approach;
    if (modalChallenges) modalChallenges.textContent = data.challenges;
    if (modalSolution) modalSolution.textContent = data.solution;
    if (modalResponsive) modalResponsive.textContent = data.responsive;
    if (modalResult) modalResult.textContent = data.result;

    // Render tools
    if (modalToolsContainer && Array.isArray(data.tools)) {
      modalToolsContainer.innerHTML = '';
      data.tools.forEach(tool => {
        const span = document.createElement('span');
        span.className = 'modal-tool-tag';
        span.textContent = tool;
        modalToolsContainer.appendChild(span);
      });
    }

    // Render Live Design & Prototype Preview
    const previewBlock = document.getElementById('modalPreviewBlock');
    const previewContent = document.getElementById('modalPreviewContent');
    const previewActions = document.getElementById('modalPreviewActions');

    if (previewContent && previewActions) {
      previewContent.innerHTML = '';
      previewActions.innerHTML = '';

      // Project design image preview
      if (data.image) {
        const imgCard = document.createElement('div');
        imgCard.style.cssText = 'border-radius: 8px; overflow: hidden; border: 1px solid var(--border-subtle); margin-bottom: 16px; background: #0F172A; box-shadow: var(--shadow-md);';
        imgCard.innerHTML = `
          <div style="padding: 9px 14px; background: var(--bg-secondary); border-bottom: 1px solid var(--border-light); font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-secondary); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">📸 Design Showcase Screenshot</span>
            <span style="color: var(--text-muted);">High-Fidelity Preview</span>
          </div>
          <img src="${data.image}" alt="${data.title}" style="width: 100%; height: auto; display: block; object-fit: cover;">
        `;
        previewContent.appendChild(imgCard);
      }

      // Interactive Figma Live Prototype Embed
      if (data.figmaEmbed) {
        const embedCard = document.createElement('div');
        embedCard.style.cssText = 'border-radius: 8px; overflow: hidden; border: 1px solid var(--border-subtle); margin-bottom: 16px; background: #FAFAFC; box-shadow: var(--shadow-md);';
        embedCard.innerHTML = `
          <div style="padding: 10px 14px; background: var(--bg-secondary); border-bottom: 1px solid var(--border-light); font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-secondary); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
            <span style="color: var(--accent); font-weight: 700; display: flex; align-items: center; gap: 6px;">
              <span>✦</span> Live Interactive Figma Canvas
            </span>
            <span style="font-size: 0.68rem; color: var(--text-muted);">Click canvas to pan &amp; zoom</span>
          </div>
          <iframe style="border: none; width: 100%; height: 460px; display: block;" src="${data.figmaEmbed}" allowfullscreen loading="lazy"></iframe>
        `;
        previewContent.appendChild(embedCard);
      }

      // Action Links
      if (data.figmaUrl) {
        const figmaLink = document.createElement('a');
        figmaLink.href = data.figmaUrl;
        figmaLink.target = '_blank';
        figmaLink.rel = 'noopener noreferrer';
        figmaLink.className = 'btn btn-primary btn-sm';
        figmaLink.innerHTML = `
          Open in Figma Live Canvas ↗
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; margin-left: 6px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        `;
        previewActions.appendChild(figmaLink);
      }

      if (data.liveUrl) {
        const liveLink = document.createElement('a');
        liveLink.href = data.liveUrl;
        liveLink.target = '_blank';
        liveLink.rel = 'noopener noreferrer';
        liveLink.className = 'btn btn-primary btn-sm';
        liveLink.innerHTML = `
          Visit Live Website ↗
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; margin-left: 6px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        `;
        previewActions.appendChild(liveLink);
      }
    }

    const targetOverlay = modalOverlay || document.getElementById('caseStudyModal');
    if (targetOverlay) {
      targetOverlay.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    const targetOverlay = modalOverlay || document.getElementById('caseStudyModal');
    if (targetOverlay) {
      targetOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  // Expose globally for inline button handlers and external callers
  window.openCaseStudy = openCaseStudy;
  window.closeCaseStudy = closeCaseStudy;

  // Global event delegation for all case study buttons
  document.addEventListener('click', (e) => {
    const button = e.target.closest && e.target.closest('.btn-case-study');
    if (button) {
      e.preventDefault();
      const projectId = button.getAttribute('data-project');
      openCaseStudy(projectId);
    }
  });

  // Direct element binding as well
  document.querySelectorAll('.btn-case-study').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = button.getAttribute('data-project');
      openCaseStudy(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCaseStudy);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeCaseStudy();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeCaseStudy();
    }
  });

  // --- 6. Live Preview Buttons Interaction ---
  document.querySelectorAll('.btn-live-preview').forEach(button => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      // If it's a real link (e.g. Figma link), allow standard browser open in new tab
      if (href && href !== '#' && !href.startsWith('javascript:')) {
        return;
      }
      e.preventDefault();
      const projectId = button.getAttribute('data-project');
      openCaseStudy(projectId);
    });
  });

  // --- 7. Contact Form Handling ---
  const contactForm = document.getElementById('contactForm');
  const formToast = document.getElementById('formToast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form validation
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Submit animation / feedback
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Message...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        // Show Toast Notification
        if (formToast) {
          formToast.classList.add('active');
          setTimeout(() => {
            formToast.classList.remove('active');
          }, 6000);
        }
      }, 900);
    });
  }

  // --- 8. Resume Download / View Handler ---
  document.querySelectorAll('.btn-resume').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Resume action opens resume.html or triggers window.open
      const href = btn.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        window.open('resume.html', '_blank');
      }
    });
  });

  // --- 9. Back To Top Smooth Scroll ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 10. Interactive Figma Studio Workbench Controls ---
  const heroArtboard = document.getElementById('heroArtboard');
  const deviceButtons = document.querySelectorAll('.canvas-device-btn');
  const gridToggleBtn = document.getElementById('canvasGridToggle');
  const gridOverlay = document.getElementById('figmaGridOverlay');

  // Viewport Switcher
  if (heroArtboard && deviceButtons.length > 0) {
    deviceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        deviceButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const viewport = btn.getAttribute('data-viewport');
        heroArtboard.classList.remove('mode-tablet', 'mode-mobile');

        if (viewport === 'tablet') {
          heroArtboard.classList.add('mode-tablet');
        } else if (viewport === 'mobile') {
          heroArtboard.classList.add('mode-mobile');
        }
      });
    });
  }

  // 12-Column Grid Toggle
  if (gridToggleBtn && gridOverlay) {
    gridToggleBtn.addEventListener('click', () => {
      gridToggleBtn.classList.toggle('active');
      gridOverlay.classList.toggle('active');
    });
  }

  // Click to Copy Design Tokens
  document.querySelectorAll('[data-copy]').forEach(chip => {
    chip.addEventListener('click', () => {
      const textToCopy = chip.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalTitle = chip.getAttribute('title') || '';
          chip.setAttribute('title', 'Copied to clipboard!');
          chip.style.transform = 'scale(0.96)';
          setTimeout(() => {
            chip.style.transform = '';
            chip.setAttribute('title', originalTitle);
          }, 1200);
        });
      }
    });
  });
});
