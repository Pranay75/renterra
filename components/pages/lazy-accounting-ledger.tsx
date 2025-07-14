import { lazy } from "react"

// Lazy-loaded version of AccountingLedger component
export const LazyAccountingLedger = lazy(() =>
  import("./accounting-ledger").then((module) => ({ default: module.AccountingLedger })),
)
