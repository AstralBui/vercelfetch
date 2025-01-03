import React from 'react';

interface DataTableProps {
  data: { date: string; eventId: string; registrants: number; visitors: number; regimp: number; partiimp: number; bracketimp: number; overviewimp: number; calendarimp: number; footerimp: number; otherimp: number; }[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Date</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Event</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Registrants</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Visitors</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Reg Imp</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Parti Imp</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Bracket Imp</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Overview Imp</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Calendar Imp</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Footer Imp</th>
            <th style={{ border: '1px solid #ccc', padding: '6px' }}>Other Imp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.date}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.eventId}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.registrants}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.visitors}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.regimp}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.partiimp}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.bracketimp}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.overviewimp}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.calendarimp}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.footerimp}</td>
              <td style={{ border: '1px solid #ccc', padding: '6px' }}>{row.otherimp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
