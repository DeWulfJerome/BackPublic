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

export const processAnswer = (lastQuestion, question, answer) => {
  return new Promise((resolve, reject) => {
    answer = question.answers[answer];
    question = question.question;
    let setLastQuestion = setLastAnsweredQuestion(lastQuestion);
    let answeredQuestion = answerQuestionMongo(question, answer);
    Promise.all([setLastQuestion, answeredQuestion])
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const answerQuestionMongo = (question, answer) => {
  return axios.post(serverUrl + '/back-up-plan/v1/question_answered', {
    questionAnswered: question,
    answer: answer,
  });
};

export const stopUser = (question, navigation) => {
  if (question.question === 'STOP') {
    // Send to refund screen
    navigation.navigate('StopScreen');
  }
};
