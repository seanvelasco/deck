import { useState, useEffect, useCallback } from "react"
import { View, Text } from "react-native"

const formatTime = (date: Date) => {
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const period = hours >= 12 ? "PM" : "AM"
	const formattedHours = hours % 12 || 12
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
	return `${formattedHours}:${formattedMinutes} ${period}`
}

const Clock = () => {
	const [currentTime, setCurrentTime] = useState(formatTime(new Date()))

	const updateTime = useCallback(() => {
		setCurrentTime(formatTime(new Date()))
	}, [])

	useEffect(() => {
		const interval = setInterval(updateTime, 1000)
		return () => clearInterval(interval)
	}, [updateTime])

	return (
		<View>
			<Text>{currentTime}</Text>
		</View>
	)
}

export default Clock
