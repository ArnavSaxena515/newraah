import React from "react";
import supabase from "@/lib/supabase_client";
import {professionList} from "@/data";

const defaultForm = {
    email: "",
    status: "",
    goal: "",
    resumeStatus: "",
    challenge: "",
    feature: "",
    beta: false,
    professionField: "",
};

export default function WaitlistForm() {
    const [form, setForm] = React.useState(defaultForm);
    const [submitted, setSubmitted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);


    // Handle field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, type} = e.target;
        const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
        setForm((prev) => ({...prev, [name]: value}));
    };


    // Handle form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Save form to localStorage
        console.log(JSON.stringify(form));
        localStorage.setItem("waitlist_form_data", JSON.stringify(form));

        // Send magic link
        const {error} = await supabase.auth.signInWithOtp({
            email: form.email,
            options: {
                shouldCreateUser: true,
                emailRedirectTo: "https://www.newraah.com/signup-success"
            },

        });

        if (error) {
            alert("Error sending magic link");
        } else {
            setSubmitted(true);
        }
        const objectToInsert = {
            email: form.email,
            status: form.status,
            goal: form.goal,
            resume_status: form.resumeStatus,
            challenge: form.challenge,
            feature: form.feature,
            beta: form.beta,
            profession_field: form.professionField,
        }
        console.log(objectToInsert);
        console.log("Inserting object");
        const {
            data,
            error: insertError
        } = await supabase.from("waitlist").insert([objectToInsert]);
        console.log("Insert response:", {
            data,
            insertError
        });


        localStorage.removeItem("waitlist_form_data");
    };


    if (submitted) {
        return <div className="text-center text-green-600">✅
            Check your inbox for a confirmation link!</div>;
    }

    return (
        <form onSubmit={handleSubmit}
              className="space-y-4 text-sm text-white ">
            <div className="bg-gray-950 space-y-4 ">
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" required
                       placeholder="Email address"
                       onChange={handleChange}
                       className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-950 custom-textarea"/>


                <label htmlFor="status">Status (optional)</label>
                <select name="status"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg custom-select">
                    <option
                        className="custom-dropdown-option"
                        value="">
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="student">Student
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="working">Working
                        professional
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="job-seeker">Job seeker
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="switching">Career
                        switcher
                    </option>
                </select>


                <label htmlFor="goal">Your Goal (optional)</label>
                <select name="goal"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg custom-select">
                    <option
                        className="custom-dropdown-option"
                        value="">
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="first-job">Get first job
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="switch">Switch jobs
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="referrals">Get referrals
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="portfolio">Improve
                        profile
                    </option>
                </select>

                <label htmlFor="professionField">Your Field (optional)</label>
                <select
                    name="professionField"
                    value={form.professionField}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg custom-select"
                >
                    <option
                        className="custom-dropdown-option"
                    value="">
                    </option>
                    {professionList.map((profession) => (
                        <option
                            className="custom-dropdown-option"
                            key={profession}
                            value={profession}>{profession}</option>
                    ))}
                </select>
                <label htmlFor="resumeStatus">Resume Status (optional)</label>
                <select name="resumeStatus"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg custom-select">
                    <option
                        className="custom-dropdown-option"
                        value="">
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="none">Haven&apos;t
                        created
                        yet
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="needs-update">Needs
                        update
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="active">Actively applying
                    </option>
                </select>

                <textarea name="challenge" rows={3}
                          placeholder="Your biggest challenge? (optional)"
                          onChange={handleChange}
                          className="w-full p-2 border rounded-lg custom-textarea"/>


                <label htmlFor="feature">Most Exciting Feature (optional)</label>
                <select name="feature"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg custom-select">
                    <option
                        className="custom-dropdown-option"
                        value="">
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="resume">Resume Builder
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="cover">Cover Letters
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="tracker">Job Tracker
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="skills">Skill Recommender
                    </option>
                    <option
                        className="custom-dropdown-option"
                        value="outreach">Recruiter
                        Outreach
                    </option>
                </select>

                <label className="flex items-center gap-2">
                    <input type="checkbox" name="beta"
                           onChange={handleChange}
                           className="rounded"/>
                    I want early access to test Newraah
                </label>
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center"
                disabled={isLoading}
            >
                {isLoading ? (
                    <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                    </svg>
                ) : (
                    "Join Waitlist"
                )}
            </button>

        </form>
    );
}
