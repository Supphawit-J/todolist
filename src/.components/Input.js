import React, { useState } from "react";
import styled from 'styled-components'

const BaseInput = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
`

const InputContainer =styled.form`
  display: flex;
  padding: 0 1rem;
  margin-bottom: 1rem;
`

const StyledInput = styled.input`
  display : ${props => props.display ? "block" : "none"}
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  width: 100%;
  transition: border-bottom 0.3s;

  &:focus{
    border-bottom: 1px solid crimson;
  }
  &::placeholder {
      color: chocolate;
  }
` 


export function Input({ onSubmit }) {
  const [value, setValue] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <InputContainer  onSubmit={handleSubmit} >
      <StyledInput
        display
        onChange={handleInputChange}
        value={value}
        type="text"
        className="input"
        placeholder="Create new task"
      />
    </InputContainer>
   
  );
}
export default Input;
