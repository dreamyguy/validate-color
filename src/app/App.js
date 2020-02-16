import React, { Component } from 'react';
import ForkMeOnGithub from 'fork-me-on-github';
import Emoji from 'react-emojis';
// Import 'validate-color' directly
import validateColor from './../validate-color/index';

// Import components
import Input from './components/Input';
import Footer from './components/Footer';

// Import styles
import './App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showMessage: false, // When not set, show Emoji (default)
      isValid: false,
      inputValue: ''
    }
  }

  validate(color) {
    if (color && color !== '' && validateColor(color)) {
      return true;
    }
    return false;
  }

  renderValidStatus() {
    const {
      showMessage,
      inputValue,
      isValid,
    } = this.state;
    return (
      <div className={`input__validation${showMessage ? ' show-message' : ''}`}>
        {isValid
          ?
            <span className="valid">
              {showMessage
                ?
                  `'${inputValue}' is valid!`
                :
                  <Emoji emoji="check-mark-button"/>
              }
            </span>
          :
            <>
              {inputValue &&
                <span className="not-valid">
                  {showMessage
                    ?
                      `'${inputValue}' is not a valid color value!`
                    :
                      <span>&nbsp;</span>
                  }
                </span>
              }
            </>
        }
      </div>
    );
  }

  render () {
    const {
      type = 'text',
      placeholder = 'Validate color here'
    } = this.props;
    const {
      inputValue,
      isValid,
    } = this.state;
    return (
      <>
        <div className="app">
          <ForkMeOnGithub repo="https://github.com/dreamyguy/validate-color" isPride/>
          <div className="header">
            <div className="header__content">
              <h1><Emoji emoji="check-mark-button"/>&nbsp;&nbsp;validate-color&nbsp;&nbsp;<Emoji emoji="rainbow"/></h1>
              <h2>Validate HTML colors by 'name', 'hex', 'rgb', 'rgba', 'hsl' or 'hsla' values</h2>
            </div>
          </div>
          <div className="validate-color" style={{backgroundColor: validateColor(inputValue) ? inputValue : 'transparent'}}>
            <Input
              title="Color validator"
              value={inputValue}
              type={type}
              placeholder={placeholder}
              isValid={isValid}
              onChangeHandler={
                (value) => {
                  this.setState({
                    isValid: this.validate(value),
                    inputValue: value
                  })
                }
              }
            />
            {this.renderValidStatus()}
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default App;
