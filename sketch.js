var titulo, subtitulo, texto;
var brilho;
var grupo;
var espaço, espaçoimagem;
var botao, botaoimagem;
var solar, solarimagem;
var terra, terraimagem;
var botao_terra;

function preload(){
    //carrega as imagens
    brilho = loadImage("./Imagens/a.png");
    espaçoimagem = loadImage("./Imagens/inicio.png");
    botaoimagem = loadImage("./Imagens/play.png");
    solarimagem = loadImage("./Imagens/sistema solar.png");
    terraiamgem = loadImage("./Imagens/terra.jpg");
}
function setup() {
    createCanvas(windowWidth,windowHeight);
    grupo = new Group();


    var sprite = createSprite(500, 500);
    sprite.addImage(brilho);
    sprite.scale = 0.1;
    sprite.lifetime = 20;
    
    espaço = createSprite(width/2, height/2);
    espaço.addImage(espaçoimagem);
    espaço.scale = 0.9;

    solar = createSprite(width/2.1, height/2);
    solar.addImage(solarimagem);
    solar.scale = 0.89;
    solar.visible = false;

    botao = createSprite(width/2.1, height/1.8);
    botao.addImage(botaoimagem);
    botao.scale = 0.8;
    
}

function draw() {
    background("black");
    //códigos que serão executados ao longo de todo o jogo

    if(mousePressedOver(botao)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = true;
    }

    drawSprites();
}

function mouseClicked(){
    var sprite = createSprite(mouseX, mouseY);
    sprite.addImage(brilho);
    sprite.scale = 0.1;
    sprite.lifetime = 20;
    grupo.add(sprite);
    
    
}

function mouseReleased(){ 
    //soltou o mouse


}
