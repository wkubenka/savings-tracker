<template>
  <div>
    <div>
      <span id="dateLabel">{{ dateLabel }}</span>
      <span id="descriptionLabel">{{ descriptionLabel }}</span>
      <span id="typeLabel" v-if="typeLabel">{{ typeLabel }}</span>
      <span id="amountLabel">{{ amountLabel }}</span>
      <span id="actionsLabel">{{ actionsLabel }}</span>
    </div>
    <div>
      <!--- TODO: Add Create Form -->
    </div>
    <row
      v-for="row in rows"
      :key="row.id"
      :description="row.description"
      :date="row.date"
      :amount="row.amount"
      :type="row.type"
    ></row>
  </div>
</template>

<script>
import Row from "./Row";
export default {
  components: { Row },
  props: {
    rows: Array,
    dateLabel: {
      type: String,
      default: "Date"
    },
    descriptionLabel: {
      type: String,
      default: "Description"
    },
    typeLabel: {
      type: String,
      default: "Type"
    },
    amountLabel: {
      type: String,
      default: "Amount"
    },
    actionsLabel: {
      type: String,
      default: "Actions"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>