<template>
  <div>
    <div>
      <span id="date">{{ date }}</span>
      <span id="description">{{ description }}</span>
      <span id="type" v-if="type">{{ type }}</span>
      <span id="amount">{{ amount}}</span>
      <span id="delete" v-if="!deleting" @click="deleting = true">Delete</span>
      <span id="confirmDelete" v-if="deleting" @click="$emit('remove')">Really?</span>
      <span id="cancelDelete" v-if="deleting" @click="deleting = false">NVM</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    amount: Number,
    date: String,
    type: String
  },
  data() {
    return {
      deleting: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>