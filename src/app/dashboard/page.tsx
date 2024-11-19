'use client'
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/Topbar";
import Card from "@/components/Card";
import BasicPie from "@/components/PieChart";


const Dashboard = () => {
  return (
    <div className="flex bg-blue-ray">
      <Sidebar />
      
      <main className="flex-1">
        <TopBar />
        
        <div className="p-8 space-y-8">
          {/* Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card title="Total Portfolio Value" value="$1,250,000" />
            <Card title="Account Split-Up" value="5 Accounts">
                <BasicPie />
            </Card>
            <Card title="Account History" value="hghgh">
              {/* Placeholder for Chart */}
              <div className="h-32 bg-blue-100 rounded-lg"></div>
            </Card>
          </div>
          
          {/* Holdings Table */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-500">
            <h3 className="text-2xl font-semibold mb-4">Holdings</h3>
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b text-left">Scrip Name</th>
                  <th className="p-4 border-b text-left">LTP</th>
                  <th className="p-4 border-b text-left">Change</th>
                  <th className="p-4 border-b text-left">Account</th>
                  <th className="p-4 border-b text-left">Total Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b">Stock ABC</td>
                  <td className="p-4 border-b">$150</td>
                  <td className="p-4 border-b text-green-500">+2.5%</td>
                  <td className="p-4 border-b">Account 1</td>
                  <td className="p-4 border-b">$75,000</td>
                </tr>
                {/* Repeat for more rows */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

