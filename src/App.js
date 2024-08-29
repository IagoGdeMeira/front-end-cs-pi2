import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DisciplineCreate from "./pages/DisciplineCreate/DisciplineCreate";
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/discipline-create' element={<DisciplineCreate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
