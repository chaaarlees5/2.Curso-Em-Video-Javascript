var numerin = []
var txtnum = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')

txtnum.focus()

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }        
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return false
    } else {
        return true
    }
}


function adicionar(){
//Analisa se o número digitado está entre 1 e 100 em 'isNumero' 
//E se o número já foi digitado anteriormente em 'inLista
    if(isNumero(txtnum.value) && inLista(txtnum.value, numerin)) {
        numerin.push(Number(txtnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtnum.value} adicionado`
        lista.appendChild(item)
        
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    txtnum.value = ''
    txtnum.focus()
}
//Cria parágrafos com as informações de 'total, maior, menor, soma e média'
function finalizar (){
    if(numerin.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = numerin.length
        let maior = numerin[0]
        let menor = numerin[0]
        let soma = 0
        let media = 0

//tem o mesmo resultado de 'for(let pos = 0; pos < numerin.lenght; pos++)
        for(let pos in numerin) {
            soma += numerin[pos]
            if(numerin[pos] > maior) {
                maior = numerin[pos]
            }
            if(numerin[pos] < menor) {
                menor = numerin[pos]
            }
        }
        media = soma / total
        media = media.toFixed(2)
        media = media.replace('.',',')

        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi o número ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi o número ${menor}.</p>` 
        res.innerHTML += `<p>Somando todos os valores, temos o número ${soma}.</p>` 
        res.innerHTML += `<p>A média dos valores digitados é igual a ${media}.</p>`
    }
}

function limpar() {
    lista.innerHTML = ''
    res.innerHTML = ''
    txtnum.value = ''
    numerin = []
    txtnum.focus()
}




/*
function adicionar() {
    
    var conf = true
    var num = Number(txtnum.value)

    if (num < 1 || num > 100) {
        window.alert('O valor é inválido ou já está adicionado na lista.')
    } else {
        for (teste = 0; teste < numerin.length; teste++) {
            if (num == numerin[teste]) {
                window.alert('O valor é inválido ou já está adicionado na lista.')
                conf = false
            }
        }
    }
    if (num >= 1 && num <= 100 && conf == true) {
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item)
        numerin.push(num)
    }
}

function finalizar () {
    if (numerin.length = 0){
        document.alert('Adicione um valor antes de Finalizar')
    } else{

        numerin.sort(function(a, b){
            return a - b;
        })

        */
      /*  var soma = 0

        for (cnt = 0; cnt <= numerin.length; cnt++) {
            soma =+ numerin[cnt] 
        }*/

/*        ultimo = numerin.length - 1
        res.innerHTML = `<p>Ao todo temos ${numerin.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${numerin[ultimo]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${numerin[0]}.</p>`
        res.innerHTML += `Somando todo os valores, temos ${soma}`
    }
}
*/