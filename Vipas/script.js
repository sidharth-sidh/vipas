document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('#intro');
  const enter = document.querySelector('#enterButton');
  const dismissIntro = () => intro?.classList.add('leave');
  enter?.addEventListener('click', dismissIntro);
  setTimeout(dismissIntro, 1500);

  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  menu?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });

  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.album-card');
  filters.forEach(filter => filter.addEventListener('click', () => {
    filters.forEach(button => button.classList.remove('active'));
    filter.classList.add('active');
    cards.forEach(card => {
      card.style.display = filter.dataset.filter === 'all' || card.dataset.year === filter.dataset.filter ? '' : 'none';
    });
  }));

  const modal = document.querySelector('.modal');
  const close = document.querySelector('.modal-close');
  const title = document.querySelector('#modal-title');
  const description = document.querySelector('#modal-description');
  const archive = {
    1:['Parashakti','A meditation on the many forms of the divine feminine.'],
    2:['Ardhanari','The timeless balance of Shiva and Shakti, in one luminous body.'],
    3:['Nrityanjali','An offering of first performances and fearless young expression.'],
    4:['Navarasa','Nine emotional worlds unfolded through movement and music.'],
    5:['Shivoham','A temple-side evening in praise of the cosmic dancer.'],
    6:['First light','Our youngest dancers greet the stage with pure delight.']
  };
  cards.forEach(card => card.addEventListener('click', event => {
    event.preventDefault();
    const [name, copy] = archive[card.dataset.album];
    title.textContent = name; description.textContent = copy;
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  }));
  const closeModal = () => { modal?.classList.remove('open'); modal?.setAttribute('aria-hidden','true'); };
  close?.addEventListener('click', closeModal);
  modal?.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

  const enquiryForm = document.querySelector('#enquiry-form');
  const formSuccess = document.querySelector('#form-success');
  enquiryForm?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const message = [
      `Admissions enquiry from ${data.get('guardian')}`,
      '',
      `Dancer: ${data.get('dancer')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Age group: ${data.get('age')}`,
      `Preferred class: ${data.get('class')}`,
      `Notes: ${data.get('message') || 'None supplied'}`
    ].join('\n');
    formSuccess.textContent = 'Your email app is opening with the enquiry ready to send.';
    window.location.href = `mailto:hello@vipas.in?subject=${encodeURIComponent('VIPAS admissions enquiry')}&body=${encodeURIComponent(message)}`;
  });
});
