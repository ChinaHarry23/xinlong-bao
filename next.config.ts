import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGithubPages
    ? {}
    : {
        async redirects() {
          return [
            { source: "/work/fusebeads", destination: "/work/beadworks", permanent: true },
            { source: "/work/vr-playground", destination: "/work/haptic-glove", permanent: true },
            { source: "/work/blink", destination: "/work/haptic-glove", permanent: true },
            { source: "/work/super-mario", destination: "/work/cloverpit", permanent: true },
            { source: "/work/mac-game", destination: "/work/cloverpit", permanent: true },
          ];
        },
        async rewrites() {
          return [
            {
              source: "/demos/quant-atlas",
              destination: "/demos/quant-atlas/index.html",
            },
            {
              source: "/demos/algo-academy",
              destination: "/demos/algo-academy/index.html",
            },
          ];
        },
      }),
};

export default nextConfig;
