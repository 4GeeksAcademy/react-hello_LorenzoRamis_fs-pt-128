import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbo } from "./Jumbo";
import { Card } from "./Card";

const personajesHoD = [
	{
		id: 1,
		name: "Rhaenyra",
		dragon: "Syrax",
		title: "Princesa de Dragonstone/Heredera al trono",
		casa: "Targaryen",
		padre: "Viserys I Targaryen",
		madre: "Aemma Arryn",
		img: "https://static.wikia.nocookie.net/hieloyfuego/images/7/7c/Rhaenyra_Targaryen_adulta_HotD.jpg/revision/latest?cb=20240322090138"

	},
	{
		id: 2,
		name: "Jacaerys",
		dragon: "Vermax",
		title: "Principe/Heredero al trono",
		casa: "Velaryon",
		padre: "Laenor Velaryon ",
		madre: "Rhaenyra Targaryen",
		img: "https://static.wikia.nocookie.net/hieloyfuego/images/4/4b/Jacaerys_Velaryon_Joven_HBO.png/revision/latest?cb=20240826102408"

	},
	{
		id: 3,
		name: "Daemon",
		dragon: "Caranex",
		title: "Principe/Rey consorte",
		casa: "Targaryen",
		padre: "Baelon Targaryen",
		madre: "Alyssa Targaryen",
		img: "https://static.wikia.nocookie.net/hieloyfuego/images/0/0f/Matt_Smith_como_Daemon_Targaryen_HotD.jpg/revision/latest?cb=20240718184525"

	},
	{
		id: 4,
		name: "Aemond II",
		dragon: "Vhagar",
		title: "Principe/Rey regente",
		casa: "Targaryen",
		padre: "Viserys I Targaryen",
		madre: "Alicent Hightower",
		img: "https://static.wikia.nocookie.net/hieloyfuego/images/3/34/Aemond_Targaryen_adulto_HotD.png/revision/latest?cb=20221028083305"

	}
]
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbo />
			<div className="container">
				<div className="row">
					{
						personajesHoD.map(personajes => {
							return (
								<Card key={personajes.id} personajes={personajes} />
							)
						})
					}
				</div>

			</div>
		</>
	);
};

export default Home;