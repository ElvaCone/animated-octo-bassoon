import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 配置中间件
export const config = {
  // matcher 定义了中间件应用的路径
  matcher: [
    // 匹配以 /api 开头的所有路径及其子路径
    '/api/:path*',

    // 使用正则表达式匹配所有路径,但排除特定路径
    // (?!api|_next/static|_next/image|favicon.ico) 是负向前瞻,排除了这些特定路径
    '/((?!api|_next/static|_next/image|favicon.ico).*)',

    // 匹配具体的路径
    '/about',
    '/contact',
  ],
};

export function middleware(request: NextRequest) {
  // 中间件逻辑
  return NextResponse.next()
}

// 重定向
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/old-page') {
//     return NextResponse.redirect(new URL('/new-page', request.url))
//   }
// }

// 修改响应头
// export function middleware(request: NextRequest) {
//   const response = NextResponse.next()
//   response.headers.set('X-Custom-Header', 'Hello World')
//   return response
// }

// 为特定路径返回 JSON 响应
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/api/hello') {
//     return NextResponse.json({ message: 'Hello World' }) // 直接返回 JSON 响应
//   }
//   return NextResponse.next()
// }

// 修改响应状态码
// export function middleware(request: NextRequest) {
//   return NextResponse.rewrite(new URL(request.url), {
//     status: 200
//   })
// }

// 修改响应类型
// export function middleware(request: NextRequest) {
//   const response = NextResponse.next()
//   response.headers.set('Content-Type', 'application/json')
//   return response
// }

// 修改响应体
// export async function middleware(request: NextRequest) {
//   // 获取原始响应
//   const response = await NextResponse.next()

//   // 读取原始响应体
//   const originalBody = await response.text()

//   // 修改响应体
//   const newBody = originalBody + '\n<!-- 由中间件添加的内容 -->'

//   // 创建新的响应，包含修改后的体
//   const newResponse = new NextResponse(newBody, response)

//   // 可能需要调整 Content-Length 头
//   newResponse.headers.set('Content-Length', newBody.length.toString())

//   return newResponse
// }

// 登录验证
// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('auth_token');

//   if (!token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }

