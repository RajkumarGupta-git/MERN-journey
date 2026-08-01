document.addEventListener('DOMContentLoaded', () => {

  /* Dynamic Skills Data */
  const skills = [
    { name: "HTML5", category: "Frontend", percent: 95, icon: "fa-brands fa-html5" },
    { name: "CSS3", category: "Frontend", percent: 90, icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", category: "Frontend", percent: 85, icon: "fa-brands fa-js" },
    { name: "Bootstrap", category: "Frontend", percent: 80, icon: "fa-brands fa-bootstrap" },
    { name: "C & C++", category: "Backend", percent: 75, icon: "fa-solid fa-code" },
    { name: "Java", category: "Backend", percent: 75, icon: "fa-brands fa-java" },
    { name: "MySQL", category: "Backend", percent: 70, icon: "fa-solid fa-database" },
    { name: "Git & GitHub", category: "Tools", percent: 85, icon: "fa-brands fa-github" },
    { name: "VS Code", category: "Tools", percent: 90, icon: "fa-solid fa-laptop-code" },
    { name: "MS PowerPoint / PPT Design", category: "Tools", percent: 95, icon: "fa-solid fa-file-powerpoint" }
  ];

  /* Real GitHub Repositories Data */
  const projects = [
    {
      title: "QR Code Generator",
      tag: "JavaScript & API",
      description: "A fast and responsive web app built to generate custom QR codes dynamically using JavaScript API calls.",
      technologies: ["HTML5", "CSS3", "JavaScript", "API Integration"],
      githubLink: "https://github.com/RajkumarGupta-git/QR-Code-Generator"
    },
    {
      title: "Modern Contact Form Validation",
      tag: "Form Utility & Email",
      description: "Client-side interactive form with live field validation, custom alert messaging, and direct mail dispatch.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Email Service"],
      githubLink: "https://github.com/RajkumarGupta-git/Modern-Contact-Form-Validation"
    },
    {
      title: "Hostel Room Allotment System",
      tag: "Web Management System",
      description: "Full-fledged room allocation dashboard with CRUD features, student data handling, and database integration.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      githubLink: "https://github.com/RajkumarGupta-git"
    },
    {
      title: "JavaScript Mini Projects Portfolio",
      tag: "DOM & Core Logic",
      description: "Collection of interactive applications including Password Generator, Age Calculator, Simon Game, and Text Editor.",
      technologies: ["JavaScript", "DOM Scripting", "CSS3 Flexbox"],
      githubLink: "https://github.com/RajkumarGupta-git"
    }
  ];

  /* Render Skills Cards */
  const skillsContainer = document.getElementById('skills-container');
  function renderSkills(category = 'all') {
    if (!skillsContainer) return;
    skillsContainer.innerHTML = '';

    const list = category === 'all' 
      ? skills 
      : skills.filter(s => s.category.toLowerCase().includes(category.toLowerCase()));

    list.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card glass-card';
      card.innerHTML = `
        <div class="skill-header">
          <div class="skill-title-wrap">
            <i class="${skill.icon} skill-icon"></i>
            <span class="skill-name">${skill.name}</span>
          </div>
          <span class="skill-percent">${skill.percent}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" data-percent="${skill.percent}"></div>
        </div>
      `;
      skillsContainer.appendChild(card);
    });

    setTimeout(() => {
      document.querySelectorAll('.progress-bar-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-percent') + '%';
      });
    }, 100);
  }

  /* Render Projects Cards synced with GitHub */
  const projectsContainer = document.getElementById('projects-container');
  function renderProjects() {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';

    projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card glass-card';
      const badges = proj.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('');

      card.innerHTML = `
        <div>
          <span class="project-tag">${proj.tag}</span>
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
        </div>
        <div>
          <div class="tech-badges">${badges}</div>
          <div class="project-links">
            <a href="${proj.githubLink}" target="_blank" rel="noopener" class="btn btn-outline">
              <i class="fa-brands fa-github"></i> View GitHub Code
            </a>
          </div>
        </div>
      `;
      projectsContainer.appendChild(card);
    });
  }

  renderSkills();
  renderProjects();

  /* Skills Filter Tabs */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.getAttribute('data-filter'));
    });
  });

  /* Smooth Subtitle Typing (No Blinking Cursor / No Layout Jump) */
  const typingElement = document.querySelector('.typing-text');
  const roles = [
    "Frontend Developer",
    "BCA Graduate (2023–2026)",
    "UI & Web Interface Builder",
    "PPT & Presentation Designer"
  ];
  let roleIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    if (!typingElement) return;
    const current = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 35 : 75;

    if (!isDeleting && charIndex === current.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 300;
    }

    setTimeout(type, speed);
  }
  type();

  /* Stats Counter Animation */
  const counters = document.querySelectorAll('.counter');
  let animated = false;
  window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('stats');
    if (statsSection && !animated && statsSection.getBoundingClientRect().top < window.innerHeight) {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 30;
        const update = () => {
          count += speed;
          if (count < target) {
            counter.innerText = Math.ceil(count);
            setTimeout(update, 30);
          } else {
            counter.innerText = target + "+";
          }
        };
        update();
      });
      animated = true;
    }
  });

  /* Theme Toggle (Dark / Light) */
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  });

  /* Mobile Responsive Navbar Toggle */
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => navbar.classList.toggle('active'));
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navbar.classList.remove('active'));
    });
  }

  /* Back to Top & Header Scroll Effect */
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    if (window.scrollY > 300) backToTopBtn.classList.add('visible');
    else backToTopBtn.classList.remove('visible');
  });

  backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});