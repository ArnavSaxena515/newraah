import React from "react";
import Navbar from "@/components/navbar";

export default function AboutPage() {
    return (
        <div className="bg-gray-950 min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
            <Navbar />
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-blue-100 mb-6">
                    About NewRaah
                </h1>
                <p className="text-gray-300 text-lg sm:text-xl mb-12">
                    NewRaah is your all-in-one assistant for smarter job applications.
                    From tailored resumes to personalized outreach and skill recommendations,
                    we help you stand out in a competitive job market.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-2 text-gray-400">
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                    <p>
                        We believe job hunting shouldn&apos;t feel like a second job. NewRaah was created
                        to empower professionals, students, and career changers with tools that
                        simplify the process and improve outcomes.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Who It&apos;s For</h2>
                    <p>
                        Whether you&apos;re just entering the workforce, switching careers,
                        or aiming higher, NewRaah gives you the competitive edge to
                        apply smarter, grow your profile, and land the right opportunity.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">What We Offer</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Resume builder with ATS optimization</li>
                        <li>AI-generated cover letters & outreach messages</li>
                        <li>Skill suggestions based on real job listings</li>
                        <li>Application tracker to manage everything in one place</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Built with Purpose</h2>
                    <p>
                        Created by job seekers, for job seekers — NewRaah is shaped by real-world
                        struggles and insights. We&apos;re here to help you stop guessing and start
                        progressing.
                    </p>
                </div>
            </div>

            <p className="text-center text-sm text-gray-600 mt-16">
                Got questions? Contact us at <a className="underline" href="mailto:arnavsaxena54@gmail.com">arnavsaxena54@gmail.com</a>
            </p>
            <div className="text-center text-sm text-gray-600 mt-4 space-x-4">
                <a className="underline" href="/privacy">Privacy Policy</a>
                <span>|</span>
                <a className="underline" href="/terms_of_service">Terms of Service</a>
            </div>
        </div>
    );
}
