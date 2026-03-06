import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("user-overview-card", "routes/user-overview-card.tsx"),
  route(
    "product-analytics-dashboard",
    "routes/product-analytics-dashboard.tsx",
  ),
  route("todo", "routes/todo.tsx"),
] satisfies RouteConfig;
