import React, { Component } from 'react';

// Import styles
import './Input.scss';

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  render() {
    const {
      classes = '', // accepts CSS classNames as string
      title = '',
      type = 'text',
      placeholder = 'Validate color here',
      onChangeHandler,
      value = '',
      isValid,
    } = this.props;
    const {
      inputValue,
    } = this.state;
    return (
      <>
        <div className={`input${classes ? ' ' + classes : ''}`}>
          <label htmlFor="input" >
            {title &&
              <p className="input__label">{title}</p>
            }
            <input
              className={`input__field${isValid ? ' valid' : ''}`}
              autoComplete="off"
              value={value ? value : inputValue}
              type={type}
              placeholder={placeholder}
              onChange={(e) => {
                this.setState({
                  inputValue: e.target.value
                })
                onChangeHandler(e.target.value)
              }}
            />
          </label>
        </div>
      </>
    );
  }
}

export default Input;
