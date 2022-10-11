import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

import './debouncedInput.css';


const DebouncedInput = ({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }) => {
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value);
      }, debounce);
  
      return () => clearTimeout(timeout);
    }, [debounce, onChange, value]);
  
    return (
      <>
        <div className="search-box">
          <Form.Control
            className="search-input"
            type="search"
            value={value}
            {...props}
            onChange={(e) => setValue(e.target.value)}
          />
          <i className="fa fa-search fa-w-16 search-box-icon" />
        </div>
      </>
    );
  };


  export default DebouncedInput;