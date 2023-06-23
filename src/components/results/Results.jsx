import { useVoting } from '../../store';
import './results.css';

const Results = () => {
  const { state } = useVoting();

  return (
    <>
      <h2>Results</h2>
      <div className='results'>
        {state.candidates.map((candidate) => (
          <div key={candidate.id}>
            <div className='results--label'>{candidate.name}</div>
            <div className='results--value'>
              {state.resultType === 'percentage'
                ? `${candidate.percentage.toFixed(0)}%`
                : candidate.votes}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Results;
