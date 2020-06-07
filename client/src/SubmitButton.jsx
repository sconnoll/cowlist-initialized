import React from "react";

var SubmitButton = ({onSubmit}) => {
  return (
    <button className='submit' onClick={(e) => onSubmit(e)}>Submit</button>
  )
};

export default SubmitButton;