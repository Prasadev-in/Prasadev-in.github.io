
/* =========================================================
   PRASAD SHEJOLE PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */

(function () {

    /* =====================================================
       PAGE SWITCHING
    ===================================================== */

    window.switchPage = function (page) {

        // Hide all pages
        document.querySelectorAll('.page').forEach(function (p) {
            p.classList.remove('active');
        });

        // Show selected page
        const targetPage =
            document.getElementById('page-' + page);

        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Update navigation
        document.querySelectorAll('.nav-tab').forEach(function (tab) {

            tab.classList.remove('active');

            if (tab.getAttribute('data-page') === page) {
                tab.classList.add('active');
            }

        });

        // Animate content
        setTimeout(function () {
            resetAndAnimateProgressBars();
            animateCounters();
        }, 400);
    };


    /* =====================================================
       DARK / LIGHT THEME
    ===================================================== */

    window.toggleTheme = function () {

        const body =
            document.body;

        const themeToggle =
            document.getElementById('themeToggle');

        if (body.classList.contains('dark')) {

            // Switch to light
            body.classList.remove('dark');
            body.classList.add('light');

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';

            try {
                localStorage.setItem(
                    'theme-pref',
                    'light'
                );
            } catch (error) {
                // localStorage unavailable
            }

        } else {

            // Switch to dark
            body.classList.remove('light');
            body.classList.add('dark');

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

            try {
                localStorage.setItem(
                    'theme-pref',
                    'dark'
                );
            } catch (error) {
                // localStorage unavailable
            }
        }
    };


    /* =====================================================
       LOAD SAVED THEME
    ===================================================== */

    function loadTheme() {

        const body =
            document.body;

        const themeToggle =
            document.getElementById('themeToggle');

        let savedTheme = 'light';

        try {

            const stored =
                localStorage.getItem(
                    'theme-pref'
                );

            if (
                stored === 'dark' ||
                stored === 'light'
            ) {
                savedTheme = stored;
            }

        } catch (error) {
            // localStorage unavailable
        }


        if (savedTheme === 'dark') {

            body.classList.add('dark');
            body.classList.remove('light');

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

        } else {

            body.classList.remove('dark');
            body.classList.add('light');

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';
        }
    }


    /* =====================================================
       ANIMATED STAT COUNTERS
    ===================================================== */

    function animateCounters() {

        const statNumbers =
            document.querySelectorAll(
                '.stat-card .number'
            );

        statNumbers.forEach(function (stat) {

            const target =
                parseInt(
                    stat.getAttribute(
                        'data-count'
                    )
                );

            if (!target || target === 0) {
                return;
            }


            // Reset
            stat.textContent = '0';


            // Stop previous animation
            if (stat._interval) {
                clearInterval(
                    stat._interval
                );
            }


            const duration = 2000;
            const stepTime = 20;

            const steps =
                duration / stepTime;

            const increment =
                target / steps;

            let current = 0;


            stat._interval =
                setInterval(function () {

                    current += increment;


                    if (current >= target) {

                        stat.textContent =
                            target;

                        clearInterval(
                            stat._interval
                        );

                    } else {

                        stat.textContent =
                            Math.floor(current);
                    }

                }, stepTime);

        });
    }


    /* =====================================================
       SKILL PROGRESS BARS
    ===================================================== */

    function resetAndAnimateProgressBars() {

        const progressBars =
            document.querySelectorAll(
                '.skill-bar-fill'
            );


        // Reset all
        progressBars.forEach(function (bar) {

            bar.style.width = '0%';

        });


        // Animate
        progressBars.forEach(
            function (bar, index) {

                const width =
                    parseInt(
                        bar.getAttribute(
                            'data-width'
                        )
                    );

                if (!width || width === 0) {
                    return;
                }


                const delay =
                    100 + (index * 150);


                setTimeout(function () {

                    bar.style.width =
                        width + '%';

                }, delay);

            }
        );
    }


    /* =====================================================
       PROJECT CARDS
    ===================================================== */

    document
        .querySelectorAll(
            '.project-card:not(.coming-soon)'
        )
        .forEach(function (card) {

            card.addEventListener(
                'click',
                function () {

                    const projectName =
                        this.querySelector(
                            '.project-info h4'
                        )?.textContent ||
                        'Project';

                    const isPDF =
                        this.querySelector(
                            '.pdf-preview'
                        );


                    if (isPDF) {

                        alert(
                            '📄 Project: ' +
                            projectName +
                            '\n\n' +
                            'This is a PDF document. ' +
                            'Click to view or download.'
                        );

                    } else {

                        alert(
                            '🖼️ Project: ' +
                            projectName +
                            '\n\n' +
                            'Click to view full project details.'
                        );
                    }

                }
            );

        });


    /* =====================================================
       VIDEO HOVER PLAY / PAUSE
    ===================================================== */

    document
        .querySelectorAll(
            '.project-card video'
        )
        .forEach(function (video) {

            const card =
                video.closest(
                    '.project-card'
                );

            if (!card) {
                return;
            }


            // Desktop
            card.addEventListener(
                'mouseenter',
                function () {

                    video.play().catch(
                        function () {}
                    );

                }
            );


            card.addEventListener(
                'mouseleave',
                function () {

                    video.pause();

                    video.currentTime = 0;

                }
            );

        });


    /* =====================================================
       PDF CV GENERATOR
    ===================================================== */

    const downloadButton =
        document.getElementById(
            'downloadBtn'
        );


    if (downloadButton) {

        downloadButton.addEventListener(
            'click',
            function () {

                const btn = this;

                btn.disabled = true;

                btn.innerHTML =
                    '<i class="fas fa-spinner fa-spin"></i> ' +
                    'Generating PDF...';


                /* -----------------------------------------
                   CREATE CV CONTAINER
                ----------------------------------------- */

                const cvContent =
                    document.createElement(
                        'div'
                    );


                cvContent.style.cssText = `
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px;
                    background: white;
                    color: #1e293b;
                `;


                /* -----------------------------------------
                   CV CONTENT
                ----------------------------------------- */

                cvContent.innerHTML = `

                    <div style="
                        text-align:center;
                        margin-bottom:30px;
                    ">

                        <h1 style="
                            color:#0b6e4f;
                            font-size:28px;
                            margin-bottom:5px;
                        ">
                            Prasad Shejole
                        </h1>

                        <p style="
                            color:#475569;
                            font-size:16px;
                            margin:5px 0;
                        ">
                            MBBS Student · 4th Year
                        </p>

                        <p style="
                            color:#475569;
                            font-size:14px;
                        ">
                            Marketing • Editing • Event Management
                        </p>

                    </div>


                    <hr style="
                        border:1px solid #e9edf2;
                        margin:20px 0;
                    ">


                    <div style="
                        margin-bottom:20px;
                    ">

                        <h3 style="
                            color:#0b6e4f;
                            font-size:18px;
                            margin-bottom:10px;
                        ">
                            About Me
                        </h3>

                        <p style="
                            color:#1e293b;
                            line-height:1.6;
                            font-size:14px;
                        ">
                            A dedicated 4th-year MBBS student
                            currently pursuing medical education
                            in Russia, with a strong passion for
                            digital media, content creation, and
                            strategic communication. While my
                            academic journey focuses on healthcare,
                            I actively cultivate expertise in social
                            media marketing, video editing,
                            graphic design, and event management.
                        </p>

                    </div>


                    <div style="
                        margin-bottom:20px;
                    ">

                        <h3 style="
                            color:#0b6e4f;
                            font-size:18px;
                            margin-bottom:10px;
                        ">
                            Education
                        </h3>

                        <ul style="
                            list-style:none;
                            padding:0;
                        ">

                            <li style="
                                padding:5px 0;
                                font-size:14px;
                            ">
                                <strong>MBBS</strong>
                                · 2023 – 2029
                            </li>

                            <li style="
                                padding:5px 0;
                                font-size:14px;
                            ">
                                <strong>Pre-medical</strong>
                                · 2020 – 2022
                            </li>

                            <li style="
                                padding:5px 0;
                                font-size:14px;
                            ">
                                <strong>Digital Marketing</strong>
                                · Certification
                            </li>

                        </ul>

                    </div>


                    <div style="
                        margin-bottom:20px;
                    ">

                        <h3 style="
                            color:#0b6e4f;
                            font-size:18px;
                            margin-bottom:10px;
                        ">
                            Skills
                        </h3>

                        <div style="
                            display:flex;
                            flex-wrap:wrap;
                            gap:8px;
                        ">

                            ${[
                                'Instagram Strategy',
                                'LinkedIn Branding',
                                'CapCut Pro',
                                'Canva Expert',
                                'Video Editing',
                                'Event Management',
                                'Thumbnail Design',
                                'Brand Identity'
                            ].map(function (skill) {

                                return `
                                    <span style="
                                        background:#e9edf2;
                                        padding:5px 12px;
                                        border-radius:20px;
                                        font-size:13px;
                                    ">
                                        ${skill}
                                    </span>
                                `;

                            }).join('')}

                        </div>

                    </div>


                    <div style="
                        margin-bottom:20px;
                    ">

                        <h3 style="
                            color:#0b6e4f;
                            font-size:18px;
                            margin-bottom:10px;
                        ">
                            Quick Stats
                        </h3>

                        <div style="
                            display:grid;
                            grid-template-columns:
                                repeat(4,1fr);
                            gap:15px;
                            text-align:center;
                        ">

                            <div>
                                <strong style="
                                    font-size:22px;
                                    color:#0b6e4f;
                                ">
                                    4
                                </strong>

                                <br>

                                <span style="
                                    font-size:12px;
                                    color:#475569;
                                ">
                                    MBBS Year
                                </span>
                            </div>


                            <div>
                                <strong style="
                                    font-size:22px;
                                    color:#0b6e4f;
                                ">
                                    15
                                </strong>

                                <br>

                                <span style="
                                    font-size:12px;
                                    color:#475569;
                                ">
                                    Projects
                                </span>
                            </div>


                            <div>
                                <strong style="
                                    font-size:22px;
                                    color:#0b6e4f;
                                ">
                                    25
                                </strong>

                                <br>

                                <span style="
                                    font-size:12px;
                                    color:#475569;
                                ">
                                    Events Managed
                                </span>
                            </div>


                            <div>
                                <strong style="
                                    font-size:22px;
                                    color:#0b6e4f;
                                ">
                                    50
                                </strong>

                                <br>

                                <span style="
                                    font-size:12px;
                                    color:#475569;
                                ">
                                    Videos Edited
                                </span>
                            </div>

                        </div>

                    </div>


                    <hr style="
                        border:1px solid #e9edf2;
                        margin:20px 0;
                    ">


                    <div style="
                        text-align:center;
                        color:#475569;
                        font-size:13px;
                    ">

                        <p>
                            Email:
                            prasad.shejole@medmail.com
                        </p>

                        <p>
                            Phone:
                            +91 98765 12345 |
                            +7 987 654 3210
                        </p>

                        <p>
                            GitHub:
                            github.com/prasadmedia
                        </p>

                    </div>
                `;


                /* -----------------------------------------
                   PDF OPTIONS
                ----------------------------------------- */

                const options = {

                    margin: 10,

                    filename:
                        'Prasad_Shejole_CV.pdf',

                    image: {
                        type: 'jpeg',
                        quality: 0.98
                    },

                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        letterRendering: true
                    },

                    jsPDF: {
                        unit: 'mm',
                        format: 'a4',
                        orientation: 'portrait'
                    }

                };


                /* -----------------------------------------
                   GENERATE PDF
                ----------------------------------------- */

                html2pdf()
                    .set(options)
                    .from(cvContent)
                    .save()

                    .then(function () {

                        btn.disabled = false;

                        btn.innerHTML =
                            '<i class="fas fa-file-pdf"></i> ' +
                            'Download CV (PDF)';

                    })

                    .catch(function (error) {

                        console.error(
                            'PDF generation error:',
                            error
                        );

                        btn.disabled = false;

                        btn.innerHTML =
                            '<i class="fas fa-file-pdf"></i> ' +
                            'Download CV (PDF)';

                        alert(
                            'Failed to generate PDF. ' +
                            'Please try again.'
                        );

                    });

            }
        );

    }


    /* =====================================================
       INITIALIZATION
    ===================================================== */

    loadTheme();


    // Initial animations
    setTimeout(function () {

        resetAndAnimateProgressBars();

        animateCounters();

    }, 500);


    /* =====================================================
       TAB / WINDOW VISIBILITY
    ===================================================== */

    document.addEventListener(
        'visibilitychange',
        function () {

            if (!document.hidden) {

                setTimeout(function () {

                    resetAndAnimateProgressBars();

                    animateCounters();

                }, 300);

            }

        }
    );


})();
