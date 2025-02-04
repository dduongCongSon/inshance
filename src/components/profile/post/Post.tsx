import React, { useEffect, useState } from 'react';
import './Post.css'; 
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 

interface Post {
  id: number;
  userId: number;
  title: string;
  description: string;
  status: boolean; // Dùng boolean để biểu thị trạng thái thích
  imageUrl: string;
  createDate: string;
  updateDate: string;
}

const Post: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  useEffect(() => {
    fetch('https://67a02fce24322f8329c57050.mockapi.io/posts')
      .then(res => res.json())
      .then(data => {
        const updatedData = data.map((post: Post) => ({
          ...post,
          status: post.status === true,
        }));
        setPosts(updatedData);
      })
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  const handleImageClick = (post: Post) => {
    setSelectedPost(post);
  };

  const closePopup = () => {
    setSelectedPost(null);
    setIsEditing(false);
  };

  const toggleLike = (post: Post) => {
    const updatedPosts = posts.map(p => 
      p.id === post.id ? { ...p, status: !p.status } : p
    );
    setPosts(updatedPosts);
    setSelectedPost(prev => prev ? { ...prev, status: !prev.status } : null);
  };

  const handleEdit = (post: Post) => {
    setIsEditing(true);
    setEditedTitle(post.title);
    setEditedDescription(post.description);
    setSelectedPost(post);
  };

  const saveEdit = () => {
    const updatedPost = {
      ...selectedPost,
      title: editedTitle,
      description: editedDescription,
    };

    fetch(`https://67a02fce24322f8329c57050.mockapi.io/posts/${selectedPost?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then(res => res.json())
      .then(data => {
        const updatedPosts = posts.map(p => (p.id === data.id ? data : p));
        setPosts(updatedPosts);
        closePopup();
      })
      .catch(err => console.error('Error updating post:', err));
  };

  const handleDelete = (post: Post) => {
    fetch(`https://67a02fce24322f8329c57050.mockapi.io/posts/${post.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedPosts = posts.filter(p => p.id !== post.id);
        setPosts(updatedPosts);
        closePopup();
      })
      .catch(err => console.error('Error deleting post:', err));
  };

  return (
    <div className="post-container">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="post-image" 
            onClick={() => handleImageClick(post)} 
          />
        </div>
      ))}

      {selectedPost && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>X</button>
            {isEditing ? (
              <div>
                <input 
                  type="text" 
                  value={editedTitle} 
                  onChange={e => setEditedTitle(e.target.value)} 
                  placeholder="Edit Title" 
                />
                <textarea 
                  value={editedDescription} 
                  onChange={e => setEditedDescription(e.target.value)} 
                  placeholder="Edit Description" 
                />
                <button onClick={saveEdit}>Save</button>
              </div>
            ) : (
              <div>
                <h2>{selectedPost.title}</h2>
                <img src={selectedPost.imageUrl} alt={selectedPost.title} className="popup-image" />
                <p>{selectedPost.description}</p>
                <div onClick={() => toggleLike(selectedPost)} style={{ cursor: "pointer" }}>
                  {selectedPost.status ? (
                    <FavoriteIcon className="heart-icon" style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon className="heart-icon" />
                  )}
                </div>
                <button onClick={() => handleEdit(selectedPost)}>Edit</button>
                <button onClick={() => handleDelete(selectedPost)}>Delete</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
