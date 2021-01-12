import "@testing-library/jest-dom";
import { renderHook, act } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import { useStateVote } from "../../hooks/useStateVote";

describe('Testing hook useStateVote', ()=> {

  const stateInitial = {
    id: 1,
    like: 20,
    unlike: 2,
    selectedOption: '',
    voted: false,
  }

  test('should return default values', () => {
    const { result } = renderHook( () => useStateVote(stateInitial) );

    expect( result.current.stateVote.like ).toBe(20);
    expect( typeof result.current.handleVote ).toBe('function');
    expect( typeof result.current.handleVoteAgain ).toBe('function');
    expect( typeof result.current.handleOption ).toBe('function');
  });

  test('should option selected', () => {
    const { result } = renderHook( () => useStateVote(stateInitial) );
    const { handleOption } = result.current;
    act( () => {
      handleOption('like');
    });
    const { selectedOption } = result.current.stateVote;
    expect( selectedOption ).toBe('like');
    expect( typeof selectedOption ).toBe('string');
  });

  test('should restore config voting', () => {
    const { result } = renderHook( () => useStateVote(stateInitial) );
    const { handleOption, handleVoteAgain } = result.current;
    act( () => {
      handleOption('like');
      handleVoteAgain();
    });
    const { selectedOption } = result.current.stateVote;
    expect( selectedOption ).toBe('');
    expect( typeof selectedOption ).toBe('string');
  });
});