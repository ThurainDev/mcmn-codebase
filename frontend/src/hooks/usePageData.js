import { useState, useEffect } from 'react';
import { pagesAPI } from '../services/api';

export const usePageData = (pageType) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let response;
        switch (pageType) {
          case 'home':
            response = await pagesAPI.getHomeData();
            break;
          case 'about':
            response = await pagesAPI.getAboutData();
            break;
          case 'what-we-provide':
            response = await pagesAPI.getWhatWeProvideData();
            break;
          case 'music-distribution':
            response = await pagesAPI.getMusicDistributionData();
            break;
          case 'tunes-academy':
            response = await pagesAPI.getTunesAcademyData();
            break;
          case 'contact':
            response = await pagesAPI.getContactData();
            break;
          default:
            throw new Error(`Unknown page type: ${pageType}`);
        }
        
        setData(response.data);
      } catch (err) {
        setError(err.message);
        console.error(`Error fetching ${pageType} data:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageType]);

  return { data, loading, error };
};
