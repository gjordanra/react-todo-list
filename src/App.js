import './App.css';
import Logocomponente from './componentes/logocomponente';
import Task from './componentes/Task';
import Formtarea from './componentes/Formcomponent'


function App() {
  return (
    <div className="todoapp">
      < Logocomponente />
      <div className='tareas-lista-principal'>
        <h1>My Tasks</h1>
        < Formtarea />
        < Task text ='Learn React'/>
      </div>
    </div>
  );
}

export default App;
