import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useExibirTimesNaTela } from './hooks/useExibirTimesNaTela';

function App() {

  const timesNaTela = useExibirTimesNaTela();

  return (
    <div className="App">
      <Banner />
      <Formulario/>
      {timesNaTela}
    </div>
  );
}

export default App;
