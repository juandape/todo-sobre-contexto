import { useVoting } from '../../store';
import './candidate.css';

const Candidate = ({ candidate }) => {
  const { dispatch } = useVoting();

  const handleVote = (id) => {
    dispatch({ type: 'SET_VOTE', payload: id });
  };

  return (
    <div className='candidate'>
      <button type='button' onClick={() => handleVote(candidate.id)}>
        {candidate.name}
      </button>
    </div>
  );
};

export default Candidate;
