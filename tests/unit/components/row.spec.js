import { mount } from "@vue/test-utils";
import Row from "@/components/Row.vue";

let wrapper;

beforeEach(() => {
  wrapper = mount(Row);
});
describe("Row.vue", () => {
  it("renders props when passed", () => {
    let props = {
      description: "Source",
      date: "07/22/19",
      amount: 23.2,
      type: "Roth IRA"
    };
    wrapper.setProps(props);
    see(props.description);
    see(props.date);
    see(props.amount);
    see(props.type);
    see("AHHHHH!");
  });
});

let see = (needle, element) => {
  element = element ? wrapper.find(element).text() : wrapper.text();
  expect(element).toContain(needle);
};
