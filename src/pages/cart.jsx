import React, { useState, useEffect } from 'react';

const fetchProductById = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
};

const ProductTable = ({ cartItems, onRemove }) => {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const loadProducts = async () => {
            const uniqueCartItems = [...new Set(cartItems)];
            const productsData = await Promise.all(uniqueCartItems.map(id => fetchProductById(id)));
            setProducts(productsData);

            const initialQuantities = uniqueCartItems.reduce((acc, id) => {
                acc[id] = cartItems.filter(item => item === id).length;
                return acc;
            }, {});
            setQuantities(initialQuantities);
        };
        loadProducts();
    }, [cartItems]);

    const handleIncrement = (productId, stock) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.min(prevQuantities[productId] + 1, stock)
        }));
    };

    const handleDecrement = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(prevQuantities[productId] - 1, 1)
        }));
    };

    return (
        <>
            <div className='flex text-sm' style={{ fontWeight: 'bold', marginLeft: 380, marginTop: 50, marginBottom: 50 }}>
                <p>CART</p>
                <div className='flex' style={{ color: '#6e6e6e', marginLeft: 900 }}>
                    <button>
                        <a href="/">HOME</a>
                    </button>
                    <pre> / CART</pre>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{ width: '60%', marginLeft: 350, marginBottom: 20 }}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">Image</th>
                            <th scope="col" className="px-6 py-3">Product Name</th>
                            <th scope="col" className="px-6 py-3">Qty</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                            <th scope="col" className="px-6 py-3">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className="px-6 py-3"><img src={product.thumbnail} alt={product.title} style={{width: '80px'}} /></td>
                                <td className="px-6 py-3" style={{fontWeight: 'bold'}}>{product.title}</td>
                                <td className="px-6 py-3 text-black" style={{ fontWeight: 'bold' }}>
                                    <div>
                                        <button onClick={() => handleDecrement(product.id)} style={{ marginRight: '10px', width: '15px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="black" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                            </svg>
                                        </button>
                                        <span style={{fontSize: 20}}>{quantities[product.id] || 1}</span>
                                        <button onClick={() => handleIncrement(product.id, product.stock)} style={{ marginLeft: '10px', width: '15px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="black" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-3 text-black" style={{fontWeight: 'bold'}}>${product.price}</td>
                                <td className="px-6 py-3">
                                    <button onClick={() => onRemove(product.id)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="remoicon">
                                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 305l135.4 182.9c11.3 13.6 33.8 15.3 45.1 4.1s15.3-33.8 4.1-45.1L233.7 256 376.6 84.5z"/>
                                        </svg>
                                    </button>
                                </td>
                                <td className="px-6 py-3 text-black" style={{fontWeight: 'bold'}}>${((quantities[product.id] || 1) * product.price).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ marginLeft: '350px'}}>
                <h1 style={{marginLeft: '850px', fontWeight: 'bold'}}>Total Price :</h1>
                <div style={{display: 'flex'}}>
                    <button className='subbutton' style={{marginRight: '760px', width: '200px'}}>CONTINUE SHOPPING</button>
                    <button className='subbutton' >CHECK OUT</button>
                </div>
            </div>
        </>
    );
};

export default ProductTable;