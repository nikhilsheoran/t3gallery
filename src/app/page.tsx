import Image from "next/image";

const mockUrls = [
  "https://ny3cnatssm.ufs.sh/f/fNv8zSqTobiWbdkDbgGCqU4dkF02XmiB5uQG9n6acMbErpIA",
  "https://ny3cnatssm.ufs.sh/f/fNv8zSqTobiWbdkDbgGCqU4dkF02XmiB5uQG9n6acMbErpIA",
  "https://ny3cnatssm.ufs.sh/f/fNv8zSqTobiWbdkDbgGCqU4dkF02XmiB5uQG9n6acMbErpIA",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockImages.map((image) => (
            <div 
              key={image.id} 
              className="rounded-xl border border-white shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="relative aspect-square">
                <Image 
                  src={image.url} 
                  alt={`Image ${image.id}`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
