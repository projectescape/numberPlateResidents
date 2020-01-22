import React, { Component } from 'react';
import { Notifications, Notification } from 'react-native-notifications';

const NotificationScreen = (props) => {
    Notifications.registerRemoteNotifications();
    Notifications.events().registerNotificationReceived((notification = Notification, completion) => {
        console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
        completion({ alert: false, sound: false, badge: false });
    });

    Notifications.events().registerRemoteNotificationOpened((notification = Notification, completion) => {
        console.log(`Notification opened: ${notification.payload}`);
        completion();
    });
};

const styles = StyleSheet.create({

});

export default NotificationScreen;