import onlyLogo from './ONLY.png';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import RequireAuth from './components/requireAuth';
import MainPage from './pages/cities';


function App() {
  return (
    <div className="App">
        <img src={onlyLogo} alt="logo" className='App-logos'/>
        <Routes>
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              {" "}
              <MainPage />
            </RequireAuth>
          }
        />
          
      </Routes>
    </div>
  );
}

export default App;
