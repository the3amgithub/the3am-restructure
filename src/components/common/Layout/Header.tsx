'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  Link,
  Image,
} from "@nextui-org/react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Events",
      url: "/event",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black opacity-80 p-2"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <Image src="/img/logo_white.png" alt="logo" width={80} height={80} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <Image
            src="/img/logo_white.png"
            alt="logo"
            width={100}
            height={100}
          />
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full text-white pl-20" href={item.url} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-gray flex flex-col items-start justify-center gap-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full text-white" href={item.url} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
