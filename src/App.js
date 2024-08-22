import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DisciplineCreate from "./pages/DisciplineCreate"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element='' />
          <Route path='/discipçine-create' element={<DisciplineCreate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
