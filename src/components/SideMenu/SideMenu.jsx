import '../SideMenu/SideMenu.scss'
import React from 'react'
import globalConstants from '../../config/globalConstants'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import NameApp from '../NameApp/NameApp.jsx'
import ButtonMenu from '../UI/ButtonMenu/ButtonMenu.jsx'
import { useActions } from '../../hooks'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.jsx'
import {LogoIcon, AccountIcon, HistoryIcon, MonitoringIcon, NotificationsIcon, TestingIcon, ExitIcon} from '../../img/Icons.jsx'


export const SideMenu = () => {
    const { isAuth } = useUser()
    const { Logout } = useActions()
    let currentClass = ({isActive}) => {return isActive ? "activeItemMenu": "notActiveItemMenu"}

    return (
        isAuth ?
            <div className="wrapperSideMenu">
                <div className="wrapperLogoAndName">
                    <LogoIcon />
                    <NameApp />
                </div>
                <ul className="sideMenu">
                    <NavLink to={globalConstants.routes.testing} className={currentClass}>
                        <ButtonMenu>
                            <TestingIcon />
                        </ButtonMenu>
                    </NavLink>
                    <NavLink to={globalConstants.routes.monitoring} className={currentClass}>
                        <ButtonMenu>
                            <MonitoringIcon />
                        </ButtonMenu>
                    </NavLink>
                    <NavLink to={globalConstants.routes.account} className={currentClass}>
                        <ButtonMenu>
                            <AccountIcon />
                        </ButtonMenu>
                    </NavLink>
                    <NavLink to={globalConstants.routes.history} className={currentClass}>
                        <ButtonMenu>
                            <HistoryIcon />
                        </ButtonMenu>
                    </NavLink>
                    <NavLink to={globalConstants.routes.notification} className={currentClass}>
                        <ButtonMenu>
                            <NotificationsIcon />
                        </ButtonMenu>
                    </NavLink>
                </ul>
                <div className="footerSideMenu">
                    <ButtonMenu onClick={() => Logout()}>
                        <ExitIcon />
                    </ButtonMenu>
                    <ThemeSwitch />
                </div>
            </div>
            :
            <></>
    )
}
