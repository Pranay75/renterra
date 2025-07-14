import { lazy } from "react"

// Lazy-loaded version of Dashboard component
export const LazyDashboard = lazy(() => import("./dashboard").then((module) => ({ default: module.Dashboard })))
