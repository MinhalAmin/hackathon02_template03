"use client"; 
import Link from "next/link";
import Image from "next/image"

import { useState } from "react";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa"; // Importing search, cart, and heart icons

const Header = () => {
  const [query, setQuery] = useState<string>(""); // State for storing the search query
  const [isFocused, setIsFocused] = useState<boolean>(false); // State for managing focus state of the input field
  const [cartCount, setCartCount] = useState<number>(0); // State for cart items count
  const [wishlistCount, setWishlistCount] = useState<number>(0); // State for wishlist items count

  // Handle changes to the search input field
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handle the form submission for search
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted:", query); // You can replace this with actual search logic
  };

  // Handle adding/removing items to/from the cart
  const toggleCart = () => {
    setCartCount(cartCount === 0 ? 1 : 0); // Toggle cart count (add or remove item)
  };

  // Handle adding/removing items to/from the wishlist
  const toggleWishlist = () => {
    setWishlistCount(wishlistCount === 0 ? 1 : 0); // Toggle wishlist count (add or remove item)
  };


  return (
    <header className="text-black ">
      <div>
        {/* Top bar */}
    <div className="bg-slate-500 pt-2 flex justify-between">
      <Image src={"/logo1.png"} alt={'logo'} width={24} height={24}/>

    <ul
            className=" py-3  font-medium font-sans text-xs flex justify-end gap-2
            "
          >
            <li>
            <Link href="/location">Find a Store</Link>
            </li>
            <h1>|</h1>
            <li>
            <Link href="/#">Help</Link>
            </li>
            <h1>|</h1>
            <li>
            <Link href="/joinus">Join Us</Link>
            </li>
            <h1>|</h1>
            <li>
              <Link href="/login">Sign In</Link>
            </li>
          </ul>
          </div>

           {/* Main navigation */}
    <div className="flex flex-wrap justify-between items-center px-6 py-4">
      {/* Left section (Logo) */}
      <div className="flex items-center">
        <Image
          src={"/logo2.png"}
          alt="Nike Logo"
          width={35} height={35}
        />
      </div>

      {/* Center section (Navigation Links) */}
      <nav className="flex gap-4 md:gap-6 text-slate-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] ">
        <Link href="/featured" className="hover:text-black whitespace-nowrap">New & Featured</Link>
        <Link href="/" className="hover:text-black whitespace-nowrap">Home</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
      </nav>

      <div className="pr-28 pl-16 items-center">
        {/* Search Bar */}
        <form 
          onSubmit={handleSearchSubmit}
          className="relative flex items-center w-full"
        >
          {/* Search Input Field */}
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}  // Set focus state
            onBlur={() => setIsFocused(false)}  // Reset focus state
            placeholder="Search"
            className={`w-full py-4 pl-10 pr-4 rounded-full border transition-all ease-in-out duration-300 ${
              isFocused ? "w-96" : "w-96"
            } border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {/* Search Icon */}
          <FaSearch className="absolute left-3 text-gray-500" />
        </form>
        </div>

        <div className="flex pt-3 gap-4 ">
      {/* Cart Icon */}
      <div className="relative cursor-pointer" onClick={toggleCart}>
        <FaShoppingCart className="text-2xl text-gray-700" />
        {/* Show cart count */}
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>

      {/* Wishlist Icon */}
      <div className="relative cursor-pointer" onClick={toggleWishlist}>
        <FaHeart className="text-2xl text-gray-700 " />
        {/* Show wishlist count */}
        {wishlistCount > 0 && (
          <span className="absolute top-0 right-6 text-xs text-white bg-red-500 rounded-full w-5 h-5 
          flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </div>
    </div>
  
       </div>
  

          </div>

      </header>
  );
}
export default Header;

