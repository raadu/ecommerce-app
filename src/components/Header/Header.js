// Title: Header
// Details: Header components takes text, logo as props and render in Header area.
// Author: raadu

// Dependencies
import HeaderStyle from "./Header.module.scss";

const Header = ({text="Sample Header Text"}) => {
    return (  
        <header className={HeaderStyle.headerArea}>
            <a href="/">{text}</a>
        </header>
    );
}
 
export default Header;