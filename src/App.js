import React from 'react';
import Todo from './Todo'
import * as Mui from '@material-ui/core'

function App() {
  return (
    <div>
        <Mui.Container fixed>
            <Todo />
        </Mui.Container>
    </div>
  );
}

export default App;
