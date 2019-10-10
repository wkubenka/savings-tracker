<template>
  <div>
    <span>{{ date }}</span>
    <span>{{ description }}</span>
    <span>{{ type }}</span>
    <span>{{ amount}}</span>
  </div>
</template>

<script>
export default {
  props: { description: String, amount: Number, date: String, type: String }
};
</script>

<style lang="scss" scoped>
</style>