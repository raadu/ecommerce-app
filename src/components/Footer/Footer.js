// Title: Footer Component
// Details: Footer component to display info at the bottom of page.
// Author: raadu

const Footer = ({text="Human", link="/"}) => {
    return (
        <footer>
            Created by &nbsp;
            <a href={link}>{text}</a>
        </footer>
    );
}
 
export default Footer;