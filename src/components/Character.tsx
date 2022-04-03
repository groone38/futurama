import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICharacters } from "../type/type";
import { Button } from 'reactstrap';

interface CharacterProps {
    characters: ICharacters
}

const Character: FC = () => {
    const [char, setChar] = useState<ICharacters | null>(null)
    const navigate = useNavigate()
    const params = useParams()
    const paramsId = params.id
    useEffect(() => {
        fetchChar()
    }, [])
    async function fetchChar() {
        try{
            const response = await axios.get<ICharacters>('https://api.sampleapis.com/futurama/characters/' + paramsId)
            setChar(response.data)
        } catch(e) {
            alert(e)
        }
    }
    return (
        <div>
            <Button onClick={() => navigate('/character')}>Back</Button>
            <h1 style={{color: 'white'}}>{char?.name.first}</h1>
        </div>
    )
}

export default Character