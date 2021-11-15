const jogador1 = 1
const jogador2 = 2
let vez = jogador1
var jogada = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let fim = false

function jogar(n) {

    if (jogada[n] == 0 && fim == false) {
        jogada[n] = vez
        let img = document.querySelector(`#img${n}`)
        img.setAttribute('src', `img/jogada${vez}.png`)
        if (vez == jogador1) {
            vez = jogador2
        }
        else {
            vez = jogador1
        }
    }
    quemGanhou()   
  
}

function reiniciaJogo(){
   if(fim == true){
     alert("O jogo vai ser reiniado")
    jogada = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    document.querySelector(`#img0`).setAttribute('src', ``)
    document.querySelector(`#img1`).setAttribute('src', ``)
    document.querySelector(`#img2`).setAttribute('src', ``)
    document.querySelector(`#img3`).setAttribute('src', ``)
    document.querySelector(`#img4`).setAttribute('src', ``)
    document.querySelector(`#img5`).setAttribute('src', ``)
    document.querySelector(`#img6`).setAttribute('src', ``)
    document.querySelector(`#img7`).setAttribute('src', ``)
    document.querySelector(`#img8`).setAttribute('src', ``)
   }
}

function quemGanhou() {
    fim = false   

    if (jogada[0] == jogada[1] && jogada[1] == jogada[2] && jogada[0] != 0) {
        if (jogada[0] == 1) {            
            document.querySelector(`#img0`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img1`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img2`).setAttribute('src', `img/ajogada1.png`)            
        }
        else {
            document.querySelector(`#img0`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img1`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img2`).setAttribute('src', `img/ajogada2.png`)
        }
        fim = true
    }

    if (jogada[0] == jogada[4] && jogada[4] == jogada[8] && jogada[0] != 0) {
        if (jogada[0] == 1) {
            document.querySelector(`#img0`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img4`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img8`).setAttribute('src', `img/ajogada1.png`)
        }
        else {
            document.querySelector(`#img0`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img4`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img8`).setAttribute('src', `img/ajogada2.png`)
        }

        fim = true
    }

    if (jogada[0] == jogada[3] && jogada[3] == jogada[6] && jogada[0] != 0) {
        if (jogada[0] == 1) {
            document.querySelector(`#img0`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img3`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img6`).setAttribute('src', `img/ajogada1.png`)
        }
        else {
            document.querySelector(`#img0`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img3`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img6`).setAttribute('src', `img/ajogada2.png`)
        }        

        fim = true
    }

    if (jogada[1] == jogada[4] && jogada[4] == jogada[7] && jogada[1] != 0) {
        if (jogada[1] == 1) {
            document.querySelector(`#img1`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img4`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img7`).setAttribute('src', `img/ajogada1.png`)
        }
        else {
            document.querySelector(`#img1`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img4`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img7`).setAttribute('src', `img/ajogada2.png`)
        }
        
        fim = true
    }

    if (jogada[2] == jogada[5] && jogada[5] == jogada[8] && jogada[2] != 0) {
        if (jogada[2] == 1) {
            document.querySelector(`#img2`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img5`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img8`).setAttribute('src', `img/ajogada1.png`)
        }
        else {
            document.querySelector(`#img2`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img5`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img8`).setAttribute('src', `img/ajogada2.png`)
        }       

        fim = true
    }

    if (jogada[2] == jogada[4] && jogada[4] == jogada[6] && jogada[2] != 0) {
        if (jogada[2] == 1) {
            document.querySelector(`#img2`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img4`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img6`).setAttribute('src', `img/ajogada1.png`)
        }
        else {
            document.querySelector(`#img2`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img4`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img6`).setAttribute('src', `img/ajogada2.png`)
        }
        
        fim = true
    }

    if (jogada[6] == jogada[7] && jogada[7] == jogada[8] && jogada[6] != 0) {
        if (jogada[6] == 1) {
            document.querySelector(`#img6`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img7`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img8`).setAttribute('src', `img/ajogada1.png`)
        }
        else {
            document.querySelector(`#img6`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img7`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img8`).setAttribute('src', `img/ajogada2.png`)
        }
       
        fim = true
    }

    if (jogada[3] == jogada[4] && jogada[4] == jogada[5] && jogada[3] != 0) {
        if (jogada[3] == 1) {
            document.querySelector(`#img3`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img4`).setAttribute('src', `img/ajogada1.png`)
            document.querySelector(`#img5`).setAttribute('src', `img/ajogada1.png`)
        }
        else {
            document.querySelector(`#img3`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img4`).setAttribute('src', `img/ajogada2.png`)
            document.querySelector(`#img5`).setAttribute('src', `img/ajogada2.png`)
        }
        
        fim = true
    }

}