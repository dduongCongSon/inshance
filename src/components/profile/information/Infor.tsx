import React, { useEffect, useState } from 'react';
import './Infor.css';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  createDate: string;
}

const Infor = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetch('https://67a32451409de5ed52578cc6.mockapi.io/users')
      .then(res => res.json())
      .then(data => {
        // API trả về một mảng, nên ta lấy phần tử đầu tiên
        setProfile(data[0])
      })
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-cover">
          <img 
            src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74" 
            alt="cover" 
            className="cover-image"
          />
        </div>
        <div className="profile-avatar">
          <img 
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${profile.name}`}
            alt="avatar" 
            className="avatar-image"
          />
        </div>
      </div>
      
      <div className="profile-info">
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-email">{profile.email}</p>
        <p className="profile-date">Joined: {new Date(profile.createDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Infor;