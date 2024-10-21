import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Avatar } from '@mui/material';

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://t3.ftcdn.net/jpg/08/01/51/42/240_F_801514228_6Z79KRXvqOZrAXA3sdF51prZKAK9CB7c.jpg"
            alt="logo"
          />
        </Link>

      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header_icon" />
        <AppsSharpIcon className="header_icon" />
        <NotificationsSharpIcon className="header_icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1496711914408-534a237d7e26?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2lyY2xlfGVufDB8fDB8fHww"
        />
      </div>
    </div>
  );
}

export default Header;
