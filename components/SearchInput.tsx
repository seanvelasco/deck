import { useState } from "react"
import { View, TextInput } from "react-native"

const SearchInput = () => {
	const [searchQuery, setSearchQuery] = useState("")
	// to-do:
	// text is italicized only for placeholder
	return (
		<View
			style={{
				flexGrow: 1
			}}
		>
			<TextInput
				value={searchQuery}
				onChangeText={setSearchQuery}
				placeholder="Search for games or profiles..."
				style={{
					color: "#8c9197",
					fontSize: 18,
					fontStyle: "italic",
					padding: 10
				}}
			/>
		</View>
	)
}

export default SearchInput
