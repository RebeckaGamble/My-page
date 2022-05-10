import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Numbers from './pages/Numbers';
import Weather from './pages/Weather';
import SignUp from './components/signup/SignUp';
import Calculator from './pages/Calculator';
import TodoList from './components/TodoList';
import SignIn from './pages/SignIn'
import Footer from './components/footer/footer'


function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} >
      </Route>
      <Route path="/Numbers" element={<Numbers />} >
      </Route>
      <Route path="/Calculator" element={<Calculator />} >
      </Route>
      <Route path="/Weather" element={<Weather />} >
      </Route>
      <Route path="/SignUp" element={<SignUp />} >
      </Route>
      <Route path="/TodoList" element={<TodoList />} >
      </Route>
      <Route path="/SignIn" element={<SignIn />} >
      </Route>
     </Routes>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
