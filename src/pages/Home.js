import React from 'react'
import { useLoaderData } from 'react-router-dom'
import "../App.css"
import { Table } from '../components'
function Home() {
  const data = useLoaderData() // getting data from Loader
  return (
    <div className='container'>
        <main className='main'>
            <Table data={data} />
        </main>
    </div>
  )
}

export default Home