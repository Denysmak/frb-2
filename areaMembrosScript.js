const accededores = document.querySelectorAll('.acceder');
accededores.forEach(acceder => {
    acceder.addEventListener('click', () => {
        window.top.location.href = 'index.html';
    });
});

const canceladores = document.querySelectorAll('.cancelar');
canceladores.forEach(cancelar => {
    cancelar.addEventListener('click', () => {
        window.top.location.href = 'devolucion.html';
    });
});



function createCloseVideo(codigoVideo, icone, contagem) {
    const moduloVideoContainer = document.createElement('div')
    moduloVideoContainer.className = 'moduloVideoContainer'
    
    const moduloVideo = document.createElement('div');
    moduloVideo.className = 'moduloVideo';
    
    const leftDiv = document.createElement('div');
    leftDiv.className = 'moduloVideoLeft';
    
    const rightDiv = document.createElement('div')
    rightDiv.className = 'moduloVideoRight'
    
    const iconeEsquerda = document.createElement('i')
    iconeEsquerda.className = icone
    
    const video = document.createElement('iframe')
    video.className = 'youtubeVideo'
    video.src = `https://www.youtube.com/embed/${codigoVideo}`
    video.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    video.allowFullscreen = true;
    
    const iconeMais = document.createElement('i');
    iconeMais.className = 'fa-solid fa-plus';
    iconeMais.style.display = 'block';
    
    const iconeMenos = document.createElement('i');
    iconeMenos.className = 'fa-solid fa-minus';
    iconeMenos.style.display = 'none';
    
    // Função para fechar todos os vídeos abertos
 function closeAllVideos() {
        const allVideos = document.querySelectorAll('.youtubeVideo-open');
        allVideos.forEach((vid) => {
            vid.classList.remove('youtubeVideo-open');
            vid.classList.add('youtubeVideo-close');
            vid.style.display = 'none';
            // Alterar ícones correspondente ao vídeo
            const container = vid.parentElement;
            const plusIcon = container.querySelector('.fa-plus');
            const minusIcon = container.querySelector('.fa-minus');
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        });
    }

    moduloVideo.addEventListener('click', () => {
        if (video.classList.contains('youtubeVideo-open')) {
            // Se o vídeo está aberto, fechar
            video.classList.remove('youtubeVideo-open');
            video.classList.add('youtubeVideo-close');
            iconeMais.style.display = 'block'; // Certifique-se de que iconeMais esteja visível
            iconeMenos.style.display = 'none'; // Oculte iconeMenos
            // Aguarde a animação terminar antes de ocultar o vídeo
            video.addEventListener('animationend', () => {
                if (video.classList.contains('youtubeVideo-close')) {
                    video.style.display = 'none';
                }
            }, { once: true });
        } else {
            // Fechar todos os vídeos abertos antes de abrir um novo
            closeAllVideos();
            // Abrir o vídeo
            video.style.display = 'block'; // Certifique-se de que o vídeo esteja visível
            video.classList.remove('youtubeVideo-close');
            video.classList.add('youtubeVideo-open');
            iconeMais.style.display = 'none'; // Oculte iconeMais
            iconeMenos.style.display = 'block'; // Certifique-se de que iconeMenos esteja visível
        }
    });

    const tvIconClase = document.createElement('p')
    const texto = document.createTextNode(`📺 Clase ${contagem}`)
    tvIconClase.appendChild(texto)
    rightDiv.appendChild(tvIconClase)
    rightDiv.appendChild(iconeMais)
    rightDiv.appendChild(iconeMenos)
    
    leftDiv.appendChild(iconeEsquerda)
    moduloVideo.appendChild(leftDiv)
    moduloVideo.appendChild(rightDiv)
    moduloVideoContainer.appendChild(moduloVideo)
    moduloVideoContainer.append(video)
    return moduloVideoContainer
    /*modulos.appendChild(moduloVideoContainer)*/
}

let lista = [
    ['D1VLjTzVrUs', 'fa-regular fa-paper-plane', 1],
    ['D1VLjTzVrUs', 'fa-regular fa-paper-plane', 1],
    ['D1VLjTzVrUs', 'fa-regular fa-paper-plane', 1]
];


function criaModulo(lista, numeroModulo) {
    let modulos = document.getElementById('modulos'); // Obtém o elemento onde os módulos serão adicionados

    // Cria um único elemento <div class="modulo"> para todos os elementos da lista
    let modulo = document.createElement('div');
    modulo.classList.add('modulo'); // Adiciona a classe "modulo" ao div

    // Adiciona um <h1> inicial dentro do módulo
    let h1 = document.createElement('h1');
    h1.textContent = 'Módulo ' + numeroModulo; // Aqui você pode definir o título desejado
    modulo.appendChild(h1);

    // Itera sobre a lista e chama a função createCloseVideo para cada elemento
    lista.forEach(elemento => {
        modulo.appendChild(createCloseVideo(elemento[0], elemento[1], elemento[2]));
    });

    modulos.appendChild(modulo); // Adiciona o módulo completo ao elemento 'modulos'
}







// Exemplo de utilização da função criaModulo com uma lista de exemplo
let listaModuloUm = [
    ['Kb5LRzzQ-uE', 'far fa-edit', 1],
    ['Izg475CMarY', 'fa-regular fa-paper-plane', 2],
    ['wvTixZjNH54', 'fas fa-layer-group', 3],
    ['acuewUc_kpw', 'far fa-edit', 4],
    ['h14or5M4kKE', 'far fa-edit', 5],
    ['-TSpkHAB-qk', 'far fa-edit', 6],
    ['hBB7fyBvJJo', 'far fa-edit', 7],
    ['J6Xs8MESPpk', 'far fa-edit', 8],
    ['LvUsVThj7dk', 'far fa-edit', 9],
    ['3zg6qfeTsHg', 'far fa-edit', 10],
];

let listaModuloDois = [
    ['H1ni1FEWAQA', 'far fa-edit', 1],
    ['w7xrD47-Blg', 'fa-regular fa-paper-plane', 2],
    ['_lNHRgs4h-4', 'fas fa-layer-group', 3],
    ['1tmsr41IXvY', 'far fa-edit', 4],
    ['M_FloIOXQtM', 'far fa-edit', 5],
    ['w9VABMhT5HI', 'far fa-edit', 6],
    ['i_-5enqrqgA', 'far fa-edit', 7],
    ['m318ocCTldw', 'far fa-edit', 8],
    ['SdW_W-MCd4E', 'far fa-edit', 9],
    ['3lUEix4gn38', 'far fa-edit', 10],
];

criaModulo(listaModuloUm, 1);
criaModulo(listaModuloDois, 2);


