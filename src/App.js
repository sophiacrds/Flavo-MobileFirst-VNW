import React from "react";
import {
	BtnBox,
	Cart,
	Division,
	GlobalStyle,
	Header,
	Info,
	Label,
	Page,
	Product,
	Sizes,
} from "./style.js";
import cosiness from "./img/cosiness.png";
import intensity from "./img/intensity.png";
import passion from "./img/passion.png";
import bagIcon from "./img/bag.png";
import menuIcon from "./img/menu.png";

export default class App extends React.Component {
	state = {
		products: [
			{
				img: passion,
				name: "PASSION",
				price: 15,
				ingredients: "Chili, oregano, safran, paprika",
				digest: "This one will add a little savoury flavour to any food and turn any meal to a culinary masterpiece",
			},
			{
				img: intensity,
				name: "INTENSITY",
				price: 20,
				ingredients: "Gorgonzola cheese, tomato, parsley",
				digest: "This one was made especially for fish, offering a huge complexity of flavors with unique acidity and saltness.",
			},
			{
				img: cosiness,
				name: "COSINESS",
				price: 23,
				ingredients: "Tamara, burnt sugar, fennel",
				digest: "With the sweetest flavor, this blend is perfect for citrus combinations. Salted caramel notes stand out.",
			},
		],
		num: 0,
		btn: false,
	};

	add = () => {
		this.setState({ num: this.state.num + 1 });
	};

	sub = () => {
		return this.state.num
			? this.setState({ num: this.state.num - 1 })
			: null;
	};

	select = (e) => {
		const buttonLabel = e.target;
		const btn = this.state.btn;

		if (!btn) {
			this.setState({ btn: true });
			buttonLabel.style.background = "black";
		} else {
			this.setState({ btn: false });
			buttonLabel.style.background = "transparent";
		}
	};

	render() {
		return (
			<>
				<GlobalStyle />
				<Header>
					<img src={menuIcon} alt="" />
					<h1>flavo</h1>
					<img src={bagIcon} alt="" />
				</Header>
				<Page>
					{this.state.products.map((i, index) => (
						<section key={index}>
							<Product src={i.img} alt="" />
							<Label>
								<h2>{i.name}</h2>
								<p>${i.price}</p>
							</Label>
							<Info>
								<h3>What's inside</h3>
								<p>{i.ingredients}</p>
								<h3>Why we love it</h3>
								<p>{i.digest}</p>
							</Info>
							<Sizes>
								<div>
									<input type="checkbox" name="size" id="" />
									<label
										htmlFor="size"
										onClick={this.select}
									></label>
									<p>BAG (75g)</p>
								</div>
								<div>
									<input type="checkbox" name="sizer" id="" />
									<label
										htmlFor="size"
										onClick={this.select}
									></label>
									<p>JAR (150g)</p>
								</div>
							</Sizes>
							<BtnBox>
								<button onClick={this.sub}>-</button>
								<p>{this.state.num}</p>
								<button onClick={this.add}>+</button>
							</BtnBox>
							<Division />
						</section>
					))}
					<Cart>ADD TO CART</Cart>
				</Page>
			</>
		);
	}
}
