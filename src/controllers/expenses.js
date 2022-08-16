import Expenses from "../models/expenses.js";

const getexpenses = async (req, res) => {
  const { couple } = req.params;
  try {
    const expenses = await Expenses.find({ "coupleId": couple })
      .sort({date: 'desc'})
      .populate('userId')
    return res.status(200).json({
      message: 'Request Successful. All expenses.',
      data: expenses,
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



const findexpense = async (req, res) => {
  try {
    const taskById = await Expenses.findById(req.params.id)
      .populate('user')
    if (taskById) {
      return res.status(200).json({
        message: (`Request Successful. expense with Id: ${req.params.id} found.`),
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

const createexpense = async (req, res) => {
  try {
    const newexpense = new Expenses({
        coupleId: req.body.coupleId,
        userId: req.body.userId,
        amount: req.body.amount,
        name: req.body.name,
        date: req.body.date,
    });
    const saveexpense = await newexpense.save();
    const data = await Expenses.findById(saveexpense._id)
      .sort('-date')
      .populate('userId');
    console.log(data);
    return res.status(201).json({
      message: 'expense Added',
      data: data,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error during the expense creation',
      data: error,
      error: true,
    });
  }
};

// Added sort
const editexpense = async (req, res) => {
  const { id } = req.params;
  try {
    const editedexpense = await Expenses.findByIdAndUpdate(id, req.body, { new: true })
      .sort({ date: -1 })
      .populate('userId')
    if (editedexpense) {
      return res.status(200).json({
        message: 'expense edited',
        data: editedexpense,
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
      message: 'Error during the expense edition',
      data: error,
      error: true,
    });
  }
};

const deleteexpense = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedexpense = await Expenses.findByIdAndDelete(id);
    if (deletedexpense) {
      return res.status(200).json({
        message: 'expense Deleted',
        data: deletedexpense,
        error: false,
      });
    }
    return res.status(404).json({
      message: `expense with id: ${id} not found`,
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error during the expense deletion',
      data: error,
      error: true,
    });
  }
};

export default {
    getexpenses,
    findexpense,
    createexpense,
    editexpense,
    deleteexpense,
}