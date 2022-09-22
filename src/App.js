import './App.css';
import Logocomponente from './componentes/logocomponente';
import Task from './componentes/Task';


function App() {
  return (
    <div className="todoapp">
      < Logocomponente />
      <div className='tareas-lista-principal'>
        <h1>My Tasks</h1>
        < Task />
      </div>
    </div>
  );
}

export default App;
