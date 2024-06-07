import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from './assets/tailwind.svg'


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
      <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-slate-300 focus:outline-none bg-slate-800 rounded-lg border border-slate-600 hover:bg-slate-900 hover:text-slate-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setCount((count) => count + 1)}>
          Contador:  {count}
      </button>
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
