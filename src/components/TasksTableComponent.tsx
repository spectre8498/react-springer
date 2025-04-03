import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination } from "@mui/material";
import { PencilIcon } from "lucide-react";
import SearchInputComponent from "./SearchInputComponent"
import TaskActionsDialogComponent from './TaskActionsDialogComponent';
import { formatTimestampToDate } from "../assets/Utils/commonFunctions"

const staticTasks = [
    { id: "123456", manuscript: "World and Natural Resources", time: "1711334400000", author: "Issac Newton", assignedTo: "John Kulkarni", status: "In Progress" },
    { id: "A123456", manuscript: "World and Natural Resources", author: "Sarah Johnson", time: "1711334400000", assignedTo: "John Kulkarni", status: "To Do" },
    { id: "1B23456", manuscript: "World and Natural Resources", author: "Sarah Johnson", assignedTo: "John Kulkarni", time: "1711334400000", status: "Completed" },
    { id: "1234C56", manuscript: "World and Natural Resources", time: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "In Progress" },
    { id: "12dsf3456", manuscript: "World and Natural Resources", time: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "To Do" },
    { id: "123434ff56", manuscript: "World and Natural Resources", time: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "Completed" },
    { id: "12bb3456", manuscript: "World and Natural Resources", time: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "In Progress" },
    { id: "12345rtt6", manuscript: "World and Natural Resources", time: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "To Do" },
    { id: "123456WW", manuscript: "World and Natural Resources", time: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "Completed" },
    { id: "123456WW", manuscript: "World and Natural Resources", time: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "In Progress" },
    { id: "123456XX", manuscript: "World and Natural Resources", time: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "To Do" },
    { id: "123456HH", manuscript: "World and Natural Resources", time: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", status: "Completed" },
];

const TasksTableComponent = () => {
    const [tasks, setTasks] = useState(staticTasks)
    const [page, setPage] = useState(0);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const rowsPerPage = 8;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleTableSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase(); // Ensure consistent case matching
        const filtered = staticTasks.filter((task) =>
            task.manuscript.toLowerCase().includes(lowerCaseQuery) ||
            task.author.toLowerCase().includes(lowerCaseQuery) ||
            task.assignedTo.toLowerCase().includes(lowerCaseQuery)
        );
        setTasks(filtered); // Update the tasks with the filtered list
    };

    const handleEditClick = (task) => {
        setSelectedTask(task);
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setSelectedTask(null);
    };

    const onTaskEditSave = (val) => {
        setTasks((prev) =>
            prev.map((iTask) =>
                iTask.id === val.id ? { ...iTask, ...val, time: Date.now().toString() } : iTask
            )
        );
    };

    return (
        <>
            <div className='flex flex-row justify-between pb-4'>
                <p className="title-style">Ongoing Tasks</p>
                <SearchInputComponent onSearch={handleTableSearch} />
            </div>
            <TableContainer component={Paper} className="" sx={{ boxShadow: 'none', border: 'none' }}>
                <Table aria-label="ongoing tasks" sx={{ borderCollapse: 'collapse' }}>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#F1F5F9', position: 'sticky', top: 0, zIndex: 1 }}>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Manuscript</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Author</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Assigned to</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Last Updated</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Status</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ maxHeight: '300px', overflowY: 'auto' }}>
                        {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#F1F5F9',
                                    },
                                }}
                            >
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E' }}>{task.manuscript}</TableCell>
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E' }}>{task.author}</TableCell>
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E' }}>{task.assignedTo}</TableCell>
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E'}}>{formatTimestampToDate(task.time)}</TableCell>
                                <TableCell sx={{ borderBottom: 'none' }}>
                                    <span className={`px-4 py-2 ${["Completed", "In Progress"].includes(task.status)
                                            ? "completed-progress-high-very-high"
                                            : task.status === "To Do"
                                                ? "to-do-low"
                                                : ""
                                        }`}>
                                        {task.status}
                                    </span>
                                </TableCell>
                                <TableCell sx={{ borderBottom: 'none' }}>
                                    <IconButton size="small" onClick={() => handleEditClick(task)} aria-label="Edit task">
                                        <PencilIcon size={16} style={{color: '#00324E'}} />
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
            <TaskActionsDialogComponent
                open={isDialogOpen}
                onClose={handleCloseDialog}
                task={selectedTask}
                onUpdateTask={onTaskEditSave}
            />
        </>
    )
}

export default TasksTableComponent