// ChatGPT generated JavaScript file

document.addEventListener('DOMContentLoaded', function() {
    const botaoInicio = document.querySelector('.inicio-a');
    const footer = document.querySelector('footer');
  
    // Controlar exibição do botão
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
  
        if (scrollY > 700) {
            botaoInicio.classList.add('visible');
            botaoInicio.classList.remove('hidden');
            botaoInicio.style.display = 'block'; 
        } else {
            botaoInicio.classList.add('hidden');
            botaoInicio.classList.remove('visible');
            setTimeout(() => {
                botaoInicio.style.display = 'none'; 
            }, 100000);
        }
  
        // Ajustar posição do botão em relação ao footer
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
  
        if (window.scrollY + windowHeight >= footerTop) {
            const distanciaDoFooter = window.scrollY + windowHeight - footerTop;
            botaoInicio.style.bottom = `${20 + distanciaDoFooter}px`;
        } else {
            botaoInicio.style.bottom = '20px';
        }
    });
  
    // Rolar suavemente ao topo
    botaoInicio.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
  });
  
  // iFrame na área do álbum
  function changeIframe(platform) {
      let iframe = document.getElementById("boxIframe");
      let urls = {
          'spotify': "https://open.spotify.com/embed/album/2S815H9WNQOhHU3jviAyqM?utm_source=generator",
          'apple': "https://embed.music.apple.com/pt/album/rahamim/1782195660",
          'deezer': "https://widget.deezer.com/widget/dark/album/676342771",
          'soundcloud': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1922315663&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      };
      
      iframe.src = urls[platform];
  }
  
  // Script para mudar o botão com name de + Colo de Deus para + CD (na responsividade para celular) e o botão de contribuidores.

  document.addEventListener('DOMContentLoaded', () => {
    let botaoContribuidores = document.getElementById("contribuidores");
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    // Ajustar o estilo do botão para ficar a 16.5% do topo inicialmente
    botaoContribuidores.style.position = 'fixed';
    botaoContribuidores.style.top = '16.5%';

    botaoContribuidores.addEventListener('click', () => {
        botaoContribuidores.style.display = 'none';
    });

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY|| document.documentElement.scrollTop;
        if (scrollTop < lastScrollTop - 10) {
            botaoContribuidores.style.display = 'block';
        }
        if (scrollTop > 0) {
            botaoContribuidores.style.top = '8.35%';
        } else {
            botaoContribuidores.style.top = '17.5%';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
        let botao = document.getElementById("cd");
        if (window.innerWidth <= 768) {
            botao.textContent = "+CD"; 
        } else {
            botao.textContent = "+ Colo de Deus";
        }
    });

    // Script para botão burger de navegação
    function clickMenu() {
        if (itemsNav.style.display == 'block'){
            itemsNav.style.display = 'none'
        } else {
            itemsNav.style.display = 'block'
        }
    }

    // Script para fazer com que o botão de burger ao ser clicado troca-o pelo botão de cancel
    document.addEventListener('DOMContentLoaded', function() {
        const burgerIcon = document.querySelector('.burger-icon');
        const cancelIcon = document.querySelector('.cancel-icon');
        const itemsNav = document.getElementById('itemsNav');
        const navId = document.getElementById('navId');

        // Garante que o menu e os itens fiquem escondidos ao carregar a página
        itemsNav.style.display = 'none';
        navId.classList.remove('active'); 

        burgerIcon.addEventListener('click', () => {
            burgerIcon.style.display = 'none';
            cancelIcon.style.display = 'block';
            itemsNav.style.display = 'block';
            navId.style.transition = '1s'
            navId.style.backgroundColor = 'rgb(0, 0, 0, 0.75)';
            navId.style.Width = '50%';
            navId.style.paddingBottom = '100vh';
            navId.style.top = '0';
            navId.style.left = '0';
            navId.style.position = 'fixed';
            navId.style.zIndex = '10'
            navId.style.pointerEvents = 'auto';
        });
    
        cancelIcon.addEventListener('click', () => {
            cancelIcon.style.display = 'none';
            burgerIcon.style.display = 'block';
            itemsNav.style.display = 'none';
            navId.style.background = 'none';
            navId.style.width = 'auto';
            navId.style.height = 'auto';
        });

    // Função para ajustar o menu dependendo do tamanho da tela
    function ajustarMenu() {
        if (window.innerWidth > 768) {
            // No desktop, o menu deve ser visível
            itemsNav.style.display = 'block';
            navId.classList.remove('active'); 
        } else {
            // No mobile, o menu começa escondido
            itemsNav.style.display = 'none';
        }
    }

    // Chama a função ao carregar a página e ao redimensionar a tela
    ajustarMenu();
    window.addEventListener('resize', ajustarMenu);
    });
