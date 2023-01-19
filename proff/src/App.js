import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './WelcomePage/Welcome';
import { Register} from './RegisterPage/Register'
import {Study} from './StudyPages/Study'
import { NotFound } from './NotFound/NotFound';

function App() {

  return (
    <BrowserRouter>
      <div>
      
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/register' element={<Register />} />
            <Route path='/study' element={<Study />} />
            <Route path='*' element={<NotFound />} /> 
          </Routes>


      </div>
    </ BrowserRouter >
  );
}

export default App;
