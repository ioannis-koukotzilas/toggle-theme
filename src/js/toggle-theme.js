/**
 * Toggle Toggle
 */

// Top level function. Set target as parameter.
function toggleTheme(target) {
  // Pass the argument.
  const toggleBtn = document.querySelector(target);

  // Check if 'dark-mode' key exists in localStorage.
  if (localStorage.getItem('dark-mode')) {
    document.body.classList.add('dark-mode');
  }

  // Add on click event.
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      localStorage.removeItem('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', true);
    }
  });
}

// Init
toggleTheme('#toggle-theme');
