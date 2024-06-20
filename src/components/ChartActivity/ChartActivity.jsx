import {
	XAxis,
	Tooltip,
	BarChart,
	CartesianGrid,
	YAxis,
	Bar,
	Legend,
	ResponsiveContainer,
} from 'recharts'

import PropTypes from 'prop-types'

import './ChartActivity.scss'

import ChartTooltip from './ChartTooltip'

function ChartActivity({ data }) {
	return (
		<>
			<h3 className="chartactivity-title">Activité quotidienne</h3>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data} barSize={7} barGap={8}>
					<CartesianGrid strokeDasharray="3" vertical={false} />
					<XAxis
						dataKey="day"
						tick={{ fill: '#9B9EAC' }}
						tickLine={false}
						stroke="#DEDEDE"
						strokeWidth={2}
						tickMargin={16}
						tickFormatter={(day) => new Date(day).getDate()}
					/>
					<YAxis
						yAxisId="kilogram"
						orientation="right"
						tickMargin={30}
						tick={{ fill: '#9B9EAC' }}
						tickLine={false}
						axisLine={false}
						domain={['dataMin-2', 'dataMax+1']}
						tickCount={3}
					/>
					<YAxis hide yAxisId="calories" />
					<Tooltip
						content={<ChartTooltip />}
						cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
					/>
					<Bar
						name="Poids (kg)"
						dataKey="kilogram"
						yAxisId="kilogram"
						fill="#282D30"
						radius={[3, 3, 0, 0]}
					/>
					<Bar
						name="Calories brûlées (kCal)"
						dataKey="calories"
						yAxisId="calories"
						fill="#E60000"
						radius={[3, 3, 0, 0]}
					/>
					<Legend
						verticalAlign="top"
						align="right"
						iconType="circle"
						iconSize="10"
						height={80}
					/>
				</BarChart>
			</ResponsiveContainer>
		</>
	)
}

ChartActivity.propTypes = {
	/**
	 * Data to be displayed in the chart
	 */
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ChartActivity
