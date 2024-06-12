const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('token');
  
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    };
  
    const response = await fetch(url, {
      ...options,
      headers,
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  };
  
  export default fetchWithAuth;
  