function tabuada () {
    var txtn = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

//Impede que o usuário não digite nenhum número
    if(txtn.value.length == 0) {
        window.alert('Por favor, digite um número!')
        /* //Achei desnecessário limpar a lista se não for digitado um número
        tab.innerHTML = " "
        var frase = document.createElement('option')
        frase.text = 'Digite um número acima'
        tab.appendChild(frase)
        */
    } else {
        var n = Number(txtn.value)
        tab.innerHTML = " "
//Cria uma lista com a tabuada do numero selecionado.
        for (mult = 1; mult <= 10; mult++) {
            var item = document.createElement('option')
            item.text = `${n} x ${mult} = ${n*mult}`
            tab.appendChild(item)
        }
    }
    txtn.value = ''
    txtn.focus()
}