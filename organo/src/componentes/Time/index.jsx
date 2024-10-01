import { useRecoilValue } from 'recoil';
import './Time.css';
import Colaborador from '../Colaborador';
import { colaboradoresPorTime } from '../../states/seletores';

export default function Time({ nome }) {

    const timesComColaboradores = useRecoilValue(colaboradoresPorTime);
    const time = timesComColaboradores.find(t => t.nome === nome);

    const colaboradores = time.colaboradores.map(colaborador => (
        <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
        />
    ));

    const css = { backgroundColor: time.corSecundaria };

    return (
        (time.colaboradores.length > 0) ? (
            <section
                className='time'
                style={css}
            >
                <h3 style={{ borderColor: time.corPrimaria }}>
                    {time.nome}
                </h3>
                <div className='colaboradores'>
                    {colaboradores}
                </div>
            </section>
        ) : ''
    );
}
