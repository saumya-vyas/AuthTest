import './Profile.css';

const Profile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement your profile update logic here
    console.log('Profile update submitted');
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>Profile</h1>
        <p>Manage your account settings</p>
      </div>
      
      <div className="profile-content">
        <div className="profile-info">
          <div className="avatar-section">
            <img 
              src="https://ui-avatars.com/api/?name=User&background=random&size=120" 
              alt="Profile Avatar" 
              className="profile-avatar"
            />
            <button className="btn btn-secondary">Change Avatar</button>
          </div>
          
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue="John Doe"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue="john@example.com"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                rows="4"
                placeholder="Tell us about yourself"
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </form>
        </div>
        
        <div className="profile-actions">
          <h3>Account Actions</h3>
          <button className="btn btn-secondary">Change Password</button>
          <button className="btn btn-danger">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
