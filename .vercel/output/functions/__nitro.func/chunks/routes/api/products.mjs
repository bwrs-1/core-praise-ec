import { d as defineEventHandler, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@vercel/kv';
import 'node:crypto';

const products = defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const res = await $fetch(`https://${config.public.shopifyDomain}/api/2023-01/graphql.json`, {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": config.public.storefrontToken,
      "Content-Type": "application/json"
    },
    body: {
      query: `
        {
          products(first: 20) {
            edges {
              node {
                title
                handle
                images(first: 1) {
                  edges {
                    node {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `
    }
  });
  return res.data.products.edges.map((edge) => {
    var _a;
    return {
      title: edge.node.title,
      handle: edge.node.handle,
      image: ((_a = edge.node.images.edges[0]) == null ? void 0 : _a.node.url) || ""
    };
  });
});

export { products as default };
//# sourceMappingURL=products.mjs.map
