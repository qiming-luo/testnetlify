import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const titleStyle = {
  textAlign: 'center',
  fontSize: 62,
  color: 'red'
}

function Title(){
  return (
    <h1 style={titleStyle}>test test test</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Title />
);


