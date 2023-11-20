import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, DetailsPage, ErrorPage } from '../../pages';
import Menu from '../Menu';

const Router = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;