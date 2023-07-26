function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img=document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <4) {
                //criança
                img.setAttribute('src', 'bebem.jpg')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultom.jpg')
            } else if (idade < 110) {
                //idoso
                img.setAttribute('src', 'idosom.jpg')
            } else {
                //morto
                img.setAttribute('src', 'morto.jpg')
            }

        } else if(fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <4) {
                //criança
                img.setAttribute('src', 'bebef.jpg')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultof.jpg')
            } else if (idade <110) {
                //idoso
                img.setAttribute('src', 'idosaf.jpg')
            } else {
                //morto
                img.setAttribute('src', 'morto.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
