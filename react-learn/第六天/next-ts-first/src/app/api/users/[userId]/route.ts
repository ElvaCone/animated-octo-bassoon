import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/types/user';

// 模拟用户数据
let users: User[] = [
  { user_id: 1, user_name: "张三", published_news: 5 },
  { user_id: 2, user_name: "李四", published_news: 3 },
  { user_id: 3, user_name: "王五", published_news: 7 },
  { user_id: 4, user_name: "赵六", published_news: 2 },
];

// GET 方法：获取特定用户信息
export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = parseInt(params.userId);
  const user = users.find(u => u.user_id === userId);

  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ error: '用户未找到' }, { status: 404 });
  }
}

// PUT 方法：更新特定用户信息
export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = parseInt(params.userId);
  const updatedUser: User = await request.json();

  const index = users.findIndex(u => u.user_id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser, user_id: userId };
    return NextResponse.json(users[index]);
  } else {
    return NextResponse.json({ error: '用户未找到' }, { status: 404 });
  }
}

// DELETE 方法：删除特定用户
export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = parseInt(params.userId);
  const index = users.findIndex(u => u.user_id === userId);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    return NextResponse.json(deletedUser);
  } else {
    return NextResponse.json({ error: '用户未找到' }, { status: 404 });
  }
}

