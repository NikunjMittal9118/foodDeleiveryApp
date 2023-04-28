import Home from './screens/Home'
import {BrowserRouter as BrowseRouter, Routes, Route} from 'react-router-dom'
import Login from './screens/Login'
import Signup from './screens/Signup'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <div className="App">
      <BrowseRouter>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
          </Routes>
      </BrowseRouter>
    </div>
  );
}

export default App;
