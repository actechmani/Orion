import React, { FC } from 'react'
import {
    StatisticsWidget1,

} from '../../../_metronic/partials/widgets'
import { SETTING_CARD_DATA } from './constant'

const Settings: FC = () => {
    console.log("SETTING_CARD_DATA", SETTING_CARD_DATA)
    return (
        <>
            {/* begin::Row */}
            <div className='row g-5 g-xl-8'>

                {SETTING_CARD_DATA.map(cardinfo => (
                    <div className='col-xl-4' key={cardinfo.id}>
                        <StatisticsWidget1
                            id={cardinfo.id}
                            className='card-xl-stretch mb-xl-8'
                            image={cardinfo.image}
                            title={cardinfo.title}
                            description={cardinfo.description}
                        />
                    </div>
                ))}




            </div>


        </>
    )
}

export { Settings }
