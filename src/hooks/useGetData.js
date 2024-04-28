import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setError } from '../store/characters/charactersSlice'
import { useParams } from 'react-router-dom'

export const useGetData = (path) => {
    const [data, setData] = useState([])
    const [prevBtnLink, setPrevBtnLink] = useState('')
    const [nextBtnLink, setNextBtnLink] = useState('')
    const [cardData, setCardData] = useState(null)
    const dispatch = useDispatch()
    const {num} = useParams()

    useEffect(() => {
        num && setCardData(data.find((obj, indx) => indx === +num))
    }, [num])
    
    useEffect(() => {
        axios(`https://swapi-node.now.sh/api/${path}?page=1`)
            .then(({ data }) => {
                setData(data.results)
                setPrevBtnLink(data.previous)
                setNextBtnLink(data.next)
            })
            .catch(err => dispatch(setError()))
    }, [])
    const onClickHandle = (e) => { 
        axios(`https://swapi-node.now.sh${e.target.value === "prev" ? prevBtnLink : nextBtnLink}`)
            .then(({ data }) => {
                setData(data.results)
                setPrevBtnLink(data.previous)
                setNextBtnLink(data.next)
            })
    }
    return {data, prevBtnLink, nextBtnLink, cardData, onClickHandle}
}