import { mount, shallowMount } from "@vue/test-utils";
import Table from "@/components/Table.vue";
import { setServers } from "dns";

let wrapper;
let row1 = {
  id: 1,
  description: "Description1",
  date: "1/1/2019",
  amount: "1.1",
  type: "Type1"
};
let row2 = {
  id: 2,
  description: "Description2",
  date: "2/2/2019",
  amount: "2.2",
  type: "Type2"
};
let props = {
  dateLabel: "dateLabel",
  descriptionLabel: "descriptionLabel",
  typeLabel: "typeLabel",
  amountLabel: "amountLabel",
  actionsLabel: "actionsLabel"
};

beforeEach(() => {
  wrapper = shallowMount(Table);
});

describe("Table", () => {
  it("displays rows", () => {
    wrapper = mount(Table);
    wrapper.setProps({ rows: [row1, row2] });
    see("Description1", wrapper.text());
    see("Description2", wrapper.text());
  });

  it("renders props when passed", () => {
    wrapper.setProps(props);

    see(props.descriptionLabel, wrapper.text());
    see(props.dateLabel, wrapper.text());
    see(props.amountLabel, wrapper.text());
    see(props.typeLabel, wrapper.text());
    see(props.actionsLabel, wrapper.text());
  });

  it("does not show typeLabel when a null typelabel is passed to it", () => {
    see('id="typeLabel"', wrapper.html());
    wrapper.setProps({ typeLabel: null });
    dontSee('id="typeLabel"', wrapper.html());
  });
});
