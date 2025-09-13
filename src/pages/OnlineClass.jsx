import QRCode from 'react-qr-code';

const OnlineClass = () => {
  const [sessionLink] = useState('https://meet.example.com/session-123');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Online Class</h2>
        <div className="mb-6 bg-gray-200 h-48 flex items-center justify-center rounded-lg">
          <p className="text-gray-500">Video Preview Placeholder</p>
        </div>
        <p className="text-lg text-gray-600 mb-4">Join the live session:</p>
        <a
          href={sessionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mb-6 block"
        >
          {sessionLink}
        </a>
        <div className="mb-6">
          <QRCode value={sessionLink} size={200} className="mx-auto" />
          <p className="text-gray-600 mt-2">Scan to join</p>
        </div>
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition duration-300 font-semibold"
          onClick={() => window.open(sessionLink, '_blank')}
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default OnlineClass;