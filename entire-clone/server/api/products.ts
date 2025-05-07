export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const res = await $fetch(`https://${config.public.shopifyDomain}/api/2023-01/graphql.json`, {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': config.public.storefrontToken,
      'Content-Type': 'application/json',
    },
    body: {
      query: `
        {
          products(first: 5) {
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

  return res.data.products.edges.map((edge: any) => ({
    title: edge.node.title,
    handle: edge.node.handle,
    image: edge.node.images.edges[0]?.node.url || ''
  }));
});