import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './WelcomePage/Welcome';
// import { NotFound } from './noauth/NoFoundPage/NotFound';

function App() {

  return (
    <BrowserRouter>
      <div>
      
          <Routes>
            <Route path='/' element={<Welcome />} />
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>


      </div>
    </ BrowserRouter >
  );
}

export default App;
