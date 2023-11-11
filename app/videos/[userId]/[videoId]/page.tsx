export default function VideoPage() {
  return <div> in progress</div>;
}

// query to getVideoByUserId and create a new route
// comparable to products query

// 1.
//  export const getProducts = cache(async () => {
//   // return products;
//   const products = await sql<Product[]>`
//   SELECT * FROM products
//   `;

//   return products;
// });

// 2.
// export const getProductById = cache(async (id: number) => {
//   // return products;
//   const [product] = await sql<Product[]>`
//   SELECT
//   *
//   FROM
//   products
//   WHERE
//   id = ${id}
//   `;
//   return product;
// });
