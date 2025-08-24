###### project statement: [link +](https://github.com/rahmasir/resume/wiki/project-statement)

# Multilingual Google Docs-Style Resume Page

A fully responsive, single-page application to display a professional and academic resume in multiple languages (English, Persian, German). The project is styled to mimic the clean, familiar interface of Google Docs and is built with vanilla HTML, CSS, and JavaScript, emphasizing a modular and easy-to-maintain structure.

## Live Demo

You can view a live demo of this project here: [https://rahmasir.github.io/resume/](https://rahmasir.github.io/resume/)

## Features

-   **Multilingual Support:** Easily switch between English, Persian (فارسی), and German (Deutsch).
    
-   **Multiple Document Types:** Toggle between a Work Resume, an Academic Resume, and an "About" page.
    
-   **Google Docs UI:** A clean, minimalist design inspired by Google Docs for a professional look.
    
-   **Fully Responsive:** The layout adapts seamlessly to all device sizes, from mobile phones to desktop monitors.
    
-   **RTL & LTR Support:** The layout correctly adjusts for both Left-to-Right (English, German) and Right-to-Left (Persian) languages.
    
-   **Easy Customization:** All personal data is stored in a single, well-structured `data.js` file, making it simple to update.
    
-   **Dynamic Hyperlinks:** Easily add hyperlinks to your resume content using a simple markdown-style syntax.
    
-   **Zero Dependencies:** Built with pure HTML, CSS, and JavaScript. No frameworks or libraries are required.
    

## File Structure

The project is organized into four distinct files to separate concerns, making it easy to manage and expand.

```
/
|-- index.html      # The main HTML file for the page structure.
|-- styles.css      # All CSS for styling, layout, and responsiveness.
|-- script.js       # JavaScript for interactivity (dropdowns, content rendering).
|-- data.js         # All resume text and content in every language.
```

## Technologies Used

-   **HTML5:** For the core structure and content.
    
-   **CSS3:** For styling, including Flexbox for layout and media queries for responsiveness.
    
-   **Tailwind CSS (via CDN):** Used for utility-first styling to speed up development.
    
-   **Vanilla JavaScript (ES6+):** For all dynamic functionality and DOM manipulation.
    

## Setup and Usage

To run this project locally, simply download the files and open the `index.html` file in your web browser.

1.  Clone the repository or download the ZIP file.
    
2.  Navigate to the project directory.
    
3.  Open `index.html` in a browser like Chrome, Firefox, or Safari.
    

## How to Customize

All your personal information is located in the `data.js` file. Open this file in a text editor to make changes.

### 1. Editing Your Information

The `resumeData` object is divided by language (`en`, `fa`, `de`). Within each language, you'll find sections for `work`, `academic`, and `about`. Simply edit the text within the quotes to replace the placeholder content with your own.

**Example: Changing your name in English**

```
// Inside data.js
const resumeData = {
    en: {
        // ...
        work: {
            name: 'Your Name Here', // <-- EDIT THIS
            //...
        },
        // ...
    },
    // ...
};

```

### 2. Adding Hyperlinks

You can add hyperlinks in two ways:

**A) For Contact Information:**

To make contact details like your email or LinkedIn profile clickable, use the object format within the `contact` array:

```
// Edit the contact array in data.js
contact: [
    '<span>(555) 123-4567</span>', // For non-linked text
    { text: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { text: 'My LinkedIn Profile', href: 'https://linkedin.com/in/yourprofile' }
],

```

**B) For Any Other Text:**

For any other text in your resume (like in a description or a list item), use a simple markdown-style syntax: `[Clickable Text](Your URL)`. The script will automatically convert this into a working link.

**Example:**

```
// In a description field in data.js
description: 'Led a team in creating a [new analytics platform](https://example.com).',

```

This will render as: "Led a team in creating a <a href="[https://example.com](https://example.com "null")">new analytics platform</a>."

## Deployment

This project can be easily deployed for free using **GitHub Pages**.

1.  Push your project files (`index.html`, `styles.css`, `script.js`, `data.js`) to a new GitHub repository.
    
2.  In your repository, go to **Settings** > **Pages**.
    
3.  Under the "Build and deployment" section, select **Deploy from a branch**.
    
4.  Choose the `main` (or `master`) branch as the source and `/ (root)` as the folder.
    
5.  Click **Save**. Your page will be live at `https://<your-username>.github.io/<your-repository-name>/` in a few minutes.
    

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
