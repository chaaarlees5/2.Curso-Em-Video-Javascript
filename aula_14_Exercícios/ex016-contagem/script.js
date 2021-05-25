function contar() {
    var txti = document.getElementById('txtinicio')
    var txtf = document.getElementById('txtfim')
    var txtp = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    
//Verifica se os valores de entrada estão preenchidos
    if (txti.value.length == 0) {
        res.innerHTML = '[ERRO] Verifique o valor de "Início".'
        txti.focus()
        contar()
    } else if (txtf.value.length == 0) {
        res.innerHTML = '[ERRO] Verifique o valor de "Fim".'
        txtf.focus()
        contar()
    } else {
        var inicio = Number(txti.value)
        var fim = Number(txtf.value)
        var passo = Number(txtp.value)

        res.innerHTML = "Contando:<br>"

        if (passo == " " || passo == "0") {
            window.alert('Valor de "Passo" inválido, considerando "Passo = 1"')
            passo = 1
        }
        
//Verifica se o valor de início é maior que o de fim para definir se a contagem será crescente ou decrescente
        if (inicio > fim) {
            for (i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i}\u{1F449} ` //Código de emoji retirado de https://unicode.org/emoji/charts/full-emoji-list.html
            }
        } else {
            for (i = inicio; i <= fim; i += passo) {
                res.innerHTML += `${i}\u{1F449} ` //Retirar o "U+" do código do emoji e colocar "\u" e o código entre chaves.
            }
        }
    res.innerHTML += `\u{1F3C1}`
    }
//Limpa todos os campos de entrada e leva o foco de digitação para o valor inicial.    
    txti.value = ''
    txtf.value = ''
    txtp.value = ''
    txti.focus()
}