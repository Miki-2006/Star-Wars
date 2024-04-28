import { useEffect } from 'react'

const DataCard = ({data}) => {
    useEffect(() => {
        localStorage.setItem('dataObj', JSON.stringify(data))
    }, [])
    useEffect(() => {
        localStorage.setItem('dataObj', JSON.stringify(data))
    }, [data])
    return ( 
        <>
            {data && (
                <div className='info'>
                    <p>name: {data?.fields.name || data?.fields.starship_class || data?.fields.title}</p>
                    <p>
                        {typeof data?.fields.gender === 'string' ? 'gender: ' + data?.fields.gender : ''}
                        {typeof data?.fields.MGLT === 'string' ? 'MGLT: ' + data?.fields.MGLT : ''}
                        {typeof data?.fields.climate === 'string' ? 'climate: ' + data?.fields.climate : ''}
                        {typeof data?.fields.director === 'string' ? 'director: ' + data?.fields.director : ''}
                    </p>
                    <p>
                        {typeof data?.fields.height === 'string' ? 'height: ' + data?.fields.height + ' cm' : ''}
                        {typeof data?.fields.hyperdrive_rating === 'string' ? 'hyperdrive rating: ' + data?.fields.hyperdrive_rating : ''}
                        {typeof data?.fields.orbital_period === 'string' ? 'orbital period: ' + data?.fields.orpital_period : ''}
                        {typeof data?.fields.producer === 'string' ? 'producer: ' + data?.fields.producer : ''}
                    </p>
                    <p>
                        {typeof data?.fields.mass === 'string' ? 'mass: ' + data?.fields.mass + ' kg' : ''}
                        {typeof data?.fields.terrain === 'string' ? 'terrain: ' + data?.fields.terrain : ''}
                        {typeof data?.fields.release_date === 'string' ? 'release date: ' + data?.fields.release_date : ''}
                    </p>
                </div>
            )}
        </>
    )
}

export default DataCard