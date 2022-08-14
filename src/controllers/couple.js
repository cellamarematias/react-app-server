import Couple from "../models/couples.js";

const getCouples = async (req, res) => {
  const { user } = req.params;
  try {
    const couples = await Couple.find({
      $or:[
        {'userOne':user}, {'userTwo':user}
      ]})
    .populate({
      path: 'userOne',
      model: 'Users',
    })
    .populate({
        path: 'userTwo',
        model: 'Users',
      },
    );
    return res.status(200).json({
      message: 'Request Successful. All couples.',
      data: couples,
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

const findCouple = async (req, res) => {
  console.log(req.params.id);
  try {
    const couple = await Couple.findById(req.params.id)
      .populate({
        path: 'userOne',
        model: 'Users',
      })
      .populate({
          path: 'userTwo',
          model: 'Users',
        },
      );
    if (couple) {
      return res.status(200).json({
        message: (`Request Successful. Couple with Id: ${req.params.id} found.`),
        data: [couple],
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

const createCouple = async (req, res) => {
  try {
    const NewCouple = new Couple({
        name: req.body.name,
        userOne: req.body.userOne,
        userTwo: req.body.userTwo,
        default: req.body.default,
    });
    const saveCouple = await NewCouple.save();
    return res.status(201).json({
      message: 'Couple Added',
      data: saveCouple,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error during the couple creation',
      data: error,
      error: true,
    });
  }
};

const editCouple = async (req, res) => {
  const { id } = req.params;
  try {
    const editedCouple = await Couple.findByIdAndUpdate(id, req.body, { new: true })
    .populate({
      path: 'userOne',
      model: 'Users',
    })
    .populate({
        path: 'userTwo',
        model: 'Users',
      },
    );
    if (editedCouple) {
      return res.status(200).json({
        message: 'Couple Modified',
        data: editedCouple,
        error: false,
      });
    }
    return res.status(400).json({
      message: (`Couple: ${id} doesn't exist.`),
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error during the coupple edition',
      data: error,
      error: true,
    });
  }
};

const deleteCouple = async (req, res) => {
  const { id } = req.params;
  try {
    const deteltedCouple = await Couple.findByIdAndDelete(id);
    if (deteltedCouple) {
      return res.status(200).json({
        message: 'Couple deleted',
        data: deteltedCouple,
        error: false,
      });
    }
    return res.status(404).json({
      message: `Couple with id: ${id} not found`,
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

const pushExpense = async (req, res) => {
  const { id } = req.params;
  let newExpense = {
    amount: req.body.expense[0].amount,
    date: req.body.expense[0].date,
    description: req.body.expense[0].description,
    user: req.body.expense[0].user,
  };
  try {
      const user = await Couple.findOneAndUpdate(
        { _id: id},
        { $push: { expenses: newExpense } },
        )
        .populate({
          path: 'expenses',
          populate: {
            path: 'user',
            model: 'User',
          },
        })
      if (user) {
        const coupleEdited = await Couple.findById(id)
        .populate({
          path: 'expenses',
          populate: {
            path: 'user',
            model: 'User',
          },
        })
        const data = coupleEdited.expenses[coupleEdited.expenses.length - 1];
        let response = {
          amount: data.amount,
          date: data.date,
          description: data.description,
          user: data.user,
          coupleId: id,
        }
          return res.status(201).json({
              message: 'Expense added',
              data: response,
              error: false,
          });
      }
      return res.status(404).json({
          message: `User with Id: ${req.params._id} doesn't exist.`,
          data: undefined,
          error: true,
      });
  } catch (error) {
      return res.status(500).json({
          message: `An error has ocurred: ${error}`,
          data: undefined,
          error: true,
      });
  }
}

const pullExpense = async (req, res) => {
  const { id } = req.params;
  const expenseId = req.body.expenseId;
  Couple.findById(id)
    .then(async Couple => {
      Couple.expenses.pull(expenseId)
      const data = await Couple.save()
      return res.status(200).json({
        message: 'Expense deleted',
        data: data,
        error: false,
      });
    }).catch(err => {
      return res.status(500).json({
        message: `An error has ocurred: ${err}`,
        data: undefined,
        error: true,
      });
    }
  );
}

export default {
    getCouples,
    findCouple,
    createCouple,
    editCouple,
    deleteCouple,
    pushExpense,
    pullExpense,
}