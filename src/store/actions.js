import { SET_LOADING, SET_TOTAL_VOTES, SET_VOTES } from './types';

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
}

export function setVotes(votes) {
  return {
    type: SET_TOTAL_VOTES,
    payload: votes,
  };
}

export function setVote(vote) {
  return {
    type: SET_VOTES,
    payload: vote,
  };
}
