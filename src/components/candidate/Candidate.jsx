import { useDispatch } from '../../store';
import PropTypes from 'prop-types';
import './candidate.css';

const Candidate = ({ candidate }) => {
  const dispatch = useDispatch();

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

Candidate.propTypes = {
  candidate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
