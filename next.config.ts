import type { NextConfig } from "next";

const repo = "tech-workshop-2";

const nextConfig: NextConfig = {
    output: "export",
    basePath: `/${repo}`,
    assetPrefix: `/${repo}`
};

export default nextConfig;
