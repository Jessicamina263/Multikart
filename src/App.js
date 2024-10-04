import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/home.jsx';
import Blog from './pages/blog.jsx';
import Sidebar from './components/homecomponents/Sidebar.jsx';
import Search from './components/homecomponents/Search.jsx';
import ProductsCarousel from './pages/productscar.jsx';
import ProductTable from './pages/cart.jsx';
import ConHome from './components/homecomponents/restofhome.jsx';
import PageFooter from './components/homecomponents/footer.jsx';
import PostDetails from './pages/blogdetail.jsx';
import RecipeDetail from './pages/recipedetails.jsx';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    const openSearchbar = () => setIsSearchOpen(true);
    const closeSearchbar = () => setIsSearchOpen(false);

    const handleAddToCart = (productId) => {
        setCartItems(prev => [...prev, productId]);
    };

    const handleRemove = (productId) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item !== productId));
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Router>
            <div>
                <NavBar toggleSidebar={toggleSidebar} openSearchbar={openSearchbar} />
                <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} onCategorySelect={handleCategorySelect} />
                <Search openSearch={isSearchOpen} closeSearchbar={closeSearchbar} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Home />
                            <ProductsCarousel
                                onAddToCart={handleAddToCart}
                                selectedCategory={selectedCategory}
                            />
                            <ConHome />
                            <PageFooter />
                        </>
                    } />
                    <Route
                        path="/cart"
                        element={
                            <>
                                <ProductTable cartItems={cartItems} onRemove={handleRemove} />
                                <PageFooter />
                            </>
                        }
                    />
                    <Route path="/blog" element=
                    {
                        <>
                            <Blog />
                            <PageFooter />
                        </>
                    } />
                    <Route path="/post/:postId" element=
                    {
                        <>
                            <PostDetails />
                            <PageFooter />
                        </>
                    } />
                    <Route path="/recipe/:id" element=
                    {
                        <>
                            <RecipeDetail />
                            <PageFooter />
                        </>
                    } />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
