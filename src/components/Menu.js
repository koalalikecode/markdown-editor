import '../style/Menu.css'
import { FaSun, FaMoon } from 'react-icons/fa'

function Menu() {
    function handleTheme() {
        const app = document.querySelector('.App')
        app.classList.toggle('light')
    }
    return (
        <div className="menu-bar">
            <div className="switch-container">
                <input type="checkbox" id="switch" defaultChecked/>
                <label htmlFor="switch" onClick = {handleTheme}>
                    <FaMoon className="fa-moon" />
                    <FaSun className="fa-sun" />
                    <span className="ball"></span>
                </label>
            </div>
        </div>
    )
}

export default Menu