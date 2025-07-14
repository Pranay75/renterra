"use client"

import { useState } from "react"
import { Sidebar } from "../components/sidebar"
import { Header } from "../components/header"
import { Dashboard } from "../components/pages/dashboard"
import { Orders } from "../components/pages/orders"
import { AccountingLedger } from "../components/pages/accounting-ledger"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard")

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "orders":
        return <Orders />
      case "accounting":
        return <AccountingLedger />
      default:
        return <Dashboard />
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
