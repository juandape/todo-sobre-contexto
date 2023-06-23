import { useVoting } from '../../store';
import { SET_RESULT_TYPE } from '../../store/actionTypes';
import './displayfilter.css';

const DisplayFilter = () => {
  const { state, dispatch } = useVoting();

  const handleChange = ({ target }) => {
    const { value } = target;
    dispatch({ type: SET_RESULT_TYPE, payload: value });
  };

  const filter = state.resultType;
  console.log(state.resultType)



  return (
    <div className='displayoptions'>
      <label htmlFor='percentage'>
        <input
          type='radio'
          value='percentage'
          id='percentage'
          name='type'
          onChange={handleChange}
          checked={filter === 'percentage'}
        />
        <span>Total %</span>
      </label>
      <label htmlFor='total'>
        <input
          type='radio'
          value='total'
          id='total'
          name='type'
          onChange={handleChange}
          checked={filter === 'total'}
        />
        <span>Total</span>
      </label>
    </div>
  );
};

export default DisplayFilter;
