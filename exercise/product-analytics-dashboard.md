# Task — "Product Analytics Dashboard"

Create a small Product Analytics Dashboard in React that presents calculated insights from a predefined list of products. The dashboard should display aggregated values, filtered results, and boolean checks based on the dataset. Render the information exactly as shown in the expected output section below.

[View the User Overview Card](http://localhost:5173/product-analytics-dashboard)
[Implementation](app/routes/product-analytics-dashboard.tsx)


## Data (must be used as-is)

```javascript
const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Tech", inStock: true },
  { id: 2, name: "Shoes", price: 80, category: "Fashion", inStock: false },
  { id: 3, name: "Phone", price: 900, category: "Tech", inStock: true },
  { id: 4, name: "T-Shirt", price: 25, category: "Fashion", inStock: true }
];
```

## Required Rendered Output (exact content)

### PRODUCT ANALYTICS

All Product Names:
- Laptop
- Shoes
- Phone
- T-Shirt

Products In Stock:
- Laptop
- Phone
- T-Shirt

Total Inventory Value: €2205

First Product Under €100:
Shoes (€80)

At Least One Product Above €1000:
Yes

All Products In Stock:
No
