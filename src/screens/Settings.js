import { StyleSheet, Button, Image, } from "react-native";
import React from "react";

const Settings = props => {
  return (
    <Button
      onPress={() => props.navigation.toggleDrawer()}
      title="Go to notifications"
    />
  );
}

export default Settings;