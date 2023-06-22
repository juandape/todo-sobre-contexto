import { useEffect, useState } from 'react';
import { getCandidates } from '../../services/candidates';
import { useDispatch, useSelector } from '../../store';
import { setLoading } from '../../store/actions';
import VoteCounter from '../votecounter/Votecounter';

const Candidates = () => {
  const dispatch = useDispatch();
  const state = useSelector();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        dispatch(setLoading(true));
        const candidates = await getCandidates();
        setCandidates(candidates);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchCandidates();
  }, []);

  return (
    <div>
      <h1>Candidates</h1>
      {state.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id}>
              <p>{candidate.name}</p>
              <VoteCounter />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Candidates;
