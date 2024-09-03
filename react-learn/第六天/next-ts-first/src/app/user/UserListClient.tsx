'use client'

import React, { useEffect, useState } from 'react';
import type { User as UserType } from '@/types/user';

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/users')
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => {
        console.error('Error fetching users:', error);
        setError('Failed to load users');
      });
  }, []);

  if (error) {
    return <div className="container mx-auto px-4 py-8">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">用户列表</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {users.map(user => (
            <li key={user.user_id} className="p-4 hover:bg-gray-50 transition duration-150 ease-in-out">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                    {user.user_name[0]}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{user.user_name}</div>
                    <div className="text-sm text-gray-500">用户ID: {user.user_id}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-blue-600">
                  已发布新闻: {user.published_news}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserList;

