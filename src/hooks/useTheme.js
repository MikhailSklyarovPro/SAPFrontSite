import { useLocalStorage } from 'usehooks-ts'
import globalConstants from '../config/globalConstants'

export const useTheme = () => {
	const [theme, SetTheme] = useLocalStorage(globalConstants.localStorage.theme.key, globalConstants.localStorage.theme.white)
	const isWhiteMode = theme === globalConstants.localStorage.theme.white
	const isDarkMode = theme === globalConstants.localStorage.theme.dark
	return { theme, SetTheme, isDarkMode, isWhiteMode }
}
