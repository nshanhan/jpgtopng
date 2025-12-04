import bundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";
import { createMDX } from "fumadocs-mdx/next";

// 1. 初始化所有插件/封装函数
const withMDX = createMDX();
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
let nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  
  // Vercel 报错 images 不识别，先检查配置是否正确
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // 允许所有主机名。注意：Next.js 推荐指定具体的 hostname，但 * 也是可用的。
        hostname: "*", 
      },
    ],
  },
  
  async redirects() {
    return [];
  },
  
  // 专门用于 MDX 的 experimental 配置
  experimental: {
    mdxRs: true,
  },
};

// 2. 移除 OpenNext（因为它与 Vercel 部署无关）
// import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
// initOpenNextCloudflareForDev(); 

// 3. 按照正确的顺序链式调用插件，并将最终结果导出
// 顺序通常不重要，但从外到内调用是最清晰的：
nextConfig = withBundleAnalyzer(nextConfig);
nextConfig = withNextIntl(nextConfig);
nextConfig = withMDX(nextConfig);

export default nextConfig;