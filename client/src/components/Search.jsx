import React from 'react';

const Search = (props) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value = {props.value}
      onChange = {props.onChange}
      onSubmit = {props.onSubmit}
    />
  )
}

export default Search;