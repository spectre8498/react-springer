import React, { useState } from 'react'
import SidePanel from './SidePanel'
import CompletedArticlesChart from './charts/CompletedArticlesChart'
import ManuscriptStatusChart from './charts/ManuscriptStatusChart'
import CompletedIssuesChart from './charts/CompletedIssuesChart'
import TasksTableComponent from './TasksTableComponent'
import ProjectTasksTableComponent from './ProjectTasksTableComponent'
import ProjectTaskDetailsComponent from './ProjectTaskDetailsComponent'


const Dashboard = () => {

    const [showEditProject, setShowEditProject] = useState(false);
    const [selectedProjectTask, setSelectedProjectTask] = useState(null)

    const handleEditProject = (val) => {
        setShowEditProject(true)
        setSelectedProjectTask(val)
    }

    const handleProjectTaskUpdate = (val) => {
        console.log("Updated Project Task",val)
        setShowEditProject(false)
    }

    const handleCancel = () => {
        setShowEditProject(false)
    }

    return (
        <div className="h-screen flex overflow-hidden">
            <SidePanel handleRedirect={handleCancel}/>
            {
                showEditProject ?
                    <ProjectTaskDetailsComponent task={selectedProjectTask} onUpdate={handleProjectTaskUpdate} onCancel={handleCancel}/>
                    :
                    <div className="flex-1 p-4 overflow-y-scroll">
                        <h1 className="text-xl font-bold">Hi Ted!</h1>
                        <div className="flex gap-10 my-4">
                            <CompletedArticlesChart />
                            <ManuscriptStatusChart />
                            <CompletedIssuesChart />
                        </div>
                        <TasksTableComponent />
                        <ProjectTasksTableComponent handleEdit={handleEditProject} />
                    </div>
            }
        </div>
    )

}

export default Dashboard