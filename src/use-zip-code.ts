import {ChangeEvent, useCallback, useState} from "react";
import axios from "axios";


const useZipCodeData = () => {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(false)

    const userInputCallback = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
        try{
            const { data } = await axios.get(`https://api.zippopotam.us/us/${event.target.value}`)
            setData(data)
            setError(false)

        } catch {
            setError(true)
            setData(undefined)
        }
    }, [])


    return {userInputCallback, data, error}
}

export default useZipCodeData
