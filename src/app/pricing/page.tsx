import React from "react";
import Navbar from "@/components/navbar";

const plans = [
    {
        title: "Starter",
        price: "Free",
        tagline: "For job seekers starting out",
        features: [
            { text: "1 active resume template", tooltip: "Use one professionally-designed resume layout" },
            { text: "Basic resume builder (ATS-friendly)", tooltip: "Build resumes that pass applicant tracking systems" },
            { text: "Track up to 10 job applications", tooltip: "Stay organized and track where you've applied" },
            { text: "Email reminders and progress dashboard", tooltip: "Keep tabs on application deadlines and responses" },
            { text: "Basic career insights", tooltip: "Get general suggestions to improve your job profile" }
        ],
        highlight: false
    },
    {
        title: "Pro",
        price: "₹399/mo",
        tagline: "For serious job seekers",
        features: [
            { text: "Unlimited resume versions & templates", tooltip: "Create multiple customized resumes for different roles" },
            { text: "10 AI-generated cover letters/month", tooltip: "Get personalized cover letters using AI" },
            { text: "AI-crafted recruiter outreach", tooltip: "Generate targeted messages to connect with recruiters" },
            { text: "Smart skill gap insights", tooltip: "Identify missing skills based on jobs you're applying for" },
            { text: "Priority support", tooltip: "Get faster assistance from our support team" }
        ],
        highlight: true
    },
    {
        title: "Career Accelerator",
        price: "₹1299/mo",
        tagline: "For professionals & career switchers",
        features: [
            { text: "Unlimited resumes, cover letters & outreach", tooltip: "No limits on AI-powered documents and messages" },
            { text: "Advanced optimization for multiple job types", tooltip: "Tailor your application for different industries" },
            { text: "Referrals & recruiter data tools", tooltip: "Find people who can refer or recruit you" },
            { text: "Export-ready portfolios", tooltip: "Generate shareable, professional portfolios" },
            { text: "Interview prep module (coming soon)", tooltip: "Practice and prepare for interviews effectively" }
        ],
        highlight: false
    }
];

export default function PricingPage() {
    return (
        <div className="bg-gray-950 min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
            <Navbar/>
            <h1 className="text-4xl lg:text-6xl font-bold text-center text-blue-100 mb-4">
                Choose your path with NewRaah
            </h1>
            <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto text-base sm:text-lg">
                Whether you&apos;re just starting out or taking the next big step, we have a plan tailored to support your job journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl border p-6 flex flex-col justify-between shadow-md transition-transform duration-300 hover:scale-105 ${
                            plan.highlight ? "border-blue-500 bg-gray-900" : "border-gray-800 bg-gray-900"
                        }`}
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-blue-100 mb-1">{plan.title}</h2>
                            <p className="text-lg text-gray-400 mb-4">{plan.tagline}</p>
                            <p className="text-3xl font-extrabold text-white mb-6">{plan.price}</p>
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-300 flex items-start group relative cursor-help"
                                    >
                                        <span className="text-green-400 mr-2">✔</span>
                                        {feature.text}
                                        <span className="absolute left-6 top-full z-10 hidden group-hover:block bg-gray-800 text-sm text-white rounded px-2 py-1 mt-1 whitespace-normal max-w-xs shadow-lg">
                      {feature.tooltip}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>

            <p className="text-sm text-center text-gray-500 mt-12">
                Looking for AI credit top-ups? Coming soon.
            </p>
        </div>
    );
}
