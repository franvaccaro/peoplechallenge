// eslint-disable-next-line import/prefer-default-export
export const filterUsers = (value) => (dispatch) => {
  dispatch({
    type: 'FILTER_USERS',
    payload: {
      value,
    },
  });
};
