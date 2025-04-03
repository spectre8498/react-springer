import React, { useEffect, useState } from "react";
import { TextField, Typography, Box, MenuItem, Select, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { formatTimestampToDate } from "../assets/Utils/commonFunctions";
import "../styles/EditProjectDetails.scss"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

const ProjectTaskDetailsComponent = ({ task, onUpdate, onCancel }) => {
    const staticData = {
        manuscriptName: "World and Natural Resources",
        description: "A detailed information of Natural Resources and their exploitation",
        branch: "Biotechnology",
        category: "Editorial",
        projectType: "New Submission",
        region: "Asia",
        reviewPeriod: "3 months",
        language: "English",
        budget: "$3000",
        publishOn: "2025-04-10",
        status: "Under Review",
        urgency: "Yes",
        openSource: true,
        priorityTask: true,
        editorNotes: "Get it refined from vocabulary point of view",
        instructions: "",
    };

    const [formData, setFormData] = useState({ ...staticData, ...task, dueOn: task.dueOn ? dayjs(Number(task.dueOn)) : dayjs() });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDueDateChange = (newDate) => {
        setFormData((prev) => ({
            ...prev,
            dueOn: newDate.valueOf().toString(),  // Convert to timestamp string
        }));
    };

    const handleSubmit = () => {
        onUpdate(formData);
    };

    const handleCancel = () => {
        onCancel()
    }

    return (
        <div className="Edit-Project-Container">
            <header className="Edit-Project-header">
                <div className="Edit-Project-header-title">
                    <KeyboardBackspaceIcon onClick={handleCancel} style={{ color: '#0070B0', cursor: "pointer" }} />
                    <h2 className="title-style" style={{ color: "#000" }}>Edit Project Details</h2>
                </div>
                <Button variant="contained" style={{ borderColor: "#1A3D7D", borderWidth: 2, borderRadius: "8px", backgroundColor: "#1A3D7D", color: "#ffffff", textTransform: "none" }}>
                    Export to excel<FontAwesomeIcon style={{ marginLeft: 8 }} icon={faFileExcel} />
                </Button>
            </header>
            <main className="edit-project-details-form">
                <section className="manuscript-details-form">
                    <p className="title-style">Manuscript Information</p>
                    <div>
                        <Box width="50%" style={{ paddingRight: "14px" }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Manuscript Name
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={formData.manuscriptName}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: "32px",
                                        fontSize: "14px",
                                        borderRadius: "8px",
                                        borderWidth: "1px",
                                        borderColor: "#94A3B8"
                                    },
                                }}
                            />
                        </Box>
                    </div>
                    <div>
                        <Box>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Description
                            </Typography>
                            <textarea
                                className="custom-textarea"
                                value={formData.description}
                                style={{
                                    borderRadius: "8px",
                                    borderWidth: "1px",
                                    borderColor: "#94A3B8"
                                }}
                            />
                        </Box>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "28px", width: "100%" }}>
                        <div style={{ width: "50%" }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Author
                            </Typography>
                            <Select
                                fullWidth
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                sx={{
                                    height: "32px",
                                    borderRadius: "8px",
                                    borderWidth: "1px",
                                    borderColor: "#94A3B8",
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
                        <div style={{ width: "50%" }}>
                            <Box>
                                <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                    Branch
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    value={formData.branch}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            height: "32px",
                                            fontSize: "14px",
                                            borderRadius: "8px",
                                            borderWidth: "1px",
                                            borderColor: "#94A3B8",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none",
                                            },
                                            "&:hover": {
                                                border: "1px solid #00324E",
                                            },
                                            "&.Mui-focused": {
                                                border: "1px solid #00324E",
                                            },
                                        },
                                    }}
                                />
                            </Box>
                        </div>
                    </div>
                </section>
                <section className="manuscript-details-form">
                    <p className="title-style">Project Details</p>
                    <div style={{ width: "100%", display: 'flex', flexDirection: "row", gap: "28px" }}>
                        <div style={{ width: "50%" }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Category
                            </Typography>
                            <Select
                                fullWidth
                                name="category"
                                value={formData.category}
                                sx={{
                                    height: "32px",
                                    borderRadius: "8px",
                                    borderWidth: "1px",
                                    borderColor: "#94A3B8",
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
                                <MenuItem value="Editorial">Editorial</MenuItem>
                            </Select>
                        </div>
                        <div style={{ width: "50%" }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Project Type
                            </Typography>
                            <Select
                                fullWidth
                                name="projectType"
                                value={formData.projectType}
                                sx={{
                                    height: "32px",
                                    borderRadius: "8px",
                                    borderWidth: "1px",
                                    borderColor: "#94A3B8",
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
                                <MenuItem value="New Submission">New Submission</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div style={{ width: "100%", display: 'flex', flexDirection: "row", gap: "28px" }}>
                        <div style={{ width: "50%" }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Region
                            </Typography>
                            <Select
                                fullWidth
                                name="region"
                                value={formData.region}
                                sx={{
                                    height: "32px",
                                    borderRadius: "8px",
                                    borderWidth: "1px",
                                    borderColor: "#94A3B8",
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
                                <MenuItem value="Asia">Asia</MenuItem>
                            </Select>
                        </div>
                        <div style={{ width: "50%" }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Language
                            </Typography>
                            <Select
                                fullWidth
                                name="projectType"
                                value={formData.language}
                                sx={{
                                    height: "32px",
                                    borderRadius: "8px",
                                    borderWidth: "1px",
                                    borderColor: "#94A3B8",
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
                                <MenuItem value="English">English</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div style={{ width: "100%", display: 'flex', flexDirection: "row", gap: "28px" }}>
                        <Box width="50%">
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Review Period
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={formData.reviewPeriod}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: "32px",
                                        fontSize: "14px",
                                        borderRadius: "8px",
                                        borderWidth: "1px",
                                        borderColor: "#94A3B8"
                                    },
                                }}
                            />
                        </Box>
                        <Box width="50%">
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Budget
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={formData.budget}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: "32px",
                                        fontSize: "14px",
                                        borderRadius: "8px",
                                        borderWidth: "1px",
                                        borderColor: "#94A3B8"
                                    },
                                }}
                            />
                        </Box>
                    </div>
                </section>
                <section className="manuscript-details-form">
                    <p className="title-style">Status & Dates</p>
                    <div className="date-picker" style={{ width: "100%", display: 'flex', flexDirection: "row", gap: "28px" }}>
                        <Box width="50%">
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Due on
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    value={dayjs(Number(formData.dueOn))} // Ensure it's a dayjs object
                                    onChange={handleDueDateChange} // Update the state properly
                                    format="DD/MM/YYYY"
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            sx={{
                                                width: "100%", // Ensure the TextField itself takes full width
                                                "&.MuiFormControl-root": {
                                                    width: "100%", borderRadius: "8px",
                                                    borderWidth: "1px",
                                                    borderColor: "#94A3B8"
                                                }, // Force MuiFormControl-root to be full width
                                                "&.MuiTextField-root": {
                                                    width: "100%", borderRadius: "8px",
                                                    borderWidth: "1px",
                                                    borderColor: "#94A3B8"
                                                }, // Force MuiTextField-root to be full width
                                                "& .MuiOutlinedInput-root": {
                                                    height: "32px",
                                                    fontSize: "14px",
                                                    borderRadius: "8px",
                                                    borderWidth: "1px",
                                                    borderColor: "#94A3B8"
                                                }
                                            }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box width="50%">
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Publish on
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    value={dayjs(task.publishOn)}  // Show correct date
                                    format="DD/MM/YYYY"
                                    renderInput={(params) => (
                                        <TextField {...params} fullWidth sx={{
                                            "& .MuiOutlinedInput-root": {
                                                height: "32px",
                                                fontSize: "14px",
                                                borderRadius: "8px",
                                            }
                                        }} />
                                    )}
                                />
                            </LocalizationProvider>
                        </Box>
                    </div>
                    <div style={{ width: "100%", display: 'flex', flexDirection: "row", gap: "28px" }}>
                        <div style={{ width: "50%" }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Status Update
                            </Typography>
                            <Select
                                fullWidth
                                name="status"
                                value={formData.status || "Under Review"}
                                displayEmpty
                                sx={{
                                    height: "32px",
                                    borderRadius: "8px",
                                    borderWidth: "1px",
                                    borderColor: "#94A3B8",
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
                                <MenuItem value="Under Review">Under Review</MenuItem>
                            </Select>
                        </div>
                        <div style={{ width: "50%" }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Priority
                            </Typography>
                            <Select
                                fullWidth
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                sx={{
                                    height: "32px",
                                    borderRadius: "8px",
                                    borderWidth: "1px",
                                    borderColor: "#94A3B8",
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
                                <MenuItem value="Low">Low</MenuItem>
                                <MenuItem value="High">High</MenuItem>
                                <MenuItem value="Very High">Very High</MenuItem>
                            </Select>
                        </div>
                    </div>
                </section>
                <section className="manuscript-details-form">
                    <p className="title-style">
                        Additional Options
                    </p>
                    <div style={{ display: "flex", flexDirection: "row", gap: "28px", width: "100%" }}>
                        <Box style={{ width: "50%" }}>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Urgency
                            </Typography>
                            <RadioGroup row value={formData.urgency}>
                                <FormControlLabel value="Yes" control={<Radio sx={{ color: "#1A3D7D", "&.Mui-checked": { color: "#1A3D7D" } }} />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio sx={{ color: "#1A3D7D", "&.Mui-checked": { color: "#1A3D7D" } }} />} label="No" />
                            </RadioGroup>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                                Open Source
                            </Typography>
                            <RadioGroup row value={formData.openSource}>
                                <FormControlLabel value="Yes" control={<Radio sx={{ color: "#1A3D7D", "&.Mui-checked": { color: "#1A3D7D" } }} />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio sx={{ color: "#1A3D7D", "&.Mui-checked": { color: "#1A3D7D" } }} />} label="No" />
                            </RadioGroup>
                        </Box>
                    </div>
                    <Box sx={{}}>
                        <label className="custom-checkbox">
                            <input type="checkbox" checked={formData.priorityTask} />
                            <span className="checkmark"></span>
                            <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px", marginTop: "5px" }}>
                                Priority Task
                            </Typography>
                        </label>
                    </Box>
                </section>
                <section className="manuscript-details-form">
                    <p className="title-style">
                        Editor Notes
                    </p>
                    <Box width="100%" style={{ paddingRight: "14px" }}>
                        <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                            Notes
                        </Typography>
                        <textarea
                            className="custom-textarea"
                            value={formData.editorNotes}
                            style={{
                                borderRadius: "8px",
                                borderWidth: "1px",
                                borderColor: "#94A3B8"
                            }}
                        />
                    </Box>
                </section>
                <section className="manuscript-details-form">
                    <p className="title-style">
                        Instructions
                    </p>
                    <Box width="100%" style={{ paddingRight: "14px" }}>
                        <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: "4px", color: "#0070B0", fontSize: "14px" }}>
                            Instructions
                        </Typography>
                        <textarea
                            className="custom-textarea"
                            value={formData.instructions}
                            style={{
                                borderRadius: "8px", height: "100px",
                                borderWidth: "1px",
                                borderColor: "#94A3B8"
                            }}
                        />
                    </Box>
                </section>
            </main>
            <footer style={{ display: "flex", gap: "16px", justifyContent: "flex-end", paddingRight: "16px" }}>
                <Button onClick={handleCancel} variant="outlined" style={{ borderColor: "#1A3D7D", borderWidth: 2, borderRadius: "8px", color: "#1A3D7D", textTransform: "none" }}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} variant="contained" style={{ borderColor: "#1A3D7D", borderWidth: 2, borderRadius: "8px", backgroundColor: "#1A3D7D", color: "#ffffff", textTransform: "none" }}>
                    Save
                </Button>
            </footer>
        </div>
    );
};

export default ProjectTaskDetailsComponent;
