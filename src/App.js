import './App.css';
import ApiHandle from './components/ApiHandle/ApiHandle';
import ShowTeam from './components/ShowTeam/ShowTeam';
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes> 
          <Route path="/" element={<ApiHandle />} />
          <Route path="/team" element={<ShowTeam />} />
        </Routes>
      </header>
     </div>
  );
}

export default App;
