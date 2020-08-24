import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../colors';

export default class AddListModal extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{position: 'absolute', top: 64, right: 32}}
          onPress={this.props.closeModal}>
          <Icon name="close" size={24} color={colors.black} />
        </TouchableOpacity>
        <View style={{alignSelf:'stretch', marginHorizontal:32}}>
        <Text style={styles.title}>Create Todo List</Text>
        <TextInput style={styles.input} placeholder="List Name?" />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'center',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
});
