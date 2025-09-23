"use client"

import Link from "next/link";
import { useCounterStore } from "@/store";

export default function Home() {
    const { count, increment, decrement } = useCounterStore();

    return (
        <div className="flex flex-col items-center justify-center gap-y-4 h-screen">
            <h1 className="font-bold text-5xl">Counter</h1>
            <p className="border border-solid border-white rounded-2xl px-10 py-8 text-5xl">{count}</p>
            <div className="flex gap-2">
                <button onClick={increment} className="border border-white border-solid rounded-2xl p-2 cursor-pointer text-2xl">Count Up</button>
                <button onClick={decrement} className="border border-white border-solid rounded-2xl p-2 cursor-pointer text-2xl">Count Down</button>
            </div>
            <Link href="/">Go to page 1</Link>
        </div>
    );
}
