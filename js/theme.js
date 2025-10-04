+// Theme switching functionality
+document.addEventListener('DOMContentLoaded', function() {
+    const themeToggle = document.getElementById('theme-toggle');
+    const themeIcon = document.querySelector('.theme-icon');
+    const body = document.body;
+    
+    // Check for saved theme preference or default to light mode
+    const currentTheme = localStorage.getItem('theme') || 'light';
+    
+    // Apply the saved theme
+    applyTheme(currentTheme);
+    
+    // Theme toggle event listener
+    themeToggle.addEventListener('click', function() {
+        const currentTheme = body.getAttribute('data-theme') || 'light';
+        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
+        
+        applyTheme(newTheme);
+        localStorage.setItem('theme', newTheme);
+    });
+    
+    function applyTheme(theme) {
+        body.setAttribute('data-theme', theme);
+        
+        // Update the icon
+        if (theme === 'dark') {
+            themeIcon.textContent = '☀️';
+        } else {
+            themeIcon.textContent = '🌙';
+        }
+    }
+});
\ No newline at end of file