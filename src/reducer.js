import authors from "./data";

const initialState = {
  authors: authors,
  newAuthorId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        newAuthorId: state.newAuthorId + 1
      };
  }
  return state;
};

export default reducer;