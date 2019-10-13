import { mount } from "@vue/test-utils";
import Row from "@/components/Row.vue";

let wrapper;
let props = {
  description: "Source",
  date: "07/22/19",
  amount: 23.2,
  type: "Roth IRA"
};

beforeEach(() => {
  wrapper = mount(Row);
  wrapper.setProps(props);
});

describe("Row.vue", () => {
  it("renders props when passed", () => {
    see(props.description, wrapper.text());
    see(props.date, wrapper.text());
    see(props.amount, wrapper.text());
    see(props.type, wrapper.text());
  });

  it("does not show type when type is not passed to it", () => {
    wrapper.setProps({ type: null });
    dontSee('id="type"', wrapper.text());
  });

  it("confirms before deleting", () => {
    wrapper.find("#delete").trigger("click");

    see("Really?", wrapper.text());
    see("NVM", wrapper.text());

    wrapper.find("#confirmDelete").trigger("click");
  });

  it("emits a remove event when deleted", () => {
    wrapper.find("#delete").trigger("click");
    wrapper.find("#confirmDelete").trigger("click");

    expect(wrapper.emitted().remove).toBeTruthy();

    // assert event count
    expect(wrapper.emitted().remove.length).toBe(1);
  });
});
