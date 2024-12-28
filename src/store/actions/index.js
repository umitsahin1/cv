import axios from "axios";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_DATA = "SET_DATA";

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get("https://reqres.in/api/workintech")
      .then((response) => {
        dispatch(setData(response.data.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};
