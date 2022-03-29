 import {
  CREATE_APPLICANT_DATA,
  RETRIEVE_LANDINGPAGE,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS
} from "./types";
import LandingPagesDataService from "../services/landingpages.service";
export const createApplicantData = (formData) => async (dispatch) => {
  try {
    const res = await LandingPagesDataService.create(formData);
    dispatch({
      type: CREATE_APPLICANT_DATA,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveLandingPage = (path, publisher) => async (dispatch) => {
  try {
    const res = await LandingPagesDataService.getLandingPage(path, publisher);
    dispatch({
      type: RETRIEVE_LANDINGPAGE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await LandingPagesDataService.update(id, data);
    dispatch({
      type: UPDATE_TUTORIAL,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const deleteTutorial = (id) => async (dispatch) => {
  try {
    await LandingPagesDataService.delete(id);
    dispatch({
      type: DELETE_TUTORIAL,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteAllTutorials = () => async (dispatch) => {
  try {
    const res = await LandingPagesDataService.deleteAll();
    dispatch({
      type: DELETE_ALL_TUTORIALS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
