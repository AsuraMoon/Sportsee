import { NavLink, Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import './Header.scss'

function Header() {

	return (
		<header className="header">
			<Link to="/">
				<img
					src={logo}
					alt="SportSee Logo"
					className="header-logo"
				/>
			</Link>

			<nav className="header-nav">
				<NavLink
					className={({ isActive }) =>
						isActive ? 'header-nav-active' : 'header-nav-link'
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'header-nav-active' : 'header-nav-link'
					}
					to={`/profil/:userId`}
				>
					Profil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'header-nav-active' : 'header-nav-link'
					}
					to="/settings"
				>
					Réglage
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'header-nav-active' : 'header-nav-link'
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
