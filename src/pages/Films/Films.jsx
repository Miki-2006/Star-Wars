import { useGetData } from '../../hooks/useGetData'
import DataList from '../../components/DataList'
import { useSelector } from 'react-redux'
import DataCard from '../../components/DataCard/DataCard'

const Films = () => {
    const {data, prevBtnLink, nextBtnLink, cardData, onClickHandle} = useGetData('films')
    const filmsError = useSelector((s) => s.films.error)
    return (
        <div className='cards'>
            <div className='list'>
                {filmsError ? <>Something go wrong! Try later!</> : <DataList data={data} path='films'/>}
                <div className="btns">
                    {prevBtnLink && <button className='btn' onClick={ (e) => onClickHandle(e) } value='prev'>Prev</button>}
                    {nextBtnLink && <button className='btn' onClick={ (e) => onClickHandle(e) } value='next'>Next</button>}
                </div>
            </div>
            <DataCard data={cardData}/>
        </div>
    )
}

export default Films