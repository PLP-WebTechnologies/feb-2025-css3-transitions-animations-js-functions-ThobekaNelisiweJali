// Save user preference in localStorage
function savePreference() {
  // Get the selected product from the dropdown
  const selectedProduct = document.getElementById('productSelect').value;

  // If a product is selected, save it to localStorage
  if (selectedProduct) {
    localStorage.setItem('skincarePreference', selectedProduct);
  }
}

// Show user preference from localStorage
function showPreference() {
  // Retrieve the stored preference from localStorage
  const preference = localStorage.getItem('skincarePreference');
  
  // Get the element to display the preference
  const display = document.getElementById('preferenceDisplay');

  // Display the user's preference or prompt them to select a product
  if (preference) {
    display.textContent = `Your preferred product is: ${preference}`;
  } else {
    display.textContent = 'Please select a product from the dropdown.';
  }
}

// Store and retrieve preference on page load
window.onload = function() {
  // Get the saved preference from localStorage when the page loads
  const savedPreference = localStorage.getItem('skincarePreference');

  // If a preference exists, display it; otherwise, show a prompt
  if (savedPreference) {
    document.getElementById('preferenceDisplay').textContent = `Your preferred product is: ${savedPreference}`;
  }
};

// Add transition effect to sections
const sections = document.querySelectorAll("section, header");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});