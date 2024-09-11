import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DisciplineCreate from "./pages/DisciplineCreate/DisciplineCreate";
import Home from "./pages/Home/Home";
import TeacherCreate from './pages/TeacherCreate/TeacherCreate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/discipline-create' element={<DisciplineCreate/>}/>
        <Route path='/teacher-create' element={<TeacherCreate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;