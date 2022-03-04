 import {
  CREATE_APPLICANT_DATA,
  RETRIEVE_LANDINGPAGE,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "../actions/types";

const initialState = {

};
function landingPagesReducer(landingPage = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_APPLICANT_DATA:
      return [...landingPage, payload];
    case RETRIEVE_LANDINGPAGE:
      return payload;
    case UPDATE_TUTORIAL:
      return landingPage.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });
    case DELETE_TUTORIAL:
      return landingPage.filter(({ id }) => id !== payload.id);
    case DELETE_ALL_TUTORIALS:
      return [];
    default:
      return landingPage;
  }
};
export default landingPagesReducer;
