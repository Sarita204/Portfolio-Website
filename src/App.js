import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Aboutme from './components/Aboutme';
import Myprojects from './components/Myprojects';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path='/about'
            element={
              <>
                <Header />
                <Aboutme />
              </>
            }
          />

          <Route
            path='/myprojects'
            element={
              <>
                <Header />
                <Myprojects />
              </>
            }
          />
        </Routes>

    </div>

  );
}

export default App;
