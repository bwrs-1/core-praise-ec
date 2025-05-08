import { defineEventHandler } from 'file:///workspaces/core-praise-ec/node_modules/h3/dist/index.mjs';
import { u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/destr/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/hookable/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/ofetch/dist/node.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/node-mock-http/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/ufo/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/drivers/fs.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/drivers/vercel-kv.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/ohash/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/klona/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/defu/dist/defu.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/scule/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unctx/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///workspaces/core-praise-ec/node_modules/pathe/dist/index.mjs';

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
