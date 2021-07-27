
import Formulario from './components/Formulario';
import Header from './components/Header';
import './index.css';
import CategoriasProvider from './context/CategoriasContex';

function App() {
  return (
  
    <CategoriasProvider>
      <Header/>
      <div className = 'container mt-5'>
        <div className = 'row'>
          <Formulario/>
        </div>
      </div>
    </CategoriasProvider>
    
  
  );
}

export default App;
