import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';
import styles from '../../styles';

import {getAdditionalQuestionsAmount} from '../../controllers/feed/feedActions';

import Button from '../../components/buttons/Button';

const NoInactiveAdvices = props => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={noStyle.wrapperStyle}>
      <Text style={[styles.title, noStyle.title]}>Geen adviezen</Text>
      <Text style={[styles.subTitle, noStyle.subTitle]}>
        Beantwoord nog enkele vragen om gepersonaliseerd advies te krijgen.
      </Text>
      <View style={noStyle.btnWrapper}>
        <Button
          loading={loading}
          onPress={async () => {
            setLoading(true);
            let numbQuestions = await getAdditionalQuestionsAmount();
            setLoading(false);
            props.navProps.navigate('Questions', {
              numbQuestions: numbQuestions.data,
            });
          }}
          text={'Vragen beantwoorden'}
          filled={true}></Button>
      </View>
    </View>
  );
};

const noStyle = StyleSheet.create({
  wrapperStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: StyleConstants.padding.medium,
  },
  btnWrapper: {
    marginTop: StyleConstants.margins.medium,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: StyleConstants.font.sizes.mediumLarge,
  },
  subTitle: {
    marginTop: StyleConstants.margins.small,
  },
});

export default NoInactiveAdvices;
