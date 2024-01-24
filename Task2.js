document.addEventListener('DOMContentLoaded', function () {
    const highPriorityTasks = document.getElementById('high-priority-tasks');
    const mediumPriorityTasks = document.getElementById('medium-priority-tasks');
    const lowPriorityTasks = document.getElementById('low-priority-tasks');

    function createTaskElement(task) {
        const li = document.createElement('li');
        li.textContent = task.name;

        if (task.priority === 'high') {
            li.classList.add('high-priority');
        } else if (task.priority === 'medium') {
            li.classList.add('medium-priority');
        } else {
            li.classList.add('low-priority');
        }

        return li;
    }

    function addTaskToCategory(task) {
        const taskElement = createTaskElement(task);

        if (task.priority === 'high') {
            highPriorityTasks.appendChild(taskElement);
        } else if (task.priority === 'medium') {
            mediumPriorityTasks.appendChild(taskElement);
        } else {
            lowPriorityTasks.appendChild(taskElement);
        }
    }

    // Example tasks
    const tasks = [
        { name: 'Task 1', priority: 'high' },
        { name: 'Task 2', priority: 'medium' },
        { name: 'Task 3', priority: 'low' },
    ];

    // Add example tasks to the task list
    tasks.forEach(addTaskToCategory);
});
