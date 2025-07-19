let usuario = {
    nome: 'Roberto',
    excluir: function() {
        console.log('O usúario, ' + this.nome + 'foi excluido!')
    }
}

usuario.excluir()