// particles.js — site-wide particle system (moved from main script)
export function initParticles() {
  // small, non-blocking particle init — keep lightweight
  const hero = document.querySelector('.hero');
  if (!hero) return;
  for (let i=0;i<20;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random()*100 + '%';
    p.style.animationDelay = (Math.random()*5)+'s';
    p.style.animationDuration = (Math.random()*3+3)+'s';
    hero.appendChild(p);
  }
}
