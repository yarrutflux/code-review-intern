const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Tech", inStock: true },
    { id: 2, name: "Shoes", price: 80, category: "Fashion", inStock: false },
    { id: 3, name: "Phone", price: 900, category: "Tech", inStock: true },
    { id: 4, name: "T-Shirt", price: 25, category: "Fashion", inStock: true }
  ];
  
  export default function ProductAnalyticsDashboard() {
  
  const allProductNames = products.map((p) => p.name);
  const productsInStock = products.filter((p) => p.inStock).map((p) => p.name);
  const totalInventoryValue = products.reduce((sum, p) => sum + p.price, 0);
  const firstProductUnder100 = products.find((p) => p.price < 100);
  const atLeastOneAbove1000 = products.some((p) => p.price > 1000);
  const allInStock = products.every((p) => p.inStock);

    return (
      <div>
        <section style={{ marginBottom: "12px" }}>
          <h1>PRODUCT ANALYTICS</h1>
        </section>
        
        <section style={{ marginBottom: "12px" }}>
          <h2>All Product Names:</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
             {allProductNames.map((name)=> (
              <li key={name}> - {name}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "12px" }}>
          <h2>Products in stock:</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {productsInStock.map((name)=> (
              <li key={name}> - {name}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "12px" }}>
          <h2>Total inventory value: €{totalInventoryValue}</h2>
        </section>

        <section style={{ marginBottom: "12px" }}>
          <h2>First Product Under €100:</h2>
          <p>{firstProductUnder100?.name} ({firstProductUnder100?.price})</p>
        </section>

        <section style={{ marginBottom: "12px" }}>
          <h2>At least one above €1000:</h2>
          <p>{atLeastOneAbove1000 ? "Yes" : "No"}</p>
        </section>

       <section style={{ marginBottom: "12px" }}>
          <h2>All products in stock:</h2>
          <p>{allInStock ? "Yes" : "No"}</p>
        </section>
      </div>
    );
  }
  