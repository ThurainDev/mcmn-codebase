import React from 'react';
import { usePageData } from '../../hooks/usePageData';

export default function ApiDemo() {
  const { data: homeData, loading: homeLoading, error: homeError } = usePageData('home');
  const { data: aboutData, loading: aboutLoading, error: aboutError } = usePageData('about');
  const { data: whatWeProvideData, loading: whatWeProvideLoading, error: whatWeProvideError } = usePageData('what-we-provide');
  const { data: musicDistributionData, loading: musicDistributionLoading, error: musicDistributionError } = usePageData('music-distribution');
  const { data: tunesAcademyData, loading: tunesAcademyLoading, error: tunesAcademyError } = usePageData('tunes-academy');
  const { data: contactData, loading: contactLoading, error: contactError } = usePageData('contact');

  const renderDataSection = (title, data, loading, error) => (
    <div className="mb-8 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold text-[#E6D28C] mb-4">{title}</h3>
      
      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#E6D28C] mx-auto mb-2"></div>
          <p className="text-[#E6D28C]/70">Loading...</p>
        </div>
      )}
      
      {error && (
        <div className="text-red-400 p-4 bg-red-900/20 rounded">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
        </div>
      )}
      
      {data && (
        <div className="bg-gray-900 p-4 rounded overflow-auto">
          <pre className="text-sm text-green-400 whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );

  return (
    <div className="padding pt-[130px] pb-[30px] bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#E6D28C] mb-8 text-center">
          API Data Demo
        </h1>
        <p className="text-center text-[#E6D28C]/80 mb-12 max-w-3xl mx-auto">
          This page demonstrates how the frontend connects to the backend API to fetch data for each route.
          All data is now dynamically loaded from the backend instead of being hardcoded.
        </p>

        {renderDataSection('Home Page Data', homeData, homeLoading, homeError)}
        {renderDataSection('About Page Data', aboutData, aboutLoading, aboutError)}
        {renderDataSection('What We Provide Data', whatWeProvideData, whatWeProvideLoading, whatWeProvideError)}
        {renderDataSection('Music Distribution Data', musicDistributionData, musicDistributionLoading, musicDistributionError)}
        {renderDataSection('Tunes Academy Data', tunesAcademyData, tunesAcademyLoading, tunesAcademyError)}
        {renderDataSection('Contact Page Data', contactData, contactLoading, contactError)}

        <div className="mt-12 p-6 bg-[#1A2151] rounded-lg">
          <h3 className="text-xl font-bold text-[#E6D28C] mb-4">How to Use This Data</h3>
          <div className="space-y-4 text-[#E6D28C]/80">
            <p>
              <strong>1. Import the hook:</strong> <code className="bg-gray-800 px-2 py-1 rounded">import { usePageData } from '../hooks/usePageData';</code>
            </p>
            <p>
              <strong>2. Use in component:</strong> <code className="bg-gray-800 px-2 py-1 rounded">const { data, loading, error } = usePageData('home');</code>
            </p>
            <p>
              <strong>3. Access data:</strong> <code className="bg-gray-800 px-2 py-1 rounded">{data?.hero?.title}</code>
            </p>
            <p>
              <strong>4. Handle states:</strong> Show loading spinner, error messages, and content based on the API response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
