import { useState } from 'react';
import validateText from './validation/validateText';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [length, setLength] = useState('');
  const [valid, setValid] = useState(false);

  const textChange = (e) => {
    const { value } = e.target;
    const maxLength = +length || 0;

    const isValid = validateText(value, maxLength);
    setValid(isValid);
    setText(value);
  };

  const lengthChange = (e) => {
    const { value } = e.target;
    const maxLength = +value || 0;

    const isValid = validateText(text, maxLength);
    setValid(isValid);
    setLength(value);
  };

  return (
    <div className="App">
      <input
        type="number"
        value={length}
        onChange={lengthChange}
        className="form__input"
        id="maxLength"
        placeholder="Set max length"
      />
      <label htmlFor="maxLength" className="form__label">
        Max Length
      </label>
      <input
        type="text"
        value={text}
        onChange={textChange}
        className="form__input"
        id="text"
        placeholder="Put your text here"
      />
      <label htmlFor="text" className="form__label">
        Your Text
      </label>

      <h2 className={'heading ' + (valid ? 'green' : 'red')}>
        Is your text valid: {valid.toString()}
      </h2>
    </div>
  );
}

export default App;
