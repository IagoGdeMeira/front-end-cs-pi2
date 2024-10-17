import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DisciplineCreate from "./pages/DisciplineCreate/DisciplineCreate";
import Home from "./pages/Home/Home";
import TeacherCreate from './pages/TeacherCreate/TeacherCreate';
import TeacherList from './pages/TeacherList/TeacherList';
import DisciplineDetails from './components/DisciplineDetails/DisciplineDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/discipline-create' element={<DisciplineCreate/>}/>
          <Route path='/teacher-create' element={<TeacherCreate/>}/>
          <Route path='/teste' element={<DisciplineDetails/>}/>
          <Route path='/teacher-list' element={<TeacherList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;