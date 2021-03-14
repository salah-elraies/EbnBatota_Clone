import React from 'react'
import Tour from '../components/Tour'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'

function Trips() {
  const { tours, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (tours.length < 1) {
    return (
      <h2 className='section-title'>
        no tours match your search criteria right now
      </h2>
    )
  }
  return (
    <section className='main trips'>
      <main className="group container">
        <h2 className='title'>Tours</h2>
        <div className='row'>
          {tours.map((item) => {
            return <Tour key={item.id} {...item} />
          })}
        </div>
      </main>
    </section>
  )
}


export default Trips
