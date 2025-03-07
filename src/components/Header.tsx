import { NavBar } from "./NavBar";

function Header() {


    return (
      <header className='header' >
        <div className='header__container'>
          <div className='header__logo-wrap'>
            <a href="/"><img src="src/assets/book-logo.webp" alt="the logo for books app" /></a>
          </div>
          <NavBar />
        </div>
      </header>
    )
}
export default Header;