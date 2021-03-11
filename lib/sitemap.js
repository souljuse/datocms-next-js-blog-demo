import { SitemapStream, streamToPromise } from "sitemap";

const staticRoutes = ["/"];

export default async function generateSitemap() {
  let routes = [...staticRoutes];

  const sitemap = new SitemapStream({
    hostname: "https://aimug.netlify.app"
  });
  routes.forEach(route => sitemap.write(route));
  sitemap.end();

  const sm = await streamToPromise(sitemap);
  return sm.toString();
}
