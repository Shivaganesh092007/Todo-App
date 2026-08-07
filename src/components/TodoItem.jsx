import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { deleteTodo, editTodo, toggleTodo } from './TodoSlice';


function TodoItem({ t }) {
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(false)

    const handleEditToggle = () => {
        if (editable && t.task.trim() === '') return;
        setEditable(!editable);
    };

    return (
        <li className="flex items-center justify-between gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700 group transition hover:shadow-sm">
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                    type="checkbox"
                    checked={t.completed || false}
                    onChange={() => dispatch(toggleTodo({ id: t.id }))}
                    className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
                />

                <input
                    type="text"
                    value={t.task}
                    onChange={(e) => dispatch(editTodo({ id: t.id, task: e.target.value }))}
                    onKeyDown={(e) => e.key === "Enter" && handleEditToggle()}
                    readOnly={!editable}
                    className={`w-full bg-transparent border-b transition outline-none px-1 py-0.5 ${editable
                            ? "border-indigo-500 bg-white dark:bg-slate-800 rounded text-slate-900 dark:text-slate-100"
                            : "border-transparent"
                        } ${t.completed ? "line-through text-slate-400 dark:text-slate-500" : ""}`}
                />
            </div>

            <div className="flex items-center gap-1">
                <button
                    onClick={handleEditToggle}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition ${editable
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                            : "bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200"
                        }`}
                >
                    {editable ? "Save" : "Edit"}
                </button>

                <button
                    onClick={() => dispatch(deleteTodo(t.id))}
                    className="px-2.5 py-1 text-xs font-medium rounded bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 hover:bg-rose-200 dark:hover:bg-rose-900 transition"
                >
                    Delete
                </button>
            </div>
        </li>
    )

}

export default TodoItem