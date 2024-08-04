import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Product keyword={""} />} />
          <Route index path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
