//Importing the workings of react-router-dom
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";

//Importing the pages
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

//Importing the stylesheet
import "./style.scss"

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
