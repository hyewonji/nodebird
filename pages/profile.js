import React from 'react';

import AppLayout from "../components/AppLayout";
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
  const followerList = [{nickname: "zerocho"}, {nickname: 'hyewon'}, {nickname: 'noah'}];
  const followingList = [{nickname: "zerocho"}, {nickname: 'hyewon'}, {nickname: 'noah'}];

  return (
    <AppLayout>
      <NicknameEditForm/>
      <FollowList header="팔로잉 목록" data={followingList}/>
      <FollowList header="팔로워 목록" data={followerList}/>
    </AppLayout>
  );
}

export default Profile;