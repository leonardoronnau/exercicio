function Contar(){
    var inicio = document.getElementById('InicioNumb');
    var fim = document.getElementById('FimNumb');
    var passo = document.getElementById('PassoNumb');
    var  res = document.querySelector('.res');
    //verifica se todos os campos estão preenchidos
    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        alert(' EStá falando alguns dados')
      
    } else {
        res.innerHTML = 'contando:  '
        //converti todas as string em number
        var ini = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        //se passo for menor ou igual a zero, ele assume um valor padrão de 1, para que o sistema não trave
        if (p <= 0 ) {
            p = 1
        }
        //se inicio for maior que fim, ele inverte a ordem dos contadores
        if (ini < f) {
            //inico é menor que o final

    
            for (let contador = ini; contador <= f; contador += p) {
            // nesse parte de contador += p ele vai pegar o resultado do contador <=f e fazer a soma contador += p EX contador deu 3 += 2 = 5 
            //na proxima vez o contador vai ser 5 += 2 = 7 por isso ele vai da a diferença de passos
                res.innerHTML += `${contador} > `
            }
        }else {
            //início é maior que o final
            for (let contador = ini; contador >=f; contador -= p) {
                res.innerHTML += `${contador} > `
            }
        }
        
    }

}


