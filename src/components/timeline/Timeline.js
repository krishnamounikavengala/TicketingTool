









// import React, { useEffect, useRef, useState } from "react";
// import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
// import gantt from "dhtmlx-gantt";
// import { useProjects } from "../../context/ProjectContext";

// const Timeline = () => {
//   const ganttContainer = useRef(null);
//   const { projects, addProject } = useProjects();
//   const [newProjectText, setNewProjectText] = useState("");

//   useEffect(() => {
//     gantt.config.xml_date = "%Y-%m-%d %H:%i";
//     gantt.config.readonly = false;
//     gantt.config.drag_move = true;
//     gantt.config.drag_resize = true;
//     gantt.config.drag_links = true;
//     gantt.config.auto_scheduling = true;
//     gantt.config.show_errors = false;
//     gantt.config.highlight_critical_path = true;

//     gantt.init(ganttContainer.current);

//     gantt.clearAll();
//     gantt.parse({
//       data: projects,
//       links: [
//         { id: 1, source: 1, target: 2, type: "0" },
//         { id: 2, source: 2, target: 3, type: "0" },
//         { id: 3, source: 3, target: 4, type: "0" },
//         { id: 4, source: 4, target: 5, type: "0" },
//       ],
//     });
//   }, [projects]);

//   const handleCreateProject = () => {
//     if (!newProjectText.trim()) return;
//     const newProject = {
//       id: Date.now(),
//       text: newProjectText,
//       start_date: "2025-12-10 00:00",
//       duration: 10,
//       progress: 0,
//     };
//     addProject(newProject);
//     setNewProjectText("");
//   };

//   const containerStyle = {
//     margin: "30px auto",
//     maxWidth: "1200px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//     overflow: "hidden",
//     backgroundColor: "#fff",
//     fontFamily: "Segoe UI, sans-serif",
//   };

//   const headerStyle = {
//     padding: "20px",
//     background: "linear-gradient(to right, #4e54c8, #8f94fb)",
//     color: "#fff",
//     fontSize: "24px",
//     fontWeight: "600",
//     textAlign: "center",
//     letterSpacing: "0.5px",
//   };

//   const ganttStyle = {
//     height: "600px",
//     width: "100%",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>📅 Project Timeline</div>
//       <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
//         <input
//           type="text"
//           value={newProjectText}
//           onChange={(e) => setNewProjectText(e.target.value)}
//           placeholder="New project name"
//           style={{ flex: 1, padding: "8px", fontSize: "16px" }}
//         />
//         <button onClick={handleCreateProject} style={{ padding: "8px 16px" }}>
//           Add Project
//         </button>
//       </div>
//       <div ref={ganttContainer} style={ganttStyle}></div>
//     </div>
//   );
// };

// export default Timeline;


















// ///////////////////////////   for responsiveness //////////////////////////////



import React, { useEffect, useRef, useState } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import gantt from "dhtmlx-gantt";
import { useProjects } from "../../context/ProjectContext";

const Timeline = () => {
  const ganttContainer = useRef(null);
  const { projects, addProject } = useProjects();
  const [newProjectText, setNewProjectText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and set mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Configure and initialize Gantt chart
  useEffect(() => {
    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    gantt.config.readonly = false;
    gantt.config.drag_move = true;
    gantt.config.drag_resize = true;
    gantt.config.drag_links = true;
    gantt.config.auto_scheduling = true;
    gantt.config.show_errors = false;
    gantt.config.highlight_critical_path = true;

    // Mobile-specific configurations
    if (isMobile) {
      gantt.config.scale_height = 40;
      gantt.config.row_height = 30;
      gantt.config.min_column_width = 30;
      gantt.config.scale_unit = "day";
      gantt.config.date_scale = "%M %d";
      gantt.config.subscales = [];
    } else {
      gantt.config.scale_height = 50;
      gantt.config.row_height = 40;
      gantt.config.min_column_width = 40;
      gantt.config.scale_unit = "month";
      gantt.config.date_scale = "%F %Y";
      gantt.config.subscales = [
        { unit: "week", step: 1, date: "%j, %D" }
      ];
    }

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

    // Re-render Gantt when mobile state changes
    gantt.render();
  }, [projects, isMobile]);

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

  // Responsive styles
  const containerStyle = {
    margin: isMobile ? "15px 10px" : "30px auto",
    maxWidth: "1200px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "#fff",
    fontFamily: "Segoe UI, sans-serif",
    width: isMobile ? "calc(100% - 20px)" : "95%",
  };

  const headerStyle = {
    padding: isMobile ? "15px 10px" : "20px",
    background: "linear-gradient(to right, #4e54c8, #8f94fb)",
    color: "#fff",
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: "0.5px",
  };

  const inputContainerStyle = {
    padding: isMobile ? "15px 10px" : "20px",
    display: "flex",
    gap: "10px",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "stretch" : "center",
  };

  const inputStyle = {
    flex: 1,
    padding: isMobile ? "10px" : "8px",
    fontSize: isMobile ? "14px" : "16px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    minHeight: isMobile ? "44px" : "auto", // Better touch targets on mobile
  };

  const buttonStyle = {
    padding: isMobile ? "12px 16px" : "8px 16px",
    fontSize: isMobile ? "14px" : "16px",
    backgroundColor: "#4e54c8",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    minHeight: isMobile ? "44px" : "auto",
    transition: "background-color 0.2s",
    whiteSpace: "nowrap",
  };

  const ganttStyle = {
    height: isMobile ? "400px" : "600px",
    width: "100%",
    overflow: "auto",
  };

  // Add hover effect for non-touch devices
  if (!isMobile) {
    buttonStyle[':hover'] = {
      backgroundColor: "#3a3fa1"
    };
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        {isMobile ? "📅 Timeline" : "📅 Project Timeline"}
      </div>
      
      <div style={inputContainerStyle}>
        <input
          type="text"
          value={newProjectText}
          onChange={(e) => setNewProjectText(e.target.value)}
          placeholder={isMobile ? "Project name" : "New project name"}
          style={inputStyle}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleCreateProject();
          }}
        />
        <button 
          onClick={handleCreateProject} 
          style={buttonStyle}
          onMouseEnter={(e) => {
            if (!isMobile) e.target.style.backgroundColor = "#3a3fa1";
          }}
          onMouseLeave={(e) => {
            if (!isMobile) e.target.style.backgroundColor = "#4e54c8";
          }}
        >
          {isMobile ? "Add" : "Add Project"}
        </button>
      </div>
      
      <div 
        ref={ganttContainer} 
        style={ganttStyle}
        className="gantt-container"
      ></div>
    </div>
  );
};

export default Timeline;