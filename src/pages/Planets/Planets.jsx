import { useGetData } from '../../hooks/useGetData'
import { useSelector } from 'react-redux'
import DataList from '../../components/DataList'
import DataCard from '../../components/DataCard/DataCard'

const Planets = () => {
    const {data, prevBtnLink, nextBtnLink, cardData, onClickHandle} = useGetData('planets')
    const planetsError = useSelector((s) => s.planets.error)
    return (
        <div className='cards'>
            <div className='list'>
                {planetsError ? <>Something go wrong! Try later!</> : <DataList data={data}  path='planets'/>}
                <div className="btns">
                    {prevBtnLink && <button className='btn' onClick={ (e) => onClickHandle(e) } value='prev'>Prev</button>}
                    {nextBtnLink && <button className='btn' onClick={ (e) => onClickHandle(e) } value='next'>Next</button>}
                </div>
            </div>
            <DataCard data={cardData}/>
        </div>
    )
}

export default Planets