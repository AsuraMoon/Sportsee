import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
	PolarRadiusAxis,
	Text,
} from 'recharts'
import PropTypes from 'prop-types'

function ChartPerformance({ data }) {
	/**
	 * Function to render the labels of the chart in a Text component
	 *
	 * @param { Object } payload - The payload of the labels
	 * @param { Number } x - The x position of the label
	 * @param { Number } y - The y position of the label
	 * @param { Number } cx - The x position of the center of the label
	 * @param { Number } cy - The y position of the center of the label
	 * @param { Object } rest - The rest of the props of the label
	 * @returns A function that returns a Text component
	 */
	const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
		/**
		 * Function to translate the labels of the chart
		 *
		 * @param { String } value - The value of the label
		 * @returns { String } The translated value of the label
		 */
		const formatLabel = (value) => {
			if (value === 'Energy') return 'Energie'
			if (value === 'Strength') return 'Force'
			if (value === 'Speed') return 'Vitesse'
			if (value === 'Intensity') return 'Intensité'
			return value
		}

		return (
			<Text
				{...rest}
				verticalAnchor="middle"
				y={y + (y - cy) / 10}
				x={x + (x - cx) / 100}
				fill="#FFFFFF"
				fontSize="0.75rem"
			>
				{formatLabel(
					data.kind[payload.value].charAt(0).toUpperCase() +
						data.kind[payload.value].slice(1)
				)}
			</Text>
		)
	}

	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius={90} data={[...data.data].reverse()}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="kind"
						tick={(props) => renderPolarAngleAxis(props)}
					/>
					<PolarRadiusAxis
						tickCount={6}
						tick={false}
						axisLine={false}
					/>
					<Radar
						dataKey="value"
						stroke="#FF0101"
						fill="#FF0101"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</>
	)
}

ChartPerformance.propTypes = {
	/**
	 * Data to be displayed in the chart
	 */
	data: PropTypes.object.isRequired,
}

export default ChartPerformance
