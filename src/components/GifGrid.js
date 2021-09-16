import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types'

import { GifGridItem } from './GifGridItem'

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="card-grid animate__animated animate__flash">Loading...</p>}

            <div className="card-grid animate__animated animate__fadeIn animate__delay-1s">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                    )
                }
            </div>
        </>
    )
}

export default GifGrid

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}