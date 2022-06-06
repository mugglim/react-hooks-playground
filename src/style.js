import styled from 'styled-components';

const App = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
`;

const LeftBox = styled.div`
	width: 15rem;
	border-right: 1px solid #e0e0e0;
`;
const RightBox = styled.div`
	width: 100%;
	padding: 1rem;
`;

export default {
	App,
	LeftBox,
	RightBox,
};
