import React, { useState } from "react";

const GptPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Gpt Movie Search
        </h1>
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="text"
            placeholder="Search for a movie..."
            className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            Search
          </button>
        </form>

        {/* Placeholder for results */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Replace this with mapped search results */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
              <div className="w-full h-48 bg-gray-700 rounded mb-3" />
              <h3 className="text-lg font-bold">Movie Title</h3>
              <p className="text-sm text-gray-400">Year • Genre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptPage;
