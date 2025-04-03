import { useState } from "react";
import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination } from "@mui/material";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, BarChart, Bar } from "recharts";
import { PencilIcon } from "lucide-react";

const completedArticlesData = [
  { name: "12 Mar", value: 10 },
  { name: "13 Mar", value: 50 },
  { name: "14 Mar", value: 30 },
  { name: "15 Mar", value: 40 },
  { name: "16 Mar", value: 25 },
  { name: "17 Mar", value: 35 },
  { name: "18 Mar", value: 60 },
];

const manuscriptStatusData = [
  { name: "To-do", value: 40, color: "#003f5c" },
  { name: "In progress", value: 30, color: "#58508d" },
  { name: "On hold", value: 15, color: "#bc5090" },
  { name: "Completed", value: 15, color: "#ff6361" },
];

const completedIssuesData = [
  { name: "Jan", Nature: 2, BHP: 3 },
  { name: "Feb", Nature: 3, BHP: 2 },
  { name: "Mar", Nature: 4, BHP: 3 },
];

const tasks = [
  { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "In progress" },
  { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "To do" },
  { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "Completed" },
  { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "In progress" },
  { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "To do" },
  { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "Completed" },
  { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "In progress" },
  { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "To do" },
  { manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "Completed" },
];

const Dashboard = () => {
  const [page, setPage] = useState(0); // Track the current page
  const rowsPerPage = 8; // Number of rows to show per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-60 bg-gray-200 p-4">
        <h2 className="font-semibold text-lg mb-4">Options</h2>
        <ul>
          <li className="p-2 bg-white mb-2 rounded">Option 1</li>
          <li className="p-2 bg-white mb-2 rounded">Option 2</li>
          <li className="p-2 bg-white mb-2 rounded">Option 3</li>
          <li className="p-2 bg-white mb-2 rounded">Option 4</li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4 overflow-hidden">
        <h1 className="text-xl font-bold">Hi Ted!</h1>
        <div className="grid grid-cols-3 gap-4 my-4">
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Completed Articles</h2>
              <LineChart width={250} height={150} data={completedArticlesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#003f5c" />
              </LineChart>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Manuscript Status</h2>
              <PieChart width={200} height={200}>
                <Pie data={manuscriptStatusData} dataKey="value" outerRadius={60}>
                  {manuscriptStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Completed Issues</h2>
              <BarChart width={250} height={150} data={completedIssuesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="Nature" fill="#003f5c" />
                <Bar dataKey="BHP" fill="#bc5090" />
              </BarChart>
            </CardContent>
          </Card>
        </div>
        <h2 className="text-lg font-semibold">Ongoing Tasks</h2>
        <TableContainer component={Paper} className="max-h-64 overflow-auto" sx={{ boxShadow: 'none', border: 'none' }}>
          <Table aria-label="ongoing tasks" sx={{ borderCollapse: 'collapse' }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f0f0f0', position: 'sticky', top: 0, zIndex: 1 }}>
                <TableCell sx={{ borderBottom: 'none' }}>Manuscript</TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>Author</TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>Assigned to</TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>Last Updated</TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>Status</TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ maxHeight: '300px', overflowY: 'auto' }}>
              {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f0f0f0', // Add a subtle background color on hover
                    },
                  }}
                >
                  <TableCell sx={{ borderBottom: 'none' }}>{task.manuscript}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>{task.author}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>{task.assignedTo}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>{formatTimestampToDate(task.time)}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    <span className={`px-2 py-1 rounded text-white ${task.status === "In progress" ? "bg-blue-500" : task.status === "To do" ? "bg-yellow-500" : "bg-green-500"}`}>
                      {task.status}
                    </span>
                  </TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    <IconButton size="small">
                      <PencilIcon size={16} className="text-gray-600" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        <TablePagination
            rowsPerPageOptions={[8]}
            component="div"
            count={tasks.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default Dashboard;
