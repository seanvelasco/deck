import { FlatList } from "react-native"
import GameCard from "./GameCard"

type Game = {
	id: string
	title: string
	art: string
}

const GameCardGrid = ({ library }: { library: Array<Game> }) => (
	<FlatList
		data={library}
		renderItem={({ item }) => <GameCard {...item} />}
		keyExtractor={(item) => item.id}
		numColumns={5}
		contentContainerStyle={{ padding: 40, paddingBottom: 0 }}
		columnWrapperStyle={{ gap: 40, marginBottom: 40 }}
		showsVerticalScrollIndicator={false}
	/>
)

export default GameCardGrid
