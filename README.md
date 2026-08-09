<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MBBS · CV & skills · theme</title>
  <!-- Font Awesome 6 (free) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    /* ---------- reset & base ---------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s, box-shadow 0.2s;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1.5rem;
      background-color: #f2f5f9;
      color: #1e293b;
    }

    /* main card – acts as CV container */
    .cv-card {
      max-width: 1150px;
      width: 100%;
      background: #ffffff;
      border-radius: 40px;
      box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.18), 0 8px 24px -8px rgba(0, 0, 0, 0.04);
      padding: 2.8rem 3rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(2px);
    }

    /* ---------- header / theme toggle ---------- */
    .cv-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem 0.8rem;
      margin-bottom: 2.8rem;
      padding-bottom: 1.4rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .cv-header h1 {
      font-size: 2.2rem;
      font-weight: 650;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }

    .cv-header h1 i {
      color: #0b6e4f;
      font-size: 2.1rem;
    }

    .theme-controls {
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }

    .theme-label {
      font-size: 0.9rem;
      font-weight: 500;
      color: #475569;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .theme-toggle-group {
      background: #e9edf2;
      border-radius: 40px;
      padding: 0.2rem;
      display: flex;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.06);
    }

    .theme-btn {
      border: none;
      background: transparent;
      padding: 0.5rem 1.2rem;
      border-radius: 30px;
      font-size: 0.85rem;
      font-weight: 500;
      color: #1e293b;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .theme-btn i {
      font-size: 1rem;
    }

    .theme-btn.active {
      background: #ffffff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      color: #0b6e4f;
    }

    .theme-btn:hover:not(.active) {
      background: rgba(255,255,255,0.5);
    }

    /* ---------- grid: left (profile) + right (skills) ---------- */
    .cv-grid {
      display: grid;
      grid-template-columns: 1fr 1.6fr;
      gap: 2.5rem;
      margin-top: 0.4rem;
    }

    /* ----- left column: about, education, contact ----- */
    .profile-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .avatar-badge {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.2rem;
    }

    .avatar-icon {
      background: #d9e6f2;
      width: 70px;
      height: 70px;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.4rem;
      color: #0b6e4f;
      box-shadow: 0 4px 10px rgba(0,0,0,0.02);
    }

    .avatar-badge h2 {
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    .subhead {
      font-size: 1rem;
      color: #475569;
      margin-top: 0.1rem;
      font-weight: 450;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .info-block {
      background: #f8fafc;
      padding: 1.4rem 1.5rem;
      border-radius: 24px;
      border: 1px solid #e9edf2;
    }

    .info-block h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #0b6e4f;
    }

    .info-block p, .info-block li {
      font-size: 0.95rem;
      line-height: 1.5;
      color: #1e293b;
    }

    .info-block ul {
      list-style: none;
      padding: 0;
    }

    .info-block ul li {
      padding: 0.35rem 0;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .info-block ul li i {
      width: 1.4rem;
      color: #0b6e4f;
      font-size: 1rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.4rem 0;
    }

    .contact-item i {
      width: 1.6rem;
      color: #0b6e4f;
    }

    /* ----- right column: skills & expertise ----- */
    .skills-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .skill-category {
      background: #f8fafc;
      padding: 1.4rem 1.5rem;
      border-radius: 24px;
      border: 1px solid #e9edf2;
    }

    .skill-category h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #0b6e4f;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem 0.8rem;
    }

    .skill-tag {
      background: #e9edf2;
      padding: 0.3rem 1rem;
      border-radius: 30px;
      font-size: 0.85rem;
      font-weight: 500;
      color: #1e293b;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      border: 1px solid transparent;
    }

    .skill-tag i {
      color: #0b6e4f;
      font-size: 0.8rem;
    }

    .skill-tag.highlight {
      background: #d9e6f2;
      border-color: #b6ccdd;
    }

    .repo-showcase {
      margin-top: 0.2rem;
    }

    .repo-showcase .mini-repo {
      background: #f1f5f9;
      padding: 0.8rem 1.2rem;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.5rem 1rem;
      border: 1px solid #e2e8f0;
      margin-top: 0.6rem;
    }

    .mini-repo span i {
      margin-right: 0.4rem;
      color: #0b6e4f;
    }

    .mini-repo a {
      color: #0b6e4f;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.85rem;
    }

    .mini-repo a i {
      margin-right: 0.2rem;
    }

    /* ---------- DARK THEME ---------- */
    .dark {
      background-color: #0d1117;
      color: #e6edf3;
    }

    .dark .cv-card {
      background: #161b22;
      border-color: #30363d;
      box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.7);
    }

    .dark .cv-header {
      border-bottom-color: #30363d;
    }

    .dark .cv-header h1 {
      color: #f0f6fc;
    }

    .dark .cv-header h1 i {
      color: #58a6ff;
    }

    .dark .theme-label {
      color: #8b949e;
    }

    .dark .theme-toggle-group {
      background: #21262d;
    }

    .dark .theme-btn {
      color: #b1bac4;
    }

    .dark .theme-btn.active {
      background: #30363d;
      color: #58a6ff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }

    .dark .theme-btn:hover:not(.active) {
      background: #2a3038;
    }

    .dark .info-block,
    .dark .skill-category {
      background: #1c2128;
      border-color: #30363d;
    }

    .dark .info-block h3,
    .dark .skill-category h3 {
      color: #58a6ff;
    }

    .dark .info-block p,
    .dark .info-block li,
    .dark .contact-item,
    .dark .subhead {
      color: #c9d1d9;
    }

    .dark .info-block ul li i,
    .dark .contact-item i {
      color: #58a6ff;
    }

    .dark .skill-tag {
      background: #30363d;
      color: #e6edf3;
    }

    .dark .skill-tag.highlight {
      background: #1f2a3a;
      border-color: #58a6ff40;
    }

    .dark .skill-tag i {
      color: #58a6ff;
    }

    .dark .repo-showcase .mini-repo {
      background: #21262d;
      border-color: #30363d;
    }

    .dark .mini-repo a {
      color: #58a6ff;
    }

    .dark .avatar-icon {
      background: #21262d;
      color: #58a6ff;
    }

    /* small footer */
    .cv-footer {
      margin-top: 2.8rem;
      padding-top: 1.4rem;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: #475569;
    }

    .dark .cv-footer {
      border-top-color: #30363d;
      color: #8b949e;
    }

    .cv-footer i {
      margin-right: 0.3rem;
    }

    /* responsive */
    @media (max-width: 850px) {
      .cv-card { padding: 2rem 1.5rem; }
      .cv-grid { grid-template-columns: 1fr; gap: 1.8rem; }
      .cv-header h1 { font-size: 1.7rem; }
    }

    @media (max-width: 480px) {
      .cv-header { flex-direction: column; align-items: stretch; }
      .theme-controls { justify-content: flex-start; }
    }
  </style>
</head>
<body>
  <div class="cv-card" id="cvContainer">
    <!-- header with theme switcher -->
    <div class="cv-header">
      <h1>
        <i class="fas fa-user-md"></i> 
        Dr. Ayesha · CV
      </h1>
      <div class="theme-controls">
        <span class="theme-label"><i class="fas fa-palette"></i> Theme</span>
        <div class="theme-toggle-group" role="group">
          <button class="theme-btn active" data-theme="light" id="lightBtn"><i class="fas fa-sun"></i> Light</button>
          <button class="theme-btn" data-theme="dark" id="darkBtn"><i class="fas fa-moon"></i> Dark</button>
        </div>
      </div>
    </div>

    <!-- main grid: profile + skills -->
    <div class="cv-grid">
      <!-- LEFT: about, education, contact -->
      <div class="profile-section">
        <div class="avatar-badge">
          <div class="avatar-icon"><i class="fas fa-stethoscope"></i></div>
          <div>
            <h2>Ayesha Khan</h2>
            <div class="subhead"><i class="fas fa-graduation-cap"></i> MBBS · 3rd year</div>
          </div>
        </div>

        <div class="info-block">
          <h3><i class="fas fa-user-graduate"></i> About</h3>
          <p>Medical student with a strong passion for digital health, medical informatics, and data-driven patient care. Combining clinical knowledge with programming skills to build useful tools for healthcare.</p>
        </div>

        <div class="info-block">
          <h3><i class="fas fa-university"></i> Education</h3>
          <ul>
            <li><i class="fas fa-graduation-cap"></i> MBBS · 2023 – present</li>
            <li><i class="fas fa-flask"></i> Pre-medical · 2020 – 2023</li>
            <li><i class="fas fa-certificate"></i> BLS / ACLS certified</li>
          </ul>
        </div>

        <div class="info-block">
          <h3><i class="fas fa-address-card"></i> Contact</h3>
          <div class="contact-item"><i class="fas fa-envelope"></i> ayesha.khan@medmail.com</div>
          <div class="contact-item"><i class="fab fa-github"></i> github.com/ayesha-md</div>
          <div class="contact-item"><i class="fab fa-linkedin"></i> linkedin.com/in/ayesha-md</div>
          <div class="contact-item"><i class="fas fa-phone-alt"></i> +91 98765 43210</div>
        </div>
      </div>

      <!-- RIGHT: skills, technical, GitHub repos -->
      <div class="skills-section">
        <div class="skill-category">
          <h3><i class="fas fa-heartbeat"></i> Clinical & soft skills</h3>
          <div class="skill-tags">
            <span class="skill-tag highlight"><i class="fas fa-check-circle"></i> Patient care</span>
            <span class="skill-tag highlight"><i class="fas fa-check-circle"></i> Medical history</span>
            <span class="skill-tag"><i class="fas fa-comment-medical"></i> Empathy</span>
            <span class="skill-tag"><i class="fas fa-users"></i> Teamwork</span>
            <span class="skill-tag"><i class="fas fa-clock"></i> Time management</span>
            <span class="skill-tag"><i class="fas fa-book-medical"></i> Evidence-based practice</span>
          </div>
        </div>

        <div class="skill-category">
          <h3><i class="fas fa-code"></i> Tech & data skills</h3>
          <div class="skill-tags">
            <span class="skill-tag highlight"><i class="fab fa-python"></i> Python</span>
            <span class="skill-tag highlight"><i class="fas fa-database"></i> SQL / NoSQL</span>
            <span class="skill-tag"><i class="fab fa-js"></i> JavaScript</span>
            <span class="skill-tag"><i class="fab fa-html5"></i> HTML/CSS</span>
            <span class="skill-tag"><i class="fas fa-chart-line"></i> Data analysis</span>
            <span class="skill-tag"><i class="fas fa-microscope"></i> Bioinformatics (basic)</span>
            <span class="skill-tag"><i class="fab fa-git-alt"></i> Git / GitHub</span>
            <span class="skill-tag"><i class="fas fa-flask"></i> R / ggplot</span>
          </div>
        </div>

        <div class="skill-category">
          <h3><i class="fas fa-microchip"></i> Digital health & AI</h3>
          <div class="skill-tags">
            <span class="skill-tag highlight"><i class="fas fa-robot"></i> ML basics</span>
            <span class="skill-tag"><i class="fas fa-brain"></i> LLM prompting</span>
            <span class="skill-tag"><i class="fas fa-x-ray"></i> DICOM / medical imaging</span>
            <span class="skill-tag"><i class="fas fa-tablets"></i> Clinical decision support</span>
          </div>
        </div>

        <!-- GitHub repository showcase (theme-ready) -->
        <div class="skill-category repo-showcase">
          <h3><i class="fab fa-github"></i> GitHub repos</h3>
          <div class="mini-repo">
            <span><i class="fas fa-book-open"></i> med-notes · digital health toolkit</span>
            <a href="#"><i class="fab fa-github"></i> View</a>
          </div>
          <div class="mini-repo">
            <span><i class="fas fa-chart-pie"></i> vitals-dashboard · patient data viz</span>
            <a href="#"><i class="fab fa-github"></i> View</a>
          </div>
          <div class="mini-repo">
            <span><i class="fas fa-file-prescription"></i> rx-analyzer · drug interaction</span>
            <a href="#"><i class="fab fa-github"></i> View</a>
          </div>
        </div>
      </div>
    </div>

    <!-- footer : theme note + social -->
    <div class="cv-footer">
      <span><i class="fas fa-palette"></i> Theme ready · click light/dark</span>
      <span><i class="fas fa-graduation-cap"></i> MBBS · skills · GitHub</span>
    </div>
  </div>

  <script>
    (function() {
      const container = document.getElementById('cvContainer');
      const lightBtn = document.getElementById('lightBtn');
      const darkBtn = document.getElementById('darkBtn');
      const body = document.body;

      // apply theme
      function setTheme(theme) {
        body.classList.remove('dark', 'light');
        container.classList.remove('dark', 'light');

        if (theme === 'dark') {
          body.classList.add('dark');
          container.classList.add('dark');
        } else {
          body.classList.add('light');
          container.classList.add('light');
        }

        lightBtn.classList.toggle('active', theme === 'light');
        darkBtn.classList.toggle('active', theme === 'dark');

        try {
          localStorage.setItem('cv-theme-pref', theme);
        } catch (_) {}
      }

      // load saved
      function loadTheme() {
        let saved = 'light';
        try {
          const stored = localStorage.getItem('cv-theme-pref');
          if (stored === 'dark' || stored === 'light') saved = stored;
        } catch (_) {}
        setTheme(saved);
      }

      // event listeners
      lightBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setTheme('light');
      });

      darkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setTheme('dark');
      });

      loadTheme();

      // demo: prevent repo link navigation
      document.querySelectorAll('.mini-repo a').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          // you can replace with actual repo URL
          console.log('🔗 repo link clicked (demo)');
        });
      });
    })();
  </script>
</body>
</html>
