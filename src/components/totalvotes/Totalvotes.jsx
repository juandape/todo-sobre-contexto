import { useVoting } from '../../store';
import './totalvotes.css';

const TotalVotes = () => {
  const { state } = useVoting();

  return (
    <>
      <h2>Total Votes</h2>
      <div className='total-votes'>
        <p>{state.totalVotes}</p>
      </div>
    </>
  );
};
export default TotalVotes;
