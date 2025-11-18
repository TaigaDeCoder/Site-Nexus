// counters.js — animated counters and intersection observer
export function initCounters(){
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;
  const speed = 200;
  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = Math.max(1, Math.round(target / speed));
    const update = () => {
      const val = +counter.innerText.replace('+','') || 0;
      if (val < target) { counter.innerText = Math.min(target, val + increment); setTimeout(update, 10); }
      else counter.innerText = target + '+';
    };
    update();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        counters.forEach(c => animateCounter(c));
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.getElementById('statistics');
  if (statsSection) observer.observe(statsSection);
}
