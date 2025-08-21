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
            <h2>Welcome to Riruta Jubilee Academy</h2>
            <p>Where young minds are nurtured to become creative thinkers, lifelong learners, and responsible global citizens. Our dedicated staff and vibrant community work together to provide a safe, inclusive, and stimulating environment for every child.</p>
            <p>We believe in fostering a love for learning that goes beyond the classroom walls.</p>
            <router-link to="/about" class="learn-more-btn">Learn More About Us</router-link>
          </div>
          <div class="image-content" data-aos="fade-left" data-aos-delay="300">
            <img src="../assets/pic1.jpg" alt="Students learning in classroom" class="welcome-image"/>
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

    <!-- Testimonials Section -->
<section class="testimonials-section">
  <div class="container">
    <h2 data-aos="fade-up">What Our Community Says</h2>
    <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Hear from our parents, students, and teachers</p>
    <div class="testimonials-grid">
      <div v-for="(testimonial, index) in testimonials" :key="testimonial.id" class="testimonial-card" 
           :data-aos="'fade-up'" :data-aos-delay="index * 200">
        <div class="testimonial-content">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-image">
              <img :src="testimonial.avatar" :alt="testimonial.author">
            </div>
            <div class="author-details">
              <h4>{{ testimonial.author }}</h4>
              <p class="author-role">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container" data-aos="fade-up" data-aos-duration="1200">
        <h2>Ready to Become Part of Our Community?</h2>
        <p>Schedule a tour, meet our principal, and see why Riruta Jubilee Academy is the right choice for your child's education.</p>
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
import { Autoplay, Pagination } from 'swiper';
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
          image: '../assets/download(1).jpg',
          title: 'Inspiring Young Minds',
          subtitle: 'A nurturing environment for growth, learning, and discovery.',
          cta: 'Explore Our Programs'
        },
        {
          image: '../assets/download(2).jpg',
          title: 'Building Future Leaders',
          subtitle: 'Developing character, confidence, and critical thinking skills.',
          cta: 'Meet Our Faculty'
        },
        {
          image: '../assets/download(1).jpg',
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
     testimonials: [
  {
    id: 1,
    text: "We chose Sunshine Elementary for its nurturing environment and excellent academic programs. Our daughter has thrived here both socially and academically.",
    author: "Sarah Johnson",
    role: "Parent of 3rd Grader",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    text: "The teachers here go above and beyond to ensure every student feels valued and supported. The sense of community is truly special.",
    author: "Michael Chen",
    role: "Parent of 1st and 4th Graders",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    text: "I love coming to school every day! The projects are fun, my friends are awesome, and my teacher makes learning exciting.",
    author: "Emily Rodriguez",
    role: "5th Grade Student",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
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

/* Testimonials Section Styles */
.testimonials-section {
  padding: 5rem 0;
  background-color: white;
}
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.testimonial-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  border-left: 4px solid #1a4f8b;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.quote-icon {
  font-size: 3rem;
  color: #1a4f8b;
  line-height: 1;
  margin-bottom: 0.5rem;
}
.testimonial-text {
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.author-image img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.author-details h4 {
  color: #1a4f8b;
  margin: 0;
  font-size: 1.1rem;
}
.author-role {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
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