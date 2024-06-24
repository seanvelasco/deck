import { View, ScrollView, Pressable, Text, StyleSheet } from "react-native"

const pill = StyleSheet.create({
	button: {
		borderRadius: 50,
		padding: 10
	},
	text: {
		color: "white"
	},
	activeButton: {
		backgroundColor: "white"
	},
	activeText: {
		color: "rgba(14,26,37,255)"
	}
})

type Tab = { id: string; title: string; count: number }

const PillButton = ({ title, count }: Tab) => (
	<Pressable
		style={({ pressed }) => [pill.button, pressed && pill.activeButton]}
	>
		{({ pressed }) => (
			<Text
				style={[pill.text, pressed && pill.activeText]}
				selectable={false}
			>
				{title} {count}
			</Text>
		)}
	</Pressable>
)

const Tabs = ({ tabs }: { tabs: Array<Tab> }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center"
			}}
		>
			<Pressable>L1</Pressable>
			<ScrollView horizontal={true}>
				{tabs.map((tab) => (
					<PillButton {...tab} />
				))}
			</ScrollView>
			<Pressable>R1</Pressable>
		</View>
	)
}

export default Tabs
