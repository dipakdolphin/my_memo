import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Modal} from 'react-native';
import colors from '../colors';
import TodoModal from './TodoModal';


export default class Todolist extends Component {
  state = {
    showListVisible: false,
  };

  toggleListModal() {
    this.setState({showListVisible: !this.state.showListVisible});
  }

  render() {
    const list = this.props.list;
    const completedCount = list.todos.filter((todo) => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;

    return (
      <View>
      
      <Modal animationType= "slide" visible= {this.state.showListVisible} onRequestClose={()=> this.toggleListModal()}>
        <View>
          <TodoModal list={list} closeModal={()=> this.toggleListModal()} />
        </View>
      </Modal>
        <TouchableOpacity
          style={[styles.listContainer, {backgroundColor: list.color}]} onPress={() => this.toggleListModal()}>
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.count}>{remainingCount}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: '200',
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '200',
    color: colors.white,
  },
});
