import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from './Episodes.module.css'
import { IEpisodes } from "../../type/type";
import Loader from "../loader/Loader";
import Episode from "./Episode";

const Episodes = () => {
    const [episodes, setEpisodes] = useState<IEpisodes[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchEpisodes()
    }, [])

    async function fetchEpisodes() {
        setLoading(true)
        try {
            const response = await axios.get<IEpisodes[]>('https://api.sampleapis.com/futurama/episodes')
            setEpisodes(response.data)
        } catch(e) {
            alert(e)
        }
        setLoading(false)
    }

    return (
        <>
            {loading && <Loader/>}
            <div className={classes.episodes}>
            {episodes.map(item => (
                <Episode key={item.id} item={item}/>
            ))}
            </div>
        </>
    )
}

export default Episodes