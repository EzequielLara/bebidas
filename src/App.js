
import Formulario from './components/Formulario';
import Header from './components/Header';
import './index.css';

function App() {
  return (
   <>
   <Header/>
   <div className = 'container mt-5'>
     <div className = 'row'>
       <Formulario/>
     </div>
   </div>
   </>
  );
}

export default App;
