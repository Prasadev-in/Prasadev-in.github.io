<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prasad Shejole · MBBS Student · Marketing & Events</title>
    <!-- Font Awesome 6 (free) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        /* ---------- reset & base ---------- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1.5rem;
            background: #f2f5f9;
            color: #1e293b;
            transition: background 0.3s ease, color 0.3s ease;
        }

        /* main card – CV container */
        .cv-card {
            max-width: 1150px;
            width: 100%;
            background: #ffffff;
            border-radius: 40px;
            box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.18);
            padding: 2.8rem 3rem;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
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
            transition: border-color 0.3s ease;
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
            transition: color 0.3s ease;
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
            transition: color 0.3s ease;
        }

        .theme-toggle-group {
            background: #e9edf2;
            border-radius: 40px;
            padding: 0.25rem;
            display: flex;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
            transition: background 0.3s ease;
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
            transition: all 0.2s ease;
        }

        .theme-btn i {
            font-size: 1rem;
        }

        .theme-btn.active {
            background: #ffffff;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
            color: #0b6e4f;
        }

        .theme-btn:hover:not(.active) {
            background: rgba(255, 255, 255, 0.6);
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

        /* PROFILE IMAGE STYLES */
        .profile-image-container {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid #0b6e4f;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            flex-shrink: 0;
            transition: all 0.3s ease;
            background: #d9e6f2;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .profile-image-container:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .profile-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .profile-image-container .fallback-icon {
            font-size: 2.8rem;
            color: #0b6e4f;
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
            flex-wrap: wrap;
            transition: color 0.3s ease;
        }

        .subhead i {
            color: #0b6e4f;
            transition: color 0.3s ease;
        }

        .info-block {
            background: #f8fafc;
            padding: 1.4rem 1.5rem;
            border-radius: 24px;
            border: 1px solid #e9edf2;
            transition: all 0.3s ease;
        }

        .info-block h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #0b6e4f;
            transition: color 0.3s ease;
        }

        .info-block p,
        .info-block li {
            font-size: 0.95rem;
            line-height: 1.5;
            color: #1e293b;
            transition: color 0.3s ease;
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
            transition: color 0.3s ease;
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
            transition: color 0.3s ease;
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
            transition: all 0.3s ease;
        }

        .skill-category h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #0b6e4f;
            transition: color 0.3s ease;
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
            transition: all 0.3s ease;
        }

        .skill-tag i {
            color: #0b6e4f;
            font-size: 0.8rem;
            transition: color 0.3s ease;
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
            transition: all 0.3s ease;
        }

        /* Project thumbnail image in repo cards */
        .repo-thumb {
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }

        .repo-thumb-image {
            width: 45px;
            height: 45px;
            border-radius: 10px;
            object-fit: cover;
            border: 1px solid #e2e8f0;
            flex-shrink: 0;
            background: #d9e6f2;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: #0b6e4f;
        }

        .repo-thumb-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }

        .mini-repo span i {
            margin-right: 0.4rem;
            color: #0b6e4f;
            transition: color 0.3s ease;
        }

        .mini-repo a {
            color: #0b6e4f;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.85rem;
            transition: color 0.3s ease;
        }

        .mini-repo a i {
            margin-right: 0.2rem;
        }

        /* ---------- DARK THEME ---------- */
        body.dark {
            background: #0d1117;
            color: #e6edf3;
        }

        body.dark .cv-card {
            background: #161b22;
            border-color: #30363d;
            box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.7);
        }

        body.dark .cv-header {
            border-bottom-color: #30363d;
        }

        body.dark .cv-header h1 {
            color: #f0f6fc;
        }

        body.dark .cv-header h1 i {
            color: #58a6ff;
        }

        body.dark .theme-label {
            color: #8b949e;
        }

        body.dark .theme-toggle-group {
            background: #21262d;
        }

        body.dark .theme-btn {
            color: #b1bac4;
        }

        body.dark .theme-btn.active {
            background: #30363d;
            color: #58a6ff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        body.dark .theme-btn:hover:not(.active) {
            background: #2a3038;
        }

        body.dark .info-block,
        body.dark .skill-category {
            background: #1c2128;
            border-color: #30363d;
        }

        body.dark .info-block h3,
        body.dark .skill-category h3 {
            color: #58a6ff;
        }

        body.dark .info-block p,
        body.dark .info-block li,
        body.dark .contact-item,
        body.dark .subhead {
            color: #c9d1d9;
        }

        body.dark .info-block ul li i,
        body.dark .contact-item i {
            color: #58a6ff;
        }

        body.dark .skill-tag {
            background: #30363d;
            color: #e6edf3;
        }

        body.dark .skill-tag.highlight {
            background: #1f2a3a;
            border-color: #58a6ff40;
        }

        body.dark .skill-tag i {
            color: #58a6ff;
        }

        body.dark .repo-showcase .mini-repo {
            background: #21262d;
            border-color: #30363d;
        }

        body.dark .mini-repo a {
            color: #58a6ff;
        }

        body.dark .profile-image-container {
            border-color: #58a6ff;
            background: #21262d;
        }

        body.dark .profile-image-container .fallback-icon {
            color: #58a6ff;
        }

        body.dark .repo-thumb-image {
            border-color: #30363d;
            background: #21262d;
            color: #58a6ff;
        }

        body.dark .cv-footer {
            border-top-color: #30363d;
            color: #8b949e;
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
            transition: all 0.3s ease;
        }

        .cv-footer i {
            margin-right: 0.3rem;
        }

        /* responsive */
        @media (max-width: 850px) {
            .cv-card {
                padding: 2rem 1.5rem;
            }
            .cv-grid {
                grid-template-columns: 1fr;
                gap: 1.8rem;
            }
            .cv-header h1 {
                font-size: 1.7rem;
            }
        }

        @media (max-width: 480px) {
            .cv-header {
                flex-direction: column;
                align-items: stretch;
            }
            .theme-controls {
                justify-content: flex-start;
            }
            .avatar-badge {
                flex-direction: column;
                align-items: flex-start;
            }
            .profile-image-container {
                width: 70px;
                height: 70px;
            }
        }
    </style>
</head>
<body>
    <div class="cv-card" id="cvContainer">
        <!-- header with theme switcher -->
        <div class="cv-header">
            <h1>
                <i class="fas fa-user-graduate"></i>
                Prasad Shejole · CV
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
                    <!-- PROFILE IMAGE - Using your uploaded image -->
                    <div class="profile-image-container">
                        <img src="IMG-20260809-WA0001.jpg" alt="Prasad Shejole" id="profileImage">
                        <!-- Fallback icon shows if image fails to load -->
                        <div class="fallback-icon" style="display: none;"><i class="fas fa-user-md"></i></div>
                    </div>
                    
                    <div>
                        <h2>Prasad Shejole</h2>
                        <div class="subhead">
                            <i class="fas fa-graduation-cap"></i> MBBS student · 4th year
                            <span style="margin:0 0.3rem;">·</span>
                            <i class="fas fa-bullhorn"></i> marketing · editing
                        </div>
                    </div>
                </div>

                <div class="info-block">
                    <h3><i class="fas fa-user-astronaut"></i> About me</h3>
                    <p>I am a 4th year MBBS student, pursuing my degree in Russia. But this page is not for that — this page introduces my creative side to you, the side that most of the people are deprived from.</p>
                </div>

                <div class="info-block">
                    <h3><i class="fas fa-university"></i> Education</h3>
                    <ul>
                        <li><i class="fas fa-graduation-cap"></i> MBBS · 2023 – 2029</li>
                        <li><i class="fas fa-flask"></i> Pre-medical · 2020 – 2022</li>
                        <li><i class="fas fa-certificate"></i> Digital marketing</li>
                    </ul>
                </div>

                <div class="info-block">
                    <h3><i class="fas fa-address-card"></i> Contact</h3>
                    <div class="contact-item"><i class="fas fa-envelope"></i> prasadshejole@gmail.com</div>
                    <div class="contact-item"><i class="fab fa-github"></i> github.com/prasadev-in</div>
                    <div class="contact-item"><i class="fab fa-instagram"></i> @_that_awkwardpause</div>
                    <div class="contact-item"><i class="fas fa-phone-alt"></i> +79960848472</div>
                </div>
            </div>

            <!-- RIGHT: core skills -->
            <div class="skills-section">
                <div class="skill-category">
                    <h3><i class="fas fa-bullhorn"></i> Social media marketing</h3>
                    <div class="skill-tags">
                        <span class="skill-tag highlight"><i class="fab fa-instagram"></i> Instagram strategy</span>
                        <span class="skill-tag"><i class="fas fa-chart-line"></i> Analytics & insights</span>
                        <span class="skill-tag"><i class="fas fa-ad"></i> Meta Ads</span>
                        <span class="skill-tag"><i class="fas fa-hashtag"></i> Hashtag research</span>
                        <span class="skill-tag"><i class="fas fa-people-arrows"></i> Community engagement</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3><i class="fas fa-pen-fancy"></i> Editing & content creation</h3>
                    <div class="skill-tags">
                        <span class="skill-tag highlight"><i class="fas fa-video"></i> CapCut (pro)</span>
                        <span class="skill-tag highlight"><i class="fas fa-paint-brush"></i> Canva (expert)</span>
                        <span class="skill-tag"><i class="fas fa-cut"></i> Video editing</span>
                        <span class="skill-tag"><i class="fas fa-image"></i> Thumbnail design</span>
                        <span class="skill-tag"><i class="fas fa-vector-square"></i> Brand identity</span>
                        <span class="skill-tag"><i class="fas fa-film"></i> Reels / shorts</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3><i class="fas fa-calendar-check"></i> Event management</h3>
                    <div class="skill-tags">
                        <span class="skill-tag highlight"><i class="fas fa-tasks"></i> Planning & logistics</span>
                        <span class="skill-tag highlight"><i class="fas fa-users"></i> Team coordination</span>
                        <span class="skill-tag"><i class="fas fa-handshake"></i> Vendor management</span>
                        <span class="skill-tag"><i class="fas fa-clock"></i> Timeline execution</span>
                        <span class="skill-tag"><i class="fas fa-trophy"></i> Medical conferences</span>
                        <span class="skill-tag"><i class="fas fa-microphone"></i> Hosting / emcee</span>
                    </div>
                </div>

                <!-- GitHub repository showcase -->
                <div class="skill-category repo-showcase">
                    <h3><i class="fab fa-github"></i> Featured GitHub repos</h3>
                    
                    <div class="mini-repo">
                        <div class="repo-thumb">
                            <div class="repo-thumb-image">
                                <i class="fas fa-bullhorn" style="font-size: 1.2rem;"></i>
                            </div>
                            <span><i class="fas fa-bullhorn"></i> social-media-toolkit</span>
                        </div>
                        <a href="#"><i class="fab fa-github"></i> View</a>
                    </div>
                    
                    <div class="mini-repo">
                        <div class="repo-thumb">
                            <div class="repo-thumb-image">
                                <i class="fas fa-video" style="font-size: 1.2rem;"></i>
                            </div>
                            <span><i class="fas fa-video"></i> edit-templates · CapCut/Canva</span>
                        </div>
                        <a href="#"><i class="fab fa-github"></i> View</a>
                    </div>
                    
                    <div class="mini-repo">
                        <div class="repo-thumb">
                            <div class="repo-thumb-image">
                                <i class="fas fa-calendar-alt" style="font-size: 1.2rem;"></i>
                            </div>
                            <span><i class="fas fa-calendar-alt"></i> event-manager · open source</span>
                        </div>
                        <a href="#"><i class="fab fa-github"></i> View</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- footer -->
        <div class="cv-footer">
            <span><i class="fas fa-palette"></i> Switch theme · light / dark</span>
            <span><i class="fas fa-graduation-cap"></i> MBBS · 4th year · marketing · editing · events</span>
        </div>
    </div>

    <script>
        (function() {
            const body = document.body;
            const lightBtn = document.getElementById('lightBtn');
            const darkBtn = document.getElementById('darkBtn');

            // Apply theme function
            function setTheme(theme) {
                if (theme === 'dark') {
                    body.classList.add('dark');
                    body.classList.remove('light');
                    lightBtn.classList.remove('active');
                    darkBtn.classList.add('active');
                } else {
                    body.classList.remove('dark');
                    body.classList.add('light');
                    darkBtn.classList.remove('active');
                    lightBtn.classList.add('active');
                }

                // Save preference
                try {
                    localStorage.setItem('cv-theme-pref', theme);
                } catch (e) {
                    // ignore
                }
            }

            // Load saved theme
            function loadTheme() {
                let saved = 'light';
                try {
                    const stored = localStorage.getItem('cv-theme-pref');
                    if (stored === 'dark' || stored === 'light') {
                        saved = stored;
                    }
                } catch (e) {
                    // ignore
                }
                setTheme(saved);
            }

            // Event listeners
            lightBtn.addEventListener('click', function(e) {
                e.preventDefault();
                setTheme('light');
            });

            darkBtn.addEventListener('click', function(e) {
                e.preventDefault();
                setTheme('dark');
            });

            // Initialize
            loadTheme();

            // Demo: prevent repo link navigation
            document.querySelectorAll('.mini-repo a').forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('🔗 This is a demo link. Replace with your actual GitHub repo URL.');
                });
            });

            // Handle profile image loading - show fallback if image fails
            const profileImg = document.getElementById('profileImage');
            const fallbackIcon = document.querySelector('.fallback-icon');
            
            if (profileImg) {
                profileImg.addEventListener('error', function() {
                    this.style.display = 'none';
                    if (fallbackIcon) {
                        fallbackIcon.style.display = 'flex';
                    }
                });
                
                // If image loads successfully, hide fallback
                profileImg.addEventListener('load', function() {
                    if (fallbackIcon) {
                        fallbackIcon.style.display = 'none';
                    }
                });
            }
        })();
    </script>
</body>
</html>
