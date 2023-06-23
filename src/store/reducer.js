import { SET_VOTE, SET_RESULT_TYPE } from "./actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case SET_VOTE: {
      const id = action.payload;
      const newTotalVotes = state.totalVotes + 1;
      const newCandidates = state.candidates.map((candidate) => {
        if (candidate.id === id) {
          const votes = candidate.votes + 1;
          return {
            ...candidate,
            votes,
            percentage: (votes / newTotalVotes) * 100,
          };
        } else {
          return {
            ...candidate,
            percentage: (candidate.votes / newTotalVotes) * 100,
          };
        }
      });

      return {
        ...state,
        candidates: newCandidates,
        totalVotes: newTotalVotes,
      };

    }
    case SET_RESULT_TYPE: {
     return { ...state, resultType: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;
