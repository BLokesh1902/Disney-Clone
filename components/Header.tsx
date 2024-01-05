// header has basically 2 parts left and tright part where left contains a logo which is a link and the right side part contains genre dropdown search which is a form and getDefaultHighWaterMark,light toggler and we we seperate the 2 parts using space between

import Image from "next/image"
import Link from "next/link"
import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";
import { ThemeToggler } from "./ThemeToggler";



function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      {/* Left side part of header  */}
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer invert-0 dark:invert"}
        />
      </Link>

      {/* Right side part of the header */}

      <div className="flex space-x-2">
        {/* Genre dropdown */}

        <GenreDropdown />

        {/* Search Input */}

        <SearchInput />

        {/* Theme Toggler */}

        <ThemeToggler />
      </div>
    </header>
  );
}
export default Header