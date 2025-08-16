import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard</p>
      </div>
      
      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">1,234</p>
          </div>
          <div className="stat-card">
            <h3>Active Sessions</h3>
            <p className="stat-number">56</p>
          </div>
          <div className="stat-card">
            <h3>Total Revenue</h3>
            <p className="stat-number">$12,345</p>
          </div>
        </div>
        
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-time">2 hours ago</span>
              <span className="activity-text">New user registered</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">4 hours ago</span>
              <span className="activity-text">User login successful</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">6 hours ago</span>
              <span className="activity-text">Profile updated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
