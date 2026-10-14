const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

function updateDhakaClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat('en-BD', {
    timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  }).format(now);
  const date = new Intl.DateTimeFormat('en-BD', {
    timeZone: 'Asia/Dhaka', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).format(now);
  document.getElementById('dhakaTime').textContent = time;
  document.getElementById('dhakaDate').textContent = date;
}
updateDhakaClock();
setInterval(updateDhakaClock, 1000);
document.getElementById('year').textContent = new Date().getFullYear();

const mapLocation = document.getElementById('mapLocation');
const mapFrame = document.getElementById('mapFrame');
mapLocation?.addEventListener('change', () => {
  const query = encodeURIComponent(mapLocation.value);
  mapFrame.src = `https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
});

document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  document.getElementById('formNote').textContent = 'Opening your email app. Add your email address in the HTML before publishing.';
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});