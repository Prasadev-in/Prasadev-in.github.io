// ============================================================
// PRASAD SHEJOLE PORTFOLIO — script.js
// ============================================================

(function () {
    "use strict";

    // =========================================================
    // PAGE SWITCHING
    // =========================================================

    window.switchPage = function (page) {

        // Hide every page
        document.querySelectorAll(".page").forEach(function (p) {
            p.classList.remove("active");
        });

        // Show selected page
        const targetPage = document.getElementById("page-" + page);

        if (targetPage) {
            targetPage.classList.add("active");
        }

        // Update navigation buttons
        document.querySelectorAll(".nav-tab").forEach(function (tab) {
            tab.classList.remove("active");

            if (tab.dataset.page === page) {
                tab.classList.add("active");
            }
        });

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Animate elements
        setTimeout(function () {
            resetAndAnimateProgressBars();
            animateCounters();
        }, 300);
    };


    // =========================================================
    // DARK / LIGHT THEME
    // =========================================================

    window.toggleTheme = function () {

        const body = document.body;
        const themeToggle = document.getElementById("themeToggle");

        if (!themeToggle) return;

        if (body.classList.contains("dark")) {

            body.classList.remove("dark");
            body.classList.add("light");

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';

            try {
                localStorage.setItem("theme-pref", "light");
            } catch (error) {
                console.log("Theme storage unavailable.");
            }

        } else {

            body.classList.remove("light");
            body.classList.add("dark");

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

            try {
                localStorage.setItem("theme-pref", "dark");
            } catch (error) {
                console.log("Theme storage unavailable.");
            }
        }
    };


    // =========================================================
    // LOAD SAVED THEME
    // =========================================================

    function loadTheme() {

        const body = document.body;
        const themeToggle = document.getElementById("themeToggle");

        if (!themeToggle) return;

        let savedTheme = "light";

        try {

            const storedTheme =
                localStorage.getItem("theme-pref");

            if (
                storedTheme === "dark" ||
                storedTheme === "light"
            ) {
                savedTheme = storedTheme;
            }

        } catch (error) {
            console.log("Unable to read saved theme.");
        }


        if (savedTheme === "dark") {

            body.classList.add("dark");
            body.classList.remove("light");

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

        } else {

            body.classList.add("light");
            body.classList.remove("dark");

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';
        }
    }


    // =========================================================
    // ANIMATED STAT COUNTERS
    // =========================================================

    function animateCounters() {

        const counters =
            document.querySelectorAll(".stat-card .number");

        counters.forEach(function (counter) {

            const target =
                parseInt(counter.dataset.count, 10);

            if (isNaN(target)) return;

            // Stop previous animation
            if (counter._interval) {
                clearInterval(counter._interval);
            }

            counter.textContent = "0";

            let current = 0;

            const duration = 1500;
            const intervalTime = 20;
            const steps = duration / intervalTime;

            const increment = target / steps;

            counter._interval = setInterval(function () {

                current += increment;

                if (current >= target) {

                    counter.textContent = target;

                    clearInterval(counter._interval);

                } else {

                    counter.textContent =
                        Math.floor(current);
                }

            }, intervalTime);
        });
    }


    // =========================================================
    // SKILL BAR ANIMATION
    // =========================================================

    function resetAndAnimateProgressBars() {

        const bars =
            document.querySelectorAll(".skill-bar-fill");

        // Reset
        bars.forEach(function (bar) {
            bar.style.width = "0%";
        });

        // Animate
        bars.forEach(function (bar, index) {

            const width =
                parseInt(bar.dataset.width, 10);

            if (isNaN(width)) return;

            const delay = 100 + index * 100;

            setTimeout(function () {

                bar.style.width = width + "%";

            }, delay);
        });
    }


    // =========================================================
    // PROJECT CARD INTERACTION
    // =========================================================

    function setupProjectCards() {

        const cards =
            document.querySelectorAll(
                ".project-card:not(.coming-soon)"
            );

        cards.forEach(function (card) {

            card.addEventListener("click", function () {

                const titleElement =
                    card.querySelector(".project-info h4");

                const projectName =
                    titleElement
                        ? titleElement.textContent
                        : "Project";


                const pdfPreview =
                    card.querySelector(".pdf-preview");


                if (pdfPreview) {

                    alert(
                        "📄 " +
                        projectName +
                        "\n\n" +
                        "This project is a PDF document."
                    );

                } else {

                    alert(
                        "🖼️ " +
                        projectName +
                        "\n\n" +
                        "Project showcase coming soon."
                    );
                }
            });
        });
    }


    // =========================================================
    // VIDEO HOVER PLAY / PAUSE
    // =========================================================

    function setupProjectVideos() {

        const videos =
            document.querySelectorAll(
                ".project-card video"
            );

        videos.forEach(function (video) {

            const card =
                video.closest(".project-card");

            if (!card) return;


            // Desktop
            card.addEventListener(
                "mouseenter",
                function () {

                    video.play().catch(function () {
                        // Browser may block autoplay
                    });
                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    video.pause();

                    try {
                        video.currentTime = 0;
                    } catch (error) {}
                }
            );


            // Mobile tap
            card.addEventListener(
                "touchstart",
                function () {

                    if (video.paused) {

                        video.play().catch(function () {});

                    } else {

                        video.pause();
                    }
                },
                { passive: true }
            );
        });
    }


    // =========================================================
    // CV PDF DOWNLOAD
    // =========================================================

    function setupPDFDownload() {

        const downloadButton =
            document.getElementById("downloadBtn");

        if (!downloadButton) return;


        downloadButton.addEventListener(
            "click",
            function () {

                // Check library
                if (typeof html2pdf === "undefined") {

                    alert(
                        "PDF generator could not be loaded.\n" +
                        "Please check your internet connection."
                    );

                    return;
                }


                const button = this;

                button.disabled = true;

                button.innerHTML =
                    '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';


                // =============================================
                // CREATE CV
                // =============================================

                const cv = document.createElement("div");

                cv.style.cssText = `
                    font-family: Arial, sans-serif;
                    width: 794px;
                    padding: 45px;
                    background: #ffffff;
                    color: #1e293b;
                    box-sizing: border-box;
                `;


                cv.innerHTML = `

                    <div style="
                        text-align:center;
                        margin-bottom:25px;
                    ">

                        <h1 style="
                            color:#0b6e4f;
                            font-size:30px;
                            margin:0 0 6px;
                        ">
                            Prasad Shejole
                        </h1>

                        <p style="
                            color:#475569;
                            font-size:15px;
                            margin:5px;
                        ">
                            MBBS Student · 4th Year
                        </p>

                        <p style="
                            color:#475569;
                            font-size:13px;
                            margin:5px;
                        ">
                            Marketing · Editing · Event Management
                        </p>

                    </div>


                    <hr style="
                        border:none;
                        border-top:1px solid #e2e8f0;
                        margin:20px 0;
                    ">


                    <h2 style="
                        color:#0b6e4f;
                        font-size:18px;
                    ">
                        About Me
                    </h2>

                    <p style="
                        font-size:13px;
                        line-height:1.7;
                        color:#334155;
                    ">
                        A dedicated 4th-year MBBS student currently
                        pursuing medical education in Russia, with a
                        strong passion for digital media, content
                        creation, and strategic communication.
                        Alongside medical education, I actively
                        develop skills in social media marketing,
                        video editing, graphic design, and event
                        management.
                    </p>


                    <h2 style="
                        color:#0b6e4f;
                        font-size:18px;
                        margin-top:25px;
                    ">
                        Education
                    </h2>

                    <p style="font-size:13px;">
                        <strong>MBBS</strong> · 2023 – 2029
                    </p>

                    <p style="font-size:13px;">
                        <strong>Pre-medical</strong> · 2020 – 2022
                    </p>

                    <p style="font-size:13px;">
                        <strong>Digital Marketing</strong> · Certification
                    </p>


                    <h2 style="
                        color:#0b6e4f;
                        font-size:18px;
                        margin-top:25px;
                    ">
                        Skills
                    </h2>

                    <p style="font-size:13px; line-height:1.8;">
                        Instagram Strategy · LinkedIn Branding ·
                        Analytics & Insights · Meta Ads ·
                        CapCut Pro · Canva · Video Editing ·
                        Thumbnail Design · Reels / Shorts ·
                        Event Management · Team Coordination ·
                        Hosting / Emcee
                    </p>


                    <h2 style="
                        color:#0b6e4f;
                        font-size:18px;
                        margin-top:25px;
                    ">
                        Quick Stats
                    </h2>

                    <table style="
                        width:100%;
                        border-collapse:collapse;
                        text-align:center;
                        margin-top:10px;
                    ">

                        <tr>

                            <td style="padding:12px;">
                                <strong style="
                                    font-size:22px;
                                    color:#0b6e4f;
                                ">
                                    4
                                </strong>
                                <br>
                                <span style="font-size:11px;">
                                    MBBS Year
                                </span>
                            </td>

                            <td style="padding:12px;">
                                <strong style="
                                    font-size:22px;
                                    color:#0b6e4f;
                                ">
                                    15
                                </strong>
                                <br>
                                <span style="font-size:11px;">
                                    Projects
                                </span>
                            </td>

                            <td style="padding:12px;">
                                <strong style="
                                    font-size:22px;
                                    color:#0b6e4f;
                                ">
                                    25
                                </strong>
                                <br>
                                <span style="font-size:11px;">
                                    Events Managed
                                </span>
                            </td>

                            <td style="padding:12px;">
                                <strong style="
                                    font-size:22px;
                                    color:#0b6e4f;
                                ">
                                    50
                                </strong>
                                <br>
                                <span style="font-size:11px;">
                                    Videos Edited
                                </span>
                            </td>

                        </tr>

                    </table>


                    <hr style="
                        border:none;
                        border-top:1px solid #e2e8f0;
                        margin:25px 0;
                    ">


                    <div style="
                        text-align:center;
                        color:#475569;
                        font-size:12px;
                        line-height:1.8;
                    ">

                        <p>
                            prasad.shejole@medmail.com
                        </p>

                        <p>
                            +91 98765 12345
                            &nbsp;|&nbsp;
                            +7 987 654 3210
                        </p>

                        <p>
                            github.com/prasadmedia
                        </p>

                    </div>

                `;


                // =============================================
                // PDF SETTINGS
                // =============================================

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


                // =============================================
                // GENERATE
                // =============================================

                html2pdf()
                    .set(options)
                    .from(cv)
                    .save()

                    .then(function () {

                        button.disabled = false;

                        button.innerHTML =
                            '<i class="fas fa-file-pdf"></i> Download CV (PDF)';
                    })

                    .catch(function (error) {

                        console.error(
                            "PDF generation error:",
                            error
                        );

                        button.disabled = false;

                        button.innerHTML =
                            '<i class="fas fa-file-pdf"></i> Download CV (PDF)';

                        alert(
                            "Failed to generate PDF. Please try again."
                        );
                    });
            });
    }


    // =========================================================
    // PROFILE IMAGE ERROR HANDLING
    // =========================================================

    function setupImageHandling() {

        const images =
            document.querySelectorAll("img");

        images.forEach(function (image) {

            image.addEventListener(
                "error",
                function () {

                    this.style.display = "none";

                    console.warn(
                        "Image could not be loaded:",
                        this.src
                    );
                }
            );
        });
    }


    // =========================================================
    // KEYBOARD NAVIGATION
    // =========================================================

    function setupKeyboardNavigation() {

        document.addEventListener(
            "keydown",
            function (event) {

                // Ignore when typing
                if (
                    event.target.tagName === "INPUT" ||
                    event.target.tagName === "TEXTAREA"
                ) {
                    return;
                }


                const pages = [
                    "home",
                    "about",
                    "skills",
                    "projects",
                    "contact"
                ];


                const active =
                    document.querySelector(
                        ".nav-tab.active"
                    );


                if (!active) return;


                const currentPage =
                    pages.indexOf(active.dataset.page);


                // Arrow right
                if (event.key === "ArrowRight") {

                    const next =
                        (currentPage + 1) % pages.length;

                    switchPage(pages[next]);
                }


                // Arrow left
                if (event.key === "ArrowLeft") {

                    const previous =
                        (currentPage - 1 + pages.length)
                        % pages.length;

                    switchPage(pages[previous]);
                }
            }
        );
    }


    // =========================================================
    // INITIALIZATION
    // =========================================================

    function initialize() {

        loadTheme();

        setupProjectCards();

        setupProjectVideos();

        setupPDFDownload();

        setupImageHandling();

        setupKeyboardNavigation();


        // Initial animations
        setTimeout(function () {

            resetAndAnimateProgressBars();

            animateCounters();

        }, 500);
    }


    // =========================================================
    // START
    // =========================================================

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();
    }


    // =========================================================
    // RE-ANIMATE WHEN USER RETURNS TO TAB
    // =========================================================

    document.addEventListener(
        "visibilitychange",
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
