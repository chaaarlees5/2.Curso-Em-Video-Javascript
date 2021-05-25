function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique o ano de nascimento e tente novamente.')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - formAno.value
        var genero = ' '
        var img = document.createElement('img') //Criar elemento de imagem no HTML
        img.setAttribute('id', 'foto') //Atribuir ao elemento de imagem o id = 'foto'
        
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', 'foto-bebe-m.png') //Inserir a foto ao elemento de imagem
            } else if (idade <= 20){
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <= 20){
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}