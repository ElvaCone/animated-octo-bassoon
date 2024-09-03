import { NextResponse } from "next/server"

export async function GET() {
    const metadata = {
        title: 'API 动态标题',
        description: '这是从 API 获取的动态描述',
        keywords: ['API', '动态', '描述']
    }

    return NextResponse.json(metadata)
}

