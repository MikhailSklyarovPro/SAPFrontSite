import React from 'react'
import './CardMonitoring.scss'
import CalendarIcon from './Img/CalendarIcon.jsx'
import TimerIcon from './Img/TimerIcon.jsx'
import AuthorIcon from './Img/AuthorIcon.jsx'
import StageIcon from './Img/StageIcon.jsx'
import ClockIcon from './Img/ClockIcon.jsx'


export const CardMonitoring = ({data, ...props}) => {
  return (
    <div className="cardMonitoring">
        <div className="headerCardMonitoring">
            <div className="textDescriptionCardMonitoring">
                <p>{data.nameSystem} - {data.nameTest}</p>
                <p className='wrapperDescriptionMonitoring smallGreyText'>Описание: {data.description}</p>
            </div>
            <div className="iconButtonCardMonitoring">
                Кнопки управления
            </div>
        </div>
        <div className="footerCardMonitoring">
            <div className="wrapperAllIconsCardMonitoring">
                <div className="wrapperIconCardMonitoring">
                    <CalendarIcon/>
                    <p>{data.dateBegin}</p>
                </div>
                <div className="wrapperIconCardMonitoring">
                    <ClockIcon/>
                    <p>{data.timeBegin}</p>
                </div>
                <div className="wrapperIconCardMonitoring">
                    <AuthorIcon/>
                    <p>{data.author}</p>
                </div>
                <div className="wrapperIconCardMonitoring">
                    <StageIcon/>
                    <p>{data.stage}</p>
                </div>
                <div className="wrapperIconCardMonitoring">
                    <p>{data.percentExecute}</p>
                </div>
                <div className="wrapperIconCardMonitoring">
                    <TimerIcon/>
                    <p>{data.timeRun}</p>
                </div>
            </div>

            <div className="wrapperStatusCardMonitoring">
                <div className="statusCardMonitoring">
                    <p>{data.status}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardMonitoring