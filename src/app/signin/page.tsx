"use client";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-xl shadow-lg">
        <Image src="/ayb-logo.png" alt="AYB Tutoring Logo" width={80} height={80} className="h-20 w-20 object-contain drop-shadow-lg" />
        <h1 className="text-3xl font-extrabold text-cyan-700 tracking-wide">AYB Tutoring</h1>
        <h2 className="text-xl font-bold text-blue-900">Coming Soon</h2>
        <p className="text-base text-gray-600 text-center max-w-xs">Sign In functionality will be available soon. Stay tuned!</p>
        <a href="/" className="mt-4 bg-blue-100 text-blue-900 font-bold px-6 py-2 rounded-xl shadow hover:bg-blue-200 transition">Home</a>
      </div>
    </div>
  );
}
