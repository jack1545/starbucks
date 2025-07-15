import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - Starbucks Secret Menu',
    description: 'Read the terms of service for our Starbucks Secret Menu website.',
};

export default function TermsOfServicePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-starbucks-green mb-6 text-center">
                        Terms of Service
                    </h1>
                    <div className="text-gray-700 space-y-4">
                        <p className="text-sm text-gray-500 text-right italic">Last updated: July 15, 2025</p>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">1. Agreement to Terms</h2>
                            <p className="leading-relaxed">
                                By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                            </p>
                        </section>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">2. Intellectual Property Rights</h2>
                            <p className="leading-relaxed">
                                The content on our website, including text, graphics, images, and recipes, is owned by us or our licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our express written permission.
                            </p>
                        </section>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">3. User Conduct</h2>
                            <p className="leading-relaxed mb-4">
                                You agree to use our website only for lawful purposes. You may not use our website:
                            </p>
                            <ul className="list-disc list-outside ml-6 space-y-2">
                                <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
                                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                            </ul>
                        </section>

                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">4. Disclaimers</h2>
                            <p className="leading-relaxed">
                                Our website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of our website or the information, content, or materials included on it. The recipes and information are for informational purposes only. We are not affiliated with Starbucks Corporation.
                            </p>
                        </section>
                        
                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">5. Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                In no event shall we be liable for any damages whatsoever, including but not limited to any direct, indirect, special, incidental, or consequential damages, arising out of or in connection with the use or inability to use our website.
                            </p>
                        </section>
                        
                        <section className="pt-4">
                            <h2 className="text-2xl font-semibold text-starbucks-dark-green mb-3">6. Changes to Terms</h2>
                            <p className="leading-relaxed">
                                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the website after any such changes constitutes your acceptance of the new terms.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
} 