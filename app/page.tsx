"use client";

import { useStoreModel } from "@/hooks/use-store-model";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/signup">
          <button className="bg-black w-40 h-10 rounded text-white text-2xl">
            Sign Up
          </button>
        </Link>
        <Link href="/signin">
          <button className="bg-black w-40 h-10 rounded text-white text-2xl">
            Sign In
          </button>
        </Link>
      </main>
      <div>Root Page</div>
    </div>
  );
}
