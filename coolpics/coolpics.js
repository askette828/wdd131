const viewer = document.querySelector(".viewer");
const viewerImage = viewer.querySelector("img");
const closeViewerButton = document.querySelector(".close-viewer");
const galleryImages = document.querySelectorAll(".gallery img");
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Hide viewer when page loads
viewer.classList.add("hide");

function openViewer(event) {
    viewerImage.src = event.target.src;
    viewerImage.alt = event.target.alt;
    viewer.classList.remove("hide");
}

function closeViewer() {
    viewer.classList.add("hide");
    viewerImage.src = "";
}

galleryImages.forEach(img => img.addEventListener("click", openViewer));
closeViewerButton.addEventListener("click", closeViewer);

// Close viewer when clicking outside the image
viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
        closeViewer();
    }
});

// Close viewer with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeViewer();
    }
});

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('show');
    }
});

// Close menu when pressing escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menu.classList.remove('show');
    }
});
