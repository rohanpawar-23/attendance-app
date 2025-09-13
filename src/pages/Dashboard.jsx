import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

const QRScanner = () => {
  const [result, setResult] = useState('No result');
  const [error, setError] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setResult(result);
      console.log('Scanned:', result);
    }
  };

  const handleError = (err) => {
    setError(err);
    console.error(err);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Scan QR for Attendance</h2>
        <div className="border-4 border-blue-500 rounded-xl overflow-hidden relative">
          <Scanner
            onScan={handleScan}
            onError={handleError}
            constraints={{ video: { facingMode: 'environment' } }}
            styles={{
              container: { width: '100%' },
              video: { width: '100%', objectFit: 'cover' },
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="w-3/4 h-3/4 border-2 border-green-400 animate-pulse"></div>
          </div>
        </div>
        {error && <p className="text-red-500 mt-4 text-center">{error.message}</p>}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-lg font-medium text-gray-700">Scan Result:</p>
          <p className="text-gray-900 break-all animate-fade-in">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;