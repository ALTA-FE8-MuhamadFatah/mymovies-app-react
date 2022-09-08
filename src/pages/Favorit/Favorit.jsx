import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useFavContext } from '../../context'

const Favorit = () => {

    const { fav } = useFavContext()
    const navigate = useNavigate()

    // Go to Detail
    const handleDetail = ({ id }) => {
        console.log(id)
        navigate("/detail", {
            state: {
                id: id
            }
        })
    }

    return (
        console.log(fav),
        <div>
            <Button onClick={() => navigate(-1)}>BACK</Button>
            <h1>INI FAVORIT</h1>
            {fav.map((data) => {
                return (
                    <p onClick={() => handleDetail(data)}>{data.title}</p>
                )
            })}
        </div>
    )
}

export default Favorit