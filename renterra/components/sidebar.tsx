"use client"

import { BarChart3, Package, Users, Building2, Wrench, FileText, Truck, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: "analytics", label: "Analytics", icon: BarChart3, hasSubmenu: false },
    { id: "orders", label: "Orders", icon: Package, hasSubmenu: false },
    { id: "inventory", label: "Inventory", icon: Building2, hasSubmenu: false },
    { id: "customers", label: "Customers", icon: Users, hasSubmenu: false },
    { id: "yard", label: "Yard", icon: Building2, hasSubmenu: false },
    { id: "maintenance", label: "Maintenance", icon: Wrench, hasSubmenu: false },
    { id: "invoices", label: "Invoices", icon: FileText, hasSubmenu: false },
    { id: "dispatch", label: "Dispatch", icon: Truck, hasSubmenu: true },
    { id: "accounting", label: "Accounting", icon: FileText, hasSubmenu: false },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-semibold text-lg">ENTERRA</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onPageChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 text-left rounded-md transition-colors",
                  currentPage === item.id || (item.id === "analytics" && currentPage === "dashboard")
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-600 hover:bg-gray-50",
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1">{item.label}</span>
                {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
