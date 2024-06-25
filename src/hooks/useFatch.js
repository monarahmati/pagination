import React, { useEffect, useState } from 'react';

const useFatch = (sieveModel) => {
    const [isLoading , setLoading ] = useState(false)
    const [response , setRespanse] = useState([])

    const url = "https://react-mini-projects-api.classbon.com/Programmer/sieve";

    const fatchData = async () =>{
        try {
            setLoading(true)
            const res = await fetch( url , {
                method : "POST",
                body : JSON.stringify(sieveModel),
                headers: {
                    "content-type": "application/json; charset=utf-8",
                  },
            })

            const data = await res.json()
            console.log('data fetch =>' , data);
            setRespanse(data)
        } catch (error) {
            console.log('fetch error =>' , error);
        } finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        fatchData()
    }, [sieveModel.page])


    return { response , isLoading}
};

export default useFatch;