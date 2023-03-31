import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Item from './components/Item';
import Pokedex from './pages/Pokedex';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={ <Home/> } />

          {/** RUTAS PROTEGIDAS **/}
          <Route element={ <ProtectedRoutes/> } >
            <Route path='/pokedex' element={ <Pokedex/> } />
            <Route path='/pokedex/:id' element={ <Item/> } />
          </Route> 
          {/** RUTAS PROTEGIDAS END**/}

        </Routes>
      </div>
      </HashRouter>
      
  )
}

export default App
