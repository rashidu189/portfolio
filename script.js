document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.querySelector('.resume-btn');
    
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Latest resume is not available. Please contact Rashidu Milan.");
        });
    }
});

// Select all <a> links that open modals
const viewLinks = document.querySelectorAll('.view-link');

viewLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const modalId = link.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

// Close modal when clicking ×
const closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});


// Select all screenshots
const screenshots = document.querySelectorAll('.clickable-screenshot');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Open lightbox on click
screenshots.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Close lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox on clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});

const screenshotscp = document.querySelectorAll('.clickable-screenshotcp');
const lightboxcp = document.getElementById('lightbox');
const lightboxImgcp = document.getElementById('lightbox-img');
const lightboxClosecp = document.getElementById('lightbox-close');

// Open lightbox on click
screenshotscp.forEach(img => {
    img.addEventListener('click', () => {
        lightboxcp.style.display = 'flex';
        lightboxImgcp.src = img.src;
    });
});

// Close lightbox
lightboxClosecp.addEventListener('click', () => {
    lightboxcp.style.display = 'none';
});

// Close lightbox on clicking outside the image
lightboxcp.addEventListener('click', (e) => {
    if (e.target === lightboxcp) lightboxcp.style.display = 'none';
});