const initialState = { people: [], filteredPeople: [], userNotifications: [] };

// eslint-disable-next-line default-param-last
function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PEOPLE':
      return {
        ...state,
        people: action.payload.people,
        filteredPeople: action.payload.people,
        userNotifications: action.payload.people,
      };
    case 'DELETE_USER':
      return {
        ...state,
        people: state.people.filter((person) => person.registered.date !== action.payload.id),
        // eslint-disable-next-line max-len
        filteredPeople: state.filteredPeople.filter((person) => person.registered.date !== action.payload.id),
      };
    case 'FILTER_USERS':
      return {
        ...state,
        filteredPeople: state.people.filter((person) => person.name.first.concat(' ', person.name.last).toLowerCase().includes(action.payload.value.toLowerCase())),
      };
    default:
      return state;
  }
}

export default peopleReducer;
