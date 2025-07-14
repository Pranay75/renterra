import { Search, Bell, ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search" className="pl-10 bg-gray-50 border-gray-200" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="text-teal-600 border-teal-200 bg-transparent">
            Chicago Branch
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>

          <Button className="bg-teal-600 hover:bg-teal-700">
            <Plus className="w-4 h-4 mr-2" />
            New Order
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>

          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>

          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">DN</span>
          </div>
        </div>
      </div>
    </header>
  )
}
