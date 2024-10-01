import { useRecoilValue } from 'recoil';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { listaDeTimes } from './states/seletores';
import Time from './componentes/Time';

function App() {

  const times = useRecoilValue(listaDeTimes);
  const timesNaTela = times.map((time) =>
    <Time
      key={time.nome}
      nome={time.nome}
    />)


  return (
    <div className="App">
      <Banner />
      <Formulario />
      {timesNaTela}
    </div>
  );
}

export default App;
