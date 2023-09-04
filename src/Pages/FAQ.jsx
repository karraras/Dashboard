import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Title1 from "../component/Title1";
import { FAQ1 } from "../component/mockData";

function FAQ() {
  return (
    <section className="text-white h-5/6 overflow-hidden">
      <div className="my-4">
        <Title1 text="Frequently Asked Questoins Page" title="FAQ" />
      </div>
      <div className="w-full  px-4  text-[12px] overflow-hidden">
        {FAQ1.map((item, index) => {
          return (
            <div
              key={index}
              className="mx-auto my-1 w-full  bg-slate-800 p-2 overflow-hidden"
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left  font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className="text-green-600">{item.quetion}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-white  ">
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
