import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    incomes: [],
    savings: [],
    taxes: []
  },
  mutations: {
    addIncome(state, income) {
      state.incomes.push(income);
    },
    addSaving(state, saving) {
      state.savings.push(saving);
    },
    addTax(state, tax) {
      state.taxes.push(tax);
    }
  },
  actions: {}
});
