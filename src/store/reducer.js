import { SET_LOADING, SET_VOTES, SET_TOTAL_VOTES } from './types';

function reducer(state, action) {
  switch (action.type) {
    case SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_VOTES: {
      const newVote = action.payload;
      const newVotes = [...state.votes, newVote];
      const total = newVotes.reduce((acc, vote) => acc + vote, 0);
      return { ...state, votes: newVotes, total };
    }
    case SET_TOTAL_VOTES: {
      const newTotalVotes = action.payload;
      const newTotal = [...state.votes, newTotalVotes];
      const total = newTotalVotes.reduce((acc, vote) => acc + vote, 0);
      return { ...state, newTotal: newTotal, total };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;
