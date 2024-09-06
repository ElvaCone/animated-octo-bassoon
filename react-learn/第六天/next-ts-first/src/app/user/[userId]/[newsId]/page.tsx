import NewsInfoPage from "./NewsInfoClient"

export const metadata = {
  // 页面标题，显示在浏览器标签栏和搜索引擎结果中
  title: 'My Amazing Website',

  // 页面描述，通常用于搜索引擎优化（SEO）和社交媒体预览中
  description: 'This is a cool website built with Next.js',

  // 页面关键词，用于 SEO 优化，让搜索引擎更好地理解页面内容
  keywords: ['Next.js', 'React', 'SEO'],

  // Open Graph 元数据，用于社交媒体分享时的预览显示（如在 Facebook、LinkedIn 等平台）
  openGraph: {
    // Open Graph 分享时显示的标题
    title: 'My Open Graph Title',

    // Open Graph 分享时显示的描述
    description: 'This is an Open Graph description.',

    // 分享的页面 URL
    url: 'https://example.com',

    // 网站名称，用于 Open Graph 的显示
    siteName: 'My Site',

    // 分享时的图片信息，通常用于社交平台的缩略图预览
    images: [
      {
        url: 'https://example.com/og-image.jpg', // 图片的 URL
        width: 800, // 图片的宽度，像素值
        height: 600, // 图片的高度，像素值
      },
    ],

    // 页面语言及区域，`en_US` 表示美国英语
    locale: 'en_US',

    // Open Graph 类型，可以是 "website"、"article"、"product" 等，用于定义内容类型
    type: 'website',
  },

  // Twitter 卡片的元数据，定义在 Twitter 上分享的内容时显示的预览信息
  twitter: {
    // 卡片类型，`summary_large_image` 表示带有大图的摘要卡片
    card: 'summary_large_image',

    // Twitter 账户，`@site_username` 是你网站或公司的官方账户
    site: '@site_username',

    // Twitter 分享时的标题
    title: 'My Twitter Title',

    // Twitter 分享时的描述
    description: 'This is a Twitter description.',

    // Twitter 分享时使用的图片
    images: ['https://example.com/twitter-image.jpg'],
  },

  // 机器人和搜索引擎爬虫的规则配置
  robots: {
    // 是否允许搜索引擎索引此页面，`true` 表示允许
    index: true,

    // 是否允许搜索引擎跟随页面上的链接，`true` 表示允许
    follow: true,

    // 针对 GoogleBot 的单独规则
    googleBot: {
      // 是否允许 GoogleBot 索引页面，`true` 表示允许
      index: true,

      // 是否允许 GoogleBot 跟随页面上的链接
      follow: true,
    },
  },

  // 设置页面的视口，确保在移动设备上能够正确显示
  viewport: 'width=device-width, initial-scale=1',

  // 定义浏览器的主题颜色，通常用于移动设备的状态栏颜色
  themeColor: '#ffffff',

  // 定义网站图标，如 favicon 和苹果设备上的图标
  icons: {
    icon: '/favicon.ico', // 标准的 favicon 图标
    apple: '/apple-icon.png', // iOS 或 MacOS 设备上的苹果图标
  },

  // 引用网站的 PWA（渐进式 Web 应用）manifest 文件
  manifest: '/site.webmanifest',

  // 设置页面的字符集，通常是 UTF-8，用于支持国际字符
  charset: 'UTF-8',

  // Web 应用的名称，在某些 PWA 场景中会显示
  applicationName: 'My Amazing Website',

  // 作者信息，可以为数组，包含多位作者
  authors: [{ name: 'John Doe', url: 'https://example.com' }],
};

type Props = {}

const page = (props: Props) => {
  return (
    <NewsInfoPage />
  )
}

export default page

