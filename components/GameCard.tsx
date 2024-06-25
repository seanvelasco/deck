import { useState } from "react"
import { Pressable, Image, StyleSheet } from "react-native"

type Game = {
	id: string
	title: string
	art: string
}

const styles = StyleSheet.create({
	card: {
		width: 175,
		height: 275
	},
	selectedCard: {
		// borderWidth: 2,
		// borderColor: "yellow"
	},
	image: {
		width: 175,
		height: 275
	}
})

const GameCard = ({ art }: Game) => {
	const [selected, setSelected] = useState(false)
	return (
		<Pressable
			accessible={true}
			accessibilityState={{ selected: selected }}
			onFocus={() => setSelected(true)}
			onBlur={() => setSelected(false)}
			style={styles.card}
		>
			<Image source={{ uri: art }} style={styles.image} />
		</Pressable>
	)
}

export default GameCard
