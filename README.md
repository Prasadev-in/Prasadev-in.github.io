<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prasad Shejole · Portfolio</title>
    <!-- Font Awesome 6 (free) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <!-- html2pdf library for PDF generation -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <style>
        /* ---------- RESET & BASE ---------- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            min-height: 100vh;
            background: #f2f5f9;
            color: #1e293b;
            transition: background 0.3s ease, color 0.3s ease;
        }

        /* ---------- FULL-WIDTH WEBSITE LAYOUT ---------- */
        .website-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.5rem 2rem;
            min-height: 100vh;
        }

        /* ---------- HEADER / NAVIGATION ---------- */
        .site-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem 1.5rem;
            padding: 1rem 0 1.5rem 0;
            border-bottom: 2px solid #e2e8f0;
            transition: border-color 0.3s ease;
        }

        .site-logo {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            text-decoration: none;
            cursor: pointer;
        }

        .site-logo i {
            font-size: 2rem;
            color: #0b6e4f;
            transition: color 0.3s ease;
        }

        .site-logo h1 {
            font-size: 1.6rem;
            font-weight: 700;
            color: #0b6e4f;
            transition: color 0.3s ease;
            letter-spacing: -0.02em;
        }

        .site-logo span {
            font-weight: 400;
            color: #475569;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        /* Navigation */
        .site-nav {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            flex-wrap: wrap;
        }

        .nav-tabs {
            display: flex;
            gap: 0.3rem;
            background: #e9edf2;
            padding: 0.25rem;
            border-radius: 40px;
            transition: background 0.3s ease;
        }

        .nav-tab {
            padding: 0.5rem 1.2rem;
            border: none;
            background: transparent;
            border-radius: 30px;
            font-size: 0.85rem;
            font-weight: 500;
            color: #475569;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .nav-tab:hover {
            color: #0b6e4f;
        }

        .nav-tab.active {
            background: #ffffff;
            color: #0b6e4f;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
        }

        .theme-toggle {
            background: #e9edf2;
            border: none;
            border-radius: 40px;
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            color: #475569;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .theme-toggle:hover {
            background: #d1d5db;
        }

        /* ---------- PAGE CONTENT ---------- */
        .page-content {
            padding: 2.5rem 0;
            min-height: 70vh;
        }

        .page {
            display: none;
            animation: fadeIn 0.4s ease;
        }

        .page.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* ---------- HOME PAGE ---------- */
        .hero-section {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 3rem;
            align-items: start;
        }

        /* Left Column */
        .hero-left {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .profile-card {
            background: #ffffff;
            border-radius: 24px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
            border: 1px solid #e9edf2;
            transition: all 0.3s ease;
        }

        .profile-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid #0b6e4f;
            margin-bottom: 1rem;
        }

        .profile-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .profile-card h2 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #0b6e4f;
            transition: color 0.3s ease;
        }

        .profile-card .tagline {
            font-size: 1rem;
            color: #475569;
            margin: 0.3rem 0 0.8rem 0;
            transition: color 0.3s ease;
        }

        .profile-card .tagline i {
            color: #0b6e4f;
            transition: color 0.3s ease;
        }

        .profile-card .bio {
            font-size: 0.9rem;
            line-height: 1.6;
            color: #1e293b;
            transition: color 0.3s ease;
        }

        /* Stats Section */
        .stats-grid-home {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
        }

        .stat-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 1rem;
            text-align: center;
            border: 1px solid #e9edf2;
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }

        .stat-card .number {
            font-size: 1.8rem;
            font-weight: 700;
            color: #0b6e4f;
            transition: color 0.3s ease;
            display: block;
        }

        .stat-card .label {
            font-size: 0.7rem;
            color: #475569;
            transition: color 0.3s ease;
        }

        /* Right Column */
        .hero-right {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .section-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #0b6e4f;
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: color 0.3s ease;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .skill-group {
            background: #ffffff;
            border-radius: 20px;
            padding: 1.2rem;
            border: 1px solid #e9edf2;
            transition: all 0.3s ease;
        }

        .skill-group h4 {
            font-size: 0.85rem;
            color: #0b6e4f;
            margin-bottom: 0.6rem;
            transition: color 0.3s ease;
        }

        .skill-group .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
        }

        .skill-group .skill-tag {
            background: #e9edf2;
            padding: 0.2rem 0.7rem;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 500;
            color: #1e293b;
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        .skill-group .skill-tag i {
            color: #0b6e4f;
            margin-right: 0.2rem;
            transition: color 0.3s ease;
        }

        /* Download Button */
        .download-btn-home {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.7rem 1.5rem;
            background: #0b6e4f;
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
            margin-top: 0.3rem;
        }

        .download-btn-home:hover {
            background: #095a3f;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(11, 110, 79, 0.25);
        }

        .download-btn-home:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        /* ---------- ABOUT PAGE ---------- */
        .about-content {
            max-width: 900px;
            margin: 0 auto;
        }

        .about-content .profile-card {
            margin-bottom: 1.5rem;
        }

        .about-content .profile-card .bio {
            font-size: 1rem;
            line-height: 1.8;
        }

        .education-timeline {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }

        .edu-item {
            background: #ffffff;
            padding: 1rem 1.5rem;
            border-radius: 16px;
            border: 1px solid #e9edf2;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            transition: all 0.3s ease;
        }

        .edu-item:hover {
            border-color: #0b6e4f;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .edu-item .edu-name {
            font-weight: 600;
            color: #0b6e4f;
            transition: color 0.3s ease;
        }

        .edu-item .edu-date {
            color: #475569;
            font-size: 0.85rem;
            transition: color 0.3s ease;
        }

        .edu-item .edu-desc {
            width: 100%;
            font-size: 0.85rem;
            color: #475569;
            transition: color 0.3s ease;
        }

        /* ---------- SKILLS PAGE ---------- */
        .skills-page-content {
            max-width: 900px;
            margin: 0 auto;
        }

        .skills-full-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .skill-full-card {
            background: #ffffff;
            border-radius: 20px;
            padding: 1.5rem;
            border: 1px solid #e9edf2;
            transition: all 0.3s ease;
        }

        .skill-full-card:hover {
            border-color: #0b6e4f;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .skill-full-card h4 {
            color: #0b6e4f;
            font-size: 1rem;
            margin-bottom: 0.8rem;
            transition: color 0.3s ease;
        }

        .skill-bar-item {
            margin-bottom: 0.7rem;
        }

        .skill-bar-item .skill-label {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            color: #1e293b;
            margin-bottom: 0.15rem;
            transition: color 0.3s ease;
        }

        .skill-bar-track {
            width: 100%;
            height: 6px;
            background: #e9edf2;
            border-radius: 10px;
            overflow: hidden;
            transition: background 0.3s ease;
        }

        .skill-bar-fill {
            height: 100%;
            border-radius: 10px;
            background: linear-gradient(90deg, #0b6e4f, #0f8b63);
            width: 0%;
            transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* ---------- PROJECTS PAGE ---------- */
        .projects-page-content {
            max-width: 1000px;
            margin: 0 auto;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.2rem;
        }

        .project-card {
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #e9edf2;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
        }

        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
            border-color: #0b6e4f;
        }

        .project-card .project-media {
            width: 100%;
            aspect-ratio: 1/1;
            overflow: hidden;
            background: #e9edf2;
        }

        .project-card .project-media img,
        .project-card .project-media video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .project-card:hover .project-media img,
        .project-card:hover .project-media video {
            transform: scale(1.05);
        }

        .project-card .project-info {
            padding: 0.8rem 1rem;
        }

        .project-card .project-info h4 {
            font-size: 0.9rem;
            color: #0b6e4f;
            transition: color 0.3s ease;
        }

        .project-card .project-info p {
            font-size: 0.75rem;
            color: #475569;
            transition: color 0.3s ease;
        }

        .project-card.coming-soon {
            opacity: 0.7;
        }

        .project-card.coming-soon .project-media {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #0b6e4f;
            background: #e9edf2;
        }

        .project-card.coming-soon .project-media i {
            opacity: 0.3;
        }

        .project-card .coming-soon-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 0.2rem 0.6rem;
            border-radius: 12px;
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 1px;
        }

        /* PDF Preview */
        .project-card .pdf-preview {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background: #f0f4f8;
            color: #0b6e4f;
            font-size: 1rem;
            gap: 0.5rem;
        }

        .project-card .pdf-preview i {
            font-size: 3rem;
            opacity: 0.5;
        }

        .project-card .pdf-preview span {
            font-size: 0.7rem;
            opacity: 0.7;
        }

        /* ---------- CONTACT PAGE ---------- */
        .contact-page-content {
            max-width: 700px;
            margin: 0 auto;
        }

        .contact-card {
            background: #ffffff;
            border-radius: 24px;
            padding: 2rem;
            border: 1px solid #e9edf2;
            transition: all 0.3s ease;
        }

        .contact-item-large {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.8rem 0;
            border-bottom: 1px solid #e9edf2;
            transition: border-color 0.3s ease;
        }

        .contact-item-large:last-child {
            border-bottom: none;
        }

        .contact-item-large i {
            width: 2rem;
            font-size: 1.2rem;
            color: #0b6e4f;
            transition: color 0.3s ease;
        }

        .contact-item-large .contact-text {
            font-size: 0.95rem;
            color: #1e293b;
            transition: color 0.3s ease;
        }

        .contact-item-large .contact-label {
            font-size: 0.75rem;
            color: #475569;
            transition: color 0.3s ease;
        }

        .flag-icon {
            font-size: 1.4rem;
            margin-right: 0.3rem;
        }

        /* ---------- DARK THEME ---------- */
        body.dark {
            background: #0d1117;
            color: #e6edf3;
        }

        body.dark .site-header {
            border-bottom-color: #30363d;
        }

        body.dark .site-logo h1 {
            color: #58a6ff;
        }

        body.dark .site-logo i {
            color: #58a6ff;
        }

        body.dark .site-logo span {
            color: #8b949e;
        }

        body.dark .nav-tabs {
            background: #21262d;
        }

        body.dark .nav-tab {
            color: #8b949e;
        }

        body.dark .nav-tab:hover {
            color: #58a6ff;
        }

        body.dark .nav-tab.active {
            background: #30363d;
            color: #58a6ff;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        body.dark .theme-toggle {
            background: #21262d;
            color: #8b949e;
        }

        body.dark .theme-toggle:hover {
            background: #30363d;
        }

        body.dark .profile-card,
        body.dark .skill-group,
        body.dark .stat-card,
        body.dark .edu-item,
        body.dark .skill-full-card,
        body.dark .project-card,
        body.dark .contact-card {
            background: #161b22;
            border-color: #30363d;
        }

        body.dark .profile-card h2 {
            color: #58a6ff;
        }

        body.dark .profile-card .tagline {
            color: #8b949e;
        }

        body.dark .profile-card .tagline i {
            color: #58a6ff;
        }

        body.dark .profile-card .bio {
            color: #c9d1d9;
        }

        body.dark .stat-card .number {
            color: #58a6ff;
        }

        body.dark .stat-card .label {
            color: #8b949e;
        }

        body.dark .section-title {
            color: #58a6ff;
        }

        body.dark .skill-group h4 {
            color: #58a6ff;
        }

        body.dark .skill-group .skill-tag {
            background: #30363d;
            color: #e6edf3;
        }

        body.dark .skill-group .skill-tag i {
            color: #58a6ff;
        }

        body.dark .edu-item .edu-name {
            color: #58a6ff;
        }

        body.dark .edu-item .edu-date,
        body.dark .edu-item .edu-desc {
            color: #8b949e;
        }

        body.dark .skill-full-card h4 {
            color: #58a6ff;
        }

        body.dark .skill-bar-item .skill-label {
            color: #c9d1d9;
        }

        body.dark .skill-bar-track {
            background: #30363d;
        }

        body.dark .skill-bar-fill {
            background: linear-gradient(90deg, #58a6ff, #79c0ff);
        }

        body.dark .project-card .project-info h4 {
            color: #58a6ff;
        }

        body.dark .project-card .project-info p {
            color: #8b949e;
        }

        body.dark .project-card.coming-soon .project-media {
            background: #21262d;
            color: #58a6ff;
        }

        body.dark .project-card .pdf-preview {
            background: #21262d;
            color: #58a6ff;
        }

        body.dark .contact-item-large {
            border-bottom-color: #30363d;
        }

        body.dark .contact-item-large i {
            color: #58a6ff;
        }

        body.dark .contact-item-large .contact-text {
            color: #c9d1d9;
        }

        body.dark .contact-item-large .contact-label {
            color: #8b949e;
        }

        body.dark .download-btn-home {
            background: #58a6ff;
            color: #0d1117;
        }

        body.dark .download-btn-home:hover {
            background: #79c0ff;
            box-shadow: 0 6px 16px rgba(88, 166, 255, 0.25);
        }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 1024px) {
            .hero-section {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .skills-grid {
                grid-template-columns: 1fr 1fr;
            }

            .projects-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .skills-full-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 850px) {
            .website-wrapper {
                padding: 1rem 1.2rem;
            }

            .site-header {
                flex-direction: column;
                align-items: stretch;
                gap: 0.8rem;
            }

            .site-logo {
                justify-content: center;
            }

            .site-nav {
                justify-content: center;
            }

            .nav-tabs {
                flex-wrap: wrap;
                justify-content: center;
                border-radius: 20px;
                padding: 0.2rem;
            }

            .nav-tab {
                padding: 0.4rem 0.8rem;
                font-size: 0.75rem;
                flex: 1;
                text-align: center;
                min-width: 60px;
            }

            .projects-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 0.8rem;
            }

            .skills-grid {
                grid-template-columns: 1fr;
            }

            .stats-grid-home {
                grid-template-columns: repeat(2, 1fr);
            }

            .hero-left {
                order: 2;
            }

            .hero-right {
                order: 1;
            }

            .profile-avatar {
                width: 80px;
                height: 80px;
            }

            .profile-card h2 {
                font-size: 1.5rem;
            }
        }

        @media (max-width: 600px) {
            .website-wrapper {
                padding: 0.8rem;
            }

            .site-logo h1 {
                font-size: 1.2rem;
            }

            .site-logo span {
                font-size: 0.7rem;
            }

            .nav-tab {
                font-size: 0.65rem;
                padding: 0.3rem 0.6rem;
                min-width: 50px;
            }

            .profile-card {
                padding: 1.2rem;
            }

            .profile-card h2 {
                font-size: 1.3rem;
            }

            .profile-card .bio {
                font-size: 0.85rem;
            }

            .projects-grid {
                grid-template-columns: 1fr 1fr;
                gap: 0.6rem;
            }

            .project-card .project-info h4 {
                font-size: 0.75rem;
            }

            .project-card .project-info p {
                font-size: 0.65rem;
            }

            .stat-card .number {
                font-size: 1.4rem;
            }

            .stat-card .label {
                font-size: 0.6rem;
            }

            .contact-card {
                padding: 1.2rem;
            }

            .contact-item-large .contact-text {
                font-size: 0.85rem;
            }

            .download-btn-home {
                font-size: 0.8rem;
                padding: 0.6rem 1.2rem;
                width: 100%;
                justify-content: center;
            }

            .edu-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.2rem;
            }

            .edu-item .edu-name {
                font-size: 0.9rem;
            }

            .edu-item .edu-date {
                font-size: 0.75rem;
            }

            .edu-item .edu-desc {
                font-size: 0.75rem;
            }

            .page-content {
                padding: 1.5rem 0;
            }

            .theme-toggle {
                padding: 0.3rem 0.6rem;
                font-size: 0.75rem;
            }

            .skill-full-card {
                padding: 1rem;
            }

            .skill-full-card h4 {
                font-size: 0.85rem;
            }

            .skill-bar-item .skill-label {
                font-size: 0.7rem;
            }
        }

        @media (max-width: 400px) {
            .website-wrapper {
                padding: 0.5rem;
            }

            .projects-grid {
                grid-template-columns: 1fr 1fr;
                gap: 0.4rem;
            }

            .project-card .project-info {
                padding: 0.5rem 0.6rem;
            }

            .project-card .project-info h4 {
                font-size: 0.65rem;
            }

            .project-card .project-info p {
                font-size: 0.55rem;
            }

            .nav-tab {
                font-size: 0.55rem;
                padding: 0.25rem 0.4rem;
                min-width: 40px;
            }

            .profile-card {
                padding: 0.8rem;
            }

            .profile-avatar {
                width: 60px;
                height: 60px;
            }

            .profile-card h2 {
                font-size: 1.1rem;
            }

            .stat-card .number {
                font-size: 1.2rem;
            }

            .stat-card {
                padding: 0.6rem;
            }
        }
    </style>
</head>
<body>
    <div class="website-wrapper">
        <!-- HEADER -->
        <header class="site-header">
            <a href="#" class="site-logo" onclick="switchPage('home')">
                <i class="fas fa-user-graduate"></i>
                <div>
                    <h1>Prasad Shejole</h1>
                    <span>Portfolio</span>
                </div>
            </a>
            <nav class="site-nav">
                <div class="nav-tabs">
                    <button class="nav-tab active" data-page="home" onclick="switchPage('home')">
                        <i class="fas fa-home"></i> Home
                    </button>
                    <button class="nav-tab" data-page="about" onclick="switchPage('about')">
                        <i class="fas fa-user"></i> About
                    </button>
                    <button class="nav-tab" data-page="skills" onclick="switchPage('skills')">
                        <i class="fas fa-code"></i> Skills
                    </button>
                    <button class="nav-tab" data-page="projects" onclick="switchPage('projects')">
                        <i class="fas fa-images"></i> Projects
                    </button>
                    <button class="nav-tab" data-page="contact" onclick="switchPage('contact')">
                        <i class="fas fa-envelope"></i> Contact
                    </button>
                </div>
                <button class="theme-toggle" id="themeToggle" onclick="toggleTheme()">
                    <i class="fas fa-moon"></i>
                </button>
            </nav>
        </header>

        <!-- PAGE CONTENT -->
        <div class="page-content">
            <!-- ==================== HOME PAGE ==================== -->
            <div class="page active" id="page-home">
                <div class="hero-section">
                    <!-- Left Column -->
                    <div class="hero-left">
                        <div class="profile-card">
                            <div class="profile-avatar">
                                <img src="IMG-20260809-WA0001.jpg" alt="Prasad Shejole" id="profileImage">
                            </div>
                            <h2>Prasad Shejole</h2>
                            <div class="tagline">
                                <i class="fas fa-graduation-cap"></i> MBBS Student · 4th Year
                            </div>
                            <p class="bio">
                                A dedicated 4th-year MBBS student with a passion for digital media, content creation, and strategic communication. Bridging the gap between medicine and modern media.
                            </p>
                            <button class="download-btn-home" id="downloadBtn">
                                <i class="fas fa-file-pdf"></i> Download CV (PDF)
                            </button>
                        </div>

                        <div class="stats-grid-home">
                            <div class="stat-card">
                                <span class="number" data-count="4">0</span>
                                <span class="label">MBBS Year</span>
                            </div>
                            <div class="stat-card">
                                <span class="number" data-count="15">0</span>
                                <span class="label">Projects</span>
                            </div>
                            <div class="stat-card">
                                <span class="number" data-count="25">0</span>
                                <span class="label">Events Managed</span>
                            </div>
                            <div class="stat-card">
                                <span class="number" data-count="50">0</span>
                                <span class="label">Videos Edited</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Skills Overview -->
                    <div class="hero-right">
                        <div>
                            <h3 class="section-title"><i class="fas fa-bullhorn"></i> Social Media Marketing</h3>
                            <div class="skill-group">
                                <div class="skill-tags">
                                    <span class="skill-tag"><i class="fab fa-instagram"></i> Instagram Strategy</span>
                                    <span class="skill-tag"><i class="fab fa-linkedin"></i> LinkedIn Branding</span>
                                    <span class="skill-tag"><i class="fas fa-chart-line"></i> Analytics & Insights</span>
                                    <span class="skill-tag"><i class="fas fa-ad"></i> Meta Ads</span>
                                    <span class="skill-tag"><i class="fas fa-people-arrows"></i> Community Engagement</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="section-title"><i class="fas fa-pen-fancy"></i> Editing & Content Creation</h3>
                            <div class="skill-group">
                                <div class="skill-tags">
                                    <span class="skill-tag"><i class="fas fa-video"></i> CapCut Pro</span>
                                    <span class="skill-tag"><i class="fas fa-paint-brush"></i> Canva Expert</span>
                                    <span class="skill-tag"><i class="fas fa-cut"></i> Video Editing</span>
                                    <span class="skill-tag"><i class="fas fa-image"></i> Thumbnail Design</span>
                                    <span class="skill-tag"><i class="fas fa-film"></i> Reels / Shorts</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="section-title"><i class="fas fa-calendar-check"></i> Event Management</h3>
                            <div class="skill-group">
                                <div class="skill-tags">
                                    <span class="skill-tag"><i class="fas fa-tasks"></i> Planning & Logistics</span>
                                    <span class="skill-tag"><i class="fas fa-users"></i> Team Coordination</span>
                                    <span class="skill-tag"><i class="fas fa-handshake"></i> Vendor Management</span>
                                    <span class="skill-tag"><i class="fas fa-trophy"></i> Medical Conferences</span>
                                    <span class="skill-tag"><i class="fas fa-microphone"></i> Hosting / Emcee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== ABOUT PAGE ==================== -->
            <div class="page" id="page-about">
                <div class="about-content">
                    <div class="profile-card">
                        <h2>About Me</h2>
                        <p class="bio" style="font-size: 1rem; line-height: 1.8;">
                            A dedicated 4th-year MBBS student currently pursuing medical education in Russia, with a strong passion for digital media, content creation, and strategic communication. While my academic journey focuses on healthcare, I actively cultivate expertise in social media marketing, video editing, graphic design, and event management. This portfolio highlights my creative endeavors and professional skills beyond the clinical realm, showcasing a well-rounded individual capable of bridging the gap between medicine and modern media.
                        </p>
                    </div>

                    <h3 class="section-title"><i class="fas fa-university"></i> Education</h3>
                    <div class="education-timeline">
                        <div class="edu-item">
                            <span class="edu-name">MBBS</span>
                            <span class="edu-date">2023 – 2029</span>
                            <span class="edu-desc">Pursuing medical education in Russia</span>
                        </div>
                        <div class="edu-item">
                            <span class="edu-name">Pre-medical</span>
                            <span class="edu-date">2020 – 2022</span>
                            <span class="edu-desc">Foundation in medical sciences</span>
                        </div>
                        <div class="edu-item">
                            <span class="edu-name">Digital Marketing</span>
                            <span class="edu-date">Certification</span>
                            <span class="edu-desc">Specialized in social media strategy and content creation</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== SKILLS PAGE ==================== -->
            <div class="page" id="page-skills">
                <div class="skills-page-content">
                    <h3 class="section-title"><i class="fas fa-code"></i> Skills & Expertise</h3>
                    <div class="skills-full-grid">
                        <!-- Social Media Marketing -->
                        <div class="skill-full-card">
                            <h4><i class="fas fa-bullhorn"></i> Social Media Marketing</h4>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Instagram Strategy</span>
                                    <span>90%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="90"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>LinkedIn Branding</span>
                                    <span>85%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="85"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Analytics & Insights</span>
                                    <span>75%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="75"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Community Engagement</span>
                                    <span>80%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="80"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Editing & Content Creation -->
                        <div class="skill-full-card">
                            <h4><i class="fas fa-pen-fancy"></i> Editing & Content Creation</h4>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>CapCut (Pro)</span>
                                    <span>95%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="95"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Canva (Expert)</span>
                                    <span>92%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="92"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Video Editing</span>
                                    <span>85%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="85"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Thumbnail Design</span>
                                    <span>88%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="88"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Event Management -->
                        <div class="skill-full-card">
                            <h4><i class="fas fa-calendar-check"></i> Event Management</h4>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Planning & Logistics</span>
                                    <span>85%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="85"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Team Coordination</span>
                                    <span>82%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="82"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Timeline Execution</span>
                                    <span>78%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="78"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Hosting / Emcee</span>
                                    <span>80%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="80"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Additional Skills -->
                        <div class="skill-full-card">
                            <h4><i class="fas fa-tools"></i> Additional Skills</h4>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Content Strategy</span>
                                    <span>82%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="82"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Brand Identity</span>
                                    <span>75%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="75"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Social Media Ads</span>
                                    <span>70%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="70"></div>
                                </div>
                            </div>
                            <div class="skill-bar-item">
                                <div class="skill-label">
                                    <span>Photography</span>
                                    <span>65%</span>
                                </div>
                                <div class="skill-bar-track">
                                    <div class="skill-bar-fill" data-width="65"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== PROJECTS PAGE ==================== -->
            <div class="page" id="page-projects">
                <div class="projects-page-content">
                    <h3 class="section-title"><i class="fas fa-images"></i> Project Gallery</h3>
                    <div class="projects-grid">
                        <!-- Project 1: Social Media Campaign -->
                        <div class="project-card" data-project="Social Media Campaign">
                            <div class="project-media">
                                <img src="IMG-20260809-WA0003.jpg" alt="Social Media Campaign" loading="lazy" onerror="this.style.display='none'">
                            </div>
                            <div class="project-info">
                                <h4>Social Media Campaign</h4>
                                <p>Instagram marketing campaign design</p>
                            </div>
                        </div>

                        <!-- Project 2: Video Edit -->
                        <div class="project-card" data-project="Video Edit">
                            <div class="project-media">
                                <video src="VID-20260809-WA0004.mp4" muted loop playsinline loading="lazy" onerror="this.style.display='none'"></video>
                            </div>
                            <div class="project-info">
                                <h4>Video Edit</h4>
                                <p>Professional video editing with CapCut</p>
                            </div>
                        </div>

                        <!-- Project 3: Event Design -->
                        <div class="project-card" data-project="Event Design">
                            <div class="project-media">
                                <video src="VID-20251220-WA0008.mp4" muted loop playsinline loading="lazy" onerror="this.style.display='none'"></video>
                            </div>
                            <div class="project-info">
                                <h4>Event Design</h4>
                                <p>Event planning and visual design</p>
                            </div>
                        </div>

                        <!-- Project 4: Canva Design - PDF -->
                        <div class="project-card" data-project="Canva Design">
                            <div class="project-media pdf-preview">
                                <i class="fas fa-file-pdf"></i>
                                <span>PDF Document</span>
                            </div>
                            <div class="project-info">
                                <h4>Canva Design</h4>
                                <p>Graphic design using Canva</p>
                            </div>
                        </div>

                        <!-- Project 5: Thumbnail -->
                        <div class="project-card" data-project="Thumbnail">
                            <div class="project-media">
                                <img src="IMG-20250920-WA0061.jpg" alt="Thumbnail" loading="lazy" onerror="this.style.display='none'">
                            </div>
                            <div class="project-info">
                                <h4>Thumbnail Design</h4>
                                <p>YouTube thumbnail creation</p>
                            </div>
                        </div>

                        <!-- Project 6: Brand Identity - Coming Soon -->
                        <div class="project-card coming-soon">
                            <div class="project-media">
                                <i class="fas fa-vector-square"></i>
                            </div>
                            <div class="coming-soon-badge">COMING SOON</div>
                            <div class="project-info">
                                <h4>Brand Identity</h4>
                                <p>Exciting things are on the way</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== CONTACT PAGE ==================== -->
            <div class="page" id="page-contact">
                <div class="contact-page-content">
                    <h3 class="section-title"><i class="fas fa-address-card"></i> Get in Touch</h3>
                    <div class="contact-card">
                        <div class="contact-item-large">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <div class="contact-text">prasad.shejole@medmail.com</div>
                                <div class="contact-label">Email</div>
                            </div>
                        </div>
                        <div class="contact-item-large">
                            <i class="fab fa-github"></i>
                            <div>
                                <div class="contact-text">github.com/prasadmedia</div>
                                <div class="contact-label">GitHub</div>
                            </div>
                        </div>
                        <div class="contact-item-large">
                            <i class="fab fa-instagram"></i>
                            <div>
                                <div class="contact-text">@prasad.creates</div>
                                <div class="contact-label">Instagram</div>
                            </div>
                        </div>
                        <div class="contact-item-large">
                            <i class="fas fa-phone-alt"></i>
                            <div>
                                <div class="contact-text">
                                    <span class="flag-icon">🇮🇳</span> +91 98765 12345
                                </div>
                                <div class="contact-label">India</div>
                            </div>
                        </div>
                        <div class="contact-item-large">
                            <i class="fas fa-phone-alt"></i>
                            <div>
                                <div class="contact-text">
                                    <span class="flag-icon">🇷🇺</span> +7 987 654 3210
                                </div>
                                <div class="contact-label">Russia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER -->
        <footer style="padding: 1.5rem 0 0.5rem 0; border-top: 1px solid #e2e8f0; text-align: center; font-size: 0.8rem; color: #475569; transition: all 0.3s ease;">
            <p>© 2026 Prasad Shejole · MBBS Student · Marketing &amp; Editing</p>
        </footer>
    </div>

    <script>
        (function() {
            // ---------- PAGE SWITCHING ----------
            window.switchPage = function(page) {
                // Hide all pages
                document.querySelectorAll('.page').forEach(p => {
                    p.classList.remove('active');
                });
                
                // Show selected page
                const targetPage = document.getElementById('page-' + page);
                if (targetPage) {
                    targetPage.classList.add('active');
                }
                
                // Update nav tabs
                document.querySelectorAll('.nav-tab').forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.getAttribute('data-page') === page) {
                        tab.classList.add('active');
                    }
                });
                
                // Reset and trigger animations for new page
                setTimeout(() => {
                    resetAndAnimateProgressBars();
                    animateCounters();
                }, 400);
            };

            // ---------- THEME TOGGLE ----------
            window.toggleTheme = function() {
                const body = document.body;
                const themeToggle = document.getElementById('themeToggle');
                
                if (body.classList.contains('dark')) {
                    body.classList.remove('dark');
                    body.classList.add('light');
                    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                    try {
                        localStorage.setItem('theme-pref', 'light');
                    } catch (e) {}
                } else {
                    body.classList.remove('light');
                    body.classList.add('dark');
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                    try {
                        localStorage.setItem('theme-pref', 'dark');
                    } catch (e) {}
                }
            };

            // Load saved theme
            function loadTheme() {
                const body = document.body;
                const themeToggle = document.getElementById('themeToggle');
                let saved = 'light';
                
                try {
                    const stored = localStorage.getItem('theme-pref');
                    if (stored === 'dark' || stored === 'light') {
                        saved = stored;
                    }
                } catch (e) {}
                
                if (saved === 'dark') {
                    body.classList.add('dark');
                    body.classList.remove('light');
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                } else {
                    body.classList.remove('dark');
                    body.classList.add('light');
                    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                }
            }

            // ---------- ANIMATED COUNTERS ----------
            function animateCounters() {
                const statNumbers = document.querySelectorAll('.stat-card .number');
                
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    if (!target || target === 0) return;
                    
                    // Reset to 0 first
                    stat.textContent = '0';
                    
                    const duration = 2000;
                    const stepTime = 20;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;
                    
                    if (stat._interval) {
                        clearInterval(stat._interval);
                    }
                    
                    stat._interval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target;
                            clearInterval(stat._interval);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, stepTime);
                });
            }

            // ---------- SKILL PROGRESS BARS (FIXED) ----------
            function resetAndAnimateProgressBars() {
                const progressBars = document.querySelectorAll('.skill-bar-fill');
                
                // First reset all to 0
                progressBars.forEach(bar => {
                    bar.style.width = '0%';
                });
                
                // Then animate to their target widths with proper delays
                progressBars.forEach((bar, index) => {
                    const width = parseInt(bar.getAttribute('data-width'));
                    if (!width || width === 0) return;
                    
                    // Use a longer delay for each bar to ensure smooth animation
                    const delay = 100 + (index * 150);
                    
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, delay);
                });
            }

            // ---------- PROJECT CARD INTERACTION ----------
            document.querySelectorAll('.project-card:not(.coming-soon)').forEach(card => {
                card.addEventListener('click', function() {
                    const projectName = this.querySelector('.project-info h4')?.textContent || 'Project';
                    
                    const isPDF = this.querySelector('.pdf-preview');
                    if (isPDF) {
                        alert('📄 Project: ' + projectName + '\n\nThis is a PDF document. Click to view or download.\n(Replace this with your actual PDF viewer!)');
                    } else {
                        alert('🖼️ Project: ' + projectName + '\n\nClick to view full project details.\n(Replace this with your actual project showcase!)');
                    }
                });
            });

            // Video hover play/pause
            document.querySelectorAll('.project-card video').forEach(video => {
                const card = video.closest('.project-card');
                if (card) {
                    card.addEventListener('mouseenter', function() {
                        video.play();
                    });
                    card.addEventListener('mouseleave', function() {
                        video.pause();
                        video.currentTime = 0;
                    });
                }
            });

            // ---------- PDF DOWNLOAD ----------
            document.getElementById('downloadBtn')?.addEventListener('click', function() {
                const btn = this;
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';

                const cvContent = document.createElement('div');
                cvContent.style.cssText = `
                    font-family: 'Inter', Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px;
                    background: white;
                    color: #1e293b;
                `;
                
                cvContent.innerHTML = `
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #0b6e4f; font-size: 28px; margin-bottom: 5px;">Prasad Shejole</h1>
                        <p style="color: #475569; font-size: 16px; margin: 5px 0;">
                            <i class="fas fa-graduation-cap"></i> MBBS Student · 4th Year
                        </p>
                        <p style="color: #475569; font-size: 14px;">
                            <i class="fas fa-bullhorn"></i> Marketing &bull; Editing &bull; Event Management
                        </p>
                    </div>

                    <hr style="border: 1px solid #e9edf2; margin: 20px 0;">

                    <div style="margin-bottom: 20px;">
                        <h3 style="color: #0b6e4f; font-size: 18px; margin-bottom: 10px;">About Me</h3>
                        <p style="color: #1e293b; line-height: 1.6; font-size: 14px;">
                            A dedicated 4th-year MBBS student currently pursuing medical education in Russia, with a strong passion for digital media, content creation, and strategic communication. While my academic journey focuses on healthcare, I actively cultivate expertise in social media marketing, video editing, graphic design, and event management.
                        </p>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h3 style="color: #0b6e4f; font-size: 18px; margin-bottom: 10px;">Education</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 5px 0; font-size: 14px;"><strong>MBBS</strong> · 2023 – 2029</li>
                            <li style="padding: 5px 0; font-size: 14px;"><strong>Pre-medical</strong> · 2020 – 2022</li>
                            <li style="padding: 5px 0; font-size: 14px;"><strong>Digital Marketing</strong> · Certification</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h3 style="color: #0b6e4f; font-size: 18px; margin-bottom: 10px;">Skills</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            <span style="background: #e9edf2; padding: 5px 12px; border-radius: 20px; font-size: 13px;">Instagram Strategy</span>
                            <span style="background: #e9edf2; padding: 5px 12px; border-radius: 20px; font-size: 13px;">LinkedIn Branding</span>
                            <span style="background: #e9edf2; padding: 5px 12px; border-radius: 20px; font-size: 13px;">CapCut Pro</span>
                            <span style="background: #e9edf2; padding: 5px 12px; border-radius: 20px; font-size: 13px;">Canva Expert</span>
                            <span style="background: #e9edf2; padding: 5px 12px; border-radius: 20px; font-size: 13px;">Video Editing</span>
                            <span style="background: #e9edf2; padding: 5px 12px; border-radius: 20px; font-size: 13px;">Event Management</span>
                            <span style="background: #e9edf2; padding: 5px 12px; border-radius: 20px; font-size: 13px;">Thumbnail Design</span>
                            <span style="background: #e9edf2; padding: 5px 12px; border-radius: 20px; font-size: 13px;">Brand Identity</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h3 style="color: #0b6e4f; font-size: 18px; margin-bottom: 10px;">Quick Stats</h3>
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; text-align: center;">
                            <div><strong style="font-size: 22px; color: #0b6e4f;">4</strong><br><span style="font-size: 12px; color: #475569;">MBBS Year</span></div>
                            <div><strong style="font-size: 22px; color: #0b6e4f;">15</strong><br><span style="font-size: 12px; color: #475569;">Projects</span></div>
                            <div><strong style="font-size: 22px; color: #0b6e4f;">25</strong><br><span style="font-size: 12px; color: #475569;">Events Managed</span></div>
                            <div><strong style="font-size: 22px; color: #0b6e4f;">50</strong><br><span style="font-size: 12px; color: #475569;">Videos Edited</span></div>
                        </div>
                    </div>

                    <hr style="border: 1px solid #e9edf2; margin: 20px 0;">

                    <div style="text-align: center; color: #475569; font-size: 13px;">
                        <p><i class="fas fa-envelope"></i> prasad.shejole@medmail.com</p>
                        <p><i class="fas fa-phone-alt"></i> +91 98765 12345 | +7 987 654 3210</p>
                        <p><i class="fab fa-github"></i> github.com/prasadmedia</p>
                    </div>
                `;

                const opt = {
                    margin: 10,
                    filename: 'Prasad_Shejole_CV.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true, letterRendering: true },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                };

                html2pdf().set(opt).from(cvContent).save().then(function() {
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-file-pdf"></i> Download CV (PDF)';
                }).catch(function(err) {
                    console.error('PDF generation error:', err);
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-file-pdf"></i> Download CV (PDF)';
                    alert('Failed to generate PDF. Please try again.');
                });
            });

            // ---------- INITIALIZATION ----------
            loadTheme();
            
            // Trigger animations after page load
            setTimeout(() => {
                resetAndAnimateProgressBars();
                animateCounters();
            }, 500);

            // Re-run animations when page becomes visible
            document.addEventListener('visibilitychange', function() {
                if (!document.hidden) {
                    setTimeout(() => {
                        resetAndAnimateProgressBars();
                        animateCounters();
                    }, 300);
                }
            });

        })();
    </script>
</body>
</html>
