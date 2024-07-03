export const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
  
    // Map and sort the data
    return data
      .map(country => ({
        value: country.name.common, // Use country code as value
        label: country.name.common,
        flag: country.flags.svg,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  };
  