import { Routes, Route } from 'react-router-dom';
import UseTranstion from './components/use-transition';
import SideBar from './components/SideBar';
import S from './style';

export default function App() {
	return (
		<S.App>
			<S.LeftBox>
				<SideBar />
			</S.LeftBox>

			<S.RightBox>
				<Routes>
					<Route path='use-transition' element={<UseTranstion />} />
				</Routes>
			</S.RightBox>
		</S.App>
	);
}
