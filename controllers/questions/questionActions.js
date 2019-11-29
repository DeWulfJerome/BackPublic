import axios from 'axios';

export const getNextQuestions = () => {
  return axios.get(serverUrl + '/back-up-plan/v1/get_next_questions');
};

const setLastAnsweredQuestion = lastQuestion => {
  return axios.post(serverUrl + '/back-up-plan/v1/set_last_answered_question', {
    lastQuestion: lastQuestion,
  });
};

export const generateFakeQuestions = amount => {
  let questions = [];
  for (let i = 0; i < amount; i++) {
    let question = {
      question:
        'Ben je reeds bij een chiropractor of arts geweest om een pathologische oorzaak uit te sluiten?',
      answers: ['Ja', 'Nee'],
      id: i + 1,
    };
    questions.push(question);
  }

  return questions;
};

export const substituteFakeForRealQuestion = (
  fakeQuestions,
  realQuestion,
  index,
) => {
  // Copy fakequestions (not by reference)
  let alteredQuestions = JSON.parse(JSON.stringify(fakeQuestions));
  alteredQuestions[index] = realQuestion;
  return alteredQuestions;
};

export const processAnswer = lastQuestion => {
  return new Promise((resolve, reject) => {
    let setLastQuestion = setLastAnsweredQuestion(lastQuestion);
    Promise.all([setLastQuestion])
      .then(result => {
        resolve(result[0]);
      })
      .catch(err => {
        reject(err);
      });
  });
};
