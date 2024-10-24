import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import DisciplineCreate from "./pages/DisciplineCreate/DisciplineCreate";
import DisciplineDetails from './components/DisciplineDetails/DisciplineDetails';
import Home from "./pages/Home/Home";
import NewTeacher from './pages/NewTeacher/NewTeacher';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/discipline-create' element={<DisciplineCreate/>}/>
          <Route path='/new-teacher' element={<NewTeacher/>}/>
          <Route path='/teste' element={<DisciplineDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;