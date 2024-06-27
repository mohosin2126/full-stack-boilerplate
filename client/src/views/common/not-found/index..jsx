export default function ErrorPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Not Found</h1>
                <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
                <button
                    className="mt-6 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
