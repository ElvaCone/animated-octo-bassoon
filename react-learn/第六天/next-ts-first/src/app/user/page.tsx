import type { Metadata } from 'next';
import UserListClient from './UserListClient';

// 动态生成元数据，函数名必须是 generateMetadata
export async function generateMetadata(): Promise<Metadata> {
  const metadata = await fetch('http://localhost:3000/api/metadata').then(res => res.json());
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords
  }
}

// export const metadata: Metadata = {
//   title: "Create Next App --- User",
//   description: "Generated by create next app --- User",
//   keywords: ['aaa', 'bbb', 'ccc']
// };

const User = () => {
  return (
    <div>
      <UserListClient />
    </div>
  );
}

export default User;


