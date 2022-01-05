import React from 'react';
import Todo from './Todo'
import * as Mui from '@mui/material'

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
