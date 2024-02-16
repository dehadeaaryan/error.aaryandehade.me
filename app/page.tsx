'use client';

import { getSubdomain } from "@/lib/domain";

const Page = () => {
    const subdomain = typeof window !== 'undefined' ? getSubdomain(window.location.href) : '';
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl">This page ({subdomain}) does not exist</h1>
            <button
                className="mt-4 px-4 py-2 bg-white text-black rounded hover:shadow-[0_10px_50px_5px_rgba(255,255,255,0.3)] duration-500"
                onClick={() => window.location.href = "https://www.aaryandehade.me"}>
                Go to aaryandehade.me
            </button>
        </div>
    );
};

export default Page;