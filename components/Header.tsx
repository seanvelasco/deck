import { View, StyleSheet } from "react-native"
import SearchInput from "./SearchInput"
import MenuBar from "./MenuBar"

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignContent: "space-between",
		width: "100%",
		alignItems: "center",
		paddingLeft: 10,
		paddingRight: 10
	}
})

const Header = () => (
	<View style={styles.header}>
		<SearchInput />
		<MenuBar />
	</View>
)

export default Header
