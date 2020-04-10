<template>
  <a 
    :href="link"
    target="_blank" 
    rel="noopener noreferrer"
    class="static-link"
  >
    <div class="testimonial">
      <div class="testimonial__top">
        <div>
          {{ testimonialText }}
        </div>
        <div class="testimonials__tags">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="green"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    
      <div class="testimonial__bottom">
        <!--   e.g. ['fab', 'twitter']   -->
        <font-awesome-icon
          :icon="icon"
          class="green"
        />
        <span class="grey fs-14">{{ date }}</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    testimonialText: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    icon: {
      type: Array,
      required: true
    },
    date: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '#',
    }
  }
};
</script>

<style lang="scss" scoped>
  
  .testimonial {
    background-color: $white;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
    padding: 34px 20px;
    max-width: 370px;
    height: 100%;
    
    &__top {
      margin-bottom: 20px;
    }
  }
  
</style>
