import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination } from "@mui/material";
import { PencilIcon } from "lucide-react";
import SearchInputComponent from "./SearchInputComponent"
import { formatTimestampToDate } from "../assets/Utils/commonFunctions"

const staticTasks = [
    { id: "123456", task: "Content Review", dueOn: "1711334400000", author: "Issac Newton", assignedTo: "John Kulkarni", priority: "High" },
    { id: "A123456", task: "PRA", author: "Sarah Johnson", dueOn: "1711334400000", assignedTo: "John Kulkarni", priority: "Low" },
    { id: "1B23456", task: "Manuscript Screening", author: "Sarah Johnson", assignedTo: "John Kulkarni", dueOn: "1711334400000", priority: "Very High" },
    { id: "1234C56", task: "Content Review", dueOn: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", priority: "Low" },
    { id: "12dsf3456", task: "PRA", dueOn: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", priority: "High" },
    { id: "123434ff56", task: "Manuscript Screening", dueOn: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", priority: "Very High" },
    { id: "12bb3456", task: "Content Review", dueOn: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", priority: "Low" },
    { id: "12345rtt6", task: "Manuscript Screening", dueOn: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", priority: "High" },
    { id: "123456WW", task: "PRA", dueOn: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", priority: "Very High" },
    { id: "123456WW", task: "Manuscript Screening", dueOn: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", priority: "Low" },
    { id: "123456XX", task: "Content Review", dueOn: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", priority: "High" },
    { id: "123456HH", task: "Manuscript Screening", dueOn: "1711334400000", author: "Sarah Johnson", assignedTo: "John Kulkarni", priority: "Very High" },
];

const ProjectTasksTableComponent = ({ handleEdit }) => {
    const [tasks, setTasks] = useState(staticTasks)
    const [page, setPage] = useState(0);
    const rowsPerPage = 8;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleTableSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = staticTasks.filter((task) =>
            task.task.toLowerCase().includes(lowerCaseQuery) ||
            task.author.toLowerCase().includes(lowerCaseQuery) ||
            task.assignedTo.toLowerCase().includes(lowerCaseQuery)
        );
        setTasks(filtered);
    };

    const handleEditClick = (task) => {
        handleEdit(task);
    };

    return (
        <>
            <div className='flex flex-row justify-between pb-4'>
                <p className="title-style">Project Tasks</p>
                <SearchInputComponent onSearch={handleTableSearch} />
            </div>
            <TableContainer component={Paper} className="" sx={{ boxShadow: 'none', border: 'none' }}>
                <Table aria-label="ongoing tasks" sx={{ borderCollapse: 'collapse' }}>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f0f0f0', position: 'sticky', top: 0, zIndex: 1 }}>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Task</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Author</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Assigned to</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Due On</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Priority</TableCell>
                            <TableCell sx={{ borderBottom: 'none', color: '#00324E', fontWeight: "700", fontSize: "16px" }}>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ maxHeight: '300px', overflowY: 'auto' }}>
                        {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E' }}>{task.task}</TableCell>
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E' }}>{task.author}</TableCell>
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E' }}>{task.assignedTo}</TableCell>
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E' }}>{formatTimestampToDate(task.dueOn)}</TableCell>
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E' }}>
                                    <span className={`px-4 py-2 ${["High", "Very High"].includes(task.priority)
                                        ? "completed-progress-high-very-high"
                                        : task.priority === "Low"
                                            ? "to-do-low"
                                            : ""
                                        }`}>
                                        {task.priority}
                                    </span>
                                </TableCell>
                                <TableCell sx={{ borderBottom: 'none', color: '#00324E' }}>
                                    <IconButton size="small" onClick={() => handleEditClick(task)}>
                                        <PencilIcon size={16} style={{color: '#00324E'}} aria-label="Edit Project task"/>
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
        </>
    )
}

export default ProjectTasksTableComponent