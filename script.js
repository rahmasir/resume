document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element Selectors ---
    const langButton = document.getElementById('lang-button');
    const langDropdown = document.getElementById('lang-dropdown');
    const resumeTypeButton = document.getElementById('resume-type-button');
    const resumeTypeDropdown = document.getElementById('resume-type-dropdown');
    const resumeContainer = document.getElementById('resume-container');
    const contentPlaceholder = document.getElementById('content-placeholder');
    const body = document.body;

    // --- Application State ---
    let currentState = {
        lang: 'en', // Default language is English
        type: 'work', // Default document is Work Resume
    };

    // --- Event Listeners ---

    // Toggle language dropdown
    langButton.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
        resumeTypeDropdown.classList.add('hidden');
    });

    // Toggle resume type dropdown
    resumeTypeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        resumeTypeDropdown.classList.toggle('hidden');
        langDropdown.classList.add('hidden');
    });

    // Handle language selection
    langDropdown.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.dataset.lang) {
            currentState.lang = e.target.dataset.lang;
            langDropdown.classList.add('hidden');
            updateUI();
        }
    });

    // Handle resume type selection
    resumeTypeDropdown.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.dataset.type) {
            currentState.type = e.target.dataset.type;
            resumeTypeDropdown.classList.add('hidden');
            updateUI();
        }
    });

    // Close dropdowns if clicking outside
    window.addEventListener('click', () => {
        langDropdown.classList.add('hidden');
        resumeTypeDropdown.classList.add('hidden');
    });

    // --- UI Update Functions ---

    function updateUI() {
        updateLanguageDirection();
        updateButtonLabels();
        renderContent();
    }

    function updateLanguageDirection() {
        const isRTL = currentState.lang === 'fa';
        body.dir = isRTL ? 'rtl' : 'ltr';
    }

    function updateButtonLabels() {
        langButton.textContent = resumeData[currentState.lang].ui.langButton;
        resumeTypeButton.textContent = resumeData[currentState.lang].ui.docButton;
    }

    function renderContent() {
        if (!currentState.type) {
            resumeContainer.innerHTML = '';
            if(contentPlaceholder) {
                resumeContainer.appendChild(contentPlaceholder);
            }
            return;
        }

        const contentData = resumeData[currentState.lang][currentState.type];
        if (!contentData) {
            resumeContainer.innerHTML = '<p>Content not available.</p>';
            return;
        }

        let html = '';
        if (currentState.type === 'about') {
            html = generateAboutPage(contentData);
        } else {
            html = generateResume(contentData);
        }

        resumeContainer.innerHTML = html;
    }

    // --- HTML Generation & Utility Functions ---

    /**
     * Parses a string for markdown-style links [text](url) and converts them to HTML <a> tags.
     * @param {string} text - The text to parse.
     * @returns {string} - HTML string with links.
     */
    function parseAndLinkify(text) {
        if (!text) return '';
        const linkRegex = /\[([^\]]+)]\(([^)]+)\)/g;
        return text.replace(linkRegex, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    }

    /**
     * Generates HTML for a resume (work or academic).
     * @param {object} data - The resume data object.
     * @returns {string} - The generated HTML string.
     */
    function generateResume(data) {
        const contactHTML = data.contact.map(item => {
            // Handle new object format for links
            if (typeof item === 'object' && item.href) {
                return `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.text}</a>`;
            }
            // Handle old string format and new span format
            // The innerHTML will correctly render the span tag
            return item;
        }).join('');

        return `
            <div class="contact-info">
                <h1>${data.name}</h1>
                <p>${contactHTML}</p>
            </div>
            ${data.sections.map(section => `
                <div class="resume-section">
                    <h2>${section.title}</h2>
                    ${section.items.map(item => `
                        <div>
                            <h3>${parseAndLinkify(item.title)}</h3>
                            <h4>${parseAndLinkify(item.subtitle)}</h4>
                            <p>${parseAndLinkify(item.description || '')}</p>
                            ${item.points ? `<ul>${item.points.map(point => `<li>${parseAndLinkify(point)}</li>`).join('')}</ul>` : ''}
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        `;
    }

    /**
     * Generates HTML for the "About" page.
     * @param {object} data - The about page data object.
     * @returns {string} - The generated HTML string.
     */
    function generateAboutPage(data) {
        return `
            <div class="resume-section">
                <h2>${data.title}</h2>
                <p>${parseAndLinkify(data.content)}</p>
            </div>
        `;
    }

    // --- Initial Setup ---
    updateUI();
});
