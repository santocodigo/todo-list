package com.todolist.mappers;

import com.todolist.dto.TaskDTO;
import com.todolist.entities.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {

    public Task taskDTOToTask(TaskDTO taskDTO) {
        Task task = new Task();
        task.setDescription(task.getDescription());

        return task;
    }

}
