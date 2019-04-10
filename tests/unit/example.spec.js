import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import DragArea from "@/components/DragArea.vue";

describe("DragArea.vue", () => {
  it("renders listName when correctly", () => {
    const listName = "TesteColumn";
    const wrapper = shallowMount(DragArea, {
      propsData: { listName }
    });

    expect(wrapper.find("#listName").text()).to.contains(listName);
  });
});
