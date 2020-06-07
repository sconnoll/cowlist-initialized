import React from "react";
import SubmitButton from "./SubmitButton";

var NewCowForm = ({onSubmit}) => {
  return (
    <div className='input'>
      <form>
        <label htmlFor='name'>Cow Name</label>
        <input type='text' id='name' name='name'/><br/>
        <label htmlFor='description'>Cow Description</label>
        <input type='text' id='description' name='description'/>
        <SubmitButton onSubmit={onSubmit}/>
      </form>
    </div>
  )
};

export default NewCowForm;