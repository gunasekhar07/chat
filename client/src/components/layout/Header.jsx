import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import { Group as GroupIcon, Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SearchDialog from '../specific/Search';

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const navigateToGroup = () => navigate('/groups');

  const logoutHandler = () => {
    console.log("Logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: "#ea7070" }}>
          <Toolbar>
            <Typography
              variant='h6'
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat App
            </Typography>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box>
              <IconBtn
                title={'Search'}
                icon={<SearchIcon />}
                onClick={openSearch}
              />
              <IconBtn
                title={'New Group'}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title={'Manage Groups'}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title={'Notifications'}
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title={'Logout'}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && <SearchDialog />}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton
        color='inherit'
        size='large'
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
