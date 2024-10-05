<script setup>
import { ref } from 'vue';

// Placeholder for the image prop (dynamic later if needed)
const imageUrl = ref('https://media.licdn.com/dms/image/v2/C4D03AQGCAvVt2LLNwg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1591485121812?e=1733356800&v=beta&t=JUjtjg5ZAFTKotegSsGnWv1z0_RaUhIae871W0NdF1s');
</script>

<template>
  <div class="holo-img-container">
    <img :src="imageUrl" alt="Hologram Image" class="holo-img" />
  </div>
</template>

<style scoped>
/* Container for the hologram image effect */
.holo-img-container {
  position: relative;
  display: inline-block;
  border-radius: 50%; /* Circle shape */
  overflow: hidden;
  width: 200px;
  height: 200px;
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.75), 0 0 25px rgba(0, 255, 204, 0.5);
}

/* Actual image styling */
.holo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; /* Maintain circle shape */
  transition: transform 0.3s ease;
}

/* Hologram-like effect with animated borders */
.holo-img-container::before, .holo-img-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 255, 204, 0.1);
  pointer-events: none;
  z-index: -1;
}

.holo-img-container::before {
  animation: hologram-pulse 2s infinite alternate ease-in-out;
}

.holo-img-container::after {
  border: 1px solid rgba(0, 255, 204, 0.5);
  animation: neon-border 1.5s infinite alternate ease-in-out;
}

/* Hologram hover effect */
.holo-img-container:hover .holo-img {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(0, 255, 204, 1), 0 0 50px rgba(0, 255, 204, 0.8);
}

/* Hologram-like pulse animation */
@keyframes hologram-pulse {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

/* Flickering neon border animation */
@keyframes neon-border {
  0% {
    border-color: rgba(0, 255, 204, 0.2);
  }
  100% {
    border-color: rgba(0, 255, 204, 0.9);
  }
}
</style>
