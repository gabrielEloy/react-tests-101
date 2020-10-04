import React from 'react'
import Todo from './routes/Todo';
import GlobalStyle from './GlobalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Todo />
    </div>
  )
}

export default App;