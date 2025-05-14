const getProducts = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  let data = await fetch(`${baseUrl}/api/products`, { cache: "no-cache" });
  data = await data.json();

  if (data.success) {
    return data.result;
  } else {
    return [];
  }
};

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products List</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Color</td>
            <td>Company</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
