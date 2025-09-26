document.addEventListener('DOMContentLoaded', function() {
  const guideTooltip = document.getElementById('guideTooltip');
  const tooltipClose = document.getElementById('tooltipClose');
  
  // Always show the tooltip when page loads
  setTimeout(() => {
    guideTooltip.style.display = 'block';
  }, 1000);
  
  // Auto-hide after 8 seconds
  const autoHideTimer = setTimeout(() => {
    hideTooltip();
  }, 8000);
  
  // Close button functionality
  tooltipClose.addEventListener('click', function() {
    clearTimeout(autoHideTimer); // Cancel auto-hide if user manually closes
    hideTooltip();
  });
  
  // Hide when clicking on dots (user understood the instruction)
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      clearTimeout(autoHideTimer); // Cancel auto-hide if user clicks dots
      hideTooltip();
    });
  });
  
  function hideTooltip() {
    guideTooltip.classList.add('hidden');
    
    // Remove from DOM after animation
    setTimeout(() => {
      guideTooltip.style.display = 'none';
    }, 500);
  }
  
  // Add sparkle effect to dots
  dots.forEach(dot => {
    dot.addEventListener('mouseenter', function() {
      this.style.filter = 'drop-shadow(0 0 10px currentColor)';
    });
    
    dot.addEventListener('mouseleave', function() {
      this.style.filter = 'none';
    });
  });
});