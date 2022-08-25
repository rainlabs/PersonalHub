import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.scss'

import { Message} from '../../shared'

const SERVER_URI = 'http://localhost:4000/api'
const commonOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
 }

const SendMessage = async(title: string) => {
  const options = {
    ...commonOptions,
    body: JSON.stringify({
      title: title,
      body: 'Hello from client!'
    })
  }


  try {
    const response = await fetch(SERVER_URI, options)
    if (!response.ok) throw response
    const data = await response.json()
    if (data?.title) {
      // !
      return data as Message
    }
  } catch (e) {
    throw e
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState<Message | undefined>()

  const sendMessage = (title: string) => {
    SendMessage(title).then(setMessage)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" className='inline-block'>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" className='inline-block'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => sendMessage('Message from client')}>
          Send message to server
        </button>
        <p>
          Title: {message?.title}
        </p>
        <p>
          Body: {message?.body}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
