import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3>🏠 Hostel Management</h3>
          <p>Ensuring comfort, safety, and cleanliness for every student.</p>
        </div>

        <div style={styles.section}>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4>Contact Info</h4>
          <p>📍 Pune, Maharashtra, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 hostelhelp@example.com</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        © {new Date().getFullYear()} Hostel Management. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    padding: '40px 20px 10px',
    marginTop: '50px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  section: {
    flex: '1',
    minWidth: '200px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '1.8',
  },
  bottomBar: {
    textAlign: 'center',
    borderTop: '1px solid #334155',
    paddingTop: '10px',
    marginTop: '20px',
    fontSize: '14px',
  },
};

export default Footer;
