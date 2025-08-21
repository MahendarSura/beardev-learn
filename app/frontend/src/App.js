import React from 'react';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Professional Certificate Program in Cloud Computing and DevOps
          </h1>
          <p className="text-lg mb-6">
            Cloud Computing can help unlock 46 million jobs by 2030. Enroll and find yourself in the driver’s seat of the next big revolution in tech.
          </p>
          <p className="text-lg mb-6">
            Gain real-world experience in cloud computing with AWS, Azure, and GCP, alongside DevOps training.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Talk to Career Expert
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition">
              Download Brochure
            </button>
          </div>
          <div className="mt-8 flex gap-8 text-center">
            <div>
              <h3 className="font-semibold text-xl">3 Tracks</h3>
              <p>Choose Your Path</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">8 Months</h3>
              <p>Program Duration</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">31 Aug 2025</h3>
              <p>Admission Deadline</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="/cloud-devops-hero.png"
            alt="Cloud & DevOps Course"
            className="rounded shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 p-8 rounded mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Gen AI & DevOps Infusion</h3>
            <p>Experience a curriculum combining Cloud Computing, GenAI, and DevOps methodologies.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Career Support</h3>
            <p>Personalized coaching to prepare you for Cloud and DevOps roles at leading companies.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Certified Instructors</h3>
            <p>Learn from AWS, Azure, and GCP-certified instructors with real-world experience.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Real-world Projects</h3>
            <p>Hands-on experience with 50+ projects in cloud setup, automation, and container orchestration.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Comprehensive Cloud Tools</h3>
            <p>Master AWS, Azure, GCP, Docker, Kubernetes, Terraform and more.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Customized Tracks</h3>
            <p>Pick from AZ-104, SAA-C03, or both for tailored certification goals.</p>
          </li>
        </ul>
      </section>

      {/* Curriculum */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Curriculum Overview</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Course 0: Python Fundamentals</h3>
            <p>Basics of Python syntax, control structures, functions, and scripting.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Course 1: Mastering AWS and DevOps (16 weeks)</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Course 2: Mastering Microsoft Azure (16 weeks)</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Course 3: Mastering Google Cloud Platform (5 weeks)</h3>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-12 bg-gray-50 p-8 rounded max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Work on Real-World Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Mentorship Project - I</h3>
            <p>Automate database backup and restoration on AWS using Amazon RDS, Amazon S3, and Python scripting.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Mentorship Project - II</h3>
            <p>Design a serverless e-commerce application on AWS using Amazon S3, DynamoDB, Cognito, Lambda, and Cloudwatch.</p>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Who Will You Learn From?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="text-center max-w-xs">
            <img src="/neelam-pawar.jpg" alt="Neelam Pawar" className="rounded-full mx-auto w-32 h-32 object-cover" />
            <h3 className="mt-4 font-semibold">Neelam Pawar</h3>
            <p>Cloud Architect at Google with 12 years of experience across AWS, Azure & GCP.</p>
          </div>
          <div className="text-center max-w-xs">
            <img src="/neeraj-kheria.jpg" alt="Neeraj Kheria" className="rounded-full mx-auto w-32 h-32 object-cover" />
            <h3 className="mt-4 font-semibold">Neeraj Kheria</h3>
            <p>Director at MakeMyBrand, Microsoft & AWS certified with 15+ years of industry experience.</p>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="mt-12 bg-blue-600 text-white p-8 rounded max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Course Fee</h2>
        <p className="text-xl mb-6">INR 1,00,000* (Inclusive of taxes)</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
          Apply Now
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>
          Disclaimer: The above statistics depend on various factors and individual results may vary. Past performance is no guarantee of future results.
        </p>
        <p>
          The student assumes full responsibility for all expenses associated with visas, travel, and related costs. Beardev-Learn does not cover these.
        </p>
        <p className="mt-6 font-semibold">Beardev-Learn © 2025</p>
      </footer>
    </div>
  );
}

export default App;

