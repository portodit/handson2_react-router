import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usersData } from '../data/UserData';
import './UserDetail.css';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = usersData.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  const handlePrevious = () => {
    const previousUser = usersData.find((u) => u.id === user.id - 1);
    if (previousUser) navigate(`/user/details/${previousUser.id}`);
  };

  const handleNext = () => {
    const nextUser = usersData.find((u) => u.id === user.id + 1);
    if (nextUser) navigate(`/user/details/${nextUser.id}`);
  };

  return (
    <div className="user-detail-container">
      <h2 className="user-detail-headline">Detail Mentee Contact</h2>
      <div className="user-detail-table">
        <div className="user-detail-row">
          <div className="user-detail-label">Name:</div>
          <div className="user-detail-value">{user.name}</div>
        </div>
        <div className="user-detail-row">
          <div className="user-detail-label">Username:</div>
          <div className="user-detail-value">{user.username}</div>
        </div>
        <div className="user-detail-row">
          <div className="user-detail-label">Email:</div>
          <div className="user-detail-value">{user.email}</div>
        </div>
        <div className="user-detail-row">
          <div className="user-detail-label">Phone:</div>
          <div className="user-detail-value">{user.phone}</div>
        </div>
        <div className="user-detail-row">
          <div className="user-detail-label">Website:</div>
          <div className="user-detail-value">{user.website}</div>
        </div>
        <div className="user-detail-row">
          <div className="user-detail-label">Address:</div>
          <div className="user-detail-value">
            {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </div>
        </div>
        <div className="user-detail-row">
          <div className="user-detail-label">Company:</div>
          <div className="user-detail-value">
            {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
          </div>
        </div>
      </div>
      <div className="user-detail-navigation">
        <button className="navigation-button" onClick={handlePrevious} disabled={user.id === 1}>Previous</button>
        <button className="navigation-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default UserDetail;
