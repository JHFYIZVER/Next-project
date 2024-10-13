import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const Faq = () => {
  return (
    <div className="mx-auto w-full max-w-[930px] divide-y divide-white/5 rounded-xl bg-white/5">
      <div>
        <Disclosure as="div" className="p-6 rounded-lg">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-base font-medium text-left">
              How does a virtual headset work?
            </span>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div>
        <Disclosure as="div" className="p-6 rounded-lg">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-base font-medium text-left">
              Do I need a powerful computer to use a virtual headset?
            </span>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div>
        <Disclosure as="div" className="p-6 rounded-lg">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-base font-medium text-left">
              What are the different types of virtual headsets available?
            </span>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div>
        <Disclosure as="div" className="p-6 rounded-lg">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-base font-medium text-left">
              What are the main applications of virtual headsets?
            </span>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
};

export default Faq;
