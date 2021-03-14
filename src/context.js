import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://jsonplaceholder.typicode.com/photos/?albumId=1'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [tours, setTours] = useState([])

 
  const fetchTours = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      // console.log(data);
      // const { drinks } = data
      if (data) {
        const newTours = data.map((item) => {
          const {
            id,
            title,
            url,
            albumId,
            thumbnailUrl,
          } = item

          return {
            id,
            title,
            url,
            albumId,
            thumbnailUrl,
          }
        })
        setTours(newTours)
      } else {
        setTours([])
      }
      setLoading(false)
      // console.log(data);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchTours()
  }, [searchTerm,fetchTours])
  return (
    <AppContext.Provider
      value={{ loading, tours, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
