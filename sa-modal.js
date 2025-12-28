// SA Modal logic

const modal = document.getElementById('saModal');
const closeBtn = document.getElementById('saCloseBtn');
const okBtn = document.getElementById('saOkBtn');

const saName = document.getElementById('saName');
const saStore = document.getElementById('saStore');
const saPhone = document.getElementById('saPhone');
const saNotes = document.getElementById('saNotes');

function openModalFromButton(btn) {
  saName.textContent = btn.dataset.saName || '';
  saStore.textContent = btn.dataset.saStore || '';
  saPhone.textContent = btn.dataset.saPhone || '';
  saNotes.textContent = btn.dataset.saNotes || '';

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  closeBtn.focus();
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

// Open when clicking any SA Info button
document.addEventListener('click', (e) => {
  const btn = e.target.closest('button.btn-secondary[data-sa-name]');
  if (btn) openModalFromButton(btn);
});

// Close actions
closeBtn.addEventListener('click', closeModal);
okBtn.addEventListener('click', closeModal);

// Click outside modal
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});
