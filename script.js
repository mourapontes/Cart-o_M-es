document.addEventListener('DOMContentLoaded', () => {
  function criarEmojisCaindo() {
    const emojis = ['🌸', '🌷', '💖', '💐', '🌹', '❤️', '✨', '💕'];
    const quantidade = 35;
    const container = document.body;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < quantidade; i++) {
      const el = document.createElement('div');
      el.classList.add('falling');
      el.style.left = `${Math.random() * 100}vw`;
      const duration = 3 + Math.random() * 6;
      const delay = Math.random() * 5;
      el.style.animationDuration = `${duration}s`;
      el.style.animationDelay = `${delay}s`;
      el.style.fontSize = `calc(1em + ${Math.random() * 0.5}em)`;
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      fragment.appendChild(el);
    }
    container.appendChild(fragment);
  }

  criarEmojisCaindo();

  const heart = document.getElementById('heart');

  // Adiciona um evento de clique ao coração
  heart.addEventListener('click', () => {
    heart.classList.add('clicked');

    // Remove a classe após a animação para permitir novos cliques
    setTimeout(() => {
      heart.classList.remove('clicked');
    }, 500);
  });
});