<script>
export default {
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    nextSlide() {
      // Logic for moving to the next slide
      const totalSlides = this.$refs.slidesWrapper.children.length;
      if (this.currentSlide < totalSlides - 1) {
        this.currentSlide++;
        this.updateSlidePosition();
      }
    },
    prevSlide() {
      // Logic for moving to the previous slide
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.updateSlidePosition();
      }
    },
    updateSlidePosition() {
      const offset = this.currentSlide * -100;
      this.$refs.slidesWrapper.style.transform = `translateX(${offset}%)`;
    },
  },
};
</script>

<template>
  <div class="w-screen h-screen overflow-hidden relative">
    <!-- Slides Wrapper -->
    <div
      ref="slidesWrapper"
      class="flex w-full h-full transition-transform duration-500 ease-out"
    >
      <!-- Each Slide Component -->
      <NuxtPage />
    </div>

    <!-- Left Arrow -->
    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <!-- Right Arrow -->
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter, .page-leave-to /* .page-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
