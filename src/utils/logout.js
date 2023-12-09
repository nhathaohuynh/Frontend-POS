import path from './path'
export const logout = () => {
	window.location.replace(`http://localhost:3001/${path.LOGIN}`)
	localStorage.clear()
}
