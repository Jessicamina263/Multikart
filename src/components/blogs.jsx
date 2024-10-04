import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    require('../components/blogimgs/blogs/1.jpg'),
    require('../components/blogimgs/blogs/2.jpg'),
    require('../components/blogimgs/blogs/3.jpg'),
    require('../components/blogimgs/blogs/4.jpg'),
    require('../components/blogimgs/blogs/5.jpg'),
    require('../components/blogimgs/blogs/6.jpg')
];

const dates = [
    '26 MARCH 2024',
    '28 APRIL 2024',
    '05 MAY 2024',
    '02 SEPTEMPER 2024',
    '30 SEPTEMPER 2024',
    '21 NOVEMBER 2024'
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

const BlogCarousel = ({ posts: initialPosts }) => {
    const [posts, setPosts] = useState(initialPosts || []);
    const [loading, setLoading] = useState(!initialPosts);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };
            

            fetchPosts();
        }
    }, [initialPosts]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching posts: {error.message}</p>;
    }

    const groupedPosts = [];
    for (let i = 0; i < posts.length; i += 6) {
        groupedPosts.push(posts.slice(i, i + 6));
    }

    const settings = {
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

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    return (
        <div style={{ position: 'relative', width: '80%', overflow: 'hidden', margin: '0 auto' }}>
            {groupedPosts.length === 0 ? (
                <p>No blog posts available.</p>
            ) : (
                <Slider {...settings}>
                    {groupedPosts.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            {group.map((post, index) => (
                                <div key={post.id} style={{ display: 'flex',flexDirection: 'row',justifyContent: 'space-between', marginLeft: '130px', cursor: 'pointer'}} onClick={() => handlePostClick(post.id)}>
                                    <div style={{ padding: '10px', boxSizing: 'border-box', width: '100%', display: 'flex', marginTop: '30px' }}>
                                        <img src={images[index % images.length]} alt="" style={{ width: '40%'}} />
                                        <div style={{ marginTop: '20px', marginLeft: '10px' }}>
                                            <h5 style={{color: '#364c66',fontWeight: 'bolder',fontSize: '24px'}}>{dates[index % dates.length]}</h5>
                                            <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}>{post.title}</h2>
                                            <div style={{display: 'flex',marginTop: '10px',marginBottom: '10px'}}>
                                                <div style={{ display: 'flex', marginTop: '10px', marginBottom: '10px' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                                                        <path fill="#6e6e6e" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                    </svg>
                                                    <span style={{ marginLeft: 3 }}>{posts[index + 1].reactions?.likes || 0}</span>
                                                    <pre> | </pre>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                                                        <path fill="#6e6e6e" d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"/>
                                                    </svg>
                                                    <span style={{ marginLeft: 3 }}>{posts[index + 1].reactions?.dislikes || 0}</span>
                                                    <pre> | </pre>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5">
                                                        <path fill="#6e6e6e" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                                    </svg>
                                                    <span style={{ marginLeft: 3 }}>{posts[index + 1].views || 0}</span>
                                                </div>
                                            </div>
                                            {post.tags.map((tag, idx) => (
                                                <span key={idx} style={{ marginRight: '5px', background: '#e0e0e0', padding: '2px 8px', borderRadius: '5px', fontSize: '12px', display: 'inline-block' }}>
                                                    #{tag}
                                                </span>
                                            ))}
                                            <p style={{ width: '75%', marginTop: '10px' }}>{post.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default BlogCarousel;
