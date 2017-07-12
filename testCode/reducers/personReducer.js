export default function reducer(state={
    person: {
      id: null,
      name: null,
      address: null,
      company: null
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PERSON": {
        return {...state, fetching: true}
      }
      case "FETCH_PERSON_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PERSON_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          person: action.payload,
        }
      }
      case "UPDATE_PERSON": {
        return {
          ...state,
          person: {...state, person: action.payload},
        }
      }
      case "DELETE_PERSON": {
        return {
          ...state,
          person
        }
      }
    }

    return state;
}
