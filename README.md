<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#0f172a">
    <title>Prasad Shejole · Portfolio</title><!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- PDF Generator -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
    integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"></script>

<style>
    /* =========================================================
       ROOT / RESET
    ========================================================= */

    :root {
        --primary: #0f766e;
        --primary-dark: #115e59;
        --primary-light: #14b8a6;
        --accent: #38bdf8;

        --bg: #f6f9fc;
        --surface: rgba(255,255,255,0.88);
        --surface-solid: #ffffff;
        --surface-soft: #eef5f7;

        --text: #0f172a;
        --text-secondary: #475569;
        --text-muted: #64748b;

        --border: #dfe8ed;
        --border-hover: #99d5d0;

        --shadow-sm: 0 4px 16px rgba(15, 23, 42, 0.05);
        --shadow-md: 0 12px 35px rgba(15, 23, 42, 0.08);
        --shadow-lg: 0 24px 60px rgba(15, 23, 42, 0.13);

        --radius-sm: 12px;
        --radius-md: 18px;
        --radius-lg: 24px;
        --radius-xl: 30px;

        --transition: 0.25s ease;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Helvetica, Arial, sans-serif;

        background:
            radial-gradient(circle at 10% 0%, rgba(20,184,166,0.08), transparent 28%),
            radial-gradient(circle at 90% 10%, rgba(56,189,248,0.07), transparent 25%),
            var(--bg);

        color: var(--text);
        transition:
            background 0.35s ease,
            color 0.35s ease;

        overflow-x: hidden;
    }

    button,
    a {
        -webkit-tap-highlight-color: transparent;
    }

    button {
        font-family: inherit;
    }

    /* =========================================================
       WEBSITE WRAPPER
    ========================================================= */

    .website-wrapper {
        width: min(100% - 40px, 1440px);
        margin: 0 auto;
        min-height: 100vh;
    }

    /* =========================================================
       HEADER
    ========================================================= */

    .site-header {
        position: sticky;
        top: 0;
        z-index: 100;

        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 24px;

        padding: 18px 0;

        border-bottom: 1px solid var(--border);

        background: rgba(246,249,252,0.82);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);

        transition: all var(--transition);
    }

    .site-logo {
        display: flex;
        align-items: center;
        gap: 12px;

        text-decoration: none;
        color: inherit;

        min-width: max-content;
    }

    .logo-icon {
        width: 44px;
        height: 44px;

        display: grid;
        place-items: center;

        border-radius: 14px;

        color: white;

        background:
            linear-gradient(135deg, var(--primary), var(--primary-light));

        box-shadow:
            0 8px 22px rgba(15,118,110,0.22);
    }

    .logo-icon i {
        font-size: 19px;
    }

    .site-logo h1 {
        font-size: 1.15rem;
        line-height: 1.1;
        font-weight: 800;
        letter-spacing: -0.03em;
        color: var(--text);
    }

    .site-logo span {
        display: block;
        margin-top: 3px;

        font-size: 0.7rem;
        color: var(--text-muted);
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    /* =========================================================
       NAVIGATION
    ========================================================= */

    .site-nav {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .nav-tabs {
        display: flex;
        align-items: center;
        gap: 4px;

        padding: 5px;

        background: rgba(226,232,240,0.72);
        border: 1px solid var(--border);

        border-radius: 999px;
    }

    .nav-tab {
        border: none;
        background: transparent;

        color: var(--text-secondary);

        padding: 9px 15px;

        border-radius: 999px;

        font-size: 0.78rem;
        font-weight: 650;

        cursor: pointer;

        transition: all var(--transition);
        white-space: nowrap;
    }

    .nav-tab i {
        margin-right: 5px;
        font-size: 0.75rem;
    }

    .nav-tab:hover {
        color: var(--primary);
        background: rgba(255,255,255,0.7);
    }

    .nav-tab.active {
        color: white;

        background:
            linear-gradient(135deg, var(--primary), var(--primary-light));

        box-shadow:
            0 5px 14px rgba(15,118,110,0.20);
    }

    .theme-toggle {
        width: 42px;
        height: 42px;

        display: grid;
        place-items: center;

        border: 1px solid var(--border);
        border-radius: 50%;

        color: var(--text-secondary);
        background: rgba(255,255,255,0.7);

        cursor: pointer;

        transition: all var(--transition);
    }

    .theme-toggle:hover {
        color: var(--primary);
        transform: rotate(12deg);
        border-color: var(--border-hover);
    }

    /* =========================================================
       PAGE CONTENT
    ========================================================= */

    .page-content {
        padding: 55px 0 70px;
        min-height: calc(100vh - 150px);
    }

    .page {
        display: none;
        animation: pageIn 0.45s ease;
    }

    .page.active {
        display: block;
    }

    @keyframes pageIn {
        from {
            opacity: 0;
            transform: translateY(12px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* =========================================================
       GENERAL SECTION TITLE
    ========================================================= */

    .section-title {
        display: flex;
        align-items: center;
        gap: 9px;

        margin-bottom: 18px;

        color: var(--text);
        font-size: 1.05rem;
        font-weight: 750;
        letter-spacing: -0.015em;
    }

    .section-title i {
        color: var(--primary);
    }

    /* =========================================================
       HOME
    ========================================================= */

    .hero-section {
        display: grid;
        grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.5fr);
        gap: 45px;
        align-items: start;
    }

    .hero-left,
    .hero-right {
        display: flex;
        flex-direction: column;
        gap: 22px;
    }

    /* =========================================================
       PROFILE CARD
    ========================================================= */

    .profile-card {
        position: relative;
        overflow: hidden;

        background: var(--surface);
        border: 1px solid var(--border);

        border-radius: var(--radius-lg);

        padding: 30px;

        box-shadow: var(--shadow-sm);

        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);

        transition:
            transform var(--transition),
            box-shadow var(--transition),
            border-color var(--transition);
    }

    .profile-card::before {
        content: "";
        position: absolute;

        width: 180px;
        height: 180px;

        top: -100px;
        right: -80px;

        border-radius: 50%;

        background: rgba(20,184,166,0.09);

        pointer-events: none;
    }

    .profile-card:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
    }

    .profile-avatar {
        position: relative;

        width: 108px;
        height: 108px;

        margin-bottom: 20px;

        border-radius: 50%;

        padding: 3px;

        background:
            linear-gradient(135deg, var(--primary), var(--accent));

        box-shadow:
            0 10px 28px rgba(15,118,110,0.18);
    }

    .profile-avatar img {
        width: 100%;
        height: 100%;

        display: block;

        border-radius: 50%;

        object-fit: cover;

        border: 3px solid var(--surface-solid);
    }

    .profile-card h2 {
        position: relative;

        font-size: clamp(1.6rem, 3vw, 2rem);
        line-height: 1.1;

        font-weight: 800;
        letter-spacing: -0.04em;

        color: var(--text);
    }

    .profile-card .tagline {
        margin: 8px 0 14px;

        color: var(--primary);

        font-size: 0.9rem;
        font-weight: 650;
    }

    .profile-card .tagline i {
        margin-right: 5px;
    }

    .profile-card .bio {
        color: var(--text-secondary);

        font-size: 0.9rem;
        line-height: 1.75;
    }

    /* =========================================================
       DOWNLOAD BUTTON
    ========================================================= */

    .download-btn-home {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        margin-top: 22px;

        padding: 12px 18px;

        border: none;
        border-radius: 999px;

        color: white;

        background:
            linear-gradient(135deg, var(--primary), var(--primary-light));

        font-size: 0.85rem;
        font-weight: 700;

        cursor: pointer;

        box-shadow:
            0 8px 20px rgba(15,118,110,0.18);

        transition: all var(--transition);
    }

    .download-btn-home:hover {
        transform: translateY(-2px);
        box-shadow:
            0 12px 28px rgba(15,118,110,0.25);
    }

    .download-btn-home:disabled {
        opacity: 0.65;
        cursor: not-allowed;
        transform: none;
    }

    /* =========================================================
       STATS
    ========================================================= */

    .stats-grid-home {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    .stat-card {
        padding: 20px 15px;

        text-align: center;

        background: var(--surface);
        border: 1px solid var(--border);

        border-radius: var(--radius-md);

        box-shadow: var(--shadow-sm);

        transition: all var(--transition);
    }

    .stat-card:hover {
        transform: translateY(-4px);
        border-color: var(--border-hover);
        box-shadow: var(--shadow-md);
    }

    .stat-card .number {
        display: block;

        color: var(--primary);

        font-size: 1.75rem;
        font-weight: 800;
        letter-spacing: -0.04em;
    }

    .stat-card .label {
        display: block;
        margin-top: 3px;

        color: var(--text-muted);

        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    /* =========================================================
       SKILL GROUPS
    ========================================================= */

    .skill-group {
        padding: 20px;

        background: var(--surface);
        border: 1px solid var(--border);

        border-radius: var(--radius-md);

        box-shadow: var(--shadow-sm);

        transition: all var(--transition);
    }

    .skill-group:hover {
        border-color: var(--border-hover);
        box-shadow: var(--shadow-md);
    }

    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .skill-tag {
        display: inline-flex;
        align-items: center;

        padding: 7px 11px;

        border: 1px solid transparent;
        border-radius: 999px;

        color: var(--text-secondary);
        background: var(--surface-soft);

        font-size: 0.72rem;
        font-weight: 600;

        transition: all var(--transition);
    }

    .skill-tag i {
        margin-right: 6px;
        color: var(--primary);
    }

    .skill-tag:hover {
        color: var(--primary);
        border-color: var(--border-hover);
        transform: translateY(-1px);
    }

    /* =========================================================
       ABOUT
    ========================================================= */

    .about-content {
        width: min(900px, 100%);
        margin: 0 auto;
    }

    .about-content .profile-card {
        margin-bottom: 30px;
    }

    .about-content .bio {
        font-size: 0.96rem;
        line-height: 1.85;
    }

    .education-timeline {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .edu-item {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 8px 20px;

        padding: 19px 22px;

        background: var(--surface);
        border: 1px solid var(--border);

        border-radius: var(--radius-md);

        box-shadow: var(--shadow-sm);

        transition: all var(--transition);
    }

    .edu-item:hover {
        transform: translateX(3px);
        border-color: var(--border-hover);
        box-shadow: var(--shadow-md);
    }

    .edu-name {
        color: var(--primary);
        font-size: 0.9rem;
        font-weight: 750;
    }

    .edu-date {
        color: var(--text-muted);
        font-size: 0.78rem;
        font-weight: 650;
    }

    .edu-desc {
        grid-column: 1 / -1;

        color: var(--text-secondary);
        font-size: 0.8rem;
    }

    /* =========================================================
       SKILLS PAGE
    ========================================================= */

    .skills-page-content {
        width: min(1050px, 100%);
        margin: 0 auto;
    }

    .skills-full-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
    }

    .skill-full-card {
        padding: 24px;

        background: var(--surface);
        border: 1px solid var(--border);

        border-radius: var(--radius-md);

        box-shadow: var(--shadow-sm);

        transition: all var(--transition);
    }

    .skill-full-card:hover {
        transform: translateY(-3px);
        border-color: var(--border-hover);
        box-shadow: var(--shadow-md);
    }

    .skill-full-card h4 {
        margin-bottom: 20px;

        color: var(--text);
        font-size: 0.92rem;
        font-weight: 750;
    }

    .skill-full-card h4 i {
        margin-right: 7px;
        color: var(--primary);
    }

    .skill-bar-item {
        margin-bottom: 16px;
    }

    .skill-bar-item:last-child {
        margin-bottom: 0;
    }

    .skill-label {
        display: flex;
        justify-content: space-between;

        margin-bottom: 7px;

        color: var(--text-secondary);

        font-size: 0.74rem;
        font-weight: 600;
    }

    .skill-label span:last-child {
        color: var(--primary);
    }

    .skill-bar-track {
        width: 100%;
        height: 7px;

        overflow: hidden;

        border-radius: 999px;

        background: var(--surface-soft);
    }

    .skill-bar-fill {
        width: 0;
        height: 100%;

        border-radius: inherit;

        background:
            linear-gradient(90deg, var(--primary), var(--primary-light), var(--accent));

        transition:
            width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    /* =========================================================
       PROJECTS / GALLERY
    ========================================================= */

    .projects-page-content {
        width: min(1180px, 100%);
        margin: 0 auto;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
    }

    .project-card {
        position: relative;

        overflow: hidden;

        background: var(--surface);
        border: 1px solid var(--border);

        border-radius: var(--radius-md);

        box-shadow: var(--shadow-sm);

        cursor: pointer;

        transition:
            transform var(--transition),
            box-shadow var(--transition),
            border-color var(--transition);
    }

    .project-card:hover {
        transform: translateY(-6px);
        border-color: var(--border-hover);
        box-shadow: var(--shadow-lg);
    }

    .project-media {
        position: relative;

        width: 100%;
        aspect-ratio: 4 / 3;

        overflow: hidden;

        background: #dce7eb;
    }

    .project-media::after {
        content: "";

        position: absolute;
        inset: 0;

        background:
            linear-gradient(
                to top,
                rgba(0,0,0,0.28),
                transparent 45%
            );

        opacity: 0;

        pointer-events: none;

        transition: opacity var(--transition);
    }

    .project-card:hover .project-media::after {
        opacity: 1;
    }

    .project-media img,
    .project-media video {
        width: 100%;
        height: 100%;

        display: block;

        object-fit: cover;

        transition: transform 0.6s ease;
    }

    .project-card:hover .project-media img,
    .project-card:hover .project-media video {
        transform: scale(1.045);
    }

    /* Gallery open indicator */

    .gallery-open-icon {
        position: absolute;

        right: 13px;
        bottom: 13px;

        z-index: 5;

        width: 36px;
        height: 36px;

        display: grid;
        place-items: center;

        border-radius: 50%;

        color: white;
        background: rgba(15,23,42,0.68);

        backdrop-filter: blur(8px);

        opacity: 0;
        transform: translateY(5px);

        transition: all var(--transition);
    }

    .project-card:hover .gallery-open-icon {
        opacity: 1;
        transform: translateY(0);
    }

    .project-info {
        padding: 15px 16px 17px;
    }

    .project-info h4 {
        color: var(--text);

        font-size: 0.85rem;
        font-weight: 750;
    }

    .project-info p {
        margin-top: 4px;

        color: var(--text-muted);

        font-size: 0.7rem;
        line-height: 1.45;
    }

    /* PDF */

    .pdf-preview {
        display: flex;

        align-items: center;
        justify-content: center;

        flex-direction: column;

        gap: 8px;

        color: var(--primary);

        background:
            linear-gradient(
                135deg,
                #eef8f7,
                #e6f0f4
            );
    }

    .pdf-preview i {
        font-size: 3.3rem;
    }

    .pdf-preview span {
        color: var(--text-muted);
        font-size: 0.68rem;
        font-weight: 650;
    }

    /* Coming soon */

    .project-card.coming-soon {
        cursor: default;
        opacity: 0.7;
    }

    .project-card.coming-soon:hover {
        transform: none;
        box-shadow: var(--shadow-sm);
    }

    .project-card.coming-soon .project-media {
        display: grid;
        place-items: center;

        color: var(--primary);

        background:
            repeating-linear-gradient(
                45deg,
                var(--surface-soft),
                var(--surface-soft) 10px,
                rgba(255,255,255,0.5) 10px,
                rgba(255,255,255,0.5) 20px
            );
    }

    .project-card.coming-soon .project-media i {
        font-size: 3rem;
        opacity: 0.35;
    }

    .coming-soon-badge {
        position: absolute;

        top: 12px;
        right: 12px;

        z-index: 5;

        padding: 5px 9px;

        border-radius: 999px;

        color: white;
        background: rgba(15,23,42,0.75);

        font-size: 0.57rem;
        font-weight: 750;
        letter-spacing: 0.08em;
    }

    /* =========================================================
       GALLERY MODAL / LIGHTBOX
    ========================================================= */

    .media-modal {
        position: fixed;
        inset: 0;

        z-index: 9999;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 25px;

        background: rgba(2,6,23,0.88);

        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);

        opacity: 0;
        visibility: hidden;

        transition:
            opacity 0.25s ease,
            visibility 0.25s ease;
    }

    .media-modal.active {
        opacity: 1;
        visibility: visible;
    }

    .media-modal-content {
        position: relative;

        width: min(1200px, 94vw);
        height: min(88vh, 850px);

        display: flex;
        align-items: center;
        justify-content: center;

        transform: scale(0.94);

        transition: transform 0.3s ease;
    }

    .media-modal.active .media-modal-content {
        transform: scale(1);
    }

    .modal-media {
        max-width: 100%;
        max-height: 100%;

        display: block;

        border-radius: 12px;

        object-fit: contain;

        box-shadow:
            0 25px 80px rgba(0,0,0,0.45);
    }

    .modal-video {
        width: min(1100px, 92vw);
        max-height: 82vh;

        background: #000;
    }

    .modal-pdf {
        width: min(1100px, 92vw);
        height: 82vh;

        border: none;
        border-radius: 12px;

        background: white;
    }

    .modal-close {
        position: fixed;

        top: 20px;
        right: 22px;

        z-index: 10001;

        width: 46px;
        height: 46px;

        display: grid;
        place-items: center;

        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 50%;

        color: white;
        background: rgba(15,23,42,0.65);

        font-size: 1.1rem;

        cursor: pointer;

        backdrop-filter: blur(10px);

        transition: all var(--transition);
    }

    .modal-close:hover {
        background: rgba(255,255,255,0.15);
        transform: rotate(90deg);
    }

    .modal-title {
        position: fixed;

        left: 50%;
        bottom: 20px;

        z-index: 10001;

        transform: translateX(-50%);

        max-width: 80%;

        padding: 8px 15px;

        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 999px;

        color: rgba(255,255,255,0.9);
        background: rgba(15,23,42,0.65);

        font-size: 0.75rem;
        font-weight: 650;

        backdrop-filter: blur(10px);
    }

    /* =========================================================
       CONTACT
    ========================================================= */

    .contact-page-content {
        width: min(720px, 100%);
        margin: 0 auto;
    }

    .contact-card {
        padding: 25px;

        background: var(--surface);
        border: 1px solid var(--border);

        border-radius: var(--radius-lg);

        box-shadow: var(--shadow-md);
    }

    .contact-item-large {
        display: flex;
        align-items: center;

        gap: 15px;

        padding: 16px 0;

        border-bottom: 1px solid var(--border);
    }

    .contact-item-large:last-child {
        border-bottom: none;
    }

    .contact-item-large > i {
        flex: 0 0 42px;

        width: 42px;
        height: 42px;

        display: grid;
        place-items: center;

        border-radius: 12px;

        color: var(--primary);

        background: var(--surface-soft);
    }

    .contact-text {
        color: var(--text);

        font-size: 0.88rem;
        font-weight: 600;

        word-break: break-word;
    }

    .contact-label {
        margin-top: 3px;

        color: var(--text-muted);

        font-size: 0.68rem;
    }

    .flag-icon {
        margin-right: 5px;
    }

    /* =========================================================
       FOOTER
    ========================================================= */

    .site-footer {
        padding: 22px 0;

        border-top: 1px solid var(--border);

        text-align: center;

        color: var(--text-muted);

        font-size: 0.72rem;
    }

    /* =========================================================
       DARK MODE
    ========================================================= */

    body.dark {
        --bg: #071014;
        --surface: rgba(15,23,30,0.88);
        --surface-solid: #0f171e;
        --surface-soft: #17242b;

        --text: #e8f1f3;
        --text-secondary: #a9bdc3;
        --text-muted: #7f969d;

        --border: #26373d;
        --border-hover: #357b78;

        --shadow-sm: 0 4px 18px rgba(0,0,0,0.22);
        --shadow-md: 0 15px 40px rgba(0,0,0,0.3);
        --shadow-lg: 0 25px 65px rgba(0,0,0,0.42);
    }

    body.dark {
        background:
            radial-gradient(circle at 10% 0%, rgba(20,184,166,0.10), transparent 30%),
            radial-gradient(circle at 90% 10%, rgba(56,189,248,0.06), transparent 28%),
            var(--bg);
    }

    body.dark .site-header {
        background: rgba(7,16,20,0.78);
    }

    body.dark .nav-tabs {
        background: rgba(23,36,43,0.85);
    }

    body.dark .nav-tab:hover {
        background: rgba(255,255,255,0.05);
    }

    body.dark .theme-toggle {
        background: rgba(23,36,43,0.85);
    }

    body.dark .profile-avatar img {
        border-color: var(--surface-solid);
    }

    body.dark .pdf-preview {
        background:
            linear-gradient(
                135deg,
                #12282a,
                #14252d
            );
    }

    body.dark .project-card.coming-soon .project-media {
        background:
            repeating-linear-gradient(
                45deg,
                #142228,
                #142228 10px,
                #172a30 10px,
                #172a30 20px
            );
    }

    /* =========================================================
       TABLET
    ========================================================= */

    @media (max-width: 1100px) {

        .website-wrapper {
            width: min(100% - 32px, 1100px);
        }

        .hero-section {
            grid-template-columns: 1fr;
            gap: 28px;
        }

        .hero-left {
            display: grid;
            grid-template-columns: minmax(0, 1.5fr) minmax(240px, 0.8fr);
            align-items: stretch;
        }

        .hero-left .profile-card {
            grid-row: span 2;
        }

        .hero-right {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
        }

        .hero-right > div:last-child {
            grid-column: 1 / -1;
        }

        .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    /* =========================================================
       SMALL TABLET / LARGE PHONE
    ========================================================= */

    @media (max-width: 850px) {

        .website-wrapper {
            width: min(100% - 24px, 700px);
        }

        .site-header {
            position: relative;

            flex-direction: column;
            align-items: stretch;

            padding: 15px 0;
        }

        .site-logo {
            justify-content: center;
        }

        .site-nav {
            justify-content: center;
        }

        .nav-tabs {
            width: 100%;
            justify-content: center;
            overflow-x: auto;

            scrollbar-width: none;
        }

        .nav-tabs::-webkit-scrollbar {
            display: none;
        }

        .nav-tab {
            flex: 1;
            padding: 9px 10px;
            font-size: 0.7rem;
        }

        .nav-tab i {
            display: block;
            margin: 0 0 3px;
        }

        .theme-toggle {
            width: 40px;
            height: 40px;
        }

        .page-content {
            padding: 35px 0 50px;
        }

        .hero-left {
            display: flex;
        }

        .hero-right {
            display: flex;
        }

        .skills-full-grid {
            grid-template-columns: 1fr;
        }
    }

    /* =========================================================
       PHONE
    ========================================================= */

    @media (max-width: 600px) {

        .website-wrapper {
            width: min(100% - 16px, 500px);
        }

        .site-header {
            gap: 13px;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
        }

        .site-logo h1 {
            font-size: 1.05rem;
        }

        .site-logo span {
            font-size: 0.62rem;
        }

        .site-nav {
            gap: 8px;
        }

        .nav-tabs {
            padding: 4px;
            border-radius: 16px;
        }

        .nav-tab {
            min-width: 54px;
            padding: 8px 5px;
            font-size: 0.58rem;
        }

        .theme-toggle {
            width: 38px;
            height: 38px;
        }

        .page-content {
            padding: 28px 0 40px;
        }

        .profile-card {
            padding: 23px;
        }

        .profile-avatar {
            width: 88px;
            height: 88px;
        }

        .profile-card h2 {
            font-size: 1.5rem;
        }

        .profile-card .bio {
            font-size: 0.82rem;
        }

        .download-btn-home {
            width: 100%;
        }

        .stats-grid-home {
            gap: 9px;
        }

        .stat-card {
            padding: 16px 10px;
        }

        .stat-card .number {
            font-size: 1.45rem;
        }

        .stat-card .label {
            font-size: 0.58rem;
        }

        .section-title {
            font-size: 0.95rem;
        }

        .skill-group {
            padding: 16px;
        }

        .skill-tag {
            font-size: 0.66rem;
            padding: 6px 9px;
        }

        .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .project-card {
            border-radius: 14px;
        }

        .project-media {
            aspect-ratio: 1 / 1;
        }

        .project-info {
            padding: 11px;
        }

        .project-info h4 {
            font-size: 0.72rem;
        }

        .project-info p {
            font-size: 0.6rem;
        }

        .gallery-open-icon {
            width: 30px;
            height: 30px;

            right: 8px;
            bottom: 8px;

            opacity: 1;
            transform: none;
        }

        .edu-item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;

            padding: 17px;
        }

        .edu-desc {
            margin-top: 3px;
        }

        .contact-card {
            padding: 18px;
        }

        .contact-item-large {
            gap: 11px;
        }

        .contact-item-large > i {
            flex-basis: 38px;
            width: 38px;
            height: 38px;
        }

        .contact-text {
            font-size: 0.78rem;
        }

        .media-modal {
            padding: 12px;
        }

        .media-modal-content {
            width: 100%;
            height: 82vh;
        }

        .modal-video {
            width: 100%;
            max-height: 72vh;
        }

        .modal-pdf {
            width: 100%;
            height: 76vh;
        }

        .modal-close {
            top: 12px;
            right: 12px;

            width: 42px;
            height: 42px;
        }

        .modal-title {
            bottom: 10px;
            font-size: 0.65rem;
        }
    }

    /* =========================================================
       VERY SMALL PHONES
    ========================================================= */

    @media (max-width: 380px) {

        .nav-tab {
            min-width: 48px;
            font-size: 0.53rem;
        }

        .nav-tab i {
            font-size: 0.68rem;
        }

        .projects-grid {
            gap: 7px;
        }

        .project-info {
            padding: 9px;
        }

        .project-info h4 {
            font-size: 0.66rem;
        }

        .project-info p {
            font-size: 0.55rem;
        }
    }

    /* =========================================================
       TOUCH DEVICES
    ========================================================= */

    @media (hover: none) {

        .project-card:hover {
            transform: none;
            box-shadow: var(--shadow-sm);
        }

        .project-card:hover .project-media img,
        .project-card:hover .project-media video {
            transform: none;
        }

        .project-media::after {
            display: none;
        }

        .gallery-open-icon {
            opacity: 1;
            transform: none;
        }
    }

    /* =========================================================
       REDUCED MOTION
    ========================================================= */

    @media (prefers-reduced-motion: reduce) {

        *,
        *::before,
        *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
        }
    }
</style>

</head><body><div class="website-wrapper"><!-- =====================================================
     HEADER
====================================================== -->

<header class="site-header">

    <a href="#" class="site-logo" onclick="switchPage('home'); return false;">

        <div class="logo-icon">
            <i class="fas fa-user-graduate"></i>
        </div>

        <div>
            <h1>Prasad Shejole</h1>
            <span>Personal Portfolio</span>
        </div>

    </a>

    <nav class="site-nav">

        <div class="nav-tabs">

            <button class="nav-tab active"
                    data-page="home"
                    onclick="switchPage('home')">
                <i class="fas fa-home"></i>
                Home
            </button>

            <button class="nav-tab"
                    data-page="about"
                    onclick="switchPage('about')">
                <i class="fas fa-user"></i>
                About
            </button>

            <button class="nav-tab"
                    data-page="skills"
                    onclick="switchPage('skills')">
                <i class="fas fa-code"></i>
                Skills
            </button>

            <button class="nav-tab"
                    data-page="projects"
                    onclick="switchPage('projects')">
                <i class="fas fa-images"></i>
                Projects
            </button>

            <button class="nav-tab"
                    data-page="contact"
                    onclick="switchPage('contact')">
                <i class="fas fa-envelope"></i>
                Contact
            </button>

        </div>

        <button class="theme-toggle"
                id="themeToggle"
                onclick="toggleTheme()"
                aria-label="Toggle dark mode">
            <i class="fas fa-moon"></i>
        </button>

    </nav>

</header>


<!-- =====================================================
     PAGE CONTENT
====================================================== -->

<main class="page-content">

    <!-- ================= HOME ================= -->

    <section class="page active" id="page-home">

        <div class="hero-section">

            <div class="hero-left">

                <div class="profile-card">

                    <div class="profile-avatar">
                        <img src="IMG-20260809-WA0001.jpg"
                             alt="Prasad Shejole"
                             id="profileImage">
                    </div>

                    <h2>Prasad Shejole</h2>

                    <div class="tagline">
                        <i class="fas fa-graduation-cap"></i>
                        MBBS Student · 4th Year
                    </div>

                    <p class="bio">
                        A dedicated 4th-year MBBS student with a passion for
                        digital media, content creation, and strategic
                        communication. Bridging the gap between medicine
                        and modern media.
                    </p>

                    <button class="download-btn-home" id="downloadBtn">
                        <i class="fas fa-file-pdf"></i>
                        Download CV (PDF)
                    </button>

                </div>


                <div class="stats-grid-home">

                    <div class="stat-card">
                        <span class="number" data-count="4">0</span>
                        <span class="label">MBBS Year</span>
                    </div>

                    <div class="stat-card">
                        <span class="number" data-count="5">0</span>
                        <span class="label">Projects</span>
                    </div>

                    <div class="stat-card">
                        <span class="number" data-count="10">0</span>
                        <span class="label">Events Managed</span>
                    </div>

                    <div class="stat-card">
                        <span class="number" data-count="20">0</span>
                        <span class="label">Videos Edited</span>
                    </div>

                </div>

            </div>


            <div class="hero-right">

                <div>
                    <h3 class="section-title">
                        <i class="fas fa-bullhorn"></i>
                        Social Media Marketing
                    </h3>

                    <div class="skill-group">
                        <div class="skill-tags">

                            <span class="skill-tag">
                                <i class="fab fa-instagram"></i>
                                Instagram Strategy
                            </span>

                            <span class="skill-tag">
                                <i class="fab fa-linkedin"></i>
                                LinkedIn Branding
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-chart-line"></i>
                                Analytics & Insights
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-ad"></i>
                                Meta Ads
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-people-arrows"></i>
                                Community Engagement
                            </span>

                        </div>
                    </div>
                </div>


                <div>
                    <h3 class="section-title">
                        <i class="fas fa-pen-fancy"></i>
                        Editing & Content Creation
                    </h3>

                    <div class="skill-group">
                        <div class="skill-tags">

                            <span class="skill-tag">
                                <i class="fas fa-video"></i>
                                CapCut Pro
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-paint-brush"></i>
                                Canva Expert
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-cut"></i>
                                Video Editing
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-image"></i>
                                Thumbnail Design
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-film"></i>
                                Reels / Shorts
                            </span>

                        </div>
                    </div>
                </div>


                <div>
                    <h3 class="section-title">
                        <i class="fas fa-calendar-check"></i>
                        Event Management
                    </h3>

                    <div class="skill-group">
                        <div class="skill-tags">

                            <span class="skill-tag">
                                <i class="fas fa-tasks"></i>
                                Planning & Logistics
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-users"></i>
                                Team Coordination
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-handshake"></i>
                                Vendor Management
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-trophy"></i>
                                Medical Conferences
                            </span>

                            <span class="skill-tag">
                                <i class="fas fa-microphone"></i>
                                Hosting / Emcee
                            </span>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>


    <!-- ================= ABOUT ================= -->

    <section class="page" id="page-about">

        <div class="about-content">

            <div class="profile-card">

                <h2>About Me</h2>

                <p class="bio">
                    A dedicated 4th-year MBBS student currently pursuing
                    medical education in Russia, with a strong passion for
                    digital media, content creation, and strategic
                    communication. While my academic journey focuses on
                    healthcare, I actively cultivate expertise in social
                    media marketing, video editing, graphic design, and
                    event management. This portfolio highlights my creative
                    endeavors and professional skills beyond the clinical
                    realm, showcasing a well-rounded individual capable of
                    bridging the gap between medicine and modern media.
                </p>

            </div>

            <h3 class="section-title">
                <i class="fas fa-university"></i>
                Education
            </h3>

            <div class="education-timeline">

                <div class="edu-item">
                    <span class="edu-name">MBBS</span>
                    <span class="edu-date">2023 – 2029</span>
                    <span class="edu-desc">
                        Pursuing medical education in Russia
                    </span>
                </div>

                <div class="edu-item">
                    <span class="edu-name">Pre-medical</span>
                    <span class="edu-date">2020 – 2022</span>
                    <span class="edu-desc">
                        Foundation in medical sciences
                    </span>
                </div>

                <div class="edu-item">
                    <span class="edu-name">Digital Marketing</span>
                    <span class="edu-date">Certification</span>
                    <span class="edu-desc">
                        Specialized in social media strategy and content creation
                    </span>
                </div>

            </div>

        </div>

    </section>


    <!-- ================= SKILLS ================= -->

    <section class="page" id="page-skills">

        <div class="skills-page-content">

            <h3 class="section-title">
                <i class="fas fa-code"></i>
                Skills & Expertise
            </h3>

            <div class="skills-full-grid">

                <!-- Social Media -->

                <div class="skill-full-card">

                    <h4>
                        <i class="fas fa-bullhorn"></i>
                        Social Media Marketing
                    </h4>

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


                <!-- Editing -->

                <div class="skill-full-card">

                    <h4>
                        <i class="fas fa-pen-fancy"></i>
                        Editing & Content Creation
                    </h4>

                    <div class="skill-bar-item">
                        <div class="skill-label">
                            <span>CapCut (Pro)</span>
                            <span>90%</span>
                        </div>
                        <div class="skill-bar-track">
                            <div class="skill-bar-fill" data-width="95"></div>
                        </div>
                    </div>

                    <div class="skill-bar-item">
                        <div class="skill-label">
                            <span>Canva (Expert)</span>
                            <span>90%</span>
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

                    <h4>
                        <i class="fas fa-calendar-check"></i>
                        Event Management
                    </h4>

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


                <!-- Additional -->

                <div class="skill-full-card">

                    <h4>
                        <i class="fas fa-tools"></i>
                        Additional Skills
                    </h4>

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
                            <span>85%</span>
                        </div>
                        <div class="skill-bar-track">
                            <div class="skill-bar-fill" data-width="65"></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= PROJECTS ================= -->

    <section class="page" id="page-projects">

        <div class="projects-page-content">

            <h3 class="section-title">
                <i class="fas fa-images"></i>
                Project Gallery
            </h3>

            <div class="projects-grid">

                <!-- IMAGE -->

                <div class="project-card"
                     data-project="Social Media Campaign"
                     data-type="image"
                     data-src="IMG-20260809-WA0003.jpg">

                    <div class="project-media">

                        <img src="IMG-20260809-WA0003.jpg"
                             alt="Social Media Campaign"
                             loading="lazy">

                        <span class="gallery-open-icon">
                            <i class="fas fa-expand"></i>
                        </span>

                    </div>

                    <div class="project-info">
                        <h4>Social Media Campaign</h4>
                        <p>Instagram marketing campaign design</p>
                    </div>

                </div>


                <!-- VIDEO -->

                <div class="project-card"
                     data-project="Video Edit"
                     data-type="video"
                     data-src="VID-20260809-WA0004.mp4">

                    <div class="project-media">

                        <video src="VID-20260809-WA0004.mp4"
                               muted
                               loop
                               playsinline
                               preload="metadata"></video>

                        <span class="gallery-open-icon">
                            <i class="fas fa-play"></i>
                        </span>

                    </div>

                    <div class="project-info">
                        <h4>Video Edit</h4>
                        <p>Professional video editing with CapCut</p>
                    </div>

                </div>


                <!-- VIDEO -->

                <div class="project-card"
                     data-project="Event Design"
                     data-type="video"
                     data-src="VID-20251220-WA0008.mp4">

                    <div class="project-media">

                        <video src="VID-20251220-WA0008.mp4"
                               muted
                               loop
                               playsinline
                               preload="metadata"></video>

                        <span class="gallery-open-icon">
                            <i class="fas fa-play"></i>
                        </span>

                    </div>

                    <div class="project-info">
                        <h4>Event Design</h4>
                        <p>Event planning and visual design</p>
                    </div>

                </div>


                <!-- PDF -->

                <div class="project-card"
                     data-project="Canva Design"
                     data-type="pdf"
                     data-src="AHILYANAGAR_20260725_163154_0000%20(1).pdf">

                    <div class="project-media pdf-preview">

                        <i class="fas fa-file-pdf"></i>
                        <span>Click to view PDF</span>

                        <span class="gallery-open-icon">
                            <i class="fas fa-expand"></i>
                        </span>

                    </div>

                    <div class="project-info">
                        <h4>Canva Design</h4>
                        <p>Graphic design using Canva</p>
                    </div>

                </div>


                <!-- IMAGE -->

                <div class="project-card"
                     data-project="Thumbnail Design"
                     data-type="image"
                     data-src="IMG-20250920-WA0061.jpg">

                    <div class="project-media">

                        <img src="IMG-20250920-WA0061.jpg"
                             alt="Thumbnail Design"
                             loading="lazy">

                        <span class="gallery-open-icon">
                            <i class="fas fa-expand"></i>
                        </span>

                    </div>

                    <div class="project-info">
                        <h4>Thumbnail Design</h4>
                        <p>YouTube thumbnail creation</p>
                    </div>

                </div>


                <!-- COMING SOON -->

                <div class="project-card coming-soon">

                    <div class="project-media">
                        <i class="fas fa-vector-square"></i>
                    </div>

                    <div class="coming-soon-badge">
                        COMING SOON
                    </div>

                    <div class="project-info">
                        <h4>Brand Identity</h4>
                        <p>Exciting things are on the way</p>
                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= CONTACT ================= -->

    <section class="page" id="page-contact">

        <div class="contact-page-content">

            <h3 class="section-title">
                <i class="fas fa-address-card"></i>
                Get in Touch
            </h3>

            <div class="contact-card">

                <div class="contact-item-large">

                    <i class="fas fa-envelope"></i>

                    <div>
                        <div class="contact-text">
                            prasadshejole@gmail.com
                        </div>

                        <div class="contact-label">
                            Email
                        </div>
                    </div>

                </div>


                <div class="contact-item-large">

                    <i class="fab fa-github"></i>

                    <div>
                        <div class="contact-text">
                            github.com/prasadev-in
                        </div>

                        <div class="contact-label">
                            GitHub
                        </div>
                    </div>

                </div>


                <div class="contact-item-large">

                    <i class="fab fa-instagram"></i>

                    <div>
                        <div class="contact-text">
                            @_that_awkwardpause
                        </div>

                        <div class="contact-label">
                            Instagram
                        </div>
                    </div>

                </div>


                <div class="contact-item-large">

                    <i class="fas fa-phone-alt"></i>

                    <div>
                        <div class="contact-text">
                            <span class="flag-icon">🇮🇳</span>
                            +91 7249756968
                        </div>

                        <div class="contact-label">
                            India
                        </div>
                    </div>

                </div>


                <div class="contact-item-large">

                    <i class="fas fa-phone-alt"></i>

                    <div>
                        <div class="contact-text">
                            <span class="flag-icon">🇷🇺</span>
                            +7 9960848472
                        </div>

                        <div class="contact-label">
                            Russia
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>

</main>


<!-- =====================================================
     FOOTER
====================================================== -->

<footer class="site-footer">
    <p>
        © 2026 Prasad Shejole · MBBS Student · Marketing & Editing
    </p>
</footer>

</div><!-- =========================================================
     MEDIA LIGHTBOX
========================================================= --><div class="media-modal"
     id="mediaModal"
     role="dialog"
     aria-modal="true"
     aria-label="Project preview"><button class="modal-close"
        id="modalClose"
        aria-label="Close preview">
    <i class="fas fa-times"></i>
</button>

<div class="media-modal-content"
     id="mediaModalContent">
</div>

<div class="modal-title"
     id="modalTitle">
</div>

</div><script>

(function () {

    /* =========================================================
       PAGE SWITCHING
    ========================================================= */

    window.switchPage = function (page) {

        document.querySelectorAll(".page").forEach(function (p) {
            p.classList.remove("active");
        });

        const target = document.getElementById("page-" + page);

        if (target) {
            target.classList.add("active");
        }

        document.querySelectorAll(".nav-tab").forEach(function (tab) {

            tab.classList.toggle(
                "active",
                tab.dataset.page === page
            );

        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(function () {
            animateCounters();
            animateProgressBars();
        }, 200);
    };


    /* =========================================================
       THEME
    ========================================================= */

    window.toggleTheme = function () {

        const body = document.body;
        const button = document.getElementById("themeToggle");

        const dark = body.classList.toggle("dark");

        body.classList.toggle("light", !dark);

        button.innerHTML = dark
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        try {
            localStorage.setItem(
                "theme-pref",
                dark ? "dark" : "light"
            );
        } catch (e) {}

    };


    function loadTheme() {

        let saved = "light";

        try {

            const stored =
                localStorage.getItem("theme-pref");

            if (
                stored === "dark" ||
                stored === "light"
            ) {
                saved = stored;
            }

        } catch (e) {}

        const button =
            document.getElementById("themeToggle");

        if (saved === "dark") {

            document.body.classList.add("dark");

            button.innerHTML =
                '<i class="fas fa-sun"></i>';

        } else {

            document.body.classList.add("light");

            button.innerHTML =
                '<i class="fas fa-moon"></i>';

        }

    }


    /* =========================================================
       COUNTERS
    ========================================================= */

    function animateCounters() {

        document
            .querySelectorAll(".stat-card .number")
            .forEach(function (stat) {

                const target =
                    parseInt(stat.dataset.count);

                if (!target) return;

                if (stat._interval) {
                    clearInterval(stat._interval);
                }

                let current = 0;

                const duration = 1000;
                const interval = 20;
                const steps = duration / interval;
                const increment = target / steps;

                stat._interval =
                    setInterval(function () {

                        current += increment;

                        if (current >= target) {

                            stat.textContent = target;

                            clearInterval(
                                stat._interval
                            );

                        } else {

                            stat.textContent =
                                Math.floor(current);

                        }

                    }, interval);

            });

    }


    /* =========================================================
       SKILL BARS
    ========================================================= */

    function animateProgressBars() {

        document
            .querySelectorAll(".skill-bar-fill")
            .forEach(function (bar, index) {

                const width =
                    parseInt(bar.dataset.width);

                if (!width) return;

                bar.style.width = "0%";

                setTimeout(function () {

                    bar.style.width =
                        width + "%";

                }, index * 100);

            });

    }


    /* =========================================================
       GALLERY LIGHTBOX
    ========================================================= */

    const modal =
        document.getElementById("mediaModal");

    const modalContent =
        document.getElementById("mediaModalContent");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalClose =
        document.getElementById("modalClose");


    function openMedia(card) {

        const type =
            card.dataset.type;

        const src =
            card.dataset.src;

        const title =
            card.dataset.project || "Project";

        if (!type || !src) return;

        modalContent.innerHTML = "";

        modalTitle.textContent = title;


        /* ---------------- IMAGE ---------------- */

        if (type === "image") {

            const img =
                document.createElement("img");

            img.className =
                "modal-media";

            img.src = src;

            img.alt = title;

            img.onload = function () {
                modal.classList.add("active");
            };

            img.onerror = function () {

                modalContent.innerHTML =
                    '<div style="color:white;text-align:center;font-size:1rem;">' +
                    '<i class="fas fa-triangle-exclamation"></i><br><br>' +
                    'Unable to load this image.' +
                    '</div>';

                modal.classList.add("active");
            };

            modalContent.appendChild(img);

        }


        /* ---------------- VIDEO ---------------- */

        else if (type === "video") {

            const video =
                document.createElement("video");

            video.className =
                "modal-media modal-video";

            video.src = src;

            video.controls = true;
            video.autoplay = true;
            video.playsInline = true;

            video.setAttribute(
                "controlsList",
                "nodownload"
            );

            modalContent.appendChild(video);

            modal.classList.add("active");

            video.play().catch(function () {});

        }


        /* ---------------- PDF ---------------- */

        else if (type === "pdf") {

            const iframe =
                document.createElement("iframe");

            iframe.className =
                "modal-pdf";

            iframe.src = src;

            iframe.title = title;

            modalContent.appendChild(iframe);

            modal.classList.add("active");

        }


        document.body.style.overflow =
            "hidden";

    }


    function closeMedia() {

        modal.classList.remove("active");

        const video =
            modalContent.querySelector("video");

        if (video) {

            video.pause();
            video.currentTime = 0;

        }

        setTimeout(function () {

            modalContent.innerHTML = "";

            modalTitle.textContent = "";

        }, 250);

        document.body.style.overflow = "";

    }


    /* =========================================================
       GALLERY CLICK EVENTS
    ========================================================= */

    document
        .querySelectorAll(".project-card:not(.coming-soon)")
        .forEach(function (card) {

            card.addEventListener(
                "click",
                function () {

                    openMedia(this);

                }
            );

        });


    /* =========================================================
       DESKTOP VIDEO HOVER PREVIEW
    ========================================================= */

    if (
        window.matchMedia("(hover: hover)").matches
    ) {

        document
            .querySelectorAll(".project-card video")
            .forEach(function (video) {

                const card =
                    video.closest(".project-card");

                card.addEventListener(
                    "mouseenter",
                    function () {

                        video.play().catch(
                            function () {}
                        );

                    }
                );

                card.addEventListener(
                    "mouseleave",
                    function () {

                        video.pause();

                        try {
                            video.currentTime = 0;
                        } catch (e) {}

                    }
                );

            });

    }


    /* =========================================================
       CLOSE MODAL
    ========================================================= */

    modalClose.addEventListener(
        "click",
        closeMedia
    );


    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modal
            ) {
                closeMedia();
            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {
                closeMedia();
            }

        }
    );


    /* =========================================================
       PDF / CV GENERATION
    ========================================================= */

    document
        .getElementById("downloadBtn")
        ?.addEventListener(
            "click",
            function () {

                const btn = this;

                btn.disabled = true;

                btn.innerHTML =
                    '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';


                const cvContent =
                    document.createElement("div");

                cvContent.style.cssText = `
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px;
                    background: white;
                    color: #0f172a;
                `;


                cvContent.innerHTML = `

                    <div style="
                        text-align:center;
                        margin-bottom:30px;
                    ">

                        <h1 style="
                            color:#0f766e;
                            font-size:28px;
                            margin-bottom:5px;
                        ">
                            Prasad Shejole
                        </h1>

                        <p style="
                            color:#475569;
                            font-size:16px;
                        ">
                            MBBS Student · 4th Year
                        </p>

                        <p style="
                            color:#475569;
                            font-size:14px;
                        ">
                            Marketing · Editing · Event Management
                        </p>

                    </div>


                    <hr style="
                        border:1px solid #dfe8ed;
                        margin:20px 0;
                    ">


                    <div style="
                        margin-bottom:20px;
                    ">

                        <h3 style="
                            color:#0f766e;
                            font-size:18px;
                        ">
                            About Me
                        </h3>

                        <p style="
                            color:#334155;
                            line-height:1.6;
                            font-size:14px;
                        ">
                            A dedicated 4th-year MBBS student currently
                            pursuing medical education in Russia, with a
                            strong passion for digital media, content
                            creation, and strategic communication.
                            While my academic journey focuses on healthcare,
                            I actively cultivate expertise in social media
                            marketing, video editing, graphic design,
                            and event management.
                        </p>

                    </div>


                    <div style="
                        margin-bottom:20px;
                    ">

                        <h3 style="
                            color:#0f766e;
                            font-size:18px;
                        ">
                            Education
                        </h3>

                        <p style="font-size:14px;">
                            <strong>MBBS</strong> · 2023 – 2029
                        </p>

                        <p style="font-size:14px;">
                            <strong>Pre-medical</strong> · 2020 – 2022
                        </p>

                        <p style="font-size:14px;">
                            <strong>Digital Marketing</strong> · Certification
                        </p>

                    </div>


                    <div style="
                        margin-bottom:20px;
                    ">

                        <h3 style="
                            color:#0f766e;
                            font-size:18px;
                        ">
                            Skills
                        </h3>

                        <p style="
                            font-size:14px;
                            line-height:2;
                        ">
                            Instagram Strategy ·
                            LinkedIn Branding ·
                            CapCut Pro ·
                            Canva ·
                            Video Editing ·
                            Thumbnail Design ·
                            Event Management ·
                            Content Strategy
                        </p>

                    </div>


                    <hr style="
                        border:1px solid #dfe8ed;
                        margin:20px 0;
                    ">


                    <div style="
                        text-align:center;
                        color:#475569;
                        font-size:13px;
                    ">

                        <p>
                            prasad.shejole@medmail.com
                        </p>

                        <p>
                            +91 98765 12345 |
                            +7 987 654 3210
                        </p>

                        <p>
                            github.com/prasadmedia
                        </p>

                    </div>

                `;


                const options = {

                    margin: 10,

                    filename:
                        "Prasad_Shejole_CV.pdf",

                    image: {
                        type: "jpeg",
                        quality: 0.98
                    },

                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        letterRendering: true
                    },

                    jsPDF: {
                        unit: "mm",
                        format: "a4",
                        orientation: "portrait"
                    }

                };


                html2pdf()
                    .set(options)
                    .from(cvContent)
                    .save()
                    .then(function () {

                        btn.disabled = false;

                        btn.innerHTML =
                            '<i class="fas fa-file-pdf"></i> Download CV (PDF)';

                    })
                    .catch(function (error) {

                        console.error(
                            "PDF generation error:",
                            error
                        );

                        btn.disabled = false;

                        btn.innerHTML =
                            '<i class="fas fa-file-pdf"></i> Download CV (PDF)';

                        alert(
                            "Failed to generate PDF. Please try again."
                        );

                    });

            }
        );


    /* =========================================================
       INITIALIZATION
    ========================================================= */

    loadTheme();

    setTimeout(function () {

        animateCounters();
        animateProgressBars();

    }, 400);


    document.addEventListener(
        "visibilitychange",
        function () {

            if (!document.hidden) {

                setTimeout(function () {

                    animateCounters();
                    animateProgressBars();

                }, 250);

            }

        }
    );

})();

</script></body>
</html>
