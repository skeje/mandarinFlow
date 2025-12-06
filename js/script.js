/* ===== Menu Toggle ===== */
function toggleMenu() {
    const menu = document.getElementById('mobileNav');
    menu.classList.toggle('hidden');
}

/* ===== Modal Functions ===== */
function openModal() {
    document.getElementById('diagModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('diagModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

/* ===== Image Modal ===== */
function openImageModal(imgSrc) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="relative max-w-4xl w-full">
            <img src="${imgSrc}" class="w-full h-auto rounded-2xl shadow-2xl" alt="Image agrandie">
            <button onclick="this.closest('div').remove()" class="absolute top-4 right-4 bg-white text-black text-3xl rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition">×</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
        if (e.target === this) this.remove();
    });
}

/* ===== Tab Switching ===== */
function switchTab(tab) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
        content.style.animation = 'none';
    });
    
    // Reset all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('border-2', 'border-yellow-400', 'text-gray-900');
        btn.classList.remove('bg-yellow-400', 'text-blue-900');
    });
    
    // Show selected tab content
    const contentId = tab + '-content';
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.remove('hidden');
        content.style.animation = 'fadeInUp 0.5s ease-out';
    }
    
    // Highlight active tab button
    const button = document.querySelector(`[data-tab="${tab}"]`);
    if (button) {
        button.classList.add('active', 'bg-yellow-400', 'text-blue-900');
        button.classList.remove('border-2', 'border-yellow-400', 'text-gray-900');
    }
}

/* ===== Form Submission ===== */
document.addEventListener('DOMContentLoaded', function() {
    const diagForm = document.getElementById('diagForm');
    if (diagForm) {
        diagForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const msg = document.getElementById('successMsg');
            msg.classList.remove('hidden');
            const formData = {
                name: document.getElementById('name').value,
                company: document.getElementById('company').value,
                email: document.getElementById('email').value,
                need: document.getElementById('need').value
            };
            console.log('Form submitted:', formData);
            this.reset();
            setTimeout(() => {
                msg.classList.add('hidden');
                closeModal();
            }, 3000);
        });
    }
    
    // Modal click outside to close
    const diagModal = document.getElementById('diagModal');
    if (diagModal) {
        diagModal.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }
});

/* ===== Navigation Links ===== */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                if (document.getElementById('mobileNav') && !document.getElementById('mobileNav').classList.contains('hidden')) {
                    toggleMenu();
                }
            }
        });
    });
});

/* ===== Scroll Animations ===== */
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

/* ===== Scroll to Top Button ===== */
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 300) {
        if (!scrollBtn) {
            const btn = document.createElement('button');
            btn.id = 'scrollTopBtn';
            btn.innerHTML = '⬆️';
            btn.className = 'fixed bottom-8 right-8 bg-yellow-400 text-blue-900 w-12 h-12 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition z-40';
            btn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };
            document.body.appendChild(btn);
        }
    } else if (scrollBtn) {
        scrollBtn.remove();
    }
});
