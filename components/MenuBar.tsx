import { View, Text } from "react-native"
import Clock from "./Clock"

const MenuBar = () => {
	// Display sound, networking, battery, time, and account information here
	return (
		<View>
			<Clock />
		</View>
	)
}

export default MenuBar
