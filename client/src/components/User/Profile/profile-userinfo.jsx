import React from "react";

const ProfileUserInfo = ({ userinfo }) => {
  return (
    <div className="">
      {userinfo.social.length > 0 &&
        userinfo.social.map((userinfo) => (
          <ProfileUserInfoCard userinfo={userinfo} />
        ))}
    </div>
  );
};

const ProfileUserInfoCard = ({ userinfo }) => {
  return (
    <div>
      {userinfo.social.name && (
        <h4 className="about-me-profession">{userinfo.social.name}</h4>
      )}
      {userinfo.social.url && (
        <a className="project-link" href={userinfo.social.url}>
          {userinfo.social.url}
        </a>
      )}
    </div>
  );
};

export default ProfileUserInfo;
