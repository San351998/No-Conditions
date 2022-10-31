import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;