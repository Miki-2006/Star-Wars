import { useGetData } from '../../hooks/useGetData'
import DataList from '../../components/DataList'
import { useSelector } from 'react-redux'
import DataCard from '../../components/DataCard/DataCard'

const Starships = () => {
    const {data, prevBtnLink, nextBtnLink, cardData, onClickHandle} = useGetData('starships')
    const starshipsError = useSelector((s) => s.starships.error)
    return (
        <div className='cards'>
            <div className='list'>
                {starshipsError ? <>Something go wrong! Try later!</> : <DataList data={data} path='starships'/>}
                <div className="btns">
                    {prevBtnLink && <button className='btn' onClick={ (e) => onClickHandle(e) } value='prev'>Prev</button>}
                    {nextBtnLink && <button className='btn' onClick={ (e) => onClickHandle(e) } value='next'>Next</button>}
                </div>
            </div>
            <DataCard data={cardData}/> 
        </div>
    )
}

export default Starships