import { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodosList() {
    const todos = useSelector((state) => state.todos);
    const [filter, setFilter] = useState('all');

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const completedCount = todos.filter((t) => t.completed).length;

    return (
        <div>
            <div className="flex justify-between items-center mb-4 text-xs font-medium text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 pb-3">
                <span>{completedCount} of {todos.length} completed</span>
                <div className="flex gap-1 bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg">
                    {['all', 'active', 'completed'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`capitalize px-2.5 py-1 rounded-md transition ${filter === type
                                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
                                    : 'hover:text-slate-800 dark:hover:text-slate-200'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {filteredTodos.length === 0 ? (
                <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-sm">
                    No tasks found in this section.
                </div>
            ) : (
                <ul className="space-y-2 max-h-80 overflow-y-auto pr-1">
                    {filteredTodos.map((t) => (
                        <TodoItem key={t.id} t={t} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodosList;