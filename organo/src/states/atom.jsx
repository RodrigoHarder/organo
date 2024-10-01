import { atom } from "recoil";

export const listaDeColaboradores = atom({
    key: 'listaDeColaboradores',
    default: []
})

export const camposDoFormulario = atom({
    key: 'camposDoFormulario',
    default: {
        nome: '',
        cargo: '',
        imagem: '',
        time: ''
    }
})

export const camposObrigatorios = atom({
    key: 'camposObrigatorios',
    default: true
})

export const identificacaoDosCampos = atom({
    key: 'identificacaoDosCampos',
    default: {
        nome: { label: 'Nome', placeholder: 'Digite o nome completo' },
        cargo: { label: 'Cargo', placeholder: 'Digite a cargo' },
        imagem: { label: 'Imagem', placeholder: 'Insira o URL da imagem' },
        time: { label: 'Time', placeholder: '' }
    }
})