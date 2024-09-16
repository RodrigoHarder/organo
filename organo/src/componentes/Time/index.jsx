import { useColaboradorPorTime } from '../../hooks/useColaboradorPorTime';
import './Time.css';

export default function Time({ nome }) {
    const {time, colaboradores} = useColaboradorPorTime(nome);
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

