import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home/Home";
import NewSubject from "./pages/NewSubject/NewSubject";
import NewTeacher from "./pages/NewTeacher/NewTeacher";
import PathRoutes from "./utils/PathRoutes.js";
import TeacherList from './pages/TeacherList/TeacherList.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PathRoutes.HOME} element={
            <Home/>
          }/>
          <Route path={PathRoutes.NEW_SUBJECT} element={
            <NewSubject/>
          }/>
          <Route path={PathRoutes.NEW_TEACHER} element={
            <NewTeacher/>
          }/>
          <Route path={PathRoutes.TEACHER_LIST} element={
            <TeacherList/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;