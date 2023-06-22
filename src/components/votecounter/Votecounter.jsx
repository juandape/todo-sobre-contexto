import { useState } from 'react';

const VoteCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleVote = () => {
    setCounter(counter + 1);
  };


  return (
    <div>
      <button onClick={handleVote}>Vote for your candidate</button>
      <p>Votes {counter}</p>
    </div>
  );
};

export default VoteCounter;