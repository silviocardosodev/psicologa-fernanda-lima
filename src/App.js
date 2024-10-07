import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>Psicologa Fernanda Lima</h1>
      <Button
        label="Primary Button"
        styleType="primary"
        onClick={() => alert('Primary Button Clicked!')}
      />
      <Button
        label="Secondary Button"
        styleType="secondary"
        onClick={() => alert('Secondary Button Clicked!')}
      />
      <Button
        label="Danger Button"
        styleType="danger"
        onClick={() => alert('Danger Button Clicked!')}
      />
      <Button label="Disabled Button" disabled={true} />
    </div>
  );
};

export default App;
