import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import StyleConstants from '../../StyleConstants';
import styles from '../../styles';

import {scheduleNotification} from '../../controllers/feed/notificationLogic';

import Button from '../../components/buttons/Button';
import TimeListItem from '../../components/reminders/TimeListItem';
import AddReminderBtn from '../../components/reminders/AddReminderBtn';

const ScheduleReminder = props => {
  const [reminders, setReminders] = useState([
    {time: '08:15', id: '4562qsdd'},
    {time: '15:30', id: '4562d'},
  ]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    //console.log(props.navigation.state.params.adviesTitle);
  });

  const sortTimes = times => {
    return times.sort((a, b) => {
      let intA = a.time.split('').filter(val => {
        return val !== ':';
      });
      let intB = b.time.split('').filter(val => {
        return val !== ':';
      });
      return intA < intB ? -1 : 1;
    });
  };

  const setDate = val => {
    setVisible(false);
    let hours = new Date(val)
      .getHours()
      .toString()
      .padStart(2, '0');
    let mins = new Date(val)
      .getMinutes()
      .toString()
      .padStart(2, '0');
    let time = hours + ':' + mins;
    let timeObj = {
      time,
      id: new Date(val).getTime(),
    };
    let newReminders = [...reminders, timeObj];
    let sortedReminders = sortTimes(newReminders);
    setReminders(sortedReminders);
    //scheduleNotification(new Date(val));
  };

  const renderTimePicker = () => {
    return (
      <DateTimePicker
        mode="time"
        locale="en_GB"
        date={new Date()}
        timePickerModeAndroid="clock"
        is24Hour={true}
        isVisible={visible}
        onConfirm={setDate}
        onCancel={() => {
          setVisible(false);
        }}
        hideTitleContainerIOS={true}
        confirmTextIOS={'Aanmaken'}
        cancelTextIOS={'Annuleren'}
      />
    );
  };

  const removeReminder = id => {
    let newReminders = reminders.filter(val => {
      return val.id !== id;
    });

    setReminders(newReminders);
  };

  const renderAddReminder = () => {
    return (
      <AddReminderBtn
        onPress={() => {
          setVisible(true);
        }}></AddReminderBtn>
    );
  };

  const renderReminders = ({item, index}) => {
    return (
      <TimeListItem
        onPress={() => {
          removeReminder(item.id);
        }}
        text={item.time}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={reminderStyle.textContainer}>
        <Text
          style={[
            styles.title,
            {color: StyleConstants.colors.black.fontBlack},
          ]}>
          Herinnering instellen
        </Text>
        <Text style={styles.normalText}>
          Laat je dagelijk herinneren aan deze activiteit op (een) tijdstip(pen)
          dat voor jou past!
        </Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={reminders}
          renderItem={renderReminders}
          keyExtractor={item => item.id}
          ListFooterComponent={renderAddReminder}
        />
      </View>
      {renderTimePicker()}
    </View>
  );
};

const reminderStyle = StyleSheet.create({
  textContainer: {
    alignSelf: 'stretch',
    margin: StyleConstants.margins.medium,
  },
});

export default ScheduleReminder;
