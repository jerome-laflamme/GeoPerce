import { mount } from "@vue/test-utils";
import EquipementFilter from "../../src/components/Reservation/Filters/EquipementFilter.vue";
import { it, expect } from "vitest";
import { createPinia, setActivePinia } from "pinia";

it("should receive tente", () => {
  setActivePinia(createPinia());
  const equipment = "tente";

  const wrapper = mount(EquipementFilter, {
    props: {
      id: equipment,
    },
  });

  const div = wrapper.find(".flex");
  const element = div.element.firstElementChild?.id;
  expect(element).toBe("tente");
});
