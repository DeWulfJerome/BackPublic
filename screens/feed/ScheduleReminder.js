import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import StyleConstants from '../../StyleConstants';
import styles from '../../styles';

import {
  scheduleNotification,
  cancelNotification,
  setReminderDatabase,
  getRemindersDatabase,
  removeReminderDatabase,
} from '../../controllers/feed/notificationLogic';

import TimeListItem from '../../components/reminders/TimeListItem';
import AddReminderBtn from '../../components/reminders/AddReminderBtn';

const ScheduleReminder = props => {
  const [reminders, setReminders] = useState([]);
  const [visible, setVisible] = useState(false);
  const [getFirstReminders, setGetFirstReminders] = useState(false);

  useEffect(() => {
    // Get reminders from database
    if (!getFirstReminders) {
      getReminders();
    }
  });

  const getReminders = () => {
    let reminders = getRemindersDatabase(props.navigation.state.params.id);
    reminders.then(rem => {
      let sortedReminders = sortTimes(rem.data);
      setReminders(sortedReminders);
      setGetFirstReminders(true);
    });
  };

  const sortTimes = times => {
    return times.sort((a, b) => {
      let intA = a.timeString.split('').filter(val => {
        return val !== ':';
      });
      let intB = b.timeString.split('').filter(val => {
        return val !== ':';
      });
      return intA < intB ? -1 : 1;
    });
  };

  const setDate = val => {
    setVisible(false);
    let timeString = generateTimeString(val);
    let reminderId =
      props.navigation.state.params.id + '-' + new Date(val).getTime();
    let timeObj = {
      timeString,
      reminderId,
    };
    // Store reminder
    let reminderStored = setReminderDatabase(
      timeString,
      reminderId,
      props.navigation.state.params.id,
    );
    reminderStored.then(response => {
      // Sort and show reminders
      scheduleNotification(
        new Date(val),
        reminderId,
        props.navigation.state.params.adviesTitle,
        'Tijd om aan je rug te werken!',
        'day',
      );
      let newReminders = [...reminders, timeObj];
      let sortedReminders = sortTimes(newReminders);
      setReminders(sortedReminders);
    });
  };

  const generateTimeString = time => {
    let hours = new Date(time)
      .getHours()
      .toString()
      .padStart(2, '0');
    let mins = new Date(time)
      .getMinutes()
      .toString()
      .padStart(2, '0');
    return hours + ':' + mins;
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
    removeReminderDatabase(id).then(response => {
      if (response.data == 1) {
        cancelNotification(id);
        let newReminders = reminders.filter(val => {
          return val.reminderId !== id;
        });

        setReminders(newReminders);
      }
    });
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
          removeReminder(item.reminderId);
        }}
        text={item.timeString}
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
          onRefresh={() => {}}
          refreshing={!getFirstReminders}
          data={reminders}
          renderItem={renderReminders}
          keyExtractor={item => item.reminderId}
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
