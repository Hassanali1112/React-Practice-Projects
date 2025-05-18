import React from "react";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to My Mini Project
        </h1>
        <p className="text-lg md:text-xl mb-6">
          A fully responsive, modern React project built with Tailwind CSS,
          designed to match industry standards.
        </p>
        <a
          href="/about"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
