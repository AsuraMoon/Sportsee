import PropTypes from 'prop-types'

function ChartAverageTooltip({ active, payload }) {
	if (active && payload && payload.length) {
		return (
			<div className="tooltip">
				<p>{payload[0].value + ' min'}</p>
			</div>
		)
	}
	return null
}

ChartAverageTooltip.propTypes = {
	/**
	 * Whether or not the tooltip is active
	 */
	active: PropTypes.bool,
	/**
	 * The payload of the tooltip
	 */
	payload: PropTypes.arrayOf(PropTypes.object),
}

export default ChartAverageTooltip
