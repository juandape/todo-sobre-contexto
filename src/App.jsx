import './App.css';
import Results from './components/Results/Results';
import Candidates from './components/candidates/Candidates';
import DisplayFilter from './components/displayfilter/Displayfilter';
import TotalVotes from './components/totalvotes/Totalvotes';


function App() {
  return (
    <div>
      <Candidates />
      <DisplayFilter />
      <Results />
      <TotalVotes />
    </div>
  );
}

export default App;
