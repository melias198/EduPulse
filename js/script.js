// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menuToggle');
//     const navbar = document.querySelector('.navbar');

//     menuToggle.addEventListener('click', () => {
//         navbar.classList.toggle('responsive');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link a');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('responsive');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('responsive');
        });
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    const homeLink = document.querySelector('a[href="#home"]');
    
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        const homeSection = document.querySelector('#home');
        const yOffset = -70; // Adjust this value if needed
        const y = homeSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    const pricingLink = document.querySelector('a[href="#pricing"]');
    
    pricingLink.addEventListener('click', (e) => {
        e.preventDefault();
        const pricingSection = document.querySelector('#pricing');
        const yOffset = -70; // Adjust this value if needed
        const y = pricingSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const featuresLink = document.querySelector('a[href="#features"]');
    
    featuresLink.addEventListener('click', (e) => {
        e.preventDefault();
        const featuresSection = document.querySelector('#features');
        const yOffset = -70; // Adjust this value if needed
        const y = featuresSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const aboutLink = document.querySelector('a[href="#about"]');
    
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.querySelector('#about');
        const yOffset = -70; // Adjust this value if needed
        const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const contactLink = document.querySelector('a[href="#contact"]');
    
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        const yOffset = -70; // Adjust this value if needed
        const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menuToggle');
//     const navbar = document.querySelector('.navbar');

//     menuToggle.addEventListener('click', () => {
//         navbar.classList.toggle('responsive');
//     });

//     const links = document.querySelectorAll('a[href^="#"]');
    
//     links.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute('href').substring(1);
//             if (targetId === "home") {
//                 window.scrollTo({ top: 0, behavior: 'smooth' });
//             } else {
//                 const targetSection = document.getElementById(targetId);
//                 const yOffset = -70; // Adjust this value if needed
//                 const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

//                 window.scrollTo({ top: y, behavior: 'smooth' });
//             }
//         });
//     });

//     // Scroll to top if no hash is present in the URL
//     if (!window.location.hash) {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menuToggle');
//     const navbarLinks = document.querySelector('.nav-links');
//     const links = document.querySelectorAll('a[href^="#"]');

//     menuToggle.addEventListener('click', () => {
//         navbarLinks.classList.toggle('responsive');
//     });

//     links.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute('href').substring(1);
//             if (targetId === "home") {
//                 window.scrollTo({ top: 0, behavior: 'smooth' });
//             } else {
//                 const targetSection = document.getElementById(targetId);
//                 const yOffset = -70; // Adjust this value if needed
//                 const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

//                 window.scrollTo({ top: y, behavior: 'smooth' });
//             }
//             // Close the responsive menu after a link is clicked
//             if (window.innerWidth <= 768) {
//                 navbarLinks.classList.remove('responsive');
//             }
//         });
//     });

//     // Scroll to top if no hash is present in the URL
//     if (!window.location.hash) {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
// });



