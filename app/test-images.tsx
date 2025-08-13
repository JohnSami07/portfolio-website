'use client';

export default function TestImages() {
  const handleImageLoad = (imageName: string) => {
    console.log(`✅ ${imageName} loaded successfully`);
  };

  const handleImageError = (imageName: string) => {
    console.error(`❌ ${imageName} failed to load`);
  };

  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl font-bold mb-6">Image Loading Test</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4">
          <h2 className="font-semibold mb-2">Profile Picture</h2>
          <img
            src="/images/IMG_3180.jpeg"
            alt="Profile Picture Test"
            className="w-32 h-32 object-cover border"
            onLoad={() => handleImageLoad('IMG_3180.jpeg')}
            onError={() => handleImageError('IMG_3180.jpeg')}
          />
          <p className="text-sm text-gray-600 mt-2">Path: /images/IMG_3180.jpeg</p>
        </div>

        <div className="border p-4">
          <h2 className="font-semibold mb-2">Location Image</h2>
          <img
            src="/images/image.jpeg"
            alt="Location Test"
            className="w-32 h-32 object-cover border"
            onLoad={() => handleImageLoad('image.jpeg')}
            onError={() => handleImageError('image.jpeg')}
          />
          <p className="text-sm text-gray-600 mt-2">Path: /images/image.jpeg</p>
        </div>

        <div className="border p-4">
          <h2 className="font-semibold mb-2">About Photo</h2>
          <img
            src="/images/IMG_7029.jpeg"
            alt="About Photo Test"
            className="w-32 h-32 object-cover border"
            onLoad={() => handleImageLoad('IMG_7029.jpeg')}
            onError={() => handleImageError('IMG_7029.jpeg')}
          />
          <p className="text-sm text-gray-600 mt-2">Path: /images/IMG_7029.jpeg</p>
        </div>

        <div className="border p-4">
          <h2 className="font-semibold mb-2">University Campus</h2>
          <img
            src="/images/image-full.jpg"
            alt="Campus Test"
            className="w-32 h-32 object-cover border"
            onLoad={() => handleImageLoad('image-full.jpg')}
            onError={() => handleImageError('image-full.jpg')}
          />
          <p className="text-sm text-gray-600 mt-2">Path: /images/image-full.jpg</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-700">
          Open browser console (F12) to see image loading results. 
          All images should show ✅ success messages.
        </p>
      </div>
    </div>
  );
}
