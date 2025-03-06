// Function to create cherry blossom particles
function createParticles() {
  const container = document.getElementById('particle-container');
  const numParticles = 120; // Number of particles

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * window.innerWidth + 'px'; // Random X position
    particle.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random animation duration between 5s and 10s
    container.appendChild(particle);
  }
}

// Call the function to create particles when the page loads
document.addEventListener('DOMContentLoaded', createParticles);
