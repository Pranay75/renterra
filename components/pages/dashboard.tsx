import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, LayoutGrid, FileText, MoreHorizontal, ChevronDown } from "lucide-react"

export function Dashboard() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <span>Analytics</span>
            <span>•</span>
            <span>Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-teal-600 border-teal-200 bg-transparent">
            <MessageSquare className="w-4 h-4 mr-2" />
            Ask Renterra
          </Button>
          <Button variant="outline" className="text-teal-600 border-teal-200 bg-transparent">
            <LayoutGrid className="w-4 h-4 mr-2" />
            Dashboards
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <FileText className="w-4 h-4 mr-2" />
            View All Reports
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="text-sm bg-transparent">
                New This Year (2025)
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="text-sm bg-transparent">
                Location (Select)
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>

          <Tabs defaultValue="asset-performance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="asset-performance" className="text-teal-600">
                Asset Performance
              </TabsTrigger>
              <TabsTrigger value="financial-performance">Financial Performance</TabsTrigger>
              <TabsTrigger value="company-performance">Company Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="asset-performance" className="space-y-6">
              {/* Key Metrics Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium">Overall Fleet Return on Investment (ROI)</CardTitle>
                    <p className="text-sm text-gray-600">
                      Your overall Return on Investment across the fleet for all assets with known purchase prices
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">0.00%</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium">Overall Fleet Time Utilization (%)</CardTitle>
                    <p className="text-sm text-gray-600">The % of time your equipment is out with customers</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">42.26%</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium">Overall Fleet Downtime (%)</CardTitle>
                    <p className="text-sm text-gray-600">The % of time your equipment is down on maintenance</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">0.00%</div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Grid - First Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">ROI by Item Category</CardTitle>
                    <p className="text-sm text-gray-600">View your Item's ROI by Category. (All Data in one chart)</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">Chart</span>
                        </div>
                        <p className="text-sm text-gray-500">ROI Chart Placeholder</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">Time Utilization by Item Category</CardTitle>
                    <p className="text-sm text-gray-600">
                      View your Item's Time Utilization by Category. (All Data in one chart)
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                      <div className="flex items-end justify-center gap-2 h-32">
                        <div className="w-8 bg-teal-400 h-20"></div>
                        <div className="w-8 bg-teal-500 h-24"></div>
                        <div className="w-8 bg-teal-600 h-16"></div>
                        <div className="w-8 bg-teal-400 h-28"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">Total Downtime by Item Category</CardTitle>
                    <p className="text-sm text-gray-600">
                      View your Item's Downtime by Category. (All Data in one chart)
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">📊</span>
                        </div>
                        <p className="text-sm text-gray-500">No data found for this query</p>
                        <p className="text-xs text-gray-400">Try changing your filters</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Grid - Second Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">Average ROI by Month</CardTitle>
                    <p className="text-sm text-gray-600">See how your Fleet's ROI is trending over time</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                      <div className="w-full h-32 relative">
                        <svg className="w-full h-full" viewBox="0 0 200 100">
                          <polyline
                            fill="none"
                            stroke="#0d9488"
                            strokeWidth="2"
                            points="20,80 60,60 100,70 140,50 180,40"
                          />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">Time Utilization by Month</CardTitle>
                    <p className="text-sm text-gray-600">See how your Fleet's Time Utilization is trending over time</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                      <div className="flex items-end justify-center gap-3 h-32">
                        <div className="w-6 bg-teal-400 h-12"></div>
                        <div className="w-6 bg-teal-500 h-16"></div>
                        <div className="w-6 bg-teal-600 h-20"></div>
                        <div className="w-6 bg-teal-500 h-24"></div>
                        <div className="w-6 bg-teal-400 h-18"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">Total Downtime by Month</CardTitle>
                    <p className="text-sm text-gray-600">See how your Fleet's Downtime is trending over time</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                      <div className="flex items-end justify-center gap-3 h-32">
                        <div className="w-6 bg-gray-300 h-8"></div>
                        <div className="w-6 bg-gray-300 h-6"></div>
                        <div className="w-6 bg-gray-300 h-4"></div>
                        <div className="w-6 bg-gray-300 h-10"></div>
                        <div className="w-6 bg-gray-300 h-7"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-medium">Total Revenue by Item Category</CardTitle>
                  <p className="text-sm text-gray-600">
                    See the amount of revenue created by Item by Item Category. (All charts in one individual frame of
                    reference)
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">💰</span>
                      </div>
                      <p className="text-sm text-gray-500">Revenue Chart Placeholder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="financial-performance">
              <div className="text-center py-8 text-gray-500">Financial Performance data would be displayed here</div>
            </TabsContent>

            <TabsContent value="company-performance">
              <div className="text-center py-8 text-gray-500">Company Performance data would be displayed here</div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
