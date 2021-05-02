import React from 'react';
import { useEffect, useState }  from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count < 0) alert('0 이하 입니다');
  },[count]);
  
  return (
    <div>
      <h1>This number is: {count}</h1>
      <button onClick={setCount(count + 1)}>add</button>
      <button onClick={setCount(count - 1)}>minus</button>
    </div>
  )
}

export default App;
