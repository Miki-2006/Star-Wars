import DataList from '../../components/DataList'
import { useSelector } from 'react-redux'
import DataCard from '../../components/DataCard/DataCard'
import { useGetData } from '../../hooks/useGetData'

const Characters = () => {
    const {data, prevBtnLink, nextBtnLink, cardData, onClickHandle} = useGetData('people')
    const charactersError = useSelector((s) => s.characters.error)
    return (
        <div className='cards'>
            <div className='list'>
                {charactersError ? <>Something go wrong! Try later!</> : <DataList data={data} path='characters'/>}
                <div className='btns'>
                    {prevBtnLink && <button className='btn' onClick={ (e) => onClickHandle(e) } value='prev'>Prev</button>}
                    {nextBtnLink && <button className='btn' onClick={ (e) => onClickHandle(e) } value='next'>Next</button>}
                </div>
            </div>
            <DataCard data={cardData}/>
        </div>
    )
}

export default Characters