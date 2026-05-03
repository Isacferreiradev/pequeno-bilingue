document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-q');
        if (question) {
            question.addEventListener('click', () => {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Sales Notification Logic
    const names = ["Maria Silva", "João Pedro", "Ana Paula", "Ricardo Santos", "Carla Oliveira", "Lucas Souza", "Fernanda Lima", "Paulo Costa", "Juliana Rocha", "Marcos Vinícius"];
    const cities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Fortaleza", "Salvador", "Porto Alegre", "Brasília", "Recife", "Manaus"];

    function showNotification() {
        const name = names[Math.floor(Math.random() * names.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];
        const isComplete = Math.random() > 0.3; // 70% chance of being Complete Plan

        document.getElementById('notif-name').innerText = name;
        document.getElementById('notif-city').innerText = city;
        document.querySelector('.notif-content strong').innerText = isComplete ? "acabou de comprar o Plano Completo!" : "acabou de comprar o Plano Básico!";

        const notif = document.getElementById('sales-notification');
        notif.classList.add('show');

        setTimeout(() => {
            notif.classList.remove('show');
        }, 5000); // Show for 5 seconds
    }

    // Show first notification after 5 seconds, then every 12-25 seconds
    setTimeout(() => {
        showNotification();
        setInterval(() => {
            showNotification();
        }, Math.floor(Math.random() * (25000 - 12000 + 1)) + 12000);
    }, 5000);

    // Countdown Timer
    let timeLeft = 15 * 60; // 15 minutes in seconds
    const timerDisplay = document.getElementById('countdown');

    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        if (timerDisplay) {
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }

        if (timeLeft > 0) {
            timeLeft--;
        } else {
            timeLeft = 15 * 60; // Reset for demo purposes or keep at 0:00
        }
    };

    setInterval(updateTimer, 1000);
});
