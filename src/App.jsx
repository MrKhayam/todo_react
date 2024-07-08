import React from 'react';
import Input from './components/Input';
import Todo from './components/Todo';

const App = () => {
  return (
    <>
     <div className="transition-all duration-200 w-full h-[100vh] pt-20 gap-40 bg-zinc-900">
      <Input />
      </div> 
    </>
  );
}

export default App;
