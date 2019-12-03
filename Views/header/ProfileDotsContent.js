import React from 'react';
import {View} from 'react-native';

import Copy from '../../assets/Copy';

import {unsetJWTToken} from '../../controllers/auth/auth';

import HeaderDotsContent from './HeaderDotsContent';

const ProfileDotsContent = props => {
  const logout = () => {
    let unsetToken = unsetJWTToken();
    unsetToken.then(() => {
      props.navProps.navigate('Login');
    });
  };

  return (
    <View>
      <HeaderDotsContent
        text={Copy.NL.profile.settings}
        onPress={() => {
          props.navProps.navigate('Settings');
        }}></HeaderDotsContent>
      <HeaderDotsContent
        text={Copy.NL.profile.logout}
        onPress={logout}></HeaderDotsContent>
    </View>
  );
};

export default ProfileDotsContent;
