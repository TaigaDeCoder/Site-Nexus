// members.js — member hover/click logic and popup placement
import { $all } from './utils.js';

export function initMembers(){
  const members = $all('.membru');
  members.forEach(m => {
    // Example: keep existing click-to-open modal behavior — copy your current logic here
    m.addEventListener('click', () => {
      const popup = document.getElementById('popup');
      if (!popup) return;
      const name = m.dataset.nume || m.querySelector('strong')?.innerText || '';
      popup.querySelector('#popup-nume')?.textContent = name;
      popup.classList.add('active');
    });

    // Hover preview popup is handled by CSS; if you need JS placement, add code here.
  });
}
