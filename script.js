const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

  const openModal = () => {
    console.log('clicked modal');
    const container = document.querySelector('.container');
    container.style.display = 'flex';
};

const hideModal = () => {
    const container = document.querySelector('.container');
    container.style.display = 'none';
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hideModal();
    }
});

document.addEventListener('click', (event) => {
    const container = document.querySelector('.container');
    if (event.target === container) {
        hideModal();
    }
});