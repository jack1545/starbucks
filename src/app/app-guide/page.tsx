import Image from 'next/image';

export default function AppGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Starbucks App Guide</h1>
      <div className="flex justify-center">
        <Image
          src="/starbucks_app_development_guide.jpg"
          alt="Starbucks App Guide"
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-8 text-lg">
        <p className="mb-4">
          Welcome to the Starbucks App! This app makes your Starbucks experience even more convenient. Whether it's ordering ahead, mobile payment, or collecting Stars for rewards, everything is at your fingertips.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Key Features:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Mobile Order & Pay:</strong> Skip the line by ordering your favorite drinks and food in advance through the app and pick them up at the store.</li>
          <li><strong>Starbucks Rewards:</strong> Easily manage your Starbucks Card, collect Stars with every purchase, and redeem them for free drinks and other exclusive rewards.</li>
          <li><strong>Store Locator:</strong> Quickly find the nearest Starbucks store, check its opening hours, and view store details.</li>
          <li><strong>Digital Receipts:</strong> Say goodbye to paper receipts. Easily request and manage digital receipts within the app.</li>
          <li><strong>Personalized Recommendations:</strong> Get recommendations for exclusive drinks and the latest promotions based on your preferences.</li>
        </ul>
      </div>
    </div>
  );
} 