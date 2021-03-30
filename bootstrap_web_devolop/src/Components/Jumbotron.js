import React, { Component } from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import tree from '../img/tree.jpg';
import styled from 'styled-components';

const Styled = styled.div`
	.jumbo {
		background: url(${tree}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		height: 400px;
		position: relative;
		z-index: -2;
	}
	.overlay {
		background-color: #000;
		opacity: 0.7;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: -1;
	}
`;

const Jumbotron = () => (
	<Styled>
		<Jumbo fluid className="jumbo">
			<div className="ovarlay" />
			<Container>
				<h1>WebDev Blog</h1>
				<p>
					Вот как изменились актеры комедийной саги «Такси»: Даниэль, Эмильен, Лили, Петра и, конечно,
					комиссар Жибер! Коничиуа, банзай, кобра, ниндзяяя! 😊Вот как изменились актеры комедийной саги
					«Такси»: Даниэль, Эмильен, Лили, Петра и, конечно, комиссар Жибер! Коничиуа, банзай, кобра,
					ниндзяяя! 😊Вот как изменились актеры комедийной саги «Такси»: Даниэль, Эмильен, Лили, Петра и,
					конечно, комиссар Жибер! Коничиуа, банзай, кобра, ниндзяяя! 😊
				</p>
			</Container>
		</Jumbo>
	</Styled>
);
export default Jumbotron;
