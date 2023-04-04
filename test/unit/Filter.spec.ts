import { mount } from "@vue/test-utils";
import Filter from "../../src/components/Map/Filter.vue";
import { it, expect } from "vitest";
import { createPinia, setActivePinia } from "pinia";

it("should receive Points d'intérêts", () => {
  setActivePinia(createPinia());
  const filterCategory = "poi";

  const wrapper = mount(Filter, {
    props: {
      category: filterCategory,
    },
  });

  const div = wrapper.find(".filter");
  const element = div.element.firstElementChild?.innerHTML;
  expect(element).toBe("Points d'intérêts");
});

it("should receive Randonnées", () => {
  setActivePinia(createPinia());
  const filterCategory = "hiking";

  const wrapper = mount(Filter, {
    props: {
      category: filterCategory,
    },
  });

  const div = wrapper.find(".filter");
  const element = div.element.firstElementChild?.innerHTML;
  expect(element).toBe("Randonnées");
});

it("should receive Camping", () => {
  setActivePinia(createPinia());
  const filterCategory = "Camping";

  const wrapper = mount(Filter, {
    props: {
      category: filterCategory,
    },
  });

  const div = wrapper.find(".filter");
  const element = div.element.firstElementChild?.innerHTML;
  expect(element).toBe("Camping");
});

it("should receive Restaurant", () => {
  setActivePinia(createPinia());
  const filterCategory = "Restaurant";

  const wrapper = mount(Filter, {
    props: {
      category: filterCategory,
    },
  });

  const div = wrapper.find(".filter");
  const element = div.element.firstElementChild?.innerHTML;
  expect(element).toBe("Restaurant");
});
