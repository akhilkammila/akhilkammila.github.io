// Safe loading script to ensure content is always visible
document.addEventListener('DOMContentLoaded', function() {
    // Ensure body is visible
    document.body.style.opacity = '1';
    document.body.style.display = 'block';

    // Add fallback for cursor if custom cursor fails
    try {
        const cursorElements = document.querySelectorAll('.cursor div');
        if (!cursorElements || cursorElements.length === 0) {
            // Fallback to normal cursor if custom cursor elements don't exist
            document.body.style.cursor = 'auto';
        }
    } catch (e) {
        console.error('Cursor initialization failed:', e);
        document.body.style.cursor = 'auto';
    }

    // Ensure main content sections are visible
    const sections = ['navbar', 'showcase', 'resume', 'thingsido', 'volunteering'];
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.style.display = 'block';
            element.style.visibility = 'visible';
        }
    });

    // Add error handling for animation scripts
    if (typeof elements === 'undefined') {
        console.warn('Title animation elements not found, skipping animation');
    }

    // Log successful load
    console.log('Page loaded successfully with fallbacks');
});

// Add global error handler to prevent page from breaking
window.addEventListener('error', function(e) {
    console.error('JavaScript error caught:', e);
    // Ensure page remains visible even if there's an error
    document.body.style.opacity = '1';
    document.body.style.display = 'block';
    document.body.style.cursor = 'auto';
});
</content>
</invoke>