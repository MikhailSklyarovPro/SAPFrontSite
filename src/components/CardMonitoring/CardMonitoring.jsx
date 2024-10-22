import React from 'react'
import './CardMonitoring.scss'
import {ClockIcon, StageIcon, TimerIcon, AuthorIcon, CalendarIcon} from '../../img/Icons.jsx'
// import CalendarIcon from '../../img/CalendarIcon.jsx'
// import TimerIcon from '../../img/TimerIcon.jsx'
// import AuthorIcon from '../../img/AuthorIcon.jsx'
// import StageIcon from '../../img/StageIcon.jsx'
// import ClockIcon from '../../img/ClockIcon.jsx'


export const CardMonitoring = ({data, ...props}) => {
  return (
    <div className="cardMonitoring">
        <div className="headerCardMonitoring">
            <div className="textDescriptionCardMonitoring">
                <p>{data.nameSystem} - {data.nameTest}</p>
                <p className='wrapperDescriptionMonitoring smallGreyText'>Описание: {data.description}</p>
            </div>
            <div className="iconButtonCardMonitoring">
               {

               }

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
                    <p className='finish'>{data.timeRun}</p>
                </div>
            </div>

            <div className="wrapperStatusCardMonitoring">
                <div className={data.status === "Выполнен" ? "statusCardMonitoring finish": data.status === "В очереди" ? "statusCardMonitoring inQueue" : data.status === "Выполняется"? "statusCardMonitoring running": ""}>
                    <p>{data.status}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardMonitoring