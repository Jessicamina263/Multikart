import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComments from '../components/comments';
import './styles.css'


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

const PostDetails = () => {
    const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${postId}`);
        const data = await response.json();

        const updatedPost = {
          ...data,
          image: images[postId - 1],
          date: dates[postId - 1]
        };

        setPost(updatedPost);
      } 
      catch (error) 
      {
        console.error('Error fetching post data:', error);
      }
    };
    fetchPostData();
    }, [postId]);

    if (!post) 
    {
        return <div>Loading...</div>;
    }

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
                <img src={require('../components/blogimgs/about_us.jpg')} alt="About Us" style={{marginLeft: 200}} />
            </div>
            <div style={{marginLeft: 200, marginTop: 40, marginBottom: '100px'}}>
                <h1 style={{fontWeight: 'bold', fontSize: '23px', marginBottom: 10}}>{post.title}</h1>
                <div style={{display: 'flex', color: 'gray', marginBottom: 10}}>
                    <p>{post.date}</p>
                    <pre style={{ color: '#dddcdd'}}> | </pre>
                    <p>Posted by: User{post.userId}</p>
                    <pre style={{ color: '#dddcdd'}}> | </pre>
                    <div style={{ display: 'flex'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                            <path fill="#767777" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                        <span style={{ marginLeft: 3 }}>{post.reactions?.likes || 0}</span>
                        <pre style={{ color: '#dddcdd'}}> | </pre>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                            <path fill="#767777" d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"/>
                        </svg>
                        <span style={{ marginLeft: 3 }}>{post.reactions?.dislikes || 0}</span>
                        <pre style={{ color: '#dddcdd'}}> | </pre>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5">
                            <path fill="#767777" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                        </svg>
                        <span style={{ marginLeft: 3 }}>{post.views || 0}</span>
                        <pre style={{ color: '#dddcdd'}}> | </pre>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5">
                            <path fill="#767777" d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/>
                        </svg>
                        {/* <span style={{ marginLeft: 3 }}>{post.views || 0}</span> */}
                    </div>
                </div>
                {post.tags.map((tag, idx) => (
                    <span key={idx} style={{ marginRight: '5px', background: '#e0e0e0', padding: '2px 8px', borderRadius: '5px', fontSize: '12px', display: 'inline-block' }}>
                        #{tag}
                    </span>
                ))}
                <div style={{width: '1380px', height: '1px', backgroundColor: '#dddcdd', marginTop: '15px', marginBottom: '15px'}}></div>
                <div style={{ color: 'gray', fontSize: '15px', marginBottom: '20px' }}>
                    <p style={{ width: '85%' }}>{post.body} {post.body} {post.body}</p>
                    <p style={{ width: '85%', marginTop: '20px', marginBottom: '20px' }}>{post.body} {post.body}</p>
                    <p style={{ width: '85%' }}>{post.body} {post.body}</p>
                </div>
                <img src={post.image} alt={post.title} style={{width: '45%', marginBottom: '20px'}}/>
                <div>
                    <p style={{ width: '43%', color: 'gray', fontSize: '15px', marginBottom: '20px' }}>{post.body} </p>
                    <p style={{ width: '45%', color: 'gray', fontSize: '15px', marginBottom: '20px' }}>{post.body} {post.body}</p>
                    <p style={{ width: '44%', color: 'gray', fontSize: '15px', marginBottom: '20px' }}>{post.body} {post.body} </p>
                </div>
                <div style={{width: '1380px', height: '1px', backgroundColor: '#dddcdd', marginTop: '15px', marginBottom: '15px'}}></div>
                <PostComments postId={postId} />
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

export default PostDetails;
