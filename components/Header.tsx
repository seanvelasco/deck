import { View } from "react-native"
import SearchInput from "./SearchInput"
import MenuBar from "./MenuBar"

const Header = () => (
	<View
		style={{
			flexDirection: "row",
			alignContent: "space-between",
			width: "100%",
			alignItems: "center"
		}}
	>
		<SearchInput />
		<MenuBar />
	</View>
)

export default Header
