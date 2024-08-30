import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { usersData } from '../data/UserData';
import './Users.css';

const Users = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDetailClick = (id) => {
    navigate(`/user/details/${id}`);
  };

  const totalPages = Math.ceil(usersData.length / itemsPerPage);

  return (
    <div className="users-container">
      <h2 className="users-title">User List Page</h2>
      <p className="users-description">
        Halaman ini menampilkan daftar mentee yang terdaftar. Anda bisa melihat detail informasi pengguna dengan menekan tombol 'Detail'.
      </p>
      
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Username</th>
              <th>Email</th>
              <th>Telepon</th>
              <th>Perusahaan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
                <td>
                  <button 
                    className="detail-button" 
                    onClick={() => handleDetailClick(user.id)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Users;
