import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Play, FileText, Download, RefreshCw, RotateCcw, Filter, ChevronLeft, ChevronRight, X } from "lucide-react"

export function AccountingLedger() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-2xl font-semibold text-gray-900">General Ledger</h1>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Accrual Basis</Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Accounting</span>
            <span>•</span>
            <span>General Ledger</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="general-ledger" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="general-ledger"
            className="text-gray-900 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            General Ledger
          </TabsTrigger>
          <TabsTrigger value="chart-of-accounts">Chart Of Accounts</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="taxes">Taxes</TabsTrigger>
        </TabsList>

        <TabsContent value="general-ledger" className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">General Ledger</h2>
              <div className="flex items-center gap-3">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Play className="w-4 h-4 mr-2" />
                  Run Ledger
                </Button>
                <Button variant="outline" className="text-teal-600 border-teal-200 bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  Create Credit Memo
                </Button>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export Full Ledger
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">After</span>
                  <Input type="date" defaultValue="2025-01-05" className="w-40" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Before</span>
                  <Input type="date" defaultValue="2025-05-31" className="w-40" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Location</span>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    1 Location <X className="w-3 h-3 ml-1" />
                  </Badge>
                </div>
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

            <div className="border border-gray-200 rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead>Debit</TableHead>
                    <TableHead>Credit</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Item</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-12 text-gray-500">
                      No rows
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Rows per page:</span>
                  <select className="border border-gray-200 rounded px-2 py-1 text-sm">
                    <option>100</option>
                    <option>50</option>
                    <option>25</option>
                  </select>
                </div>
                <span className="text-sm text-gray-600">0-0 of 0</span>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" disabled>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="chart-of-accounts">
          <div className="text-center py-8 text-gray-500">Chart of Accounts content would be displayed here</div>
        </TabsContent>

        <TabsContent value="integrations">
          <div className="text-center py-8 text-gray-500">Integrations content would be displayed here</div>
        </TabsContent>

        <TabsContent value="taxes">
          <div className="text-center py-8 text-gray-500">Taxes content would be displayed here</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
