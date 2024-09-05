import type { Metadata } from 'next'
import UserInfoClient from "./UserInfoClient"

// 动态生成元数据，函数名必须是 generateMetadata
export async function generateMetadata(): Promise<Metadata> {
  const metadata = await fetch('http://localhost:3000/api/metadata').then(res => res.json());
  return {
    title: {
      absolute: metadata.title // 让Layout中的模板不生效
    },
    description: metadata.description,
    keywords: metadata.keywords
  }
}

type Props = {}

const UserInfoPage = (props: Props) => {
  return (
    <UserInfoClient />
  )
}

export default UserInfoPage

