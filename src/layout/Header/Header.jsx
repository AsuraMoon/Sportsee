import { NavLink, Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import './Header.scss'

function Header() {

	return (
		<header className="nav-wrapper">
			<Link to="/">
				<img
					src={logo}
					alt="SportSee Logo"
					className="nav-logo vertical-center"
				/>
			</Link>
			<nav className="nav vertical-center">
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to={`/profil`}
				>
					Profil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/settings"
				>
					Réglage
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/community"
				>
					Communauté
				</NavLink>
			</nav>
		</header>
	)
}

export default Header
