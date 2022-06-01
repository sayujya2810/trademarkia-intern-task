import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import InvoiceGenerator from './pages/InvoiceGenerator';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {


const [invoiceList, setInvoiceList] = useState([])
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/invoice" element={<InvoiceGenerator />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Home  /> */}
      {/* <InvoiceGenerator /> */}
    </div>
  );
}

export default App;
