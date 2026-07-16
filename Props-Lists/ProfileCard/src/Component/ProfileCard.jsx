function Profilecard(profile) {
  console.log(profile);
  return (
    <div className="profile-card">
      <h2>ProfileCard</h2>
      <img src={profile.profile.avatar} alt="Hinata" />
      <p>Name: {profile.profile.name}</p>
      <p>Role: {profile.profile.role}</p>
    </div>
  );
}

export default Profilecard;
