import React from 'react';

const SettingsPage = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-bold mb-4'>Users</h1>
      <table className='w-full rounded shadow'>
        <thead>
          <tr className='bg-gray-100 text-left'>
            <th className='p-2'>First Name</th>
            <th className='p-2'>Last Name</th>
            <th className='p-2'>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default SettingsPage;
