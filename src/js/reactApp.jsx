import {createRoot} from 'react-dom/client';
import * as React from 'react';

const App = (props) => {
  console.log('React is installed!');
  return (
    <div>
      Hello, React App!
    </div>
  );
};


const reactRoot = document.getElementById('react-root');

if(reactRoot){
  const root = createRoot(reactRoot);
  root.render(<App />);
}else{
  console.log('No root element found');
}
