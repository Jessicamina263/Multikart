import React, { useEffect, useState } from 'react';

const images = [
    require('../components/blogimgs/avatar1.jpg'),
    require('../components/blogimgs/avatar2.jpg'),
    require('../components/blogimgs/avatar3.jpg'),
];

const dates = [
    '( 26 MARCH 2024 At 11:00 PM )',
    '( 27 AUGUST 2024 At 1:00 AM )',
    '( 28 AUGUST 2024 At 3:00 PM )'
];

const PostComments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/comments/post/${postId}`)
      .then(res => res.json())
      .then(data => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [postId]);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error fetching comments: {error.message}</p>;

  return (
    <div>
      {comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={comment.id} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={images[index % images.length]} alt="User avatar" style={{ borderRadius: '50%', width: '65px', height: '65px', marginRight: '10px' }}/>
                    <div>
                        <div style={{ display: 'flex', color: 'gray'}}>
                            <p style={{ marginRight: '10px', color: 'black' }}>{comment.user.fullName}</p>
                            <p >{dates[index % dates.length]}</p>
                        </div>
                        <p style={{ fontWeight: 'bold', color: 'gray' }}>@{comment.user.username}</p>
                        <p style={{ color: 'gray' }}>{comment.body}</p>
                        <div style={{ display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                                <path fill="#767777" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>
                        <span style={{ marginLeft: 3, color: 'gray' }}>{comment.likes || 0}</span>
                    </div>
                    </div>
                </div>
                <div style={{ width: '1380px', height: '1px', backgroundColor: '#dddcdd', marginTop: '15px', marginBottom: '15px' }}></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostComments;
