"use client";

import React from "react";
import {
    Card,
    Carousel
} from "@/components/ui/apple-cards-carousel";

export function FeaturesCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index}/>
    ));

    return (
        <div className="w-full h-full">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                What we offer
            </h2>
            <Carousel items={cards}/>
        </div>
    );
}

class CardContent extends React.Component<{
    longDescription: string
    shortDescription: string,
    footnote?: string,
}> {
    render() {
        return <div

            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span
                  className="font-bold text-neutral-700 dark:text-neutral-200">
                {this.props.shortDescription}
              </span>
                <br/>
                {this.props.longDescription}

                <br /><br /><br/>
                {this.props.footnote && <span
                    className="font-bold text-neutral-700 dark:text-neutral-200">
                Why do I care?

              </span>}{" "}{this.props.footnote}

            </p>
        </div>;
    }
}
const data = [
    {
        id: 1,
        title: "Create ATS-optimized resumes tailored to your experience",
        src: "./f1.png",
        content: (
            <CardContent
                shortDescription={"Your experience is unique — your resume should be too"}
                longDescription={
                    "Effortlessly generate ATS-optimized resumes tailored to your unique experience, " +
                    "role, and industry — designed to help you stand out and get noticed by both recruiters and applicant tracking systems"
                }
                footnote={"Because you deserve a resume" +
                    " that reflects your story — and" +
                    " gets you through the filters and" +
                    " into the hands of hiring managers."}
            />
        ),
    },
    {
        id: 2,
        category: "",
        title: "Reach out to recruiters and employees for your dream job",
        src: "./f2.png",
        content: (
            <CardContent
                shortDescription={
                    "Break into your dream company by reaching out to recruiters and team members — with AI-generated messages that actually get responses."
                }
                longDescription={
                    "Connect with recruiters and employees at your dream companies through personalized, AI-crafted outreach that boosts your chances of getting noticed and referred."
                }
                footnote={"Because a thoughtful message" +
                    " can open doors you didn’t know" +
                    " existed. Referrals and smart" +
                    " outreach boost your odds."}
            />
        ),
    },
    {
        id: 3,
        category: "Skill Recommender",
        title: "Identify relevant skills to enhance your profile",
        src: "./f3.png",
        content: (
            <CardContent
                shortDescription={
                    "Close the gap between where you are and where you want to be — learn exactly what skills recruiters are looking for"
                }
                longDescription={
                    "Identify high-impact, role-specific skills you need to enhance your profile and stay competitive — all based on the jobs you're actually applying for."
                }
                footnote={"Because knowing what to learn next brings clarity and confidence to your journey."}
            />
        ),
    },
    {
        id: 4,
        category: "Application Tracker",
        title: "Organize and monitor your job applications all in one place",
        src: "./f4.png",
        content: (
            <CardContent
                shortDescription={
                    "Take the stress out of your job hunt — monitor your progress and stay ahead with a clear, centralized tracker."
                }
                longDescription={
                    "Track and manage every job application in one unified dashboard — stay on top of deadlines, follow-ups, and next steps effortlessly."
                }
                footnote={"Because staying organized" +
                    " keeps you calm, confident, and in" +
                    " control. Missing a follow-up is a" +
                    " lost opportunity. Spreadsheets do" +
                    " not come with reminders"}
            />
        ),
    },
    {
        id: 5,
        category: "Personalized Cover Letters",
        title: "Stand out from the crowd with custom cover letters",
        src: "./f5.png",
        content: (
            <CardContent
                shortDescription={
                    "Go beyond generic — use AI to write impactful cover letters tailored to every opportunity"
                }
                longDescription={
                    "Stand out with tailored, AI-generated cover letters that speak directly to the role — and show employers you're the right fit before they even open your resume"
                }
                footnote={"Because a personal touch shows you care — and makes them care too."}
            />
        ),
    },
    {
        id: 6,
        category: "Web Extension Support",
        title: "Tired of answering the same questions? We got you",
        src: "./f6.png",
        content: (
            <CardContent
                shortDescription={"Answer once, apply faster"}
                longDescription={
                    "Skip the repetitive answers — our smart autofill and AI-assisted replies handle " +
                    "common job application questions for you based on your experiences."
                }
                footnote={"Because your energy should go into the job — not filling out the same form again and again."}
            />
        ),
    },
];


// const data = [
//     {
//         id: 1,
//         title: "Create ATS-optimized resumes  tailored to" +
//             " your experience",
//         src: "./f1.png",
//         content: <CardContent
//             shortDescription={"Your experience is unique — your resume should be too"}
//             longDescription={"Effortlessly generate ATS-optimized resumes tailored to your unique experience, " +
//                 "role, and industry — designed to help you stand out and get noticed by both recruiters and applicant tracking systems"}
//         footnote={"This is footnote"}/>,
//     },
//     {
//         id: 2,
//         category: "",
//         title: "Reach out to recruiters and employees" +
//             " for your dream job",
//         src: "./f2.png",
//         content: <CardContent
//             shortDescription={"Break into your dream company by reaching out to recruiters and team members — with AI-generated messages that actually get responses."}
//             longDescription={"Connect with recruiters and employees at your dream companies through personalized, AI-crafted outreach that boosts your chances of getting noticed and referred."}/>,
//     },
//     {
//         id: 3,
//         category: "Skill Recommender",
//         title: "Identify relevant skills to" +
//             " enhance your profile",
//         src: "./f3.png",
//         content: <CardContent
//             shortDescription={"Close the gap between where you are and where you want to be — learn exactly what skills recruiters are looking for"}
//             longDescription={"Identify high-impact, role-specific skills you need to enhance your profile and stay competitive — all based on the jobs you're actually applying for."}/>,
//     },
//
//     {
//         id: 4,
//         category: "Application Tracker",
//         title: "Organize and monitor your job" +
//             " applications all in one place",
//         src: "./f4.png",
//         content: <CardContent
//             longDescription={"Track and manage every job application in one unified dashboard — stay on top of deadlines, follow-ups, and next steps effortlessly."
//             }
//             shortDescription={"Take the stress out of your job hunt — monitor your progress and stay ahead with a clear, centralized tracker."}/>,
//     },
//     {
//         id: 5,
//         category: "Personalized Cover Letters",
//         title: "Stand out from the crowd with custom" +
//             " cover letters",
//         src: "./f5.png",
//         content: <CardContent
//             shortDescription={"Go beyond generic — use AI to write impactful cover letters tailored to every opportunity"}
//             longDescription={"Stand out with tailored, AI-generated cover letters that speak directly to the role — and show employers you're the right fit before they even open your resume"}/>,
//     },
//     {
//         id: 6,
//         category: "Web Extension Support",
//         title: "Tired of answering the same questions" +
//             "? We got you",
//         src: "./f6.png",
//          content: <CardContent longDescription={
//              "Skip the repetitive answers — our smart" +
//              " autofill and AI-assisted replies handle" +
//              " common job application questions for you" +
//              " based on your experiences."
//          }
//          shortDescription={"Answer once, apply faster"}/>,
//     },
// ];
