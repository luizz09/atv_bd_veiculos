let resposta = document.getElementById(`resposta`)
let cad_veiculo = document.getElementById(`cad_usuario`)

const categoriaPreco = (categoria, precoFabrica) =>{
    let precoVenda = 0

    if(categoria === 'popular') {
        precoVenda = precoFabrica * 1.15
    }else if (categoria === 'sedan') {
        precoVenda = precoFabrica * 1.20
    }else if (categoria === 'luxo') {
        precoVenda = precoFabrica * 1.25
    }

    return precoVenda
}

cad_veiculo.addEventListener(`click`, (e)=>{
    e.preventDefault()
    const nome = document.getElementById(`nome`).value
    const marca = document.getElementById(`marca`).value
    const categoria = document.getElementById(`categoria`).value
    const ano = Number(document.getElementById(`ano`).value)
    const precoFabrica = Number(document.getElementById(`precoFabrica`).value)
    const precoVenda = categoriaPreco(categoria, precoFabrica)

    const valores = {
        nome: nome,
        marca: marca,
        categoria: categoria,
        ano: ano,
        precoFabrica: precoFabrica,
        precoVenda: precoVenda,
    }
    console.log(valores)



    fetch('http://localhost:3000/veiculo',{
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)

        resposta.innerHTML = ``
        resposta.innerHTML += dados.message
        document.querySelector('form').reset()
    })
})