import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - Starbucks Secret Menu',
    description: 'Learn more about the team and mission behind the ultimate Starbucks secret menu resource.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-starbucks-green mb-6 text-center">
                        About Us
                    </h1>
                    <div className="text-lg text-gray-700 space-y-6">
                        <p>
                            Welcome to the ultimate fan-driven resource for Starbucks secret menu enthusiasts! Our mission is to uncover, test, and share the most creative and delicious custom drink recipes that you won't find on the official menu.
                        </p>
                        <p>
                            This project was born from a passion for coffee and the endless possibilities that lie within Starbucks' extensive list of ingredients. We are a community of dedicated fans, baristas, and recipe creators who believe that the magic of Starbucks extends far beyond its standard offerings.
                        </p>
                        <p>
                            Since Starbucks officialized some secret menu items in its app in July 2025, our goal has evolved. We now serve as your guide to both the official hidden gems and the legendary community-crafted beverages. We provide clear, step-by-step instructions on how to order each drink, whether through the app or by making a custom request in-store.
                        </p>
                        <h2 className="text-2xl font-semibold text-starbucks-dark-green pt-4">
                            Our Commitment
                        </h2>
                        <p>
                            We are committed to providing accurate, up-to-date, and easy-to-follow recipes. Every drink on our site is thoroughly researched and tested to ensure you have the best possible experience. We also aim to foster a vibrant community where you can share your own discoveries, rate your favorites, and connect with fellow coffee lovers.
                        </p>
                        <p>
                            Thank you for being a part of our journey. Let's explore the delicious world of secret sips together!
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
} 