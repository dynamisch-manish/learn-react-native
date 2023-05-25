import React, {useCallback, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const TodoInFuncComponent = () => {
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {id: 1, todo: 'Meeting at 4pm tomorrow.', completed: false},
  ]);

  const addTodo = useCallback(() => {
    if (!newTodo) return;
    setTodos([
      ...todos, //... spread oprator & rest oprator
      {
        id: todos.length + 1,
        todo: newTodo,
        completed: false,
      },
    ]);
    setNewTodo('');
  }, [newTodo, todos]);

  const handleEdit = useCallback(() => {
    const newTodos = todos.map(item => {
      if (editTodoId === item.id) {
        return {...item, todo: editTodo};
      }
      return item;
    });
    setTodos(newTodos); // rendering
    setEditTodoId(null); // rendering
    setEditTodo('');
  }, [todos, editTodo, editTodoId]);

  const selectForEdit = useCallback(item => {
    setEditTodoId(item.id);
    setEditTodo(item.todo);
  }, []);

  const handleComplete = useCallback(
    todoId => {
      const newTodos = todos.map(item => {
        if (todoId === item.id) {
          return {...item, completed: !item.completed};
        }
        return item; // { id: 1, todo: "Meeting at 4pm tomorrow.", completed: false, completed: true }
      });
      setTodos(newTodos);
    },
    [todos],
  );

  // return <Text>TodoInFuncComponent</Text>;

  return (
    <View>
      <Text>Todos - Functional Component</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{flex: 1, borderWidth: 1, borderColor: 'black'}}
          value={newTodo}
          onChangeText={setNewTodo}
          // ref={ref => (todoInputRef.current = ref)} // Uncontrolled component
        />
        <Button title="Add Todo" onPress={addTodo} />
      </View>
      {todos.map(item => {
        return (
          <View style={{flexDirection: 'row'}} key={item.id}>
            {editTodoId === item.id ? (
              <TextInput
                style={{flex: 1, borderWidth: 1, borderColor: 'black'}}
                value={editTodo}
                onChangeText={setEditTodo}
                onEndEditing={handleEdit}
              />
            ) : (
              <Text onLongPress={() => selectForEdit(item)}>{item.todo}</Text>
            )}
            <Text> - {item.completed ? 'Completed' : 'Due'} </Text>
            <Button
              title={item.completed ? 'Todo not done' : 'Todo done'}
              onPress={() => handleComplete(item.id)}
            />
          </View>
        );
      })}
    </View>
  );
};

export default TodoInFuncComponent;
