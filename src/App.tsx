import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from './assets/tailwind.svg'
import { Button } from './components/atoms/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col h-screen items-center justify-center'>
    <h1 className='text-6xl font-black text-slate-700'>R82 Seed</h1>
      <div className='flex justify-center gap-4 py-6'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="p-4 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="p-4 h-20" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailwindLogo} className="p-4 h-20" alt="Tailwind CSS logo" />
        </a>
        
      </div>
      <Button variant="default"  onClick={() => setCount((count) => count + 1)}>Contador: {count}</Button>
      <div className="m-8">
        
        <p className='mt-8'>
          Edita <code>src/App.tsx</code> y guarda para probar HMR.
        </p>
      </div>
      <a href='https://github.com/ronaldmindiola/r82-seed' className="read-the-docs">
        Click aquí para obtener más información.
      </a>
    </div>
    </>
  )
}

export default App
