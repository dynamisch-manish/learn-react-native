import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

class TodoInClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //replace
      todo: '',
      newTodo: '',
      editTodo: '',
      editTodoId: null,
      todos: [{id: 1, todo: 'Meeting at 4pm tomorrow.', completed: false}], // array of objects
    };
  }

  addTodo = () => {
    if (!this.state.newTodo) return;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          todo: this.state.newTodo,
          completed: false,
        },
      ],
      newTodo: '',
    }); //... spread oprator & rest oprator
  };

  handleComplete = todoId => {
    const newTodo = this.state.todos.map(item => {
      if (todoId === item.id) {
        return {...item, completed: !item.completed};
      }
      return item; // { id: 1, todo: "Meeting at 4pm tomorrow.", completed: false, completed: true }
    });
    this.setState({
      todos: newTodo,
    });
  };

  handleEdit = () => {
    const newTodos = this.state.todos.map(item => {
      if (this.state.editTodoId === item.id) {
        return {...item, todo: this.state.editTodo};
      }
      return item; // { id: 1, todo: "Meeting at 4pm tomorrow.", completed: false, completed: true }
    });
    this.setState({
      // patch
      editTodoId: null,
      todos: newTodos,
      editTodo: '',
    });
  };

  selectForEdit = item => {
    this.setState({editTodoId: item.id, editTodo: item.todo});
  };

  render() {
    console.log('I am rendering');
    return (
      <View>
        <Text>Todos - Class Component</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{flex: 1, borderWidth: 1, borderColor: 'black'}}
            value={this.state.newTodo}
            onChangeText={text => this.setState({newTodo: text})}
            // ref={ref => (todoInputRef.current = ref)} // Uncontrolled component
          />
          <Button title="Add Todo" onPress={this.addTodo} />
        </View>
        {this.state.todos.map(item => {
          return (
            <View style={{flexDirection: 'row'}} key={item.id}>
              {this.state.editTodoId === item.id ? (
                <TextInput
                  style={{flex: 1, borderWidth: 1, borderColor: 'black'}}
                  value={this.state.editTodo}
                  onChangeText={text => this.setState({editTodo: text})}
                  onEndEditing={this.handleEdit}
                />
              ) : (
                <Text onLongPress={() => this.selectForEdit(item)}>
                  {item.todo}
                </Text>
              )}
              <Text> - {item.completed ? 'Completed' : 'Due'} </Text>
              {/* {!item.completed && (
                  <button
                    onClick={
                      this.state.editTodoId === item.id
                        ? this.handleEdit
                        : () => this.selectForEdit(item)
                    }
                  >
                    {this.state.editTodoId === item.id ? "Edit done" : "Edit"}
                  </button>
                )} */}
              <Button
                title={item.completed ? 'Todo not done' : 'Todo done'}
                onPress={() => this.handleComplete(item.id)}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

export default TodoInClassComponent;
