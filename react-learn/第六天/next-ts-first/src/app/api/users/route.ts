import { NextResponse, NextRequest } from 'next/server';
import { User } from '@/types/user';

let users: User[] = [
  { user_id: 1, user_name: "张三", published_news: 5 },
  { user_id: 2, user_name: "李四", published_news: 3 },
  { user_id: 3, user_name: "王五", published_news: 7 },
  { user_id: 4, user_name: "赵六", published_news: 2 },
];

// GET 方法：获取用户列表或单个用户
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('id');

  if (userId) {
    const user = users.find(u => u.user_id === parseInt(userId));
    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  }

  return NextResponse.json(users);
}

// POST 方法：添加新用户
export async function POST(request: NextRequest) {
  const newUser: User = await request.json();
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

// PUT 方法：更新用户信息
export async function PUT(request: NextRequest) {
  const updatedUser: User = await request.json();
  const userIndex = users.findIndex(u => u.user_id === updatedUser.user_id);

  if (userIndex !== -1) {
    users[userIndex] = updatedUser;
    return NextResponse.json(updatedUser);
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}

// DELETE 方法：删除用户
export async function DELETE(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('id');

  if (userId) {
    const userIndex = users.findIndex(u => u.user_id === parseInt(userId));
    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1);
      return NextResponse.json(deletedUser[0]);
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  }

  return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
}

