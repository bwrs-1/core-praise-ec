export async function fetchShopifyProducts() {
  const config = useRuntimeConfig();
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            images(first: 1) {
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(`https://${config.public.shopifyDomain}/api/2023-04/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': config.public.storefrontToken
    },
    body: JSON.stringify({ query })
  });

  const { data } = await response.json();
  return data.products.edges.map((edge: any) => ({
    id: edge.node.id,
    title: edge.node.title,
    handle: edge.node.handle,
    image: edge.node.images.edges[0]?.node.src || ''
  }));
}
function useRuntimeConfig() {
    return {
        public: {
            shopifyDomain: 'cptr00-1d.myshopify.com',
            storefrontToken: '95f62b62ae4ef651629c03c1ad304f19'
        }
    };
}
