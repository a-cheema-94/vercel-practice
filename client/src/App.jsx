import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './customHooks/useFetch'

function App() {
  const [count, setCount] = useState(0);

  const { data: getData, loading: getLoading, error: getError } = useFetch(null, '/haha');
  const { data: postData, loading: postLoading, error: postError } = useFetch( { first: 'my name is bob', second: 'my name is ryan' }, '/foo' );

  const handleClick = () => {
    // send post and fetch request to server
    setCount((count) => count + 1);
  }

  if(getLoading) return <p>loading from get...</p>
  if(postLoading) return <p>loading from post ...</p>
  if (getError) return <p>An error occurred from get request</p>
  if (postError) return <p>An error occurred from post request</p>
  return (
    <>
      {getData && <div>{getData.first}</div>}
      {postData && <div>{postData.second}</div>}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
