import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		margin: 0px;
		padding: 0;
		box-sizing: border-box;
        color: #000 // prevent IOS buttons default mode (blue text)
	}
    :root{
        --titleFont: 'Anybody';
        --pFont: 'Bellota Text';
        --bgYellow: #F0B542;
        --secColor: #FDECC1;
        --titleSize: 35px;
        --priceSize: 30px;
        --subTitle: 25px;
        --pSize: 20px;
        --roundBoxH: 45px
    }
    body{
        background-color: var(--bgYellow);
    }
`;
export const Page = styled.main`
	display: none;
	@media (max-width: 425px) {
		display: block;
		margin: 20px;
		padding: 0 0 25px 0;
	}
`;
export const Header = styled.header`
	display: none;

	@media (max-width: 425px) {
		background: var(--secColor);
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: calc(100% - 40px);
		height: var(--roundBoxH);
		margin: 20px 20px 0px;
		border-radius: 50px;
		h1 {
			font-family: "Merienda", cursive;
		}

		img {
			width: 30px;
			height: 30px;
			margin: 0 20px;
		}
	}
`;
export const Product = styled.img`
	display: none;
	@media (max-width: 425px) {
		display: block;
		width: 75%;
		margin: 30px auto;
	}
`;
export const Label = styled.div`
	display: none;
	@media (max-width: 425px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		h2 {
			font-size: var(--titleSize);
			font-family: var(--titleFont);
		}
		p {
			font-size: var(--priceSize);
			font-family: var(--pFont);
		}
	}
`;
export const Info = styled.div`
	display: none;
	@media (max-width: 425px) {
		display: block;
		margin: 15px 0 30px;
		h3 {
			font-size: var(--subTitle);
			margin: 0;
			font-family: var(--titleFont);
		}
		p {
			font-size: var(--pSize);
			margin: 5px 0 20px;
			font-family: var(--pFont);
			font-weight: 500;
		}
	}
`;
export const Sizes = styled.div`
	display: none;
	@media (max-width: 425px) {
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 40px;
		div {
			display: flex;
			width: fit-content;
			align-items: center;
			justify-content: space-between;
		}
		input {
			display: none;
		}
		p {
			font-size: var(--pSize);
			font-family: var(--pFont);
		}
		input[type="checkbox"]:checked + label span {
			background: black;
		}
		input[type="checkbox"]:checked + label p {
			font-size: 22px;
		}
		span {
			width: 15px;
			height: 15px;
			border-radius: 15px;
			border: 1px solid black;
			position: relative;
			background: transparent;
		}
		label {
			height: 1.1rem;
			width: 130px;
			display: flex;
			align-items: center;
			gap: 5px;
			cursor: pointer;
		}
	}
`;
export const BtnBox = styled.div`
	display: none;
	@media (max-width: 425px) {
		background: transparent;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: var(--roundBoxH);
		margin: 30px auto 50px 0;
		border: 2px solid black;
		border-radius: 50px;
		font-size: 25px;
		font-family: var(--titleFont);
		button {
			height: fit-content;
			width: 15%;
			border: none;
			background: transparent;
			margin: 0 10px;
			font-size: 30px;
			padding: 0;
			cursor: pointer;
		}
	}
`;
export const Cart = styled.button`
	display: none;
	@media (max-width: 425px) {
		background: black;
		color: var(--bgYellow);
		display: flex;
		justify-content: center;
		align-items: center;
		width: calc(100% - 40px);
		height: var(--roundBoxH);
		margin: 0 auto;
		border-radius: 50px;
		font-size: 20px;
		font-weight: bold;
		position: fixed;
		bottom: 20px;
		border: none;
		:active {
			background: var(--secColor);
			color: black;
			border: 2px solid black;
		}
	}
`;
export const Division = styled.div`
	width: 100%;
	height: 0.5px;
	background: black;
	opacity: 0.3;
`;
