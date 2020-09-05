import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../colors';

export default class TodoModal extends Component {
  state = {
    name: this.props.list.name,
    color: this.props.list.color,
    todos: this.props.list.todos,
  };
  renderTodo = (todo) => {
    return (
      <View>
        <Text>{todo.title}</Text>
      </View>
    );
  };
  render() {
    const taskCount = this.state.todos.length;
    const completedCount = this.state.todos.filter((todo) => todo.completed)
      .length;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{position: 'absolute', top: 15, right: 32,}}
          onPress={this.props.closeModal}>
          <Icon name="close" size={35} color={Colors.black} />
        </TouchableOpacity>
        <View
          style={[
            styles.section,
            styles.header,
            {borderBottomColor: this.state.color},
          ]}>
          <View>
            <Text style={styles.title}>{this.state.name}</Text>
            <Text style={styles.taskCount}>
              {' '}
              {completedCount} of {taskCount}{' '}
            </Text>
          </View>
        </View>
        <View style={[styles.section,]}>
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => this.renderTodo(item)}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{paddingHorizontal:32, paddingVertical:64}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <KeyboardAvoidingView style={[styles.section, styles.footer]} behavior="padding">
          <TextInput style = {[styles.input, {borderColor: this.state.color}]} />
          <TouchableOpacity style={[styles.addTodo, {backgroundColor: this.state.color}]}>
              <Icon name="plus" size={16} color={Colors.white} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginTop:50,
    alignSelf: 'stretch',
  },
  header: {
    justifyContent: 'flex-end',
    marginLeft: 64,
    borderBottomWidth: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
    color: Colors.black,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: Colors.grey,
    fontWeight: '600',
  },
});
