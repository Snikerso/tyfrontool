import React from 'react';

const MyComponent = (props) => (
  <div>
    <h2>{props.render('Roman')}</h2>
  </div>
);
export default MyComponent;
