import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, AlertTriangle, RotateCcw, X, Filter, RefreshCw } from "lucide-react"

export function Orders() {
  const orders = [
    {
      number: "#1042",
      customer: "Richard Campbell",
      branch: "Chicago Branch",
      startDate: "03/15/2024 9:30 PM",
      endDate: "04/12/2024 9:30 PM",
      status: "normal",
    },
    {
      number: "#1039",
      customer: "Sarah Lane",
      branch: "Chicago Branch",
      startDate: "02/22/2024 1:30 AM",
      endDate: "04/11/2024 6:30 PM",
      status: "overdue",
    },
    {
      number: "#1036",
      customer: "Sarah Lane",
      branch: "Chicago Branch",
      startDate: "01/17/2024 1:30 AM",
      endDate: "01/18/2024 1:30 AM",
      status: "normal",
    },
    {
      number: "#1029",
      customer: "Sarah's Construction Co.",
      branch: "Chicago Branch",
      startDate: "11/23/2023 8:30 PM",
      endDate: "12/01/2023 12:30 AM",
      status: "normal",
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Orders</h1>

      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" className="text-sm bg-transparent">
          <Calendar className="w-4 h-4 mr-2" />
          Starting Today
        </Button>
        <Button variant="outline" className="text-sm bg-transparent">
          <Calendar className="w-4 h-4 mr-2" />
          Ending Today
        </Button>
        <Button variant="outline" className="text-sm relative bg-transparent">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Overdue
          <Badge className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center">
            3
          </Badge>
        </Button>
        <Button variant="outline" className="text-sm bg-transparent">
          My Orders
        </Button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Status</span>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
              Quote <X className="w-3 h-3 ml-1" />
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
              Reservation <X className="w-3 h-3 ml-1" />
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
              Rental <X className="w-3 h-3 ml-1" />
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
              Completed <X className="w-3 h-3 ml-1" />
            </Badge>
          </div>
          <span className="text-sm text-gray-600 ml-4">Location</span>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
            1 Location <X className="w-3 h-3 ml-1" />
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Number</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Est. End Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.number}
                className={order.status === "overdue" ? "bg-red-50" : order.number === "#1042" ? "bg-teal-50" : ""}
              >
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {order.status === "overdue" && <AlertTriangle className="w-4 h-4 text-red-500" />}
                    {order.number}
                  </div>
                </TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.branch}</TableCell>
                <TableCell>{order.startDate}</TableCell>
                <TableCell>{order.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
