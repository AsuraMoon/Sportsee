import './Sidebar.scss'

import SidebarButton from '../../components/SidebarButton/SidebarButton'

import yoga from '../../assets/yoga.svg'
import swimming from '../../assets/swimming.svg'
import biking from '../../assets/biking.svg'
import haltere from '../../assets/haltere.svg'

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="sidebar-center">
				<SidebarButton logo={yoga} />
				<SidebarButton logo={swimming} />
				<SidebarButton logo={biking} />
				<SidebarButton logo={haltere} />
			</div>
			<p className="sidebar-copyright">Copyright, SportSee 2020</p>
		</aside>
	)
}

export default Sidebar
