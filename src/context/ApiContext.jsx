import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../services/apiService';

const ApiContext = createContext();

const ApiProvider = ({children}) => {
    const [newReleases, setNewReleases] = useState([])
    const [playlists, setPlaylists] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getData('new-releases').then(({albums}) => {
            setNewReleases(albums.items)
            console.log(albums.items)
        })
        getData('featured-playlists').then(({playlists}) => {
            setPlaylists(playlists.items)
            console.log(playlists.items)
        })
        getData('categories').then(({categories}) => {
            setCategories(categories.items)
            console.log(categories.items)
        })
    }, [])

    const data = {newReleases, playlists, categories}
    
    return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}

export {ApiProvider}
export default ApiContext