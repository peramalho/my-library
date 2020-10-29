import reducer, { Types } from './reducer';

describe('Reducer', () => {
  it('handles actions of unknown type', () => {
    const action = {
      type: 'RANDOM_WORD',
    };

    const newState = reducer({}, action);
    expect(newState).toEqual({});
  });

  it('handles actions with ADD_BOOK type', () => {
    const book = { id: 1234, title: 'test' };
    const action = {
      type: Types.ADD_BOOK,
      payload: book,
    };

    const newState = reducer({ books: [] }, action);
    expect(newState.books).toEqual([book]);
  });

  it('handles actions with REMOVE_BOOK type', () => {
    const book = { id: 1234, title: 'test' };
    const action = {
      type: Types.REMOVE_BOOK,
      payload: 1234,
    };

    const newState = reducer({ books: [book] }, action);
    expect(newState.books).toEqual([]);
  });
});
