// eslint-disable-next-line import/prefer-default-export
export const getPeople = () => (dispatch) => {
  fetch('https://randomuser.me/api/?page=1&results=10&seed=abc')
    .then((res) => res.json())
    .then(
      (result) => {
        // eslint-disable-next-line no-unused-expressions
        dispatch({
          type: 'GET_PEOPLE',
          payload: {
            people: result.results,
          },
        }) && dispatch({
          type: 'SET_LOADER',
          payload: {
            loader: true,
          },
        });
      },
    );
};
