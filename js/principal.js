let banners =
["Do Lixo ao Luxo", "Reaproveitar é aproveitar!"];
var bannerAtual = 0;


function trocaBanner(){
    bannerAtual = (bannerAtual + 1) %2;
    document.querySelector('h2#mensagem').textContent =
    banners[bannerAtual];
}

setInterval(trocaBanner, 2000);

