import React from 'react';
import Header from './components/Header';
import Section from './components/Section';

import 'normalize.css'

const App = () => {
  return (
    <div className="main" style={{'backgroundColor': 'lightgray'}}>
      <Header />
      <Section title="Título da Seção" subtitle="Subtítulo da Seção" />
    </div>
  );
};

export default App;
