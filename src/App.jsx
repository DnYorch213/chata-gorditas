import { Routes, Route } from "react-router-dom";

import Heading from "./components/Heading";
import NuevoPedido from "./components/NuevoPedido";
import "./index.css";



function App() {
  

  return (
    <div >
      
    <div >
    
      
      <Heading />
        
      <Routes>
        {/* <Route path="/" element={<TaskList />} exact /> */}
        <Route path="/Add" element={<NuevoPedido />} />
        {/* <Route path="/edit/:id" element={<TaskForm />} /> */}
      </Routes>
           
    </div>
  </div>
  );
}

export default App
