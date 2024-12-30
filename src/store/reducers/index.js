import { SET_DATA, SET_LANGUAGE, SET_THEME } from "../actions";

const initialThemeState = {
  isDarkMode: false,
};

const initialLanguageState = {
  language: "en",
};

const initialDataState = {
  data: [],
};

export const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};

export const languageReducer = (state = initialLanguageState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
