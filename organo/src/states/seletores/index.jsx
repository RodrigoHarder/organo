import { selector, selectorFamily } from 'recoil'
import { listaDeColaboradores } from '../atom'

export const listaDeTimes = selector({
    key: 'listaDeTimes',
    get: async () => {
        const response = await fetch('http://localhost:3000/times');
        const times = await response.json();
        return times.map((time) => ({ ...time, colaboradores: [] }));
    }
});

export const colaboradoresPorTime = selector({
    key: 'colaboradoresPorTime',
    get: ({ get }) => {
        const colaboradores = get(listaDeColaboradores);
        const times = get(listaDeTimes);

        return times.map(time => ({
            ...time,
            colaboradores: colaboradores
                .filter(colaborador => colaborador.time === time.nome)
        }));
    }
});

export const colaboradorPorNome = selectorFamily({
    key: 'colaboradorPorNome',
    get: (nome) => ({ get }) => {
        const colaboradores = get(listaDeColaboradores);
        const times = get(listaDeTimes);

        const colaborador = colaboradores.find(col => col.nome === nome);

        const time = times.find(t => t.nome === colaborador.time);

        return {
            ...colaborador,
            corDeFundo: time ? time.corPrimaria : '#fff'
        };
    }
});


