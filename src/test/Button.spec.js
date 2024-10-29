import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import Button from "../components/Button.vue";
import { ButtonVariants, ButtonDirections } from "../Constants";

describe("test with button", () => {
  it("renders button component with valid text", () => {
    const button = shallowMount(Button, {
      props: {
        label: "Submit",
      },
    });

    expect(button.text()).toMatch("Submit");
  });

  it("renders button with valid icon", async () => {
    const button = shallowMount(Button);

    expect(button.find(".button-icon").exists()).toBeFalsy();

    await button.setProps({ image: "sampleImage" });

    expect(button.find(".button-icon").exists()).toBeTruthy();
  });

  it("renders button with given variant", async () => {
    const button = shallowMount(Button);
    expect(button.classes()).toContain("button--primary");

    await button.setProps({ variant: ButtonVariants.Secondary });

    expect(button.classes()).toContain("button--secondary");

    await button.setProps({ variant: ButtonVariants.Tertiary });

    expect(button.classes()).toContain("button--tertiary");
  });

  it("test with button emit on click", async () => {
    const button = shallowMount(Button, {
      props: {
        label: "Submit",
      },
    });

    expect(button.emitted("click")).toBeUndefined();

    await button.trigger("click");

    expect(button.emitted("click")).toBeDefined();
  });

  it("test with button icon direction", async () => {
    const button = shallowMount(Button);

    expect(button.vm.isIconOnLeft).toBeFalsy();

    await button.setProps({ iconDirection: ButtonDirections.Left });

    expect(button.vm.isIconOnLeft).toBeTruthy();
  });
});