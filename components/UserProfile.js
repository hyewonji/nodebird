import { Button, Card } from "antd";

import PropTypes from 'prop-types';

import Avatar from "antd/lib/avatar/avatar";

import React, { useCallback } from "react";

const UserProfile = ({setIsLogedIn}) => {
  const onLogOut = useCallback(()=>{
    setIsLogedIn(false);
  },[]);
  
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="followers">팔로워<br />0</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>HW</Avatar>}
        title="Hyewon"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}

UserProfile.propTypes = {
  setIsLogedIn : PropTypes.node.isRequired
}

export default UserProfile;