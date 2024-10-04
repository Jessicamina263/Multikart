import React, { useState, useEffect } from 'react';
import BlogCarousel from '../components/blogs';
import { Link } from 'react-router-dom';

const Blog = ({ posts: initialPosts }) => {

    const [posts, setPosts] = useState(initialPosts || []);
    const [recipes, setRecipes] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(!initialPosts);
    const [loadingRecipes, setLoadingRecipes] = useState(true);
    const [errorPosts, setErrorPosts] = useState(null);
    const [errorRecipes, setErrorRecipes] = useState(null);

    useEffect(() => {
        if (!initialPosts) {
            const fetchPosts = async () => {
                try {
                    const response = await fetch('https://dummyjson.com/posts');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setPosts(data.posts);
                } catch (error) {
                    setErrorPosts(error);
                } finally {
                    setLoadingPosts(false);
                }
            };

            fetchPosts();
        }
    }, [initialPosts]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('https://dummyjson.com/recipes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipes(data.recipes);
            } catch (error) {
                setErrorRecipes(error);
            } finally {
                setLoadingRecipes(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loadingPosts || loadingRecipes) {
        return <p>Loading...</p>;
    }

    if (errorPosts) {
        return <p>Error fetching posts: {errorPosts.message}</p>;
    }

    if (errorRecipes) {
        return <p>Error fetching recipes: {errorRecipes.message}</p>;
    }

    const images = 
    [
        require('../components/blogimgs/blogs/1.jpg'),
        require('../components/blogimgs/blogs/2.jpg'),
        require('../components/blogimgs/blogs/3.jpg'),
        require('../components/blogimgs/blogs/4.jpg'),
        require('../components/blogimgs/blogs/5.jpg'),
        require('../components/blogimgs/blogs/6.jpg')
    ];

    const dates = 
    [
        '26 MARCH',
        '28 APRIL',
        '05 MAY',
        '02 SEPTEMPER',
        '30 SEPTEMPER',
        '21 NOVEMBER'
    ];

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow custom-prev-arrow"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50px',
                    zIndex: 1,
                    cursor: 'pointer',
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    padding: '10px',
                    color: '#fff',
                    transform: 'translateY(-50%)'
                }}
            >
                &#10094;
            </div>
        );
    };
    
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow custom-next-arrow"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '50px',
                    zIndex: 1,
                    cursor: 'pointer',
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    padding: '10px',
                    color: '#fff',
                    transform: 'translateY(-50%)'
                }}
            >
                &#10095;
            </div>
        );
    };

    const settings = 
    {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <div className='flex text-sm' style={{ fontWeight: 'bold', marginLeft: 380, marginTop: 50, marginBottom: 50 }}>
                <p>BLOG</p>
                <div className='flex' style={{ color: '#6e6e6e', marginLeft: 900 }}>
                    <button>
                        <a href="/">HOME</a>
                    </button>
                    <pre> / BLOG</pre>
                </div>
            </div>
            <div style={{ marginTop: '50px', display: 'flex', marginBottom: '50px', marginLeft: '30px'}}>
                <div>
                    <div style={{border: '1px solid #ddd', width: '400px', height: '710px', marginLeft: '250px', marginRight: '10px', marginTop: '20px'}}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '20px', marginLeft: '20px' }}>POPULAR RECIPES</h1>
                        {recipes.slice(0, 5).map((recipe, index) => (
                            <Link key={recipe.id} to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ padding: '10px', boxSizing: 'border-box', marginLeft: '20px' }}>
                                    <div style={{ display: 'flex'}}>
                                        <img src={recipe.image} alt={recipe.name} style={{ width: '30%' }} />
                                        <div style={{marginLeft: '10px', marginTop: '10px'}}>
                                            <h5 style={{ color: '#364c66', fontWeight: 'bold' }}>{dates[index % dates.length]} 2024</h5>
                                            <h2 style={{ color: 'black', fontSize: '15px', fontWeight: 'bold' }}>{recipe.name}</h2>
                                            <p>{recipe.cuisine}</p>
                                            {recipe.tags.map((tag, idx) => (
                                                <span key={idx} style={{ marginRight: '5px', background: '#e0e0e0', padding: '2px 8px', borderRadius: '5px', fontSize: '12px', display: 'inline-block' }}>
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div style={{border: '1px solid #ddd', width: '400px', height: '840px', marginLeft: '250px', marginRight: '10px', marginTop: '40px'}}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '20px', marginLeft: '20px' }}>RECENT BLOG</h1>
                        {posts.slice(0 , 6).map((post, index) => (
                            <Link key={post.id} to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ padding: '10px', boxSizing: 'border-box', marginLeft: '20px' }}>
                                    <div style={{ display: 'flex', color: '#6e6e6e' }}>
                                        <img src={images[index % images.length]} alt="" style={{ width: '40%' }} />
                                        <div style={{ marginLeft: '10px'}}>
                                            <h5 style={{ color: '#364c66', fontWeight: 'bold' }}>{dates[index % dates.length]} 2024</h5>
                                            <h2 style={{ color: 'black', fontSize: '13px', fontWeight: 'bold' }}>{post.title}</h2>
                                            <div style={{display: 'flex'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                                                    <path fill="#6e6e6e" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <span style={{ marginLeft: 3 }}>{post.reactions.likes}</span>
                                            </div>
                                            {post.tags.map((tag, idx) => (
                                                <span key={idx} style={{ marginRight: '5px', background: '#e0e0e0', padding: '2px 8px', borderRadius: '5px', fontSize: '12px', display: 'inline-block' }}>
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div style={{border: '1px solid #ddd', width: '400px', height: '860px', marginLeft: '250px', marginTop: '40px'}}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '20px', marginLeft: '20px' }}>POPULAR BLOGS</h1>
                        {posts.slice(0 , 3).map((post, index) => (
                            <Link key={post.id} to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ padding: '10px', boxSizing: 'border-box', marginLeft: '20px', marginRight: '20px' }}>
                                    <div style={{ display: 'flex', color: '#6e6e6e' }}>
                                        <div style={{width: '75px', height: '70px', backgroundColor: '#3e5168'}}>
                                            <h5 style={{ color: 'white', textAlign: 'center', marginTop: '15px', width: '50px', marginLeft: '10px' }}>{dates[index % dates.length]}</h5>
                                        </div>
                                        <div style={{ marginLeft: '10px'}}>
                                            <h2 style={{ color: 'black', fontSize: '14px', fontWeight: 'bold' }}>{post.title}</h2>
                                            <div style={{display: 'flex', marginTop: '8px'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                                                    <path fill="#6e6e6e" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <span style={{ marginLeft: 3 }}>{post.reactions.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p style={{ height: '5%', marginTop: '10px', fontSize: '13px' }}>{post.body}</p>
                                    {post.tags.map((tag, idx) => (
                                    <span key={idx} style={{ marginRight: '5px', background: '#e0e0e0', padding: '2px 8px', borderRadius: '5px', fontSize: '12px', display: 'inline-block' }}>
                                        #{tag}
                                    </span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <BlogCarousel />
            </div>
        </>
    );
}

export default Blog;
