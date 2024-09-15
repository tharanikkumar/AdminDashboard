import { useState } from 'react';
import PageHead from '@/components/shared/page-head.jsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs.js';
import RecentSales from './components/recent-sales.js';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [filter, setFilter] = useState('current');

  // Data for the chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Amount Earned',
        data: [3000, 4000, 3500, 5000, 4200, 6000, 7000], // Sample data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true
      }
    ]
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff' // Set legend text color to white
        },
        position: 'top' as const
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `$${tooltipItem.raw}`;
          }
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background color
        titleColor: '#fff', // Tooltip title color
        bodyColor: '#fff' // Tooltip body color
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#fff' // X-axis label color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' // X-axis grid color
        }
      },
      y: {
        ticks: {
          color: '#fff' // Y-axis label color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' // Y-axis grid color
        }
      }
    }
  };

  // Chart component definition
  const AnalyticsChart = () => (
    <div className="rounded border bg-transparent p-4">
      <div className="mb-4 flex justify-between">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded border bg-gray-800 p-2 text-white"
        >
          <option value="current">Current</option>
          <option value="last_week">Last Week</option>
          <option value="last_month">Last Month</option>
        </select>
      </div>
      <div className="rounded border bg-transparent p-4">
        <h3 className="mb-2 text-xl font-bold text-white">
          Amount Earned - {filter}
        </h3>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="max-h-screen flex-1 space-y-4 overflow-y-auto bg-gray-900 p-4 pt-6 text-white md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        </div>
        <Tabs
          defaultValue="overview"
          className="space-y-4"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    $45,231.89
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 text-muted-foreground">
                <CardHeader>
                  <CardTitle className="text-white">Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">{/* <Overview /> */}</CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3 ">
                <CardHeader>
                  <CardTitle className="text-white ">Recent Sales</CardTitle>
                  <CardDescription className="text-white ">
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent
            value="analytics"
            className={`space-y-4 ${activeTab === 'analytics' ? '' : 'hidden'}`}
          >
            <div className="p-4">
              <AnalyticsChart />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
