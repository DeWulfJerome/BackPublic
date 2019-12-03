import axios from 'axios';

export const getAllAdviezen = () => {
  return axios.get(serverUrl + '/back-up-plan/v1/get_user_adviezen');
};

export const getActiveAdviezen = allAdviezen => {
  return allAdviezen
    .filter(advies => {
      return advies.active;
    })
    .sort((a, b) => {
      if (a.doneToday) {
        return 1;
      } else {
        return -1;
      }
    });
};

export const getInactiveAdviezen = allAdviezen => {
  return allAdviezen.filter(advies => {
    return !advies.active;
  });
};

export const setAdviezen = adviezen => {
  return {
    type: 'SET_ADVIEZEN',
    payload: adviezen,
  };
};

/**
 * Update the advies activity in mongo
 *
 * @param {int} id The advies id
 * @param {boolean} bool Sets the activity to active or inactive
 *
 * @return {Promise} returns a promise that returns the number of posts that were updated (should be one)
 */
const setAdviesActivityMongo = (id, bool) => {
  return axios.post(serverUrl + '/back-up-plan/v1/set_advies_activity', {
    adviesId: id,
    active: bool,
  });
};

/**
 * Toggle advies activity in our Redux store
 *
 * @param {int} adviesId The advies id
 *
 * @return {void}
 */
const toggleAdviesActivityRedux = adviesId => {
  return (dispatch, state) => {
    const store = state();
    // Find index advies to update
    const updateAdviesIndex = store.feedReducer.adviezen.findIndex(element => {
      return element.id === adviesId;
    });

    // Create new array
    const updatedAdviezen = [...store.feedReducer.adviezen];

    // Change activity on specific advies
    updatedAdviezen[updateAdviesIndex] = {
      ...updatedAdviezen[updateAdviesIndex],
      active: !updatedAdviezen[updateAdviesIndex].active,
    };

    // Update store
    dispatch({
      type: 'SET_ADVIEZEN',
      payload: updatedAdviezen,
    });
  };
};

export const setAdviesActivity = (adviesId, bool, dispatch) => {
  return new Promise((resolve, reject) => {
    // Set to active in mongo
    setAdviesActivityMongo(adviesId, bool)
      .then(response => {
        // Only one field should be updated in mongo
        if (response.data === 1) {
          dispatch(toggleAdviesActivityRedux(adviesId));
          resolve();
        } else {
          reject('No fields were updated: ', response.data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * Update the advies activity in mongo
 *
 * @param {int} id The advies id
 * @param {boolean} bool Sets the activity to active or inactive
 *
 * @return {Promise} returns a promise that returns the number of posts that were updated (should be one)
 */
const setAdviesDoneMongo = (id, bool) => {
  return axios.post(serverUrl + '/back-up-plan/v1/set_advies_doneToday', {
    adviesId: id,
    doneToday: bool,
  });
};

toggleAdviesDoneRedux;

/**
 * Toggle advies donToday in our Redux store
 *
 * @param {int} adviesId The advies id
 *
 * @return {void}
 */
const toggleAdviesDoneRedux = adviesId => {
  return (dispatch, state) => {
    const store = state();
    // Find index advies to update
    const updateAdviesIndex = store.feedReducer.adviezen.findIndex(element => {
      return element.id === adviesId;
    });

    // Create new array
    const updatedAdviezen = [...store.feedReducer.adviezen];

    // Change activity on specific advies
    updatedAdviezen[updateAdviesIndex] = {
      ...updatedAdviezen[updateAdviesIndex],
      doneToday: !updatedAdviezen[updateAdviesIndex].doneToday,
    };

    // Update store
    dispatch({
      type: 'SET_ADVIEZEN',
      payload: updatedAdviezen,
    });
  };
};

export const setAdviesDoneToday = (adviesId, bool, dispatch) => {
  return new Promise((resolve, reject) => {
    // Set to done in mongo
    setAdviesDoneMongo(adviesId, bool)
      .then(response => {
        // Only one field should be updated
        if (response.data === 1) {
          dispatch(toggleAdviesDoneRedux(adviesId));
          resolve();
        } else {
          reject('No fields were updated: ', response.data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const resetAdviezen = () => {
  return axios.get(serverUrl + '/back-up-plan/v1/check_day_passed');
};

export const getAdditionalQuestionsAmount = () => {
  return axios.get(
    serverUrl + '/back-up-plan/v1/get_additional_questions_amount',
  );
};
