const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', document.body.dataset.theme);
});

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 }
];

const projects = [
    {
        title: 'Project 1',
        description: 'Description of project 1',
        tags: ['HTML', 'CSS']
    },
];

function renderSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill';
            skillElement.innerHTML = `
                <h3>${skill.name}</h3>
                <div class="progress-bar">
                    <div class="progress" style="width: ${skill.level}%"></div>
                </div>
            `;
            skillsContainer.appendChild(skillElement);
        });
    }
}

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-card';
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;
            projectsGrid.appendChild(projectElement);
        });
    }
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
});
