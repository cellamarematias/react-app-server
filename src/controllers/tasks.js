import TasksModel from '../models/tasks.js';

const getTasks = async (req, res) => {
  try {
    const tasks = await TasksModel.find({})
      .populate('user');
    //   .populate('projectId');
    return res.status(200).json({
      message: 'Request Successful. All tasks.',
      data: tasks,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error: ${error}`,
      data: undefined,
      error: true,
    });
  }
};

const findTask = async (req, res) => {
  try {
    const taskById = await TasksModel.findById(req.params.id)
      .populate('user')
    //   .populate('projectId');
    if (taskById) {
      return res.status(200).json({
        message: (`Request Successful. Task with Id: ${req.params.id} found.`),
        data: taskById,
        error: false,
      });
    }
    return res.status(404).json({
      message: (`Id: ${req.params.id} doesn't exist.`),
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: (`An error has ocurred: ${error}`),
      data: undefined,
      error: true,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = new TasksModel({
      user: req.body.user,
    //   projectId: req.body.projectId,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      done: req.body.done,
    });
    const saveTask = await newTask.save();
    return res.status(201).json({
      message: 'Task Added',
      data: saveTask,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error during the creation',
      data: error,
      error: true,
    });
  }
};

const editTask = async (req, res) => {
  const { id } = req.params;
  try {
    const modifiedTask = await TasksModel.findByIdAndUpdate(id, req.body, { new: true })
      .populate('user')
    //   .populate('projectId');
    if (modifiedTask) {
      return res.status(200).json({
        message: 'Task Modified',
        data: modifiedTask,
        error: false,
      });
    }
    return res.status(400).json({
      message: (`Id: ${id} doesn't exist.`),
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error during the edition',
      data: error,
      error: true,
    });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTaskById = await TasksModel.findByIdAndDelete(id);
    if (deleteTaskById) {
      return res.status(200).json({
        message: 'Task Deleted',
        data: deleteTaskById,
        error: false,
      });
    }
    return res.status(404).json({
      message: `Task with id: ${id} not found`,
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error during the deletion',
      data: error,
      error: true,
    });
  }
};

export default {
    getTasks,
    findTask,
    editTask,
    deleteTask,
    createTask
}