import { useState } from "react";

export const useStateVote = (initialState) => {

  const [stateVote, setstate] = useState({
    id: initialState.id,
    like: initialState.like,
    unlike: initialState.unlike,
    selectedOption: '',
    voted: false,
  });

  const { like, unlike } = stateVote;

  const handleVote = () => {
    let tempLi = (stateVote.selectedOption === 'like') ? (like + 1) : like;
    let tempUnLi = (stateVote.selectedOption === 'unlike') ? (unlike + 1) : unlike;
    const getDataStore = JSON.parse(localStorage.getItem('dataVotes'));
    const newDataStore = getDataStore.map((d) => {
      if (d.id === initialState.id) {
        return {
          ...d,
          like: tempLi,
          unlike: tempUnLi,
        }
      }
      return d;
    });
    localStorage.setItem('dataVotes', JSON.stringify(newDataStore));

    setstate((v) => {
      return {
        ...v,
        like: tempLi,
        unlike: tempUnLi,
        voted: true,
      }
    });
  }

  const handleOption = (value) => {
    setstate((v) => {
      return {
        ...v,
        selectedOption: value,
      }
    });
  }

  const handleVoteAgain = () => {
    setstate((v) => {
      return {
        ...v,
        selectedOption: '',
        voted: false,
      }
    });
  }

  return {
    stateVote,
    handleVote,
    handleVoteAgain,
    handleOption,
  }
}

