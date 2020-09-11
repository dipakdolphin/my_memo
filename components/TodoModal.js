import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Design from 'react-native-vector-icons/Ionicons';
import Colors from '../colors';

export default class TodoModal extends Component {
  state = {
    newTodo: ""
  };
  renderTodo = (todo) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity>
          <Design
            name={todo.completed ? 'ios-square' : 'ios-square-outline'}
            size={24}
            color={Colors.grey}
            style={{width: 32}}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.todo,
            {
              textDecorationLine: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? Colors.grey:Colors.black,
            },
          ]}>
          {todo.title}
        </Text>
      </View>
    );
  };
  render() {
    const list = this.props.list
    const taskCount = list.todos.length;
    const completedCount = list.todos.filter((todo) => todo.completed)
      .length;
    return (
     
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{position: 'absolute', top: 45, right: 32}}
          onPress={this.props.closeModal}>
          <Icon name="close" size={35} color={Colors.black} />
        </TouchableOpacity>
        <View
          style={[
            styles.section,
            styles.header,
            {borderBottomColor: list.color},
          ]}>
          <View>
            <Text style={styles.title}>{list.name}</Text>
            <Text style={styles.taskCount}>
              {' '}
              {completedCount} of {taskCount}{' '}
            </Text>
          </View>
        </View>
        <View style={[styles.section]}>
          <FlatList
            data={list.todos}
            renderItem={({item}) => this.renderTodo(item)}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{paddingHorizontal: 32}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View
          style={[styles.section, styles.footer]}
          behavior="padding">
          <TextInput style={[styles.input, {borderColor: list.color}]} />
          <TouchableOpacity
            style={[styles.addTodo, {backgroundColor: list.color}]}>
            <Icon name="plus" size={16} color={Colors.white} />
          </TouchableOpacity>
        </View>
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
    marginTop:30,
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
  footer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
