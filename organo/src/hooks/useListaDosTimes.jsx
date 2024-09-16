import { useRecoilValue } from "recoil"
import { listaDeTimes } from "../states/atom"

export const useListaDosTimes = () => {

    const times = useRecoilValue(listaDeTimes);
    const itens = times.map(item => item.nome)
    const itensDaLista = itens.map(item => {
        return <option key={item}>{item}</option>
    })

    return itensDaLista
}
