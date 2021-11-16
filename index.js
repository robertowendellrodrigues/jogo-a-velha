const jogador1 = 1
const jogador2 = 2
let vez = jogador1
var jogada = new Uint16Array(9)
let fim = false
var jogadas = 10

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

function quemGanhou() {
    fim = false
    let a, b, c
    jogadas -= 1
   
    if (jogada[0] == jogada[1] && jogada[1] == jogada[2] && jogada[0] != 0) {
        a = [jogada[0], 0], b = [jogada[1], 1], c = [jogada[2], 2]
        fim = true
    }
    if (jogada[0] == jogada[4] && jogada[4] == jogada[8] && jogada[0] != 0) {
        a = [jogada[0], 0], b = [jogada[4], 4], c = [jogada[8], 8]
        fim = true
    }
    if (jogada[0] == jogada[3] && jogada[3] == jogada[6] && jogada[0] != 0) {
        a = [jogada[0], 0], b = [jogada[3], 3], c = [jogada[6], 6]
        fim = true
    }
    if (jogada[2] == jogada[5] && jogada[5] == jogada[8] && jogada[2] != 0) {
        a = [jogada[2], 2], b = [jogada[5], 5], c = [jogada[8], 8]
        fim = true
    }
    if (jogada[2] == jogada[4] && jogada[4] == jogada[6] && jogada[2] != 0) {
        a = [jogada[2], 2], b = [jogada[4], 4], c = [jogada[6], 6]
        fim = true
    }
    if (jogada[1] == jogada[4] && jogada[4] == jogada[7] && jogada[1] != 0) {
        a = [jogada[1], 1], b = [jogada[4], 4], c = [jogada[7], 7]
        fim = true
    }
    if (jogada[6] == jogada[7] && jogada[7] == jogada[8] && jogada[6] != 0) {
        a = [jogada[6], 6], b = [jogada[7], 7], c = [jogada[8], 8]
        fim = true
    }
    if (jogada[3] == jogada[4] && jogada[4] == jogada[5] && jogada[3] != 0) {
        a = [jogada[3], 3], b = [jogada[4], 4], c = [jogada[5], 5]
        fim = true
    }
    if (jogadas <= 0) {
        fim = true
        jogadas = 10
    }

    document.querySelector(`#img${a[1]}`).setAttribute('src', `img/ajogada${a[0]}.png`)
    document.querySelector(`#img${b[1]}`).setAttribute('src', `img/ajogada${b[0]}.png`)
    document.querySelector(`#img${c[1]}`).setAttribute('src', `img/ajogada${c[0]}.png`)    
}

function reiniciaJogo() {
    if (fim == true) {
        alert("O jogo vai ser reiniado")
        for (let i = 0; i < 9; i++) {
            jogada[i] = 0
            document.querySelector(`#img${i}`).setAttribute('src', ``)
        }
    }
}
