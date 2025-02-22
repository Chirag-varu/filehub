'use client'

import { toast } from "react-hot-toast";

export default function Home() {

  const handleClick = () => {
    toast.success("Awww you clicked it!");
  }

  return (
    <div className="flex-center h-screen bg-amber-100">
      {/* <button className="font-bold underline text-7xl text-brand cursor-default" onClick={handleClick}>Hello, Chirag!</button> */}
      <button className="font-bold underline text-7xl text-brand cursor-default" onClick={handleClick}>Say, Hello To Chirag!</button>
    </div>
  );
}
