import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Starbucks Secret Menu',
    description: 'Get in touch with the Starbucks Secret Menu team. We love hearing from our community!',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-starbucks-green mb-6 text-center">
                        Contact Us
                    </h1>
                    <p className="text-lg text-gray-700 text-center mb-8">
                        Have a question, a new recipe to share, or feedback for us? We'd love to hear from you!
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-starbucks-green focus:border-starbucks-green sm:text-sm"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-starbucks-green focus:border-starbucks-green sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-starbucks-green focus:border-starbucks-green sm:text-sm"
                                placeholder="Your message, recipe idea, or feedback..."
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-starbucks-green hover:bg-starbucks-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-starbucks-green"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
} 