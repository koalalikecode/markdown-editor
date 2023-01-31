import { AiOutlineFile, AiOutlineSave } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import '..//style/Header.css';
import Menu from './Menu'

function Header() {
    function handleClick() {
        const menu = document.querySelector('.menu_icon')
        menu.classList.toggle('clicked');
        if (menu.classList.contains('clicked')) {
            document.querySelector(".menu-bar").style.width = "250px";
        } else {
            document.querySelector(".menu-bar").style.width = "0";
        }
    }
    return (
        <header className="header">
            <div className="menu">
                <div className="menu_icon" onClick = {handleClick}>
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                </div>
            </div>
            <Menu />
            <h1 className="logo">MARKDOWN</h1>
            <div className="tool">
                <div className="file-name">
                    < AiOutlineFile className="file-icon" />
                    <div className="file-name-container">
                        <p>Document Name</p>
                        <input type="text" placeholder="document.md"/>
                    </div>
                </div>
                <div className="del-save">
                    < RiDeleteBinLine className = "del-icon"/>
                    <button>
                        < AiOutlineSave className="save-icon"/>
                        Save Changes
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header