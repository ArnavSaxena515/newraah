// pages/privacy-policy.tsx



const PrivacyPolicyPage = () => {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 text-gray-100">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy for NewRaah</h1>
            <p className="mb-4 italic">Last updated: [Insert Date]</p>
            <p className="mb-6">
                NewRaah (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                <a href="https://www.newraah.com" className="text-blue-400 underline">
                    https://www.newraah.com
                </a>. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
                <p className="mb-2">We collect the following personal information through our waitlist and feedback forms:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Email Address</li>
                    <li>Name</li>
                    <li>Occupation / Professional Field</li>
                    <li>Career Goals</li>
                    <li>Resume Status and Job Search Challenges (optional feedback fields)</li>
                </ul>
                <p className="mt-2">We do not knowingly collect sensitive personal data or data from children under the age of 13.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Add you to our waitlist</li>
                    <li>Send product updates and announcements</li>
                    <li>Understand user needs and improve our features</li>
                    <li>Recommend relevant features or content</li>
                </ul>
                <p className="mt-2">We may also use your email address to send important administrative messages.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. Data Storage and Security</h2>
                <p>Your information is securely stored in Supabase, our backend provider. We take appropriate security measures to protect your data from unauthorized access, disclosure, or destruction.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Sharing of Your Information</h2>
                <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties. We may share anonymized, aggregate data with partners for analytics and product improvement.</p>
                <p className="mt-2">We may disclose your information if required by law or to protect the rights and safety of NewRaah or others.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Your Rights and Choices</h2>
                <p>You may contact us at any time to:</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Request access to the personal data we hold about you</li>
                    <li>Request that we correct or delete your information</li>
                    <li>Opt out of emails and communications</li>
                </ul>
                <p className="mt-2">
                    To do so, email us at <strong>arnavsaxena54@gmail.com</strong>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Cookies and Tracking</h2>
                <p>We may use basic, privacy-friendly analytics (such as Plausible) to collect usage data. These services do not use invasive cookies or track you across the web.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. Any changes will be posted on this page with a revised &quot;Last Updated&quot; date.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or your data, please contact us at:</p>
                <p className="mt-2"><strong>Email:</strong> arnavsaxena54@gmail.com</p>
            </section>
        </main>
    );
};

export default PrivacyPolicyPage;
