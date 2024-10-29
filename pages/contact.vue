<script setup>
import { ref } from "vue";
import NeonTag from "~/components/NeonTag.vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const contactInfo = {
  email: "josuemente@hotmail.com",
  whatsapp: "+50235269870",
  linkedin: "https://www.linkedin.com/in/josu%C3%A9-mente-6547488a/",
};

const neonColors = [
  "rgba(0, 255, 255, 1)", // Cyan
  "rgba(255, 0, 255, 1)", // Magenta
  "rgba(0, 255, 0, 1)", // Green
  "rgba(255, 255, 0, 1)", // Yellow
];

const getRandomNeonColor = () => {
  return neonColors[Math.floor(Math.random() * neonColors.length)];
};
</script>

<template>
  <div class="min-h-screen flex justify-center items-center p-4">
    <div class="contact-container w-full max-w-[60%] backdrop-blur-md bg-black/30 rounded-lg p-8">
      <h1 class="text-5xl font-bold text-white mb-8 text-center neon-text">Contact Me</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="contact-form">
          <form @submit.prevent>
            <div class="hologram-input mb-4">
              <input type="text" v-model="formData.name" required placeholder=" " />
              <label>Name</label>
              <div class="hologram-line"></div>
            </div>
            <div class="hologram-input mb-4">
              <input type="email" v-model="formData.email" required placeholder=" " />
              <label>Email</label>
              <div class="hologram-line"></div>
            </div>
            <div class="hologram-input mb-4">
              <textarea v-model="formData.message" required placeholder=" "></textarea>
              <label>Message</label>
              <div class="hologram-line"></div>
            </div>
            <button class="neon-button w-full" type="submit">Send Message</button>
          </form>
        </div>
        <div class="contact-info">
          <h2 class="text-3xl font-bold text-white mb-4 neon-text">Get in Touch</h2>
          <div class="info-item mb-3">
            <NeonTag :tag="'Email'" />
            <a :href="'mailto:' + contactInfo.email" class="ml-2">{{ contactInfo.email }}</a>
          </div>
          <div class="info-item mb-3">
            <NeonTag :tag="'WhatsApp'" />
            <a :href="'https://wa.me/' + contactInfo.whatsapp" class="ml-2">{{
              contactInfo.whatsapp
            }}</a>
          </div>
          <div class="info-item mb-3">
            <NeonTag :tag="'LinkedIn'" />
            <a :href="contactInfo.linkedin" target="_blank" class="ml-2">View Profile</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.neon-text {
  text-shadow: 0 0 10px v-bind("getRandomNeonColor()");
}

.hologram-input {
  position: relative;
}

.hologram-input input,
.hologram-input textarea {
  width: 100%;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.hologram-input label {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  pointer-events: none;
}

.hologram-input input:focus,
.hologram-input textarea:focus {
  background: rgba(0, 0, 0, 0.7);
  border-color: v-bind("getRandomNeonColor()");
}

.hologram-input input:focus + label,
.hologram-input textarea:focus + label,
.hologram-input input:not(:placeholder-shown) + label,
.hologram-input textarea:not(:placeholder-shown) + label {
  top: -1.5rem;
  font-size: 0.8rem;
  color: v-bind("getRandomNeonColor()");
}

.hologram-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: v-bind("getRandomNeonColor()");
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.hologram-input input:focus ~ .hologram-line,
.hologram-input textarea:focus ~ .hologram-line {
  transform: scaleX(1);
}

.neon-button {
  background: none;
  border: 2px solid v-bind("getRandomNeonColor()");
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.neon-button:hover {
  background: v-bind("getRandomNeonColor()");
  box-shadow: 0 0 10px v-bind("getRandomNeonColor()");
}

.contact-info .info-item a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info .info-item a:hover {
  color: v-bind("getRandomNeonColor()");
}
</style>
