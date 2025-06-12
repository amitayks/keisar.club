import { PortfolioItem } from "../types/portfolio";

interface AdditionalInfoTableProps {
  additionalInfo: PortfolioItem["additionalInfo"];
}

function AdditionalInfoTable({ additionalInfo }: AdditionalInfoTableProps) {
  return (
    <div>
      {/* <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                    מידע נוסף
                  </h3> */}
      <div className='space-y-3'>
        {additionalInfo.map((info, index) => (
          <div
            key={index}
            className='flex justify-between py-2 border-b border-gray-100 dark:border-gray-800'
          >
            <span className='font-medium text-gray-700 dark:text-gray-300'>
              {info.label}
            </span>
            <span className='text-gray-600 dark:text-gray-400'>
              {info.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdditionalInfoTable;
