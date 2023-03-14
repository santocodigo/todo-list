package com.todolist.services;

import com.todolist.dto.TaskDTO;
import com.todolist.mappers.TaskMapper;
import com.todolist.repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    public void addTask(TaskDTO taskDTO) {
        taskRepository.save(taskMapper.taskDTOToTask(taskDTO));
    }

}
