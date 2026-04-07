"use client";

import { useIsMobile } from "@/app/hooks/useMobile";
import { FC } from "react";

type Props = {
  tableRows: Record<string, string>[];
  headings: [string, string, string];
};

const Table: FC<Props> = ({ tableRows, headings }) => {
  const isMobile = useIsMobile(720);

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-50/50">
        {isMobile ? (
          tableRows.map((row, index) => (
            <div key={crypto.randomUUID()} className="w-full px-3">
              <div className="w-full px-3">
                <div
                  className={`flex flex-col gap-4 py-6 text-left text-primary
                ${index !== tableRows.length - 1 ? "border-b border-b-primary" : ""}`}
                >
                  <p className="text-2xl font-semibold">{row.service}</p>
                  <p className="font-semibold">bez Digitree</p>
                  <p>{row.column1}</p>
                  <p className="text-accent font-semibold">s Digitree</p>
                  <p>{row.column2}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <table className="w-full border-collapse text-sm text-primary">
            <thead className="text-left font-semibold text-2xl h-20">
              <tr>
                {headings.map((heading, index) => (
                  <th
                    key={crypto.randomUUID()}
                    className={`px-4 py-3 ${index === headings.length - 1 ? "text-accent" : ""}`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.service} className="border-t border-gray-50 h-20">
                  <td className="px-4 py-3 font-semibold text-primary text-lg">
                    {row.service}
                  </td>
                  <td className="px-4 py-3 text-primary/80">{row.column1}</td>
                  <td className="px-4 py-3 text-primary/90">{row.column2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
