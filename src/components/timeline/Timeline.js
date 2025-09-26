








// import React, { useState, useRef } from "react";
// import { useDrag, useDrop, DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import styled from "styled-components";
// import { format, addDays, differenceInDays, parseISO } from "date-fns";
// import Xarrow from "react-xarrows";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import * as XLSX from "xlsx";

// // Styled components
// const Container = styled.div`
//   padding: 20px;
//   font-family: Arial;
// `;

// const TimelineContainer = styled.div`
//   border: 1px solid #ccc;
//   padding: 10px;
//   overflow-x: auto;
//   position: relative;
//   height: 400px;
// `;

// const ZoomControls = styled.div`
//   margin-bottom: 10px;
// `;

// const FilterControls = styled.div`
//   margin-bottom: 10px;
// `;

// const TaskBar = styled.div`
//   position: absolute;
//   height: 30px;
//   border-radius: 4px;
//   color: white;
//   padding: 0 5px;
//   font-size: 12px;
//   display: flex;
//   align-items: center;
//   cursor: grab;
// `;

// // Task component with dynamic drag
// function Task({ task, dates, onTaskMove }) {
//   const startIdx = dates.findIndex((d) => d === task.start);
//   const endIdx = dates.findIndex((d) => d === task.end);
//   const width = (endIdx - startIdx + 1) * 100;

//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "TASK",
//     item: { id: task.id },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   const [, drop] = useDrop({
//     accept: "TASK",
//     hover: (item, monitor) => {
//       if (!monitor.isOver({ shallow: true })) return;
//       const delta = monitor.getDifferenceFromInitialOffset();
//       const daysMoved = Math.round(delta.x / 100); // 100px per day
//       if (daysMoved !== 0) {
//         onTaskMove(item.id, daysMoved);
//       }
//     },
//   });

//   return (
//     <TaskBar
//       ref={(node) => drag(drop(node))}
//       style={{
//         left: startIdx * 100,
//         width: width,
//         backgroundColor: task.color,
//         opacity: isDragging ? 0.5 : 1,
//         top: task.id * 50,
//       }}
//       id={`task-${task.id}`}
//     >
//       {task.milestone && "🎯"} {task.title} ({task.progress}%)
//     </TaskBar>
//   );
// }

// // Main Timeline component
// function TimelineInteractive() {
//   const initialTasks = [
//     {
//       id: 1,
//       title: "Design UI",
//       start: "2025-09-22",
//       end: "2025-09-25",
//       progress: 50,
//       color: "#0052CC",
//       assignee: "John",
//       dependencies: [2],
//       milestone: false,
//     },
//     {
//       id: 2,
//       title: "Develop Backend",
//       start: "2025-09-23",
//       end: "2025-09-28",
//       progress: 20,
//       color: "#FF5630",
//       assignee: "Alice",
//       dependencies: [],
//       milestone: true,
//     },
//     {
//       id: 3,
//       title: "QA Testing",
//       start: "2025-09-26",
//       end: "2025-10-02",
//       progress: 0,
//       color: "#36B37E",
//       assignee: "John",
//       dependencies: [1, 2],
//       milestone: false,
//     },
//   ];

//   const [tasks, setTasks] = useState(initialTasks);
//   const [zoom, setZoom] = useState("week");
//   const [filterAssignee, setFilterAssignee] = useState("All");
//   const timelineRef = useRef();

//   const startDate = parseISO("2025-09-20");
//   const endDate = parseISO("2025-10-05");
//   const totalDays = differenceInDays(endDate, startDate) + 1;

//   const dates = [];
//   for (let i = 0; i < totalDays; i++) {
//     dates.push(format(addDays(startDate, i), "yyyy-MM-dd"));
//   }

//   // Move task by delta days
//   const handleTaskMove = (id, deltaDays) => {
//     setTasks((prev) =>
//       prev.map((task) => {
//         if (task.id === id) {
//           const oldStart = parseISO(task.start);
//           const oldEnd = parseISO(task.end);
//           let newStart = addDays(oldStart, deltaDays);
//           let newEnd = addDays(oldEnd, deltaDays);

//           // Snap to timeline boundaries
//           if (newStart < startDate) {
//             newStart = startDate;
//             newEnd = addDays(startDate, differenceInDays(oldEnd, oldStart));
//           }
//           if (newEnd > endDate) {
//             newEnd = endDate;
//             newStart = addDays(endDate, -differenceInDays(oldEnd, oldStart));
//           }

//           return {
//             ...task,
//             start: format(newStart, "yyyy-MM-dd"),
//             end: format(newEnd, "yyyy-MM-dd"),
//           };
//         }
//         return task;
//       })
//     );
//   };

//   // Filtering tasks
//   const filteredTasks =
//     filterAssignee === "All"
//       ? tasks
//       : tasks.filter((t) => t.assignee === filterAssignee);

//   const uniqueAssignees = ["All", ...new Set(tasks.map((t) => t.assignee))];

//   // Export PDF
//   const exportPDF = () => {
//     html2canvas(timelineRef.current).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("l", "pt", [canvas.width, canvas.height]);
//       pdf.addImage(imgData, "PNG", 0, 0);
//       pdf.save("timeline.pdf");
//     });
//   };

//   // Export Excel
//   const exportExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(
//       tasks.map((t) => ({
//         Title: t.title,
//         Start: t.start,
//         End: t.end,
//         Progress: t.progress,
//         Assignee: t.assignee,
//       }))
//     );
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Timeline");
//     XLSX.writeFile(wb, "timeline.xlsx");
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <Container>
//         <h1>Interactive Jira-like Timeline</h1>
//         <ZoomControls>
//           Zoom:
//           <select value={zoom} onChange={(e) => setZoom(e.target.value)}>
//             <option value="day">Day</option>
//             <option value="week">Week</option>
//             <option value="month">Month</option>
//             <option value="quarter">Quarter</option>
//           </select>
//         </ZoomControls>
//         <FilterControls>
//           Filter by Assignee:
//           <select
//             value={filterAssignee}
//             onChange={(e) => setFilterAssignee(e.target.value)}
//           >
//             {uniqueAssignees.map((assignee) => (
//               <option key={assignee} value={assignee}>
//                 {assignee}
//               </option>
//             ))}
//           </select>
//         </FilterControls>
//         <button onClick={exportPDF}>Export PDF</button>
//         <button onClick={exportExcel} style={{ marginLeft: "10px" }}>
//           Export Excel
//         </button>
//         <TimelineContainer ref={timelineRef}>
//           <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
//             {dates.map((date) => (
//               <div
//                 key={date}
//                 style={{
//                   minWidth: "100px",
//                   borderRight: "1px solid #eee",
//                   textAlign: "center",
//                 }}
//               >
//                 {date}
//               </div>
//             ))}
//           </div>
//           {filteredTasks.map((task) => (
//             <Task
//               key={task.id}
//               task={task}
//               dates={dates}
//               onTaskMove={handleTaskMove}
//             />
//           ))}
//           {/* Dependency arrows */}
//           {filteredTasks.map((task) =>
//             task.dependencies.map((depId) => {
//               const depTask = tasks.find((t) => t.id === depId);
//               if (!depTask) return null;
//               return (
//                 <Xarrow
//                   key={`${task.id}-${depId}`}
//                   start={`task-${depTask.id}`}
//                   end={`task-${task.id}`}
//                   color="black"
//                   strokeWidth={2}
//                   headSize={4}
//                 />
//               );
//             })
//           )}
//         </TimelineContainer>
//       </Container>
//     </DndProvider>
//   );
// }

// export default TimelineInteractive;











import React, { useEffect, useRef, useState } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import gantt from "dhtmlx-gantt";
import { useProjects } from "../../context/ProjectContext";

const Timeline = () => {
  const ganttContainer = useRef(null);
  const { projects, addProject } = useProjects();
  const [newProjectText, setNewProjectText] = useState("");

  useEffect(() => {
    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    gantt.config.readonly = false;
    gantt.config.drag_move = true;
    gantt.config.drag_resize = true;
    gantt.config.drag_links = true;
    gantt.config.auto_scheduling = true;
    gantt.config.show_errors = false;
    gantt.config.highlight_critical_path = true;

    gantt.init(ganttContainer.current);

    gantt.clearAll();
    gantt.parse({
      data: projects,
      links: [
        { id: 1, source: 1, target: 2, type: "0" },
        { id: 2, source: 2, target: 3, type: "0" },
        { id: 3, source: 3, target: 4, type: "0" },
        { id: 4, source: 4, target: 5, type: "0" },
      ],
    });
  }, [projects]);

  const handleCreateProject = () => {
    if (!newProjectText.trim()) return;
    const newProject = {
      id: Date.now(),
      text: newProjectText,
      start_date: "2025-12-10 00:00",
      duration: 10,
      progress: 0,
    };
    addProject(newProject);
    setNewProjectText("");
  };

  const containerStyle = {
    margin: "30px auto",
    maxWidth: "1200px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "#fff",
    fontFamily: "Segoe UI, sans-serif",
  };

  const headerStyle = {
    padding: "20px",
    background: "linear-gradient(to right, #4e54c8, #8f94fb)",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: "0.5px",
  };

  const ganttStyle = {
    height: "600px",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>📅 Project Timeline</div>
      <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={newProjectText}
          onChange={(e) => setNewProjectText(e.target.value)}
          placeholder="New project name"
          style={{ flex: 1, padding: "8px", fontSize: "16px" }}
        />
        <button onClick={handleCreateProject} style={{ padding: "8px 16px" }}>
          Add Project
        </button>
      </div>
      <div ref={ganttContainer} style={ganttStyle}></div>
    </div>
  );
};

export default Timeline;


