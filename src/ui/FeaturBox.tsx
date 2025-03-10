// import { ReactNode } from "react";

type FeatureBoxProps = {
  icon: React.ElementType;
  header: string;
  input: string;
};

function FeaturBox({ icon: Icon, header, input }: FeatureBoxProps) {
  return (
    <div className='bg-white p-8 rounded-lg shadow-md text-center'>
      <div className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4'>
        <Icon calssName='h-8 w-8' />
      </div>
      <h3 className='text-xl font-semibold mb-2'>{header}</h3>
      <p className='text-gray-600'>{input}</p>
    </div>
  );
}

export default FeaturBox;
