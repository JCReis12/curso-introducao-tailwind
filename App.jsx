import { useState } from 'react'
import { Button } from './components/Button';
import { Heading } from './components/Heading'

function App() {
  return (
    <div className='bg-darkBackground'>
      <div className='bg-green-200'>
        <Heading color='white'>Hello World of Heading 1</Heading>
        <Heading type='h2' color='white'>Hello World of Heading 2</Heading>
      </div>
        <Button>Primary Background</Button>
        <Button variant='secondary'>Secondary Background</Button>
        <Button isBold>Bold Text with Primary Background</Button>
        <Button isBold variant='secondary'>Bold Text with Secondary Background</Button>
      </div>
  );
}


export default App