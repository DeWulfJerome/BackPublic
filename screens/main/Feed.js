import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import StyleConstants from '../../StyleConstants';

import {getAllAdviezen, setAdviezen} from '../../controllers/feed/feedActions';

import FAB from '../../components/buttons/FAB';
import FeedList from '../../Views/feed/FeedList';

import QuestionnaireTemp from '../QuestionnaireTemp';

class Feed extends React.Component {
  componentDidMount = () => {
    getAllAdviezen()
      .then(response => {
        // Hydrate store
        this.props.dispatch(setAdviezen(response.data));
      })
      .catch(err => {
        alert('Something went wrong');
        console.log(err);
      });
  };

  render() {
    return (
      <View
        style={{
          flex: 1 /* backgroundColor: StyleConstants.colors.blue.dark */,
        }}>
        <FeedList navProps={this.props.navigation}></FeedList>
        <View
          style={{
            position: 'absolute',
            bottom: 120,
            right: StyleConstants.margins.medium,
            zIndex: 9999999,
          }}>
          <FAB
            onPress={() => {
              this.props.navigation.navigate('AllActivities');
            }}></FAB>
        </View>
        {/* <QuestionnaireTemp></QuestionnaireTemp> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    adviezen: state.feedReducer.adviezen,
  };
};

export default connect(mapStateToProps)(Feed);
