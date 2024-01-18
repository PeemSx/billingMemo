import Image from 'next/image'
import ListComponent from './components/ListComponent'
import Form from './components/Form'

export default function Home() {
  

  return (
    <div className='min-h-screen '>
      <div className='justify-center p-10'>
        <h1 className='text-center text-2xl font-bold mb-4'>Billing & Payment Memo</h1>
        <Form/>
        <ListComponent/>
      </div>  
    </div>
  )
}
