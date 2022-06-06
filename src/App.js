import { Routes, Route } from 'react-router-dom';
import {
    UseTransition,
    WithUseTransition,
    WithoutUseTransition,
} from './components/UseTransition';

import { SideBar } from './components/SideBar';
import Home from './components/Home';

import S from './style';

export default function App() {
    return (
        <S.App>
            <S.LeftBox>
                <SideBar />
            </S.LeftBox>

            <S.RightBox>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/use-transition/*" element={<UseTransition />}>
                        <Route path="" element={<WithUseTransition />} />
                        <Route
                            path="without"
                            element={<WithoutUseTransition />}
                        />
                    </Route>
                </Routes>
            </S.RightBox>
        </S.App>
    );
}
