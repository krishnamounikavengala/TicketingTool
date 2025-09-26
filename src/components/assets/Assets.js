
// import React, { useEffect, useState } from 'react';
// import { listAssets, addAsset } from '../../services/mockApi';
// import { v4 as uuidv4 } from 'uuid';

// export default function Assets() {
//   const [assets, setAssets] = useState([]);
//   const [name, setName] = useState('');
//   const [type, setType] = useState('Laptop');
//   useEffect(()=>{ listAssets().then(setAssets); },[]);

//   const add = async ()=>{ const a = { id: uuidv4(), name, type, owner:'', status:'active' }; await addAsset(a); setAssets(await listAssets()); setName(''); };
//   return (
//     <div className="grid">
//       <div className="card">
//         <h2>Add Asset</h2>
//         <div className="form-row"><label>Name<input value={name} onChange={e=>setName(e.target.value)} /></label></div>
//         <div className="form-row"><label>Type<input value={type} onChange={e=>setType(e.target.value)} /></label></div>
//         <button className="btn" onClick={add}>Add Asset</button>
//       </div>
//       <div className="card">
//         <h2>Assets</h2>
//         <ul>{assets.map(a=>(<li key={a.id}>{a.name} — {a.type} — {a.status}</li>))}</ul>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { listAssets, addAsset } from "../../services/mockApi";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function AssetsBoard() {
  const [assets, setAssets] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("Laptop");
  const [owner, setOwner] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({});
  const [hoveredId, setHoveredId] = useState({});
  const [quickAdd, setQuickAdd] = useState({});

  useEffect(() => {
    listAssets().then(setAssets);
  }, []);

  const add = async (status = "active") => {
    const assetName = status === "form" ? name : quickAdd[status]?.name;
    const assetType = status === "form" ? type : quickAdd[status]?.type || "Laptop";
    const assetOwner = status === "form" ? owner : quickAdd[status]?.owner || "";
    if (!assetName?.trim()) return;

    const a = { id: uuidv4(), name: assetName, type: assetType, owner: assetOwner, status: status === "form" ? "active" : status };
    await addAsset(a);
    setAssets(await listAssets());

    if (status === "form") { setName(""); setType("Laptop"); setOwner(""); }
    else { setQuickAdd(prev => ({ ...prev, [status]: { name: "", type: "", owner: "" } })); }
  };

  const statusColumns = {
    active: { title: "Active", color: "#36B37E" },
    maintenance: { title: "Maintenance", color: "#FFAB00" },
    inactive: { title: "Inactive", color: "#A5ADBA" },
  };

  const groupedAssets = Object.keys(statusColumns).reduce((acc, status) => {
    acc[status] = assets.filter(a => a.status === status);
    return acc;
  }, {});

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const asset = assets.find(a => a.id === draggableId);
    const updatedAsset = { ...asset, status: destination.droppableId };
    setAssets(assets.map(a => (a.id === draggableId ? updatedAsset : a)));
  };

  const startEditing = (asset) => { setEditingId(asset.id); setEditFields({ ...asset }); };
  const saveEdit = (id) => { setAssets(assets.map(a => (a.id === id ? { ...a, ...editFields } : a))); setEditingId(null); };
  const cancelEdit = () => setEditingId(null);
  const deleteAsset = (id) => setAssets(assets.filter(a => a.id !== id));

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", background: "#F4F5F7", minHeight: "100vh" }}>
      {/* Add Asset Top Form */}
      <div style={{
        marginBottom: "2rem",
        background: "#fff",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Add Asset</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)}
            style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }} />
          <input placeholder="Type" value={type} onChange={e => setType(e.target.value)}
            style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }} />
          <input placeholder="Owner" value={owner} onChange={e => setOwner(e.target.value)}
            style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }} />
          <button onClick={() => add("form")} style={{ padding: "0.5rem 1rem", background: "#0052CC", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Add</button>
        </div>
      </div>

      {/* Kanban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: "flex", gap: "1rem" }}>
          {Object.keys(statusColumns).map(status => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}
                  style={{ flex: 1, background: "#EBECF0", padding: "1rem", borderRadius: "8px", minHeight: "300px" }}>
                  <h3 style={{ color: statusColumns[status].color }}>{statusColumns[status].title}</h3>

                  {/* Assets */}
                  {groupedAssets[status].map((a, index) => (
                    <Draggable draggableId={a.id} index={index} key={a.id}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                          onMouseEnter={() => setHoveredId(a.id)}
                          onMouseLeave={() => setHoveredId(null)}
                          style={{
                            padding: "0.75rem 1rem",
                            marginBottom: "0.5rem",
                            borderRadius: "6px",
                            background: snapshot.isDragging ? "#D2E5FF" : "#fff",
                            boxShadow: snapshot.isDragging ? "0 2px 8px rgba(0,0,0,0.2)" : "none",
                            position: "relative",
                            ...provided.draggableProps.style
                          }}>
                          {editingId === a.id ? (
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                              <input value={editFields.name} onChange={e => setEditFields({ ...editFields, name: e.target.value })} />
                              <input value={editFields.type} onChange={e => setEditFields({ ...editFields, type: e.target.value })} />
                              <input value={editFields.owner} onChange={e => setEditFields({ ...editFields, owner: e.target.value })} />
                              <select value={editFields.status} onChange={e => setEditFields({ ...editFields, status: e.target.value })}>
                                {Object.keys(statusColumns).map(s => <option key={s} value={s}>{statusColumns[s].title}</option>)}
                              </select>
                              <div style={{ display: "flex", gap: "0.5rem" }}>
                                <button onClick={() => saveEdit(a.id)} style={{ background: "#36B37E", color: "#fff", border: "none", borderRadius: "4px", padding: "0.25rem 0.5rem" }}>Save</button>
                                <button onClick={cancelEdit} style={{ background: "#DE350B", color: "#fff", border: "none", borderRadius: "4px", padding: "0.25rem 0.5rem" }}>Cancel</button>
                              </div>
                            </div>
                          ) : (
                            <div onClick={() => startEditing(a)} style={{ cursor: "pointer" }}>
                              <div style={{ fontWeight: "bold" }}>{a.name}</div>
                              <div style={{ fontSize: "0.85rem", color: "#555" }}>{a.type} | {a.owner || "-"}</div>
                            </div>
                          )}

                          {/* Hover Toolbar */}
                          {hoveredId === a.id && editingId !== a.id && (
                            <div style={{
                              position: "absolute",
                              top: "4px",
                              right: "4px",
                              display: "flex",
                              gap: "0.5rem"
                            }}>
                              <button onClick={() => startEditing(a)} style={{ background: "transparent", border: "none", color: "#0052CC", cursor: "pointer", fontWeight: "bold" }}>Edit</button>
                              <button onClick={() => deleteAsset(a.id)} style={{ background: "transparent", border: "none", color: "#DE350B", cursor: "pointer", fontWeight: "bold" }}>Delete</button>
                            </div>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  {/* Quick Add in Column */}
                  <div style={{ marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <input placeholder="Name" value={quickAdd[status]?.name || ""} onChange={e => setQuickAdd(prev => ({ ...prev, [status]: { ...prev[status], name: e.target.value } }))} />
                    <input placeholder="Type" value={quickAdd[status]?.type || ""} onChange={e => setQuickAdd(prev => ({ ...prev, [status]: { ...prev[status], type: e.target.value } }))} />
                    <input placeholder="Owner" value={quickAdd[status]?.owner || ""} onChange={e => setQuickAdd(prev => ({ ...prev, [status]: { ...prev[status], owner: e.target.value } }))} />
                    <button onClick={() => add(status)} style={{ background: "#0052CC", color: "#fff", border: "none", borderRadius: "4px", padding: "0.25rem 0.5rem", cursor: "pointer" }}>Add</button>
                  </div>

                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
