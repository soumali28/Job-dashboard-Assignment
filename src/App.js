import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Jobs />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
