import { FlatList, StyleSheet } from "react-native"
import GameCard from "./GameCard"

type Game = {
	id: string
	title: string
	art: string
}

const styles = StyleSheet.create({
	grid: {}
})

const GameCardGrid = ({ library }: { library: Array<Game> }) => (
	<FlatList
		data={library}
		renderItem={({ item }) => <GameCard {...item} />}
		keyExtractor={(item) => item.id}
		numColumns={5}
		style={{ height: "100%", width: "100%" }}
	/>
)

export default GameCardGrid
