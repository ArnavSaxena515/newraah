// pages/terms-of-service.tsx

import React from "react";
import Navbar from "@/components/navbar";

const TermsOfServicePage = () => {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 text-gray-100">
            <Navbar/>
            <h1 className="text-3xl font-bold mb-6">Terms of Service for NewRaah</h1>
            <p className="mb-4 italic">Last updated: 29th June 2025</p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
                <p>
                    By accessing or using the NewRaah website (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Use of the Service</h2>
                <p>You agree to use the Service only for lawful purposes and in accordance with these Terms.</p>
                <ul className="list-disc list-inside mt-2">
                    <li>You will not use the Service for any fraudulent or harmful activity.</li>
                    <li>You agree not to attempt unauthorized access to any part of the Service.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. User Content</h2>
                <p>
                    You retain ownership of the data and information you provide, including your resume details and personal inputs. By submitting this content, you grant NewRaah a license to use it to provide and improve the Service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Account and Authentication</h2>
                <p>
                    Some features require account creation and email verification. You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Termination</h2>
                <p>
                    We reserve the right to suspend or terminate access to the Service for violation of these Terms or any behavior that could harm the Service or its users.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Disclaimer of Warranties</h2>
                <p>
                    The Service is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee that the Service will meet your expectations or that it will be uninterrupted or error-free.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
                <p>
                    In no event shall NewRaah be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">8. Changes to Terms</h2>
                <p>
                    We may update these Terms of Service from time to time. Any changes will be effective when posted on this page.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at:
                    <br />
                    <strong>Email:</strong> arnavsaxena54@gmail.com
                </p>
            </section>
        </main>
    );
};

export default TermsOfServicePage;
