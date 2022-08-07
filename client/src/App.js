import './App.css';
import RecordsTable from './components/RecordsTable/RecordsTable';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {

  return (
    <>
      <div className="App">
        Hello from my app
      </div>
      <RecordsTable></RecordsTable>
    </>

  );
}

export default App;
