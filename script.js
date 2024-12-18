document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation for section headers and cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section h2').forEach(header => {
        observer.observe(header);
    });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Project details modal
    const projectButtons = document.querySelectorAll('.project-details-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectTitle = this.parentElement.querySelector('h3').textContent;
            const projectDescription = this.parentElement.querySelector('p:nth-of-type(2)').textContent;
            
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2>${projectTitle}</h2>
                    <p>${projectDescription}</p>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            window.addEventListener('click', function(event) {
                if (event.target == modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });

    // Skill progress bars
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        const progress = Math.random() * 100; // Random progress for demonstration
        progressBar.style.width = `${progress}%`;
        item.appendChild(progressBar);
    });

    // Typing effect for the home section
    const typingElement = document.querySelector('#home p');
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    typeWriter();
});



