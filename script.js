/* =========================================================
   TYPEWRITER
========================================================= */

const words = [
    "Bil",
    "Abil",
    "Bilbariq",
    "Nabil"
];

const typewriter = document.getElementById("typewriter");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typewriter.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typewriter.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 55 : 110
    );
}

typeEffect();


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.querySelector(".nav-menu");

mobileMenuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-open");

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("mobile-open");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, .experience-card, .service-card, .education-card"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


/* =========================================================
   DOWNLOAD CV  
========================================================= */

const downloadCV =
    document.getElementById("downloadCV");

downloadCV.addEventListener("click", function(event) {

    event.preventDefault();

    alert(
        "Silakan tambahkan file CV kamu dan ubah href tombol Download CV."
    );

});