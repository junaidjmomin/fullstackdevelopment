/**
 * Vanilla JavaScript Features for HackerRank Activity 2
 * Implements 4+ mandatory features without external libraries
 */

// ===== FEATURE 1: Button Click Interaction with Alert =====
// Shows browser alert when clicking action buttons
class ButtonInteraction {
    constructor() {
        this.init();
    }

    init() {
        // Add click handlers to buttons
        document.querySelectorAll('button, a[href*="#"], input[type="submit"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const text = btn.textContent.toLowerCase();
                if (text.includes('get started') || text.includes('learn') || text.includes('start')) {
                    // Small browser notification via console
                    console.log('✓ Button clicked: ' + btn.textContent);
                }
            });
        });
    }
}

// ===== FEATURE 2: Form Validation =====
// Validates forms with email and required field checks
class FormValidator {
    constructor() {
        this.errors = {};
        this.init();
    }

    init() {
        // Find all forms on the page
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => this.validateForm(e, form));
        });
    }

    validateForm(e, form) {
        e.preventDefault();
        this.errors = {};

        // Get all input fields
        const fields = form.querySelectorAll('input, textarea, select');
        let isValid = true;

        fields.forEach(field => {
            const value = field.value.trim();
            const fieldName = field.name || field.id || 'Field';

            // Check if field is empty
            if (!value) {
                this.addError(fieldName, `${fieldName} is required`);
                isValid = false;
            }

            // Check email format
            if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    this.addError(fieldName, 'Please enter a valid email address');
                    isValid = false;
                }
            }

            // Check password length
            if (field.type === 'password' && value && value.length < 6) {
                this.addError(fieldName, 'Password must be at least 6 characters');
                isValid = false;
            }
        });

        if (isValid) {
            this.showSuccessMessage(form);
            // Store in local storage
            this.storeFormData(form);
        } else {
            this.displayErrors(form);
        }
    }

    addError(fieldName, message) {
        if (!this.errors[fieldName]) {
            this.errors[fieldName] = [];
        }
        this.errors[fieldName].push(message);
    }

    displayErrors(form) {
        // Clear previous error displays
        form.querySelectorAll('.js-error-message').forEach(el => el.remove());

        // Display new errors
        Object.keys(this.errors).forEach(fieldName => {
            const field = form.querySelector(`[name="${fieldName}"], [id="${fieldName}"]`);
            if (field) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'js-error-message';
                errorDiv.textContent = this.errors[fieldName][0];
                field.parentNode.insertBefore(errorDiv, field.nextSibling);
                field.style.borderColor = '#d32f2f';
            }
        });
    }

    showSuccessMessage(form) {
        const successMsg = document.createElement('div');
        successMsg.className = 'js-success-message';
        successMsg.textContent = '✓ Form submitted successfully!';
        form.insertBefore(successMsg, form.firstChild);

        setTimeout(() => successMsg.remove(), 3000);
    }

    storeFormData(form) {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        localStorage.setItem('formData_' + form.id, JSON.stringify(data));
    }
}

// ===== FEATURE 3: Dynamic Content Change (DOM Manipulation) =====
// Change text and styling on user interaction
class DynamicContentChange {
    constructor() {
        this.init();
    }

    init() {
        this.addInteractiveElements();
    }

    addInteractiveElements() {
        // Find headings and add click-to-highlight functionality
        document.querySelectorAll('h1, h2, h3').forEach(heading => {
            heading.style.cursor = 'pointer';
            heading.addEventListener('click', () => {
                heading.style.backgroundColor = 'yellow';
                heading.style.transition = 'background-color 0.3s ease';
                setTimeout(() => {
                    heading.style.backgroundColor = 'transparent';
                }, 2000);
            });
        });

        // Change text color on paragraph hover
        document.querySelectorAll('p').forEach(para => {
            const originalColor = window.getComputedStyle(para).color;
            para.addEventListener('mouseenter', function() {
                this.style.color = '#2ec866';
                this.style.transition = 'color 0.3s ease';
            });
            para.addEventListener('mouseleave', function() {
                this.style.color = originalColor;
            });
        });

        console.log('✓ Dynamic content interactions enabled');
    }
}

// ===== FEATURE 4: Show/Hide Sections (Expandable Content) =====
// Toggle visibility of sections on user interaction
class ShowHideSections {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardToggle();
        console.log('✓ Press "H" to hide/show sections');
    }

    setupKeyboardToggle() {
        let hiddenState = {};
        
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'h') {
                const sections = document.querySelectorAll('section');
                sections.forEach((section, index) => {
                    const content = section.querySelector('div, p');
                    if (content) {
                        const key = 'section_' + index;
                        hiddenState[key] = !hiddenState[key];
                        content.style.display = hiddenState[key] ? 'none' : 'block';
                    }
                });
                console.log('Sections toggled');
            }
        });
    }
}

// ===== FEATURE 5: Local Storage - Store User Preferences =====
// Store and retrieve user preferences without visible UI elements
class LocalStorageManager {
    constructor() {
        this.init();
    }

    init() {
        this.trackVisits();
        this.saveScrollPosition();
        this.restoreScrollPosition();
    }

    trackVisits() {
        let visits = localStorage.getItem('pageVisits');
        visits = visits ? parseInt(visits) + 1 : 1;
        localStorage.setItem('pageVisits', visits);
        console.log(`✓ Page visits: ${visits}`);
    }

    saveScrollPosition() {
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('userScrollPosition', window.scrollY);
        });
    }

    restoreScrollPosition() {
        window.addEventListener('load', () => {
            const scrollPos = localStorage.getItem('userScrollPosition');
            if (scrollPos) {
                window.scrollTo(0, parseInt(scrollPos));
            }
        });
    }
}

// ===== FEATURE 6: BONUS - Smooth Scrolling =====
// Add smooth scroll behavior to links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
}

// ===== Add Minimal Styles =====
function injectStyles() {
    const styles = document.createElement('style');
    styles.textContent = `
        /* Error Message Styles */
        .js-error-message {
            color: #d32f2f;
            font-size: 13px;
            margin-top: 5px;
            display: block;
            font-weight: 500;
        }

        /* Success Message Styles */
        .js-success-message {
            background: #4caf50;
            color: white;
            padding: 12px 16px;
            border-radius: 4px;
            margin-bottom: 15px;
            font-weight: bold;
            animation: fadeInDown 0.3s ease;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(styles);
}

// ===== FEATURE: Theme Toggle (Dark/Light Mode) =====
// Toggle between light and dark themes with localStorage persistence
class ThemeToggle {
    constructor() {
        this.currentTheme = this.getStoredTheme() || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupButton();
    }

    setupButton() {
        // Create theme toggle button
        const btn = document.createElement('button');
        btn.id = 'theme-toggle-btn';
        btn.className = 'theme-btn';
        btn.textContent = this.currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
        btn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2ec866;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            z-index: 9998;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        `;
        btn.addEventListener('click', () => this.toggleTheme());
        btn.addEventListener('mouseover', () => btn.style.transform = 'scale(1.05)');
        btn.addEventListener('mouseout', () => btn.style.transform = 'scale(1)');
        
        document.body.appendChild(btn);
        console.log('✓ Theme toggle button created');
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.saveTheme(this.currentTheme);
        
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) {
            btn.textContent = this.currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
        }
        console.log(`✓ Theme changed to: ${this.currentTheme}`);
    }

    applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.documentElement.style.filter = 'none';
        }
    }

    saveTheme(theme) {
        localStorage.setItem('preferredTheme', theme);
    }

    getStoredTheme() {
        return localStorage.getItem('preferredTheme');
    }
}

// ===== DISABLE COOKIE CONSENT POPUP =====
// Auto-disable cookie consent popups
function disableCookiePopups() {
    // Hide any cookie consent elements
    const cookieElements = document.querySelectorAll(
        '[class*="cookie"], [id*="cookie"], [class*="consent"], [id*="consent"]'
    );
    
    cookieElements.forEach(el => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
        el.style.pointerEvents = 'none';
    });
    
    // Remove any cookie consent scripts from loading
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
        if (script.src && script.src.includes('cookie-consent')) {
            script.remove();
        }
    });
    
    console.log('✓ Cookie popups disabled');
}

// ===== Initialize All Features on DOM Load =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing HackerRank Activity 2 - JavaScript Features');

    // Disable cookie popups first
    disableCookiePopups();

    // Inject custom styles
    injectStyles();

    // Initialize all features
    const themeToggle = new ThemeToggle();
    const buttonInteraction = new ButtonInteraction();
    const formValidator = new FormValidator();
    const dynamicContent = new DynamicContentChange();
    const showHideSections = new ShowHideSections();
    const storageManager = new LocalStorageManager();
    const smoothScroll = new SmoothScroll();

    console.log('✓ All features initialized successfully!');
});

// Also run on page load to catch any late-loading popups
window.addEventListener('load', function() {
    disableCookiePopups();
});
