import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './Components/WelcomePage/Welcome';
import { Register } from './Components/RegisterPage/Register';
import { Study } from './Components/StudyPages/Study';
import { NotFound } from './Components/NotFound/NoFound';

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
