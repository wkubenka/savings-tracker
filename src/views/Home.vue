<template>
  <div class="home">
    <ul>
      <li
        v-for="income in incomes"
        :key="income.id"
      >{{ income.date }} - {{ income.source }} - {{ income.amount }}</li>
    </ul>
    <input type="date" v-model="newIncome.date" />
    <input type="text" v-model="newIncome.source" />
    <input type="number" v-model="newIncome.amount" />
    <input type="submit" v-on:click="saveIncome()" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  data() {
    return {
      newIncome: {
        date: "",
        source: "",
        amount: 0
      }
    };
  },
  computed: {
    ...mapState(["incomes", "savings", "taxes"])
  },
  methods: {
    ...mapMutations(["addIncome", "addSaving", "addTax"]),
    saveIncome() {
      this.addIncome(newIncome);
    }
  }
};
</script>
