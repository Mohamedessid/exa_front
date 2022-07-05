import react from "react";
import './index.css';
import { Route, BrowserRouter as Router,Link, Routes} from "react-router-dom"
import Home from "./pages/Home";
import New from "./pages/New";
import Header from"./pages/Header";
import Pres from "./pages/Pres";
function App() {
  return (
   <div className="App">
   
     <Router>
     
        <Routes>
          <Route exact path="/" element={<><header><h1 style={{fontFamily:"poppins"}}>EXA technologie</h1>  </header> <Header/></> } />
          <Route exact path="/New" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Pres" element={<Pres />} />

        </Routes>
       
        <div className="list">
          <ul>
          <button className="btn"> <Link to="/New">Ajouter d'employer</Link></button>
          <button className=" btn btn-2"> <Link to="/">Liste D'employeurs</Link></button>
          <button className=" btn btn-2"> <Link to="/Pres">Liste de présence</Link></button>
     </ul>
        </div>
        
       
      </Router>
      
   </div>

  );
}

export default App;
