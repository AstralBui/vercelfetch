'use client';

import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [data, setData] = useState([]);

  const fetchData = async (date: Date) => {
    try {
      const formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      const response = await fetch(`/api/fetchEvents?date=${formattedDate}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      fetchData(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div>
      <h1>Event Data Table</h1>
      <div style={{ marginBottom: '20px' }}>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)} // Handle null value
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
        />
      </div>
      {data.length > 0 ? (
        <DataTable data={data} />
      ) : (
        <p>No data available for the selected date.</p>
      )}
    </div>
  );
};

export default Home;
