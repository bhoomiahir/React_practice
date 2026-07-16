function Profilecard({ profile }) {
  console.log(profile);
  return (
    <div className="profile-card">
      <h2>ProfileCard</h2>
      <img src={profile.avatar} alt="Hinata" />
      <p>Name: {profile.name}</p>
      <p>Role: {profile.role}</p>
    </div>
  );
}

export default Profilecard;
