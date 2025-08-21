<template>
  <div class="home-view">
    <!-- Hero Section with Carousel -->
    <section class="hero">
      <swiper
        :modules="modules"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :loop="true"
        :speed="1000"
        class="hero-swiper"
      >
        <swiper-slide v-for="(slide, index) in heroSlides" :key="index">
          <div class="slide-content" :style="{ backgroundImage: `url(${slide.image})` }">
            <div class="slide-overlay"></div>
            <div class="container">
              <h1 data-aos="fade-up" data-aos-duration="1000">{{ slide.title }}</h1>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{{ slide.subtitle }}</p>
              <button class="cta-button" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                {{ slide.cta }}
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <!-- Welcome Message Section -->
    <section class="welcome-section">
      <div class="container">
        <div class="welcome-content">
          <div class="text-content" data-aos="fade-right">
            <h2>Welcome to Sunshine Elementary</h2>
            <p>Where young minds are nurtured to become creative thinkers, lifelong learners, and responsible global citizens. Our dedicated staff and vibrant community work together to provide a safe, inclusive, and stimulating environment for every child.</p>
            <p>We believe in fostering a love for learning that goes beyond the classroom walls.</p>
            <router-link to="/about" class="learn-more-btn">Learn More About Us</router-link>
          </div>
          <div class="image-content" data-aos="fade-left" data-aos-delay="300">
            <img src="../assets/placeholder-school.jpg" alt="Students learning in classroom" class="welcome-image"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section class="stats-section">
      <div class="container">
        <h2 data-aos="fade-up">By The Numbers</h2>
        <div class="stats-grid">
          <div class="stat-item" data-aos="flip-left" data-aos-delay="0">
            <div class="stat-number">{{ stats.students }}+</div>
            <div class="stat-label">Happy Students</div>
          </div>
          <div class="stat-item" data-aos="flip-left" data-aos-delay="150">
            <div class="stat-number">{{ stats.teachers }}+</div>
            <div class="stat-label">Dedicated Teachers</div>
          </div>
          <div class="stat-item" data-aos="flip-left" data-aos-delay="300">
            <div class="stat-number">{{ stats.classes }}+</div>
            <div class="stat-label">Classes & Programs</div>
          </div>
          <div class="stat-item" data-aos="flip-left" data-aos-delay="450">
            <div class="stat-number">{{ stats.years }}+</div>
            <div class="stat-label">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News Preview Section -->
    <section class="news-preview-section">
      <div class="container">
        <h2 data-aos="fade-up">Latest News & Announcements</h2>
        <div class="news-preview-grid">
          <article v-for="(item, index) in latestNews" :key="item.id" class="news-preview-card" 
                  :data-aos="(index % 2 === 0) ? 'fade-right' : 'fade-left'"
                  :data-aos-delay="index * 100">
            <h3>{{ item.title }}</h3>
            <p class="news-date">{{ item.date }}</p>
            <p>{{ item.excerpt }}</p>
            <router-link to="/news" class="read-more-link">Read More →</router-link>
          </article>
        </div>
        <div class="view-all-news" data-aos="zoom-in">
          <router-link to="/news" class="view-all-btn">View All News</router-link>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container" data-aos="fade-up" data-aos-duration="1200">
        <h2>Ready to Become Part of Our Community?</h2>
        <p>Schedule a tour, meet our principal, and see why Sunshine Elementary is the right choice for your child's education.</p>
        <div class="cta-buttons">
          <router-link to="/contact" class="cta-btn primary">Contact Us</router-link>
          <router-link to="/admissions" class="cta-btn secondary">Admissions Info</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Import Swiper modules and styles
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import AOS (Animate On Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
  data() {
    return {
      heroSlides: [
        {
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
          title: 'Inspiring Young Minds',
          subtitle: 'A nurturing environment for growth, learning, and discovery.',
          cta: 'Explore Our Programs'
        },
        {
          image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
          title: 'Building Future Leaders',
          subtitle: 'Developing character, confidence, and critical thinking skills.',
          cta: 'Meet Our Faculty'
        },
        {
          image: 'https://images.unsplash.com/photo-1569848771194-2dbfe01f4e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
          title: 'Join Our School Family',
          subtitle: 'Where every child is valued and every family belongs.',
          cta: 'Schedule a Tour'
        }
      ],
      stats: {
        students: 450,
        teachers: 35,
        classes: 20,
        years: 25
      },
      latestNews: [
        {
          id: 1,
          title: 'Winter Concert Schedule Released',
          date: 'December 1, 2023',
          excerpt: 'Join us for our annual winter concert series featuring performances from all grade levels...'
        },
        {
          id: 2,
          title: 'New STEM Lab Grand Opening',
          date: 'November 15, 2023',
          excerpt: 'We are excited to announce the opening of our state-of-the-art STEM laboratory...'
        },
        {
          id: 3,
          title: 'PTA Fundraiser Exceeds Goals',
          date: 'November 5, 2023',
          excerpt: 'Thanks to our amazing community, we raised over $15,000 for new playground equipment...'
        }
      ]
    };
  },
  mounted() {
    // Initialize AOS library when component is mounted
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true, // Animation will happen only once - when scrolling down
      mirror: false // Don't animate again when scrolling back up
    });
  }
};
</script>

<style scoped>
/* Hero Section & Carousel Styles */
.hero {
  position: relative;
  height: 100vh;
  max-height: 800px;
}
.hero-swiper {
  width: 100%;
  height: 100%;
}
.slide-content {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  position: relative;
}
.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
}
.slide-content .container {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
}
.slide-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}
.slide-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.cta-button {
  background-color: #ffd700; /* Gold */
  color: #1a4f8b; /* Navy blue */
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.cta-button:hover {
  background-color: #1a4f8b;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Welcome Section Styles */
.welcome-section {
  padding: 5rem 0;
  background-color: #f8f9fa;
}
.welcome-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.text-content h2 {
  color: #1a4f8b;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.text-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #555;
}
.learn-more-btn {
  display: inline-block;
  background-color: #1a4f8b;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}
.learn-more-btn:hover {
  background-color: #153a6b;
}
.welcome-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Stats Section Styles */
.stats-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #1a4f8b 0%, #2a6bb3 100%);
  color: white;
  text-align: center;
}
.stats-section h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}
.stat-item {
  padding: 2rem;
}
.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffd700; /* Gold accent */
}
.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* News Preview Section Styles */
.news-preview-section {
  padding: 5rem 0;
  background-color: white;
}
.news-preview-section h2 {
  text-align: center;
  color: #1a4f8b;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}
.news-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
.news-preview-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.news-preview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}
.news-preview-card h3 {
  color: #1a4f8b;
  margin-bottom: 0.5rem;
}
.news-date {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
.read-more-link {
  color: #1a4f8b;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-top: 1rem;
}
.read-more-link:hover {
  text-decoration: underline;
}
.view-all-news {
  text-align: center;
}
.view-all-btn {
  display: inline-block;
  background-color: #ffd700;
  color: #1a4f8b;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.view-all-btn:hover {
  background-color: #1a4f8b;
  color: white;
  transform: translateY(-2px);
}

/* CTA Section Styles */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(rgba(26, 79, 139, 0.9), rgba(26, 79, 139, 0.9)), url('https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  text-align: center;
}
.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.cta-section p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
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
.cta-btn.primary:hover {
  background-color: white;
  color: #1a4f8b;
}
.cta-btn.secondary:hover {
  background-color: white;
  color: #1a4f8b;
}

/* Responsive Design */
@media (max-width: 768px) {
  .slide-content h1 { font-size: 2.5rem; }
  .slide-content p { font-size: 1.2rem; }
  .welcome-content { grid-template-columns: 1fr; gap: 2rem; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-number { font-size: 2.5rem; }
  .cta-buttons { flex-direction: column; align-items: center; }
  .cta-btn { width: 100%; max-width: 300px; }
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>