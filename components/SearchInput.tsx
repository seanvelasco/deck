import { useState } from "react"
import { View, TextInput, StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create({
	container: {
		flexGrow: 1
	},
	input: {
		color: "#8c9197",
		fontSize: 18,
		fontStyle: "italic",
		padding: 10,
		...(Platform.OS === "web" && {
			outlineStyle: "none"
		})
	}
})

const SearchInput = () => {
	const [searchQuery, setSearchQuery] = useState("")
	return (
		<View style={styles.container}>
			<TextInput
				value={searchQuery}
				onChangeText={setSearchQuery}
				placeholder="Search for games or profiles..."
				style={styles.input}
			/>
		</View>
	)
}

export default SearchInput
