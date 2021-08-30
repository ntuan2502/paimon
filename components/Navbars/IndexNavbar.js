import { Fragment } from "react";
import { Popover, Transition, Disclosure, Menu } from "@headlessui/react";
import {
  CakeIcon,
  MenuIcon,
  XIcon,
  UsersIcon,
  BeakerIcon,
  LightningBoltIcon,
  CollectionIcon,
  ScissorsIcon,
  TruckIcon,
  ShoppingCartIcon,
  SparklesIcon,
  ScaleIcon,
  LibraryIcon,
  KeyIcon,
} from "@heroicons/react/outline";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Language from "./Language";
import { useRouter } from "next/router";

const solutions = [
  {
    name: "Characters",
    description: "",
    href: "/characters",
    icon: UsersIcon,
  },
  {
    name: "Artifacts",
    description: "",
    href: "/artifacts",
    icon: CollectionIcon,
  },
  {
    name: "Foods",
    description: "",
    href: "/foods",
    icon: CakeIcon,
  },
  {
    name: "Weapons",
    description: "",
    href: "/weapons",
    icon: ScissorsIcon,
  },
  {
    name: "Potions",
    description: "",
    href: "/potions",
    icon: BeakerIcon,
  },
  {
    name: "Ingredients",
    description: "",
    href: "/ingredients",
    icon: TruckIcon,
  },
  {
    name: "Common Materials",
    description: "",
    href: "/common_materials",
    icon: ShoppingCartIcon,
  },
  {
    name: "Elemental Stone Materials",
    description: "",
    href: "/elemental_stone_materials",
    icon: SparklesIcon,
  },
  {
    name: "Jewels Materials",
    description: "",
    href: "/jewels_materials",
    icon: ScaleIcon,
  },
  {
    name: "Local Materials",
    description: "",
    href: "/local_materials",
    icon: LibraryIcon,
  },
  {
    name: "Talent Lvl Up Materials",
    description: "",
    href: "talent_lvl_up_materials",
    icon: KeyIcon,
  },
  {
    name: "Weapon Primary Materials",
    description: "",
    href: "weapon_primary_materials",
    icon: LightningBoltIcon,
  },
];
// const callsToAction = [
//   { name: "Watch Demo", href: "#", icon: PlayIcon },
//   { name: "Contact Sales", href: "#", icon: PhoneIcon },
// ];
// const resources = [
//   {
//     name: "Help Center",
//     description:
//       "Get all of your questions answered in our forums or contact support.",
//     href: "#",
//     icon: SupportIcon,
//   },
//   {
//     name: "Guides",
//     description:
//       "Learn how to maximize our platform to get the most out of it.",
//     href: "#",
//     icon: BookmarkAltIcon,
//   },
//   {
//     name: "Events",
//     description:
//       "See what meet-ups and other events we might be planning near you.",
//     href: "#",
//     icon: CalendarIcon,
//   },
//   {
//     name: "Security",
//     description: "Understand how we take your privacy seriously.",
//     href: "#",
//     icon: ShieldCheckIcon,
//   },
// ];
// const recentPosts = [
//   { id: 1, name: "Boost your conversion rate", href: "#" },
//   {
//     id: 2,
//     name: "How to use search engine optimization to drive traffic to your site",
//     href: "#",
//   },
//   { id: 3, name: "Improve your customer experience", href: "#" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function IndexNavbar() {
  const { locale } = useRouter();

  return (
    <Popover className="fixed min-w-full z-50 bg-white ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/img/ui/logo.svg"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Link href="/">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Home
                  </a>
                </Link>
                <Link href="/emojis">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Emojis
                  </a>
                </Link>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span>Menu</span>
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
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {solutions.map((item) => (
                                <Link href={item.href} key={item.name}>
                                  <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                            {/* <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div> */}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                {/* <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span>More</span>
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
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                  Recent Posts
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {recentPosts.map((post) => (
                                    <li
                                      key={post.id}
                                      className="text-base truncate"
                                    >
                                      <a
                                        href={post.href}
                                        className="font-medium text-gray-900 hover:text-gray-700"
                                      >
                                        {post.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <a
                                  href="#"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  {" "}
                                  View all posts{" "}
                                  <span aria-hidden="true">&rarr;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover> */}
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {/* <a
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a> */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 rounded-full"
                            src={`/img/flag/${locale}.bmp`}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Language language="vi" />
                          <Language language="en" />
                          <Language language="chs" />
                          <Language language="cht" />
                          <Language language="fr" />
                          <Language language="de" />
                          <Language language="id" />
                          <Language language="ja" />
                          <Language language="ko" />
                          <Language language="pt" />
                          <Language language="ru" />
                          <Language language="es" />
                          <Language language="th" />
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
                {/* <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a> */}
              </div>
            </div>
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
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden max-h-screen overflow-y-auto"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/img/ui/logo.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <div className="-m-3 p-3 flex justify-end items-center rounded-md hover:bg-gray-50">
                        <span className="ml-3 text-base font-medium text-gray-900">
                          <div className="flex items-center justify-end md:flex-1 lg:w-0">
                            <Menu as="div" className="ml-3 relative">
                              {({ open }) => (
                                <>
                                  <div>
                                    <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                      <span className="sr-only">
                                        Open user menu
                                      </span>
                                      <img
                                        className="h-8 rounded-full"
                                        src={`/img/flag/${locale}.bmp`}
                                        alt=""
                                      />
                                    </Menu.Button>
                                  </div>
                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items
                                      static
                                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                      <Language language="vi" />
                                      <Language language="en" />
                                      <Language language="chs" />
                                      <Language language="cht" />
                                      <Language language="fr" />
                                      <Language language="de" />
                                      <Language language="id" />
                                      <Language language="ja" />
                                      <Language language="ko" />
                                      <Language language="pt" />
                                      <Language language="ru" />
                                      <Language language="es" />
                                      <Language language="th" />
                                    </Menu.Items>
                                  </Transition>
                                </>
                              )}
                            </Menu>
                          </div>
                        </span>
                      </div>
                      <Link href="/">
                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                          {/* <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          /> */}
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Home
                          </span>
                        </a>
                      </Link>
                      <Link href="/emojis">
                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                          {/* <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          /> */}
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Emojis
                          </span>
                        </a>
                      </Link>
                      {/* <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex justify-between -m-3 p-3 items-center rounded-md hover:bg-gray-50 focus:outline-none">
                              <span className="ml-3 text-base font-medium text-gray-900">
                                What is your refund policy?
                              </span>
                              <ChevronUpIcon
                                className={`${
                                  open ? "transform rotate-180" : ""
                                } w-5 h-5 text-gray-500`}
                              />
                            </Disclosure.Button>
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
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                {solutions.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                  >
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                      {item.name}
                                    </span>
                                  </a>
                                ))}
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure> */}
                      {solutions.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            {/* <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          /> */}
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                {/* <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Docs
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div> */}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
