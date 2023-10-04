import PropTypes from 'prop-types'

import './ChartsCard.scss'

function ChartsCard({ className, content }) {
	return <div className={'charts-card ' + className}>{content}</div>
}

ChartsCard.propTypes = {
	/**
	 * Class name of the charts-card
	 */
	className: PropTypes.string,
	/**
	 * Content of the charts-card
	 */
	content: PropTypes.object.isRequired,
}

export default ChartsCard
