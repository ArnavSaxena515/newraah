const Footer = () => {
    return (
        <footer className="bg-black-100 text-gray-400 py-8 px-4 mt-20 border-t border-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm text-center md:text-left">
                {/* Left: Brand */}
                <div>
                    <p className="text-white font-semibold text-lg">Newraah</p>
                    <p className="mt-2">
                        Created with purpose by{" "}
                        <a
                            href="https://www.linkedin.com/in/arnav-saxena-96066b1b3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-green-400"
                        >
                            Arnav Saxena
                        </a>
                        <br />
                        helping job seekers cut through the noise and get noticed.
                    </p>
                </div>

                {/* Middle: Links */}
                <div>
                    <p className="text-white font-medium mb-2">Legal</p>
                    <ul className="space-y-1">
                        <li>
                            <a
                                href="/privacy-policy"
                                className="hover:text-green-400 transition"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/terms-of-service"
                                className="hover:text-green-400 transition"
                            >
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right: Credibility / Counter */}
                <div>
                    <p className="text-white font-medium mb-2">Early Access</p>
                    <p>
                        🎉 <strong>28</strong> job seekers already joined. Be part of the journey.
                    </p>
                </div>
            </div>

            <div className="text-center text-xs text-gray-600 mt-8">
                © {new Date().getFullYear()} Newraah. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
