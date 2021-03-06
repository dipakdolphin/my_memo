import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from './colors';
import tempData from './tempData';
import TodoList from './components/Todolist';
import AddListModal from './components/AddListModal';



export default class App extends Component {
state = {
addTodoVisible : false,
list: tempData

}
toggleAddTodoModal(){
  this.setState({addTodoVisible: !this.state.addTodoVisible})
}

renderList = list => {
  return <TodoList list = {list} updateList={this.updateList} />;
  }

  addList = list =>{
    this.setState({
      lists: [...this.state.lists, {...list, id: this.state.lists.length + 1, todos: [] }]
    })
  };
  
  updateList = lsit =>{

  }

  render() {
    return (
      <View style={styles.container}>
      <Modal animationType="slide" visible={this.state.addTodoVisible} >
        <AddListModal closeModal={()=>this.toggleAddTodoModal()} addList={this.addList} />
      </Modal>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            {' '}
            Todo
            <Text style={{fontWeight: '300', color: colors.blue}}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addList} onPress={()=> this.toggleAddTodoModal()} >
            <Icon name="plus" size={20} color={colors.blue} />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList
            data={this.state.list}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => this.renderList(item)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'capitalize',
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
});
