import { TableRow } from '@/app/types/Table';
import { FC } from 'react';

type Props = {
  tableRows: TableRow[]
}


const Table: FC<Props> = ({ tableRows }) => {
  return <table className="w-full border-collapse text-sm text-primary">
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
  </table>;
};

export default Table;
