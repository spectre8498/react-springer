import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Select,
    MenuItem,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "../styles/TaskActionsDialogComponent.css";

const TaskActionsDialogComponent = ({ open, onClose, task, onUpdateTask }) => {
    const [assignedTo, setAssignedTo] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("");
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (task) {
            setAssignedTo(task.assignedTo || "");
            setAuthor(task.author || "");
            setStatus(task.status || "");
        }
    }, [task, open]);

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && (selectedFile.type === "application/pdf" || selectedFile.name.endsWith(".docx"))) {
            setFile(selectedFile);
        } else {
            alert("Only PDF and DOCX files are allowed (Max 50MB)");
        }
    };

    const handleFileDrop = (event) => {
        event.preventDefault();
        const selectedFile = event.dataTransfer.files[0];
        if (selectedFile && (selectedFile.type === "application/pdf" || selectedFile.name.endsWith(".docx"))) {
            setFile(selectedFile);
        } else {
            alert("Only PDF and DOCX files are allowed (Max 50MB)");
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleSave = () => {
        const updatedTask = {
            id: task.id,
            manuscript: task.manuscript,
            time: task.time,
            author,
            assignedTo,
            status,
            file,
        };
        onUpdateTask(updatedTask);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <div className="dialog-container">
                <DialogTitle className="dialog-title" style={{padding: "12px 8px 12px 20px"}}>
                    <span style={{}} className="title-style">Task Actions</span>
                    <IconButton onClick={onClose} aria-label="Close dialog">
                        <CloseIcon style={{color: "#00324E"}} aria-label="Close"/>
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <div className="form-grid">
                        <div>
                            <label className="input-label form-label">Manuscript</label>
                            {task ? <p className="input-text" style={{color: "#00324E"}}>{task.manuscript}</p> : <p className="input-text">Loading...</p>}
                        </div>

                        <div>
                            <label className="input-label form-label" htmlFor="author-select">Author</label>
                            <Select
                                id="author-select"
                                fullWidth
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                sx={{
                                    height: "32px",
                                    border: "1px solid #94A3B8",
                                    borderRadius: "8px",
                                    "& .MuiSelect-select": { height: "32px", display: "flex", alignItems: "center" },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                    "&:hover": {
                                        border: "1px solid #00324E",
                                    },
                                    "&.Mui-focused": {
                                        border: "1px solid #00324E",
                                    },
                                }}
                            >
                                <MenuItem value="Sarah Johnson">Sarah Johnson</MenuItem>
                                <MenuItem value="Issac Newton">Issac Newton</MenuItem>
                                <MenuItem value="John Kulkarni">John Kulkarni</MenuItem>
                                <MenuItem value="Random Person">Random Person</MenuItem>
                            </Select>
                        </div>

                        <div>
                            <label className="input-label form-label">Assigned to</label>
                            <Select
                                fullWidth
                                value={assignedTo}
                                onChange={(e) => setAssignedTo(e.target.value)}
                                sx={{
                                    height: "32px",
                                    border: "1px solid #94A3B8",
                                    borderRadius: "8px",
                                    "& .MuiSelect-select": { height: "32px", display: "flex", alignItems: "center" },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                    "&:hover": {
                                        border: "1px solid #00324E",
                                    },
                                    "&.Mui-focused": {
                                        border: "1px solid #00324E",
                                    },
                                }}
                            >
                                <MenuItem value="Sarah Johnson">Sarah Johnson</MenuItem>
                                <MenuItem value="Issac Newton">Issac Newton</MenuItem>
                                <MenuItem value="John Kulkarni">John Kulkarni</MenuItem>
                                <MenuItem value="Random Person">Random Person</MenuItem>
                            </Select>
                        </div>

                        <div>
                            <label className="input-label form-label">Status</label>
                            <Select
                                fullWidth
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                sx={{
                                    height: "32px",
                                    border: "1px solid #94A3B8",
                                    borderRadius: "8px",
                                    "& .MuiSelect-select": { height: "32px", display: "flex", alignItems: "center" },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                    "&:hover": {
                                        border: "1px solid #00324E",
                                    },
                                    "&.Mui-focused": {
                                        border: "1px solid #00324E",
                                    },
                                }}
                            >
                                <MenuItem value="In Progress">In Progress</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                                <MenuItem value="To Do">To Do</MenuItem>
                            </Select>
                        </div>
                    </div>

                    <div className="file-upload-container">
                        <label className="input-label form-label">Files</label>
                        <div
                            className="file-drop-area"
                            onDrop={handleFileDrop}
                            onDragOver={handleDragOver}
                            aria-label="Drag and drop files here or browse files"
                        >
                            <input
                                type="file"
                                accept=".pdf,.docx"
                                onChange={handleFileSelect}
                                className="hidden-file-input"
                                id="fileInput"
                            />
                            <label htmlFor="fileInput" className="file-input-label">
                                Drag and drop files here or <span className="browse-text">browse files</span>
                            </label>
                        </div>
                        <p className="file-support-text">
                            Supported formats: <strong>PDF, DOCX</strong> (max. 50 MB)
                        </p>
                    </div>

                    {file && (
                        <div className="uploaded-file">
                            <div className="file-info">
                                <UploadFileIcon  style={{color: "#0070B0"}} className="file-icon" />
                                <span className="uploaded-file-name"  style={{color: "#00324E"}} title={file.name}>
                                    {file.name}
                                </span>
                            </div>
                            <IconButton onClick={() => setFile(null)} aria-label="Remove file">
                                <CloseIcon style={{color: "#0070B0"}}/>
                            </IconButton>
                        </div>
                    )}
                </DialogContent>

                <DialogActions className="dialog-actions">
                    <Button onClick={onClose} variant="outlined" style={{borderColor: "#1A3D7D", borderWidth: 2, borderRadius: "8px", color: "#1A3D7D", textTransform: "none"}}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave} variant="contained" style={{borderColor: "#1A3D7D", borderWidth: 2, borderRadius: "8px", backgroundColor: "#1A3D7D", color: "#ffffff", textTransform: "none"}}>
                        Save
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

export default TaskActionsDialogComponent;
