import React from 'react';
import {SafeAreaView} from 'react-native';
import TodoInFuncComponent from './components/TodoFuncComponent';
import TodoInClassComponent from './components/TodoClassComponent';

const App = () => {
  return (
    <SafeAreaView>
      <TodoInFuncComponent />
      <TodoInClassComponent />
    </SafeAreaView>
  );
};

export default App;
