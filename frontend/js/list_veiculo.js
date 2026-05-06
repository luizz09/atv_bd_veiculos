fetch('http://localhost:3000/veiculos')
.then(res => res.json())
.then(veiculos => {
    const corpo = document.getElementById('corpo')
    veiculos.forEach(v => {
        corpo.innerHTML += `
            <tr>
                <td>${v.codVeiculo}</td> |
                <td>${v.nome}</td> |
                <td>${v.marca}</td> |
                <td>${v.categoria}</td> |
                <td>${v.ano}</td> |
                <td>${v.precoFabrica}</td> |
                <td>${v.precoVenda}</td>
            </tr>
        `
    })
})
.catch(err => console.error('Erro ao listar veículos', err))