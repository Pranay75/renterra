import { lazy } from "react"

// Lazy-loaded version of Orders component
export const LazyOrders = lazy(() => import("./orders").then((module) => ({ default: module.Orders })))
