const PAGES = [
  {
    img: 'fotos/02.jpg', // COLOQUE O NOME DA SUA FOTO AQUI
    theme: 'theme-dark', pat: 'pat-hearts',
    icon: '♥', label: 'Capítulo 1', title: 'O Primeiro Olhar',
    body: 'Havia algo naquele instante que mudou tudo. Um olhar que não precisou de palavras — apenas sentimento puro.',
    date: 'O começo de tudo', caption: 'Nosso primeiro momento'
  },
  {
    img: 'fotos/01.jpeg', // COLOQUE O NOME DA SUA FOTO AQUI
    theme: 'theme-blush', pat: 'pat-dots',
    icon: '✦', label: 'Capítulo 2', title: 'Você Chegou Sem Avisar',
    body: 'Não estava nos planos, mas estava no destino. Você chegou quietinho e ficou no lugar mais importante: no meu coração.',
    date: 'Surpresa da vida', caption: 'Sorrisos inesperados'
  },
  {
    img: 'fotos/03.jpeg', 
    theme: 'theme-leaf', pat: 'pat-leaves',
    icon: '❧', label: 'Capítulo 3', title: 'Nossa Conexão',
    body: 'A gente se entende com um olhar. Fala sem palavras. Ri da mesma coisa. É coisa rara — é coisa nossa.',
    date: 'Sempre em sintonia', caption: 'Nós dois'
  },
  {
    img: 'fotos/04.jpeg', 
    theme: 'theme-navy', pat: 'pat-diamonds',
    icon: '☽', label: 'Capítulo 4', title: 'Noites que Guardarei',
    body: 'Algumas noites ficam gravadas não pela hora, mas pelo que foi dito — ou pelo que não precisou ser.',
    date: 'Noites especiais', caption: 'Memórias de sempre'
  },
  {
    img: 'fotos/05.jpeg', 
    theme: 'theme-wine', pat: 'pat-stars',
    icon: '✶', label: 'Capítulo 5', title: 'Te Quero Pra Vida Toda',
    body: 'Não é exagero — é certeza. Quero acordar com você, crescer com você, rir e envelhecer do seu lado.',
    date: 'Para sempre', caption: 'Amor de verdade'
  },
  {
    img: 'fotos/06.jpg', 
    theme: 'theme-dark', pat: 'pat-lines',
    icon: '♡', label: 'Capítulo 6', title: 'Cada Detalhe seu',
    body: 'O jeito que você ri. A forma que você pensa. Como você cuida. São esses detalhes que me fazem te amar mais a cada dia.',
    date: 'Pequenas coisas grandes', caption: 'Amo cada detalhe'
  },
  {
    img: 'fotos/07.jpeg', 
    theme: 'theme-blush', pat: 'pat-hearts',
    icon: '❤', label: 'Capítulo 7', title: 'Aventuras Juntos',
    body: 'Cada lugar fica mais bonito quando você está do lado. Até o caminho de casa vira uma aventura.',
    date: 'Juntos onde for', caption: 'O mundo é nosso'
  },
  {
    img: 'fotos/08.jpeg', 
    theme: 'theme-sand', pat: 'pat-dots',
    icon: '☀', label: 'Capítulo 8', title: 'Dias Dourados',
    body: 'Tem dias que o sol brilha diferente. Esses dias sempre têm você perto — ou você na minha cabeça.',
    date: 'Luz da minha vida', caption: 'Brilho especial'
  },
  {
    img: 'fotos/09.jpeg', 
    theme: 'theme-leaf', pat: 'pat-diamonds',
    icon: '✿', label: 'Capítulo 9', title: 'Crescer com Você',
    body: 'Ao seu lado aprendi que o amor não é perfeito — é real. E o real é muito melhor do que qualquer conto de fadas.',
    date: 'Evolução juntos', caption: 'Aprendendo a amar'
  },
  {
    img: 'fotos/10.jpeg', 
    theme: 'theme-navy', pat: 'pat-stars',
    icon: '★', label: 'Capítulo 10', title: 'Você é Meu Lar',
    body: 'Lar não é um lugar — é uma sensação. E toda vez que estou com você, estou em casa.',
    date: 'Onde o coração mora', caption: 'Meu lugar favorito'
  },
  {
    img: 'fotos/11.jpeg', 
    theme: 'theme-wine', pat: 'pat-lines',
    icon: '♥', label: 'Capítulo 11', title: 'Saudade de Você',
    body: 'Tem uma saudade estranha que dói gostoso — é a sua. A que aparece mesmo quando estamos juntos porque quer mais.',
    date: 'Sempre com saudade', caption: 'Falta você'
  },
  {
    img: 'fotos/12.jpeg', 
    theme: 'theme-dark', pat: 'pat-hearts',
    icon: '✦', label: 'Capítulo 12', title: 'Risos que Guardarei',
    body: 'Guardarei para sempre o som da sua risada. Ela é o meu som favorito em todo o universo.',
    date: 'Alegria pura', caption: 'Sua risada'
  },
  {
    img: 'fotos/13.jpeg', 
    theme: 'theme-blush', pat: 'pat-leaves',
    icon: '❧', label: 'Capítulo 13', title: 'Cartas que Nunca Enviei',
    body: 'São tantas palavras que fico guardando no peito. Mas talvez o jeito que te olho já diga tudo.',
    date: 'Sentimentos guardados', caption: 'Tudo que não digo'
  },
  {
    img: 'fotos/14.jpeg', 
    theme: 'theme-leaf', pat: 'pat-dots',
    icon: '☽', label: 'Capítulo 14', title: 'Promessas Simples',
    body: 'Não te prometo o impossível. Prometo estar aqui, ser honesto, te escolher todos os dias — sem hesitar.',
    date: 'Promessas reais', caption: 'Te escolho sempre'
  },
  {
    img: 'fotos/15.jpeg', 
    theme: 'theme-sand', pat: 'pat-diamonds',
    icon: '☀', label: 'Capítulo 15', title: 'O que Você não Sabe',
    body: 'Você não sabe, mas você me salvou de muitas formas. Às vezes a melhor coisa é simplesmente existir — e você faz isso muito bem.',
    date: 'Segredo do coração', caption: 'Você me salva'
  },
  {
    img: 'fotos/16.jpeg', 
    theme: 'theme-navy', pat: 'pat-hearts',
    icon: '✶', label: 'Capítulo 16', title: 'Nossas Noites Frias',
    body: 'Frio do lado de fora, quentinho por dentro. Com você, as noites mais frias viram as mais aconchegantes.',
    date: 'Aconchego real', caption: 'Quentinho assim'
  },
  {
    img: 'fotos/17.jpeg', 
    theme: 'theme-wine', pat: 'pat-stars',
    icon: '♡', label: 'Capítulo 17', title: 'Você me Completa',
    body: 'Não de forma dramática — de forma real. Onde eu tenho pouco, você tem muito. Somos par perfeito no jeito certo.',
    date: 'Equilíbrio perfeito', caption: 'Feitos um pro outro'
  },
  {
    img: 'fotos/18.jpeg', 
    theme: 'theme-dark', pat: 'pat-lines',
    icon: '❤', label: 'Capítulo 18', title: 'Fotos que Contam Histórias',
    body: 'Cada foto é um portal. Clico e volto àquele momento, àquele cheiro, àquela sensação. Obrigado por existir nelas.',
    date: 'Memórias congeladas', caption: 'Momentos eternos'
  },
  {
    img: 'fotos/19.jpeg', 
    theme: 'theme-blush', pat: 'pat-diamonds',
    icon: '✿', label: 'Capítulo 19', title: 'Nossa Língua Secreta',
    body: 'Temos um idioma só nosso. Feito de olhares, de silêncios, de apelidos ridículos que amamos demais.',
    date: 'Só nós dois', caption: 'Nosso segredo'
  },
  {
    img: 'fotos/20.jpeg', 
    theme: 'theme-leaf', pat: 'pat-stars',
    icon: '★', label: 'Capítulo 20', title: 'Futuro que Sonho',
    body: 'Imagino futuros e em todos eles você está lá. No café da manhã, na viagem, no envelhecer — em tudo.',
    date: 'Sonhos partilhados', caption: 'Nosso amanhã'
  },
  {
    img: 'fotos/21.jpeg', 
    theme: 'theme-sand', pat: 'pat-hearts',
    icon: '♥', label: 'Capítulo 21', title: 'Amor que Cresce',
    body: 'Pensei que tinha um limite. Que um dia pararia de te amar mais. Mas todo dia o teto sobe — e eu continuo caindo.',
    date: 'Sem limites', caption: 'Sempre mais'
  },
  {
    img: 'fotos/22.jpeg', 
    theme: 'theme-navy', pat: 'pat-leaves',
    icon: '✦', label: 'Capítulo 22', title: 'Quando Estou com Você',
    body: 'O tempo passa diferente. Mais rápido quando quero que pare, mais lento quando estou feliz. Com você, é sempre os dois ao mesmo tempo.',
    date: 'Tempo precioso', caption: 'Instantes mágicos'
  },
  {
    img: 'fotos/23.jpeg', 
    theme: 'theme-wine', pat: 'pat-dots',
    icon: '❧', label: 'Capítulo 23', title: 'Obrigado por Existir',
    body: 'Por todos os momentos, os simples e os inesquecíveis. Por ser você — imperfeito, real, lindo do seu jeito único.',
    date: 'Gratidão infinita', caption: 'Feliz por te ter'
  },
  {
    img: 'fotos/24.jpeg', 
    theme: 'theme-dark', pat: 'pat-diamonds',
    icon: '☽', label: 'Capítulo 24', title: 'Nossa Conexão é Coisa de Outro Mundo',
    body: 'Não tem explicação científica. Não tem lógica. Tem só isso: quando você está perto, tudo faz sentido.',
    date: 'Além do comum', caption: 'Mágica de verdade'
  },
  {
    img: 'fotos/25.jpeg', 
    theme: 'theme-blush', pat: 'pat-hearts',
    icon: '♥', label: 'Capítulo 25 — Fim & Início', title: 'E a História Continua...',
    body: 'Este álbum tem 25 páginas. O nosso amor não tem. Cada dia é uma nova página em branco — e quero escrever todas com você.',
    date: 'Para sempre e mais', caption: 'Infinito com você'
  }
];
 
let current = 0;
 
function buildPages() {
  const wrap = document.getElementById('book-wrap');
  PAGES.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = `page ${p.theme}${i === 0 ? ' active' : ''}`;
    div.id = `page-${i}`;
    
    // Agora renderiza a tag <img> diretamente lendo o caminho da foto
    div.innerHTML = `
      <div class="photo-side">
        <div class="bg-pattern ${p.pat}"></div>
        <div class="photo-placeholder" id="ph-${i}">
          <img src="${p.img}" alt="Foto Capítulo ${i + 1}" onerror="this.onerror=null; this.src=''; this.alt='Imagem não encontrada. Verifique o nome do arquivo.'">
        </div>
        <div class="photo-caption">${p.caption}</div>
        <div class="page-number-left">Pág. ${i + 1}</div>
      </div>
      <div class="text-side">
        <span class="page-icon">${p.icon}</span>
        <div class="page-label">${p.label}</div>
        <div class="page-title">${p.title}</div>
        <div class="divider"></div>
        <div class="page-body">${p.body}</div>
        <div class="divider"></div>
        <div class="page-date">${p.date}</div>
      </div>`;
    wrap.appendChild(div);
  });
}
 
function changePage(dir) {
  const pages = document.querySelectorAll('.page');
  pages[current].classList.remove('active');
  pages[current].classList.add('exit');
  setTimeout(() => pages[current - dir]?.classList.remove('exit'), 600);
 
  current += dir;
  pages[current].classList.add('active');
 
  const pct = ((current + 1) / PAGES.length * 100).toFixed(1);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('counter').textContent = `${current + 1} / ${PAGES.length}`;
  document.getElementById('prev-btn').disabled = current === 0;
  document.getElementById('next-btn').disabled = current === PAGES.length - 1;
}
 
function startAlbum() {
  document.getElementById('title-screen').classList.add('hidden');
}
 
// keyboard
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' && current < PAGES.length - 1) changePage(1);
  if (e.key === 'ArrowLeft' && current > 0) changePage(-1);
});
 
// touch swipe
let tx = 0;
document.getElementById('book-wrap')?.addEventListener('touchstart', e => tx = e.touches[0].clientX, {passive:true});
document.getElementById('book-wrap')?.addEventListener('touchend', e => {
  const diff = tx - e.changedTouches[0].clientX;
  if (diff > 50 && current < PAGES.length - 1) changePage(1);
  if (diff < -50 && current > 0) changePage(-1);
}, {passive:true});
 
buildPages();
document.getElementById('progress-fill').style.width = `${1/25*100}%`;