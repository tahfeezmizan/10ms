"use client";
import Link from "next/link";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MobileNavItemProps, NavItemProps } from "@/typss/common";

import logo from "@/../public/10mslogo-svg.svg";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={40}
          className="bg-white"
        />
      </Link>
    </div>
  );
}

function NavItem({ label, href, dropdown }: NavItemProps) {
  if (dropdown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1">
            {label}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={href}>Option 1</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={href}>Option 2</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link href={href}>
      <Button variant="ghost">{label}</Button>
    </Link>
  );
}

const navItems: NavItemProps[] = [
  { label: "ক্লাস ৬-১২", href: "/academic/", dropdown: true },
  { label: "স্কিলস", href: "/skills/", dropdown: true },
  { label: "ভর্তি পরীক্ষা", href: "/admission/" },
  { label: "অনলাইন ব্যাচ", href: "/online-batch/", dropdown: true },
  { label: "ইংলিশ সেন্টার", href: "/english-centre/", dropdown: true },
  { label: "আরো", href: "#", dropdown: true },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white md:h-[65px]">
      <div className=" container mx-auto">
        <div className="flex justify-between items-center gap-3 px-4 py-3 md:px-7">
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden">
                  <Menu className=" size-9" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <NavItem
                      key={item.label}
                      label={item.label}
                      href={item.href}
                      dropdown={item.dropdown}
                    />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <div className="md:hidden">
              <Logo />
            </div>
          </div>

          <div className="items-center hidden md:flex">
            <Logo />
          </div>

          <div className="hidden md:block flex-1 pr-4">
            <input
              type="search"
              placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <nav className="hidden xl:block mr-4">
            <ul className="flex items-center justify-center gap-4">
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  dropdown={item.dropdown}
                />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="tel:16910"
              className="hidden md:flex items-center gap-1 text-green-600"
            >
              <Phone className="h-4 w-4" />
              <span>16910</span>
            </Link>
            <Link href="tel:16910" className="md:hidden text-black">
              <Phone className="h-5 w-5" />
            </Link>
            <Link
              className="bg-green-600 text-white rounded-md px-3 py-1 md:px-6"
              href="/auth/login/?returnUrl=%2Fen%2Fproduct%2Fielts-course%2F"
            >
              <span className="text-[12px] font-semibold md:text-[16px] md:font-medium">
                লগ-ইন
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
