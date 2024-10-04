import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const dates = [
    '26 MARCH 2024',
    '28 APRIL 2024',
    '05 MAY 2024',
    '02 SEPTEMBER 2024',
    '30 SEPTEMBER 2024',
    '21 NOVEMBER 2024'
];

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/recipes/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                // Adding the date to the recipe object
                const updatedRecipe = {
                    ...data,
                    date: dates[id - 1] // Use the id to match with the correct date
                };
          
                setRecipe(updatedRecipe);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <div className='flex text-sm' style={{ fontWeight: 'bold', marginLeft: 380, marginTop: 50, marginBottom: 50 }}>
                <p>BLOG</p>
                <div className='flex' style={{ color: '#6e6e6e', marginLeft: 900 }}>
                    <button>
                        <a href="/">HOME</a>
                    </button>
                    <pre> / BLOG / BLOG DETAILS</pre>
                </div>
            </div>
            <div>
                <img src={require('../components/blogimgs/foodblog4.jpeg')} alt="Food Blog" style={{ width: '1370px', marginLeft: 200}} />
            </div>
            <div style={{marginLeft: 200, marginTop: 40, marginBottom: '100px'}}>
                <h1 style={{fontWeight: 'bold', fontSize: '23px', marginBottom: 10}}>{recipe.name}</h1>
                <div style={{display: 'flex', color: 'gray', marginBottom: 10}}>
                    <p>{recipe.date}</p>
                    <pre style={{ color: '#dddcdd'}}> | </pre>
                    <p>Posted by: User{recipe.userId}</p>
                    <pre style={{ color: '#dddcdd'}}> | </pre>
                    <div style={{display: 'flex'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5">
                            <path fill="#767777" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                        </svg>
                        <p style={{marginLeft: '5px'}}>{recipe.rating}</p>
                    </div>
                    <pre style={{ color: '#dddcdd'}}> | </pre>
                    <div style={{display: 'flex'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5">
                                <path fill="#767777" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                        </svg>
                        <span style={{ marginLeft: 3 }}>{recipe.reviewCount}</span>
                    </div>
                    <pre style={{ color: '#dddcdd'}}> | </pre>
                    <div style={{display: 'flex'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5">
                            <path fill="#767777" d="M416 0C400 0 288 32 288 176v112c0 35.3 28.7 64 64 64h32v128c0 17.7 14.3 32 32 32s32-14.3 32-32V352h0V144c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7 0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16v134.2c0 5.4-4.4 9.8-9.8 9.8-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152h-.3l.3-.7.3.7z"/>
                        </svg>
                        <span style={{ marginLeft: 3 }}>{recipe.mealType}</span>
                    </div>
                </div>
                <div style={{ color: 'gray', display: 'flex' , marginBottom: 10}}>
                    <p>Preparation Time in Minutes: {recipe.prepTimeMinutes} MIN</p>
                    <pre style={{ color: '#dddcdd'}}> | </pre>
                    <p>Cooking Time in Minutes: {recipe.cookTimeMinutes} MIN</p>
                </div>
                {recipe.tags.map((tag, idx) => (
                    <span key={idx} style={{ marginRight: '5px', background: '#e0e0e0', padding: '2px 8px', borderRadius: '5px', fontSize: '12px', display: 'inline-block' }}>
                        #{tag}
                    </span>
                ))}
                <div style={{width: '1380px', height: '1px', backgroundColor: '#dddcdd', marginTop: '15px', marginBottom: '15px'}}></div>
                <div style={{ color: 'gray', fontSize: '15px', marginBottom: '20px' }}>
                    <p style={{ width: '85%' }}>Did you know that with these Ingredients:</p>
                    <ol style={{ marginLeft: '20px', paddingLeft: '0', listStyleType: 'decimal' }}>
                        {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} style={{ marginBottom: '5px' }}>{ingredient}</li>
                        ))}
                    </ol>
                    <p>You can make such a delicious {recipe.name}</p>
                </div>
                <img src={recipe.image} alt={recipe.name} style={{width: '45%', marginBottom: '20px'}}/>
                <div>
                    <p style={{ width: '43%', color: 'gray', fontSize: '15px', marginBottom: '20px' }}>{recipe.instructions} </p>
                </div>
                <div style={{width: '1380px', height: '1px', backgroundColor: '#dddcdd', marginTop: '15px', marginBottom: '15px'}}></div>
                <div>
                    <h1 style={{fontWeight: 'bold', fontSize: '37px', marginTop: '20px', marginBottom: '15px'}}>LEAVE YOUR COMMENT</h1>
                    <div>
                        <h6>FullName</h6>
                        <input type="text" placeholder='  Enter Your FullName' style={{width: '1380px', height: '45px', border: '1px solid #dddcdd', textAlign: 'start', marginTop: '10px', marginBottom: '10px'}}/>
                        <h6>UserName</h6>
                        <input type="email" placeholder='  Enter Your UserName' style={{width: '1380px', height: '45px', border: '1px solid #dddcdd', textAlign: 'start', marginTop: '10px', marginBottom: '10px'}}/>
                        <h6>Comment</h6>
                        <textarea name="comment" id="comment" placeholder='  Enter Your Comment' rows={6} style={{width: '1380px', border: '1px solid #dddcdd', marginTop: '10px', marginBottom: '10px'}}></textarea>
                    </div>
                    <button className='subbutton' style={{marginTop: 15}}>POST COMMENT</button>
                </div>
            </div>
        </>
    );
};

export default RecipeDetail;
