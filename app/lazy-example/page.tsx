"use client"

import { useState, Suspense } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { LazyDashboard } from "@/components/pages/lazy-dashboard"
import { LazyOrders } from "@/components/pages/lazy-orders"
import { LazyAccountingLedger } from "@/components/pages/lazy-accounting-ledger"

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
    </div>
  )
}

export default function LazyExample() {
  const [currentPage, setCurrentPage] = useState("dashboard")

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <LazyDashboard />
          </Suspense>
        )
      case "orders":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <LazyOrders />
          </Suspense>
        )
      case "accounting":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <LazyAccountingLedger />
          </Suspense>
        )
      default:
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <LazyDashboard />
          </Suspense>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">{renderPage()}</main>
      </div>
    </div>
  )
}
