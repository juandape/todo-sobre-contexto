import Candidate from '../candidate/Candidate';
import { useSelector } from '../../store';
import './candidates.css';

const Candidates = () => {
  const state = useSelector();

  return (
    <>
      <h2>Candidates</h2>
      <div className='candidates'>
        {state.candidates.map((candidate) => (
          <Candidate key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </>
  );
};

export default Candidates;
