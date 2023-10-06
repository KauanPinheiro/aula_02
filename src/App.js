
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import TestList from './components/TestList/TestList';
import ExercicioLista from './components/ExercicioLista/ExercicioLista';
/*import ModeloComp from './components/ModeloComp/ModeloComp';*/
function App() {
  return (
    <div className="App">
          <Header/> 
        <Main/> 
        <Footer/>   
        {/*<ModeloComp titulo=" O MELHOR POKÉMON " 
              paragrafo="Gengar é muito travesso e, às vezes, malicioso. Ele gosta de fazer piadas e lançar maldições"/>*/}
        {/*<TestList/>*/}
        {/* <ExercicioLista/>*/}
    </div>
  );
}

export default App;
