import { Fragment, useEffect, useState } from "react";
import Link from "./TranslatedLink";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import NavigationLink from "./NavigationLink";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  link: {
    text: string;
    links?: {
      text: string;
      url: string;
    }[];
  };
}

function Component({ link }: Props) {
  const [isActive, setIsActive] = useState(false);

  const setIsActiveTrue = () => {
    if (!isActive) setIsActive(true);
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const path = window.location.pathname;
    if (link.links)
      link.links.forEach((item) => {
        if (item.url === path) setIsActiveTrue();
      });
  });

  return (
    <>
      <Popover className="relative hidden md:block">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                isActive ? "bg-gray-50" : "",
                open ? "text-gray-900 bg-gray-100" : "text-gray-600",
                "group pl-3 pr-2 py-1 hover:bg-gray-100 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-200"
              )}
            >
              <span>{link.text}</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "ml-2 h-5 w-5 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid p-6 bg-white gap-7">
                    {link.links &&
                      link.links.map((item) => (
                        <Link
                          key={item.url}
                          href={item.url}
                          // activeClassName="bg-gray-50"
                        >
                          <a className="block p-3 -m-3 text-base font-medium text-gray-600 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 hover:text-gray-900">
                            {item.text}
                          </a>
                        </Link>
                      ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <div className="md:hidden">
        <span className="text-sm font-bold text-gray-700">{link.text}</span>
        <div className="pl-2">
          <div className="-mt-1" />
          <div className="space-y-3">
            {link.links &&
              link.links.map((item) => (
                <NavigationLink key={item.url} link={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Component;
