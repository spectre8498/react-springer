export const formatTimestampToDate = (timestamp) => {
    if (!timestamp) return '';
    
    const date = new Date(Number(timestamp));
    if (isNaN(date.getTime())) return '';
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    return date.toLocaleDateString('en-US', options);
  };