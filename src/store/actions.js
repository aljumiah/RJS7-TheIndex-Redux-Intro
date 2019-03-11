const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const addAuthor = () => {
  let newAuthor = {
    id: 5,
    first_name: "Author",
    last_name: "McAuthorFace",
    imageUrl:
      "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
    books: [
      {
        title: "Anonymous book",
        color: "mysterious color"
      }
    ]
  };
  // this.setState({
  //   authors: this.state.authors.concat(newAuthor),
  //   newAuthorId: this.state.newAuthorId + 1
  // });

  return {
    type: ADD_AUTHOR,
    payload: newAuthor
  };
};

export const deleteAuthor = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
