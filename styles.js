import {StyleSheet} from 'react-native';

const darkBlue = '#6692C1';
const mediumBlue = '#C6D2E6';
const lightBlue = '#F1F9FF';

const styles = StyleSheet.create({
  questionWrapperStyle: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    marginBottom: 50,
    padding: 30,
  },
  answerWrapperStyle: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderColor: '#fff',
    marginLeft: 30,
    marginRight: 30,
  },
  navStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginLeft: 30,
    marginRight: 30,
  },
  questionTextStyle: {
    fontSize: 24,
    color: darkBlue,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
  },
  selectedAnswerWrapperStyle: {
    backgroundColor: '#fff',
  },
  answerTextStyle: {
    fontWeight: '500',
    fontSize: 15,
    color: '#fff',
    marginLeft: 15,
  },
  selectedAnswerTextStyle: {
    color: '#000',
  },
});

module.exports = styles;
