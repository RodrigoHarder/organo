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

export const listaDeTimes = atom({
    key: 'listaDeTimes',
    default: [
        {
            nome: 'Programação',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9'
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF'
        },
        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2'
        },
        {
            nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8'
        },
        {
            nome: 'UX e Design',
            corPrimaria: '#DB6EBF',
            corSecundaria: '#FAE9F5'
        },
        {
            nome: 'Mobile',
            corPrimaria: '#FFBA05',
            corSecundaria: '#FFF5D9'
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF'
        }
    ]
})