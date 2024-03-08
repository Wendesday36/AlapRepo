
import './App.css';
import Layout from './LayOut';

import FoOldal from './pages/FoOldal';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={< FoOldal/>} />
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
