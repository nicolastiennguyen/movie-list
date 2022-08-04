import React from 'react';

const AddMovie = (props) => {
  return (
    <
      input type = "search"
      placeholder = "Add movie title here"
      value = {props.currentValue}
      onChange = {props.onChange}
      onSubmit = {props.onSubmit}
    />
  )
}

export default AddMovie;