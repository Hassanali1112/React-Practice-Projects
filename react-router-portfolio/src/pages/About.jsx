import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-gray-200 px-4 py-16 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About This Project
        </h2>
        <p className="text-lg mb-6 ">
          This mini project is created using React and Tailwind CSS. It follows
          modern UI/UX principles and is fully responsive across all devices.
          <br />
          The goal is to deliver clean, scalable, and professional-grade
          frontend experiences using real-world industry techniques.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
            <p className="text-gray-600">
              React, Tailwind CSS, React Router DOM
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
            <p className="text-gray-600">
              Responsive design, clean code, modular components
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
