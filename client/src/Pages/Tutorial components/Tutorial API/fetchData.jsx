export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    },
  };
  
//   export const youtubeOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//       'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//     },
//   };
  
  // export const fetchData = async (url, options) => {
  //   const res = await fetch(url, options);
  //   const data = await res.json();
  
  //   return data;
  // };
  


  // fetchData.js

export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    
    // Check for rate limit error (429)
    if (res.status === 429) {
      const retryAfter = res.headers.get('Retry-After');
      console.log(`Rate limit exceeded. Retrying in ${retryAfter} seconds...`);
      
      // Retry the request after the specified delay
      await new Promise(resolve => setTimeout(resolve, retryAfter * 1000)); // Retry delay in ms
      return fetchData(url, options); // Retry fetching data after delay
    }
    
    // Parse the response as JSON
    const data = await res.json();
    
    // Return the data
    return data;
    
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
