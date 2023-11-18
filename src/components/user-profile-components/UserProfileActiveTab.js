import React from 'react'
import UserLikedSongs from './UserLikedSongs'
import UserEditProfile from './UserEditProfile'

function UserProfileActiveTab({activeTab}) {
  return (
    <div className='user-active-tab-container pt-5 pb-5'>
      {activeTab == 'liked_songs' && <UserLikedSongs />}
      {activeTab == 'edit_profile_user' && <UserEditProfile />}
    </div>
  )
}

export default UserProfileActiveTab