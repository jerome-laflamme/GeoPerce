import { mount } from "@vue/test-utils";
import Navbar from "../../src/components/Navbar.vue";
import { it, expect } from "vitest";
import { createRouter, createWebHistory, RouterLink } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: {} },
    { path: "/map", component: {} },
    { path: "/aboutus", component: {} },
    { path: "/faq", component: {} },
    { path: "/contact", component: {} },
  ],
});

it('RouterLink need to redirect to "/"', async () => {
  const wrapper = mount(Navbar, {
    global: {
      plugins: [router],
      stubs: {
        RouterLink,
      },
    },
  });

  await router.isReady();

  const links = wrapper.findAllComponents(RouterLink);

  expect(links[0].props().to).toBe("/");
});

it('RouterLink need to redirect to "/map"', async () => {
  const wrapper = mount(Navbar, {
    global: {
      plugins: [router],
      stubs: {
        RouterLink,
      },
    },
  });

  await router.isReady();

  const links = wrapper.findAllComponents(RouterLink);

  expect(links[1].props().to).toBe("/map");
});

it('RouterLink need to redirect to "/aboutus"', async () => {
  const wrapper = mount(Navbar, {
    global: {
      plugins: [router],
      stubs: {
        RouterLink,
      },
    },
  });

  await router.isReady();

  const links = wrapper.findAllComponents(RouterLink);

  expect(links[2].props().to).toBe("/aboutus");
});

it('RouterLink need to redirect to "/faq"', async () => {
  const wrapper = mount(Navbar, {
    global: {
      plugins: [router],
      stubs: {
        RouterLink,
      },
    },
  });

  await router.isReady();

  const links = wrapper.findAllComponents(RouterLink);

  expect(links[3].props().to).toBe("/faq");
});

it('RouterLink need to redirect to "/contact"', async () => {
  const wrapper = mount(Navbar, {
    global: {
      plugins: [router],
      stubs: {
        RouterLink,
      },
    },
  });

  await router.isReady();

  const links = wrapper.findAllComponents(RouterLink);

  expect(links[4].props().to).toBe("/contact");
});
