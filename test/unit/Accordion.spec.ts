import { mount } from "@vue/test-utils";
import Accordion from "../../src/components/Accordion.vue";
import { it, expect } from "vitest";

//to test it, rename and add .spec before.ts

it("should receive a title", () => {
  const title = "Combien ça coûte?";

  const wrapper = mount(Accordion, {
    props: {
      title: title,
    },
  });

  const input = wrapper.find("#title");
  const element = input.element;
  expect(element.innerHTML).toBe(title);
});
