export const ACTION_TYPES = {
  SET_ISS_LOCATION: "SET_ISS_LOCATION",
  SET_LIST_ASTORNAUT: "SET_LIST_ASTORNAUT",
  SET_ERROR_ISS_LOCATION: "SET_ERROR_ISS_LOCATION",
  SET_ERROR_LIST_ASTORNAUT: "SET_ERROR_LIST_ASTORNAUT",
};


const setErrorISSlocation = error => ({
  type: ACTION_TYPES.SET_ERROR_ISS_LOCATION,
  payload: error
});

const setErrorListAstronaut = error => ({
  type: ACTION_TYPES.SET_ERROR_LIST_ASTORNAUT,
  payload: error
});

const setISSlocation = ISSlocation => ({
  type: ACTION_TYPES.SET_ISS_LOCATION,
  payload: ISSlocation
});

const setListAstronaut = listAstronaut => ({
  type: ACTION_TYPES.SET_LIST_ASTORNAUT,
  payload: listAstronaut
});

export const loadData = (type, url) => dispatch => {
  fetch(url, {
    method: "GET"
  })
    .then(res => res.json())
    .then(data => {
      switch (type) {
        case "ISSlocation":
          dispatch(setISSlocation(data));
          break;

        case "listAstronaut":
          dispatch(setListAstronaut(data));
          break;

        default:
          break;
      }
    })
    .catch(error => {
      switch (type) {
        case "ISSlocation":
          dispatch(setErrorISSlocation(error));
          break;

        case "listAstronaut":
          dispatch(setErrorListAstronaut(error));
          break;

        default:
          break;
      }
    });
};
