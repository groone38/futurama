import axios from "axios";
import React, { FC, useEffect, useState } from "react";
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
            console.log(response.data);
            setEpisodes(response.data)
        } catch(e) {
            alert(e)
        }
        setLoading(false)
    }
    console.log(episodes);
    return (
        <>
            {loading && <Loader/>}
            <div className={classes.episodes}>
            {episodes.map(item => (
                <Episode item={item}/>
            ))}
            </div>
        </>
    )
}

export default Episodes