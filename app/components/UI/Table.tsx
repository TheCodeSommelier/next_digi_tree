'use client';

import { useIsMobile } from '@/app/hooks/useMobile';
import { TableRow } from '@/app/types/Table';
import { FC } from 'react';

type Props = {
  tableRows: TableRow[]
}

const Table: FC<Props> = ({ tableRows }) => {
  const isMobile = useIsMobile(720);

  return <div className='w-full'>
    {
      isMobile ? (
        tableRows.map((row, index) => (
          <div
            key={crypto.randomUUID()} className="w-full px-3"
          >
            <div className="w-full px-3">
              <div className={`flex flex-col gap-4 py-6 text-left text-primary
                ${index !== tableRows.length - 1 ? 'border-b border-b-primary' : ''}`}
              >
                <p className='text-2xl font-semibold'>{row.service}</p>
                <p className='font-semibold'>bez Digitree</p>
                <p>{row.without}</p>
                <p className='text-accent font-semibold'>s Digitree</p>
                <p>{row.with}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <table className="w-full border-collapse text-sm text-primary">
          <thead className="text-left font-semibold text-2xl h-20">
            <tr>
              <th className="px-4 py-3">Detailní služba</th>
              <th className="px-4 py-3">bez Digitree</th>
              <th className="px-4 py-3 text-accent">s Digitree</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.service} className="border-t border-gray-50 h-20">
                <td className="px-4 py-3 font-semibold text-primary text-lg">{row.service}</td>
                <td className="px-4 py-3 text-primary/80">{row.without}</td>
                <td className="px-4 py-3 text-primary/90">{row.with}</td>
              </tr>
      ))}
          </tbody>
        </table>
      )
    }
  </div>;
};

export default Table;
