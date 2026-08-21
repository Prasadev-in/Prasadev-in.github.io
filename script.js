/* =========================================================
   PRASAD SHEJOLE PORTFOLIO
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("open");

            const icon = menuToggle.querySelector("i");

            if (navLinks.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            const icon = menuToggle?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-link");

    function updateNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                currentSection = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateNavigation);

    updateNavigation();


    /* =====================================================
       THEME TOGGLE
    ===================================================== */

    const themeToggle = document.getElementById("themeToggle");

    function updateThemeIcon() {

        const icon = themeToggle?.querySelector("i");

        if (!icon) return;

        if (document.body.classList.contains("light")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    }

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

    }

    updateThemeIcon();


    themeToggle?.addEventListener("click", () => {

        document.body.classList.toggle("light");

        localStorage.setItem(
            "portfolio-theme",
            document.body.classList.contains("light")
                ? "light"
                : "dark"
        );

        updateThemeIcon();

    });


    /* =====================================================
       ANIMATED COUNTERS
    ===================================================== */

    const counters = document.querySelectorAll("[data-count]");

    let countersStarted = false;

    function animateCounters() {

        if (countersStarted) return;

        countersStarted = true;

        counters.forEach(counter => {

            const target =
                parseInt(counter.dataset.count);

            let current = 0;

            const duration = 1600;

            const startTime = performance.now();

            function update(time) {

                const progress =
                    Math.min(
                        (time - startTime) / duration,
                        1
                    );

                const eased =
                    1 - Math.pow(1 - progress, 3);

                current =
                    Math.floor(target * eased);

                counter.textContent = current;

                if (progress < 1) {

                    requestAnimationFrame(update);

                } else {

                    counter.textContent = target;

                }

            }

            requestAnimationFrame(update);

        });

    }


    /* =====================================================
       COUNTER OBSERVER
    ===================================================== */

    const statsSection =
        document.querySelector(".stats-section");

    if (statsSection) {

        const observer =
            new IntersectionObserver(
                entries => {

                    if (entries[0].isIntersecting) {

                        animateCounters();

                        observer.disconnect();

                    }

                },
                {
                    threshold: .4
                }
            );

        observer.observe(statsSection);

    }


    /* =====================================================
       SKILL BAR ANIMATION
    ===================================================== */

    const skillBars =
        document.querySelectorAll(".bar span");

    const skillObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const width =
                            entry.target.dataset.width;

                        entry.target.style.width =
                            width + "%";

                    }

                });

            },
            {
                threshold: .4
            }
        );


    skillBars.forEach(bar => {

        skillObserver.observe(bar);

    });


    /* =====================================================
       PROJECT FILTERS
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter");

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            projectCards.forEach(card => {

                const category =
                    card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.style.display = "";

                    setTimeout(() => {

                        card.style.opacity = "1";
                        card.style.transform =
                            "translateY(0)";

                    }, 20);

                } else {

                    card.style.opacity = "0";
                    card.style.transform =
                        "translateY(15px)";

                    setTimeout(() => {

                        card.style.display = "none";

                    }, 250);

                }

            });

        });

    });


    /* =====================================================
       PROJECT VIDEO HOVER
    ===================================================== */

    document.querySelectorAll(
        ".project-card video"
    ).forEach(video => {

        const card =
            video.closest(".project-card");

        card.addEventListener(
            "mouseenter",
            () => {

                video.play().catch(() => {});

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                video.pause();

                video.currentTime = 0;

            }
        );

    });


    /* =====================================================
       PROJECT MODAL
    ===================================================== */

    const modal =
        document.getElementById("projectModal");

    const modalMedia =
        document.getElementById("modalMedia");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalCategory =
        document.getElementById("modalCategory");

    const closeModal =
        document.getElementById("closeModal");

    const modalBackdrop =
        document.querySelector(".modal-backdrop");


    function openProject(card) {

        const title =
            card.dataset.title;

        const description =
            card.dataset.description;

        const type =
            card.dataset.type;

        const source =
            card.dataset.src;

        const category =
            card.dataset.category;


        modalTitle.textContent = title;

        modalDescription.textContent =
            description;

        modalCategory.textContent =
            category.toUpperCase();


        modalMedia.innerHTML = "";


        if (type === "video") {

            const video =
                document.createElement("video");

            video.src = source;

            video.controls = true;

            video.autoplay = true;

            video.playsInline = true;

            modalMedia.appendChild(video);

        } else {

            const image =
                document.createElement("img");

            image.src = source;

            image.alt = title;

            modalMedia.appendChild(image);

        }


        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    projectCards.forEach(card => {

        if (
            card.classList.contains(
                "coming-project"
            )
        ) return;

        card.addEventListener("click", () => {

            openProject(card);

        });

    });


    function closeProjectModal() {

        modal.classList.remove("show");

        document.body.style.overflow = "";

        modalMedia.innerHTML = "";

    }


    closeModal?.addEventListener(
        "click",
        closeProjectModal
    );

    modalBackdrop?.addEventListener(
        "click",
        closeProjectModal
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("show")
            ) {

                closeProjectModal();

            }

        }
    );


    /* =====================================================
       DOWNLOAD CV
    ===================================================== */

    const downloadCV =
        document.getElementById("downloadCV");

    downloadCV?.addEventListener(
        "click",
        () => {

            /*
             * If you later add a real PDF file,
             * simply replace this section with:
             *
             * window.open("Prasad_Shejole_CV.pdf");
             */

            const cvText = `
PRASAD SHEJOLE

MBBS Student · Creative · Digital Media

ABOUT
4th-year MBBS student with interests in digital media,
content creation, strategic communication and event management.

EDUCATION
MBBS — 2023–2029
Pre-medical — 2020–2022
Digital Marketing — Certification

SKILLS
Instagram Strategy
LinkedIn Branding
Video Editing
CapCut
Canva
Thumbnail Design
Event Management
Photography
Content Strategy

CONTACT
prasad.shejole@medmail.com
            `;

            const blob =
                new Blob(
                    [cvText],
                    { type: "text/plain" }
                );

            const url =
                URL.createObjectURL(blob);

            const link =
                document.createElement("a");

            link.href = url;

            link.download =
                "Prasad_Shejole_CV.txt";

            document.body.appendChild(link);

            link.click();

            link.remove();

            URL.revokeObjectURL(url);

        }
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".work-card, .skill-category, .tools-panel, .project-card, .timeline-item, .contact-inner"
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       ACTIVE YEAR / TIMELINE
    ===================================================== */

    const timelineItems =
        document.querySelectorAll(
            ".timeline-item"
        );

    timelineItems.forEach(item => {

        item.addEventListener(
            "mouseenter",
            () => {

                timelineItems.forEach(
                    other => {

                        if (other !== item) {

                            other.style.opacity =
                                ".45";

                        }

                    }
                );

            }
        );

        item.addEventListener(
            "mouseleave",
            () => {

                timelineItems.forEach(
                    other => {

                        other.style.opacity =
                            "1";

                    }
                );

            }
        );

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute("href");

                if (
                    targetID === "#" ||
                    !targetID
                ) return;

                const target =
                    document.querySelector(
                        targetID
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cPrasad Shejole Portfolio",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "Medicine × Creativity × Digital Media"
    );

});
