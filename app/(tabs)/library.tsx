import { View, StyleSheet } from "react-native"
import Header from "@/components/Header"
import Tabs from "@/components/Tabs"
import GameCardGrid from "@/components/GameCardGrid"
import type { PropsWithChildren } from "react"

const styles = StyleSheet.create({
	root: {
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(14,26,37,255)"
	}
})

const sampleTabs = [
	{
		id: "",
		title: "Great on Deck",
		count: 39
	},
	{
		id: "",
		title: "All games",
		count: 83
	},
	{
		id: "",
		title: "Installed",
		count: 17
	},
	{
		id: "",
		title: "Favorites",
		count: 7
	},
	{
		id: "",
		title: "Collections",
		count: 3
	},
	{
		id: "",
		title: "None-Steam",
		count: 0
	},
	{
		id: "",
		title: "Soundtracks",
		count: 1
	}
]

const library = [
	{
		id: "cs",
		title: "Counter-Strike 2",
		art: ""
	}
]

const SteamDeckView = ({ children }: PropsWithChildren) => (
	<View style={styles.root}>
		<Header />
		{children}
	</View>
)

const LibraryScreen = () => {
	return (
		<SteamDeckView>
			<Tabs tabs={sampleTabs} />
			<GameCardGrid library={library} />
		</SteamDeckView>
	)
}

export default LibraryScreen
