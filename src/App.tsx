import React from 'react';
import './App.css';
import InputText from './packages/BpmForm/controls/InputText';
import FormRender from './packages/BpmForm/render/FormRender';
import { FormModel } from './packages/BpmForm/type/schema';

const schema: FormModel = {
  type: 'form',
  controls: [
    {
      id: '111',
      name: 'field1',
      label: '字段1',
      type: 'InputText',
    }
  ]
}

function App() {
  return (
    <div className="App">
      <FormRender formModel={schema} widgets={[InputText]} />
    </div>
  );
}

export default App;
