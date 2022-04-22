// eslint-disable-next-line import/prefer-default-export
export const deleteUser = (id) => (dispatch) => {
  dispatch({
    type: 'DELETE_USER',
    payload: {
      id,
    },
  });
};
