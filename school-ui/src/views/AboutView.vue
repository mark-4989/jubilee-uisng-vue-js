<template>
  <div class="about-view">
    <!-- Hero Banner Section -->
    <section class="about-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <h1>About Riruta Jubilee Academy</h1>
          <p class="hero-subtitle">Nurturing young minds since 1998</p>
        </div>
      </div>
    </section>

    <!-- Mission & Values Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-content" data-aos="fade-right">
            <h2>Our Mission & Vision</h2>
            <div class="mission-statement">
              <p>"To provide a safe, inclusive, and stimulating learning environment that empowers students to become confident, compassionate, and lifelong learners who make a positive difference in their community and the world."</p>
            </div>
            <div class="core-values">
              <h3>Our Core Values</h3>
              <ul>
                <li data-aos="fade-right" data-aos-delay="100">
                  <span class="value-icon">✓</span>
                  <span class="value-text">Excellence in Learning</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="200">
                  <span class="value-icon">✓</span>
                  <span class="value-text">Respect for All</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="300">
                  <span class="value-icon">✓</span>
                  <span class="value-text">Creativity & Innovation</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="400">
                  <span class="value-icon">✓</span>
                  <span class="value-text">Community & Collaboration</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="500">
                  <span class="value-icon">✓</span>
                  <span class="value-text">Integrity & Responsibility</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mission-image" data-aos="fade-left" data-aos-delay="300">
            <img src="../assets/download.jpg" alt="Students collaborating in classroom" class="about-image"/>
          </div>
        </div>
      </div>
    </section>

    <!-- School History Section -->
    <section class="history-section">
      <div class="container">
        <h2 data-aos="fade-up">Our Story</h2>
        <div class="timeline">
          <div class="timeline-item" data-aos="fade-right">
            <div class="timeline-year">1998</div>
            <div class="timeline-content">
              <h3>Foundation</h3>
              <p>Sunshine Elementary was established with a vision to create a community-centered school focused on holistic education.</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-left" data-aos-delay="100">
            <div class="timeline-year">2005</div>
            <div class="timeline-content">
              <h3>First Expansion</h3>
              <p>Added the new wing with science labs and computer rooms to accommodate growing enrollment and technological needs.</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-right" data-aos-delay="200">
            <div class="timeline-year">2012</div>
            <div class="timeline-content">
              <h3>Green Initiative</h3>
              <p>Became the first eco-friendly school in the district with solar panels and a student-led recycling program.</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-left" data-aos-delay="300">
            <div class="timeline-year">2020</div>
            <div class="timeline-content">
              <h3>Digital Transformation</h3>
              <p>Implemented comprehensive digital learning platforms and 1:1 device program to enhance remote and hybrid learning.</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-right" data-aos-delay="400">
            <div class="timeline-year">2023</div>
            <div class="timeline-content">
              <h3>25th Anniversary</h3>
              <p>Celebrated 25 years of educational excellence and community service with over 2,000 alumni.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team Section -->
    <section class="leadership-section">
      <div class="container">
        <h2 data-aos="fade-up">Meet Our Leadership Team</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Dedicated educators guiding our school community</p>
        <div class="team-grid">
          <div v-for="(member, index) in leadershipTeam" :key="member.id" class="team-card" 
               :data-aos="'fade-up'" :data-aos-delay="index * 150">
            <div class="team-image">
              <img :src="member.image" :alt="member.name" />
              <div class="image-overlay"></div>
            </div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <p class="team-role">{{ member.role }}</p>
              <p class="team-bio">{{ member.bio }}</p>
              <div class="team-contact">
                <span class="contact-item">
                  <i class="fas fa-envelope"></i> {{ member.email }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- School Achievements Section -->
    <section class="achievements-section">
      <div class="container">
        <h2 data-aos="fade-up">Our Achievements</h2>
        <div class="achievements-grid">
          <div class="achievement-item" data-aos="flip-left" data-aos-delay="0">
            <div class="achievement-icon">🏆</div>
            <div class="achievement-content">
              <h3>Blue Ribbon School</h3>
              <p>National Award for Academic Excellence (2019, 2022)</p>
            </div>
          </div>
          <div class="achievement-item" data-aos="flip-left" data-aos-delay="150">
            <div class="achievement-icon">⭐</div>
            <div class="achievement-content">
              <h3>STEM Certification</h3>
              <p>State-recognized STEM program excellence</p>
            </div>
          </div>
          <div class="achievement-item" data-aos="flip-left" data-aos-delay="300">
            <div class="achievement-icon">🌱</div>
            <div class="achievement-content">
              <h3>Green School Award</h3>
              <p>Environmental stewardship and sustainability leadership</p>
            </div>
          </div>
          <div class="achievement-item" data-aos="flip-left" data-aos-delay="450">
            <div class="achievement-icon">🤝</div>
            <div class="achievement-content">
              <h3>Community Partner</h3>
              <p>Outstanding community service and engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="about-cta">
      <div class="container" data-aos="fade-up">
        <h2>Want to Learn More?</h2>
        <p>We'd love to share more about our school community and answer any questions you may have.</p>
        <div class="cta-buttons">
          <router-link to="/contact" class="cta-btn primary">Schedule a Tour</router-link>
          <router-link to="/admissions" class="cta-btn secondary">Download Prospectus</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'AboutView',
  data() {
    return {
      leadershipTeam: [
        {
          id: 1,
          name: 'Dr. Sarah Mitchell',
          role: 'Principal',
          bio: '15 years of educational leadership with a focus on innovative learning strategies.',
          email: 's.mitchell@sunshine.edu',
          image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 2,
          name: 'Mr. James Rodriguez',
          role: 'Vice Principal',
          bio: 'Specialized in curriculum development and student support services.',
          email: 'j.rodriguez@sunshine.edu',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 3,
          name: 'Ms. Emily Chen',
          role: 'Academic Dean',
          bio: 'Passionate about STEM education and project-based learning approaches.',
          email: 'e.chen@sunshine.edu',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    };
  },
  mounted() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
};
</script>

<style scoped>
/* Hero Section */
.about-hero {
  position: relative;
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), 
              url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
}
.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}
.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
}

/* Mission Section */
.mission-section {
  padding: 5rem 0;
  background-color: #f8f9fa;
}
.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.mission-statement {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border-left: 4px solid #ffd700;
}
.mission-statement p {
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin: 0;
}
.core-values h3 {
  color: #1a4f8b;
  margin-bottom: 1.5rem;
}
.core-values ul {
  list-style: none;
  padding: 0;
}
.core-values li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.8rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}
.value-icon {
  background: #1a4f8b;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: bold;
}
.value-text {
  font-weight: 500;
  color: #333;
}
.about-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* History Timeline Section */
.history-section {
  padding: 5rem 0;
  background: white;
}
.history-section h2 {
  text-align: center;
  color: #1a4f8b;
  margin-bottom: 3rem;
}
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: #1a4f8b;
}
.timeline-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
}
.timeline-item:nth-child(odd) {
  flex-direction: row-reverse;
  text-align: right;
}
.timeline-year {
  background: #1a4f8b;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.1rem;
  min-width: 100px;
  text-align: center;
  z-index: 2;
}
.timeline-content {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 45%;
  margin: 0 2rem;
}
.timeline-content h3 {
  color: #1a4f8b;
  margin-bottom: 0.5rem;
}

/* Leadership Team Section */
.leadership-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}
.leadership-section h2 {
  text-align: center;
  color: #1a4f8b;
  margin-bottom: 1rem;
}
.section-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.team-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.team-card:hover {
  transform: translateY(-5px);
}
.team-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}
.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.team-card:hover .team-image img {
  transform: scale(1.05);
}
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.7));
}
.team-info {
  padding: 1.5rem;
}
.team-info h3 {
  color: #1a4f8b;
  margin-bottom: 0.5rem;
}
.team-role {
  color: #ffd700;
  font-weight: 600;
  margin-bottom: 1rem;
}
.team-bio {
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a4f8b;
  font-size: 0.9rem;
}

/* Achievements Section */
.achievements-section {
  padding: 5rem 0;
  background: white;
}
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.achievement-item {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  border-left: 4px solid #ffd700;
}
.achievement-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.achievement-content h3 {
  color: #1a4f8b;
  margin-bottom: 0.5rem;
}

/* CTA Section */
.about-cta {
  padding: 5rem 0;
  background: linear-gradient(rgba(26, 79, 139, 0.9), rgba(26, 79, 139, 0.9)), 
              url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}
.about-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.about-cta p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
}
.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
.cta-btn {
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}
.cta-btn.primary {
  background-color: #ffd700;
  color: #1a4f8b;
}
.cta-btn.secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}
.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 { font-size: 2.5rem; }
  .mission-grid { grid-template-columns: 1fr; gap: 2rem; }
  .timeline::before { left: 30px; }
  .timeline-item { flex-direction: row !important; text-align: left !important; }
  .timeline-content { width: calc(100% - 100px); margin-left: 4rem; }
  .team-grid { grid-template-columns: 1fr; }
  .cta-buttons { flex-direction: column; align-items: center; }
  .cta-btn { width: 100%; max-width: 250px; }
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>