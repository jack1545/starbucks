import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer - Starbucks Secret Menu',
    description: 'Disclaimer for the Starbucks Secret Menu website.',
};

export default function DisclaimerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-starbucks-green mb-6 text-center">
                        Disclaimer
                    </h1>
                    <div className="text-gray-700 space-y-6">
                        <p className="leading-relaxed">
                            This website is a fan-made project and is not affiliated with, endorsed by, or sponsored by Starbucks Corporation. The "Starbucks" name, logo, and related marks are trademarks of Starbucks Corporation.
                        </p>
                        <p className="leading-relaxed">
                            All recipes and drink names on this site, unless otherwise noted as "official", are community-submitted or created by us for entertainment and informational purposes. The availability of ingredients can vary by location and season, and we cannot guarantee that your local Starbucks will be able to make every drink listed.
                        </p>
                        <p className="leading-relaxed">
                            Please be kind and patient with your baristas when ordering custom drinks. Always provide the full recipe instead of just the secret menu name.
                        </p>
                        <p className="leading-relaxed">
                             The nutritional information provided is an estimate and should not be considered a substitute for professional medical or dietary advice.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
} 