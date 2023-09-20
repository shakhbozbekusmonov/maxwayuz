import { Routes, Route, Navigate } from "react-router-dom";
import { FiliallarPage, ForChildrenPage, HomePage, MenuPage } from "../pages";
import Header from "../components/Header";

const Root = () => {
    return (
        <>
            <Routes>
                <Route element={<Header />}>
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/menu' element={<MenuPage />} />
                    <Route path='/for-children' element={<ForChildrenPage />} />
                    <Route path='/filiallar' element={<FiliallarPage />} />
                    <Route path='/' element={<Navigate to='/home' />} />
                </Route>
            </Routes>
        </>
    );
};

export default Root;
