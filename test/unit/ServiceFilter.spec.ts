import { mount } from "@vue/test-utils";
import Filters from "../../src/components/Reservation/Filters.vue";
import { it, expect } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import {useReservation} from "../../src/shared/stores/reservationStore"


// WORK IN PROGRESS

it("should receive tente", () => {
  setActivePinia(createPinia());
  useReservation().filters.services = "0"
  const wrapper = mount(Filters);

  const select = wrapper.find("#services");
  console.log(select.element.innerHTML)
  expect(true).toBe(true);
});
