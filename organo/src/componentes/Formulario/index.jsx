import { useSalvarColaboradores } from '../../hooks/useSalvarColaboradores'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export default function Formulario () {

    const aoSalvar = useSalvarColaboradores()

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto campo="nome"/>
                <CampoTexto campo="cargo"/>
                <CampoTexto campo="imagem"/>
                <ListaSuspensa campo="time"/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}