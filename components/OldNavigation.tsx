import { Fragment } from "react";
import Link from "./TranslatedLink";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Container from "./Container";
import NavigationDropdown from "./NavigationDropdown";
import NavigationLink from "./NavigationLink";
import data from "../content/setting/navigation.json";
import Image from "next/image";
import imageSrc from "../public/logo_bluestar_300px.svg";

function Component() {
  const navigation = data;

  return (
    <nav className="border-b shadow-sm">
      <Container layout="sm">
        <div className="">
          <Popover className="relative bg-white">
            {({ open }) => (
              <>
                <div className="flex items-center justify-between py-3 md:justify-start md:space-x-10">
                  <div className="flex justify-start h-12 lg:w-0 lg:flex-1">
                    <Link href="/">
                      <a className="w-40">
                        <Image src={imageSrc} alt="Blue Star Marketing Logo" />
                      </a>
                    </Link>
                  </div>
                  <div className="hidden md:hidden">
                    <Popover.Button className="bg-white border-2 border-gray-100 rounded-md px-2 py-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                      <span className="sr-only">Menü öffnen</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group
                    as="nav"
                    className="hidden space-x-4 md:flex"
                  ></Popover.Group>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute inset-x-0 top-0 z-40 pt-2 transition origin-top-right transform md:hidden"
                  >
                    <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                      <div className="px-5 pt-4 pb-6">
                        <div className="flex items-center justify-between pb-2 border-b">
                          <Link href="/">
                            <a className="w-32">
                              <Image
                                src={imageSrc}
                                alt="Blue Star Marketing Logo"
                              />
                            </a>
                          </Link>
                          <div className="">
                            <Popover.Button className="bg-white rounded-md border-2 border-gray-100 px-2 py-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                              <span className="sr-only">Menü schließen</span>
                              <XIcon className="w-6 h-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-6 space-y-4">
                          {navigation.links &&
                            navigation.links.map((link) => {
                              if (link.type === "link")
                                return (
                                  <NavigationLink key={link.text} link={link} />
                                );
                              if (link.type === "links")
                                return (
                                  <NavigationDropdown
                                    key={link.text}
                                    link={link}
                                  />
                                );
                              return "?";
                            })}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </Container>
    </nav>
  );
}

export default Component;
