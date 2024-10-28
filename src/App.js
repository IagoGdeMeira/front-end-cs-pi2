import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home/Home";
import NewDiscipline from "./pages/NewDiscipline/NewDiscipline.jsx";
import NewTeacher from "./pages/NewTeacher/NewTeacher";
import PathRoutes from "./utils/PathRoutes.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PathRoutes.HOME} element={
            <Home/>
          }/>
          <Route path={PathRoutes.NEW_DISCIPLINE} element={
            <NewDiscipline/>
          }/>
          <Route path={PathRoutes.NEW_TEACHER} element={
            <NewTeacher/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;