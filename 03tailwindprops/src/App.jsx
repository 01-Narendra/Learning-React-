import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-500 text-black p-4 rounded-md'>Tailwind CSS</h1>
      <Card username="Narendra"  company="Google" position="SDE-I" />
      <Card username="Aman" position="SDE-II" company="Microsoft" />
    </>
  )
}

export default App
