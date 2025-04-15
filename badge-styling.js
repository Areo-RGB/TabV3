/**
 * Player Badge Styling System
 * 
 * This script applies consistent badge styling for player performance tiers
 * across all player pages in the Quo-Vadis system.
 */

function applyBadgeStyling() {
  // Get references to the elements
  const averagePercentileElement = document.getElementById('average-percentile');
  const averageLabelElement = document.getElementById('average-label');
  
  if (!averagePercentileElement || !averageLabelElement) return;
  
  // Get the current label
  const label = averageLabelElement.textContent.trim();
  
  // Apply color to percentile number based on performance tier
  if (label === 'Ausgezeichnet') {
    averagePercentileElement.style.color = '#6610f2'; // Purple
    averagePercentileElement.style.textShadow = '0 0 10px rgba(102, 16, 242, 0.4)';
  } else if (label === 'Sehr gut') {
    averagePercentileElement.style.color = '#20c997'; // Teal
    averagePercentileElement.style.textShadow = '0 0 10px rgba(32, 201, 151, 0.4)';
  } else if (label === 'Gut') {
    averagePercentileElement.style.color = '#0dcaf0'; // Cyan
    averagePercentileElement.style.textShadow = '0 0 10px rgba(13, 202, 240, 0.4)';
  } else if (label === 'Durchschnittlich') {
    averagePercentileElement.style.color = '#fd7e14'; // Orange
    averagePercentileElement.style.textShadow = '0 0 10px rgba(253, 126, 20, 0.4)';
  } else if (label === 'Unterdurchschnittlich') {
    averagePercentileElement.style.color = '#dc3545'; // Red
    averagePercentileElement.style.textShadow = '0 0 10px rgba(220, 53, 69, 0.4)';
  }
  
  // Apply custom badge styling based on performance tier
  if (label === 'Ausgezeichnet') {
    averageLabelElement.className = 'badge';
    averageLabelElement.style.background = 'linear-gradient(90deg, #6f42c1 0%, #6610f2 100%)';
    averageLabelElement.style.color = '#fff';
    averageLabelElement.style.boxShadow = '0 0 15px rgba(102, 16, 242, 0.5)';
  } else if (label === 'Sehr gut') {
    averageLabelElement.className = 'badge';
    averageLabelElement.style.background = 'linear-gradient(90deg, #20c997 0%, #198754 100%)';
    averageLabelElement.style.color = '#fff';
    averageLabelElement.style.boxShadow = '0 0 15px rgba(32, 201, 151, 0.5)';
  } else if (label === 'Gut') {
    averageLabelElement.className = 'badge';
    averageLabelElement.style.background = 'linear-gradient(90deg, #0dcaf0 0%, #0d6efd 100%)';
    averageLabelElement.style.color = '#fff';
    averageLabelElement.style.boxShadow = '0 0 15px rgba(13, 202, 240, 0.5)';
  } else if (label === 'Durchschnittlich') {
    averageLabelElement.className = 'badge';
    averageLabelElement.style.background = 'linear-gradient(90deg, #fd7e14 0%, #ffc107 100%)';
    averageLabelElement.style.color = '#343a40';
    averageLabelElement.style.boxShadow = '0 0 15px rgba(253, 126, 20, 0.5)';
  } else if (label === 'Unterdurchschnittlich') {
    averageLabelElement.className = 'badge';
    averageLabelElement.style.background = 'linear-gradient(90deg, #dc3545 0%, #f56565 100%)';
    averageLabelElement.style.color = '#fff';
    averageLabelElement.style.boxShadow = '0 0 15px rgba(220, 53, 69, 0.5)';
  }
  
  // Add more visual appeal to the badge
  averageLabelElement.style.fontWeight = '600';
  averageLabelElement.style.padding = '0.5em 1.2em';
  averageLabelElement.style.borderRadius = '10px';
  averageLabelElement.style.letterSpacing = '0.5px';
  averageLabelElement.style.fontSize = '1rem';
  averageLabelElement.style.transform = 'translateY(0)';
  averageLabelElement.style.transition = 'all 0.3s ease';
}

// Apply badge styling when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  applyBadgeStyling();
});
