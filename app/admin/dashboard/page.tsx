import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

const DashboardPage = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-1 bg-gray-100 dark:bg-gray-950'>
        <div className='p-6 grid gap-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-lg font-medium'>Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>$43,323,231</div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-lg font-medium'>Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+2,350</div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-lg font-medium'>Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+12,234</div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>+19% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-lg font-medium'>Active Now</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+583</div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>+201 since last hour</p>
              </CardContent>
            </Card>
          </div>
          <div className='grid gap-6'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-sm font-medium'>Recent Signups</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Jacob Chung</TableCell>
                      <TableCell>jacobchung@gmail.com</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell>2024-04-21</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jacob Chung</TableCell>
                      <TableCell>jacobchung@gmail.com</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell>2024-04-21</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jacob Chung</TableCell>
                      <TableCell>jacobchung@gmail.com</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell>2024-04-21</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jacob Chung</TableCell>
                      <TableCell>jacobchung@gmail.com</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell>2024-04-21</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Jacob Chung</TableCell>
                      <TableCell>jacobchung@gmail.com</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell>2024-04-21</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
