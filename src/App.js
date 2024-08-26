import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateTeacher from './pages/createTeacher/CreateTeacher';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element='' />
          <Route path='/create_teacher' element={<CreateTeacher/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
