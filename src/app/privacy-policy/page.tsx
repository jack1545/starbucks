import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Starbucks Secret Menu',
    description: 'Read the privacy policy for our Starbucks Secret Menu website.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-starbucks-green mb-6 text-center">
                        Privacy Policy
                    </h1>
                    <div className="text-gray-700 space-y-4">
                        <p className="text-sm text-gray-500 text-right italic">Last updated: July 15, 2025</p>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">1. Introduction</h2>
                            <p className="leading-relaxed">
                                Welcome to our Starbucks Secret Menu website. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                            </p>
                        </section>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">2. Information We Collect</h2>
                            <p className="leading-relaxed mb-4">
                                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                            </p>
                            <ul className="list-disc list-outside ml-6 space-y-2">
                                <li>
                                    <strong className="font-semibold">Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you contact us through the site or subscribe to our newsletter.
                                </li>
                                <li>
                                    <strong className="font-semibold">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                                </li>
                            </ul>
                        </section>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">3. Use of Your Information</h2>
                            <p className="leading-relaxed mb-4">
                                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                            </p>
                            <ul className="list-disc list-outside ml-6 space-y-2">
                                <li>Respond to your comments and questions and provide customer service.</li>
                                <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
                                <li>Monitor and analyze trends, usage, and activities in connection with our Site.</li>
                                <li>Compile anonymous statistical data and analysis for use internally.</li>
                            </ul>
                        </section>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">4. Disclosure of Your Information</h2>
                            <p className="leading-relaxed">
                                We do not share, sell, rent, or trade your information with third parties for their commercial purposes.
                            </p>
                        </section>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">5. Security of Your Information</h2>
                            <p className="leading-relaxed">
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                            </p>
                        </section>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">6. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have questions or comments about this Privacy Policy, please contact us through the contact form on our website.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
} 