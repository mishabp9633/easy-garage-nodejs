import {
  deletedUser,
  findAllUsers,
  getUser,
  createNewUser,
  updateUser,
  login,
  checkAdminLogin,
} from "../services/user.service.js";

export async function createUser(req, res, next) {
  const userData = req.body;

  try {
    const newUser = await createNewUser(userData);
    res.send(newUser);
  } catch (err) {
    next({err});
  }
}

export async function getAllUser(req, res,next) {
  try {
    const allUser = await findAllUsers();
    res.send(allUser);
  } catch (err) {
    next({err});
  }
}

export async function getUserDetailsByUserId(req, res, next) {
  try {
    const userDetails = await getUser(req.params.id);
    res.send(userDetails);
  } catch (err) {
    next({err});
  }
}

export async function getUserDetailsByToken(req, res, next) {
  const userId = req.body.user._id
  try {
    const userDetails = await getUser(userId);
    res.send(userDetails);
  } catch (err) {
    next({err});
  }
}

export async function deleteUser(req, res, next) {
  try {
    const user = await deletedUser(req.params.id);
    res.send(user);
  } catch (err) {
    next({err});
  }
}

export async function updateUserById(req, res, next) {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const update = await updateUser(userId, userData);

    res.send(update);
  } catch (err) {
    next({err});
  }
}

export async function updateUserByToken(req, res, next) {
  try {
    const userId = req.body.user._id;
    const userData = req.body;
    const update = await updateUser(userId, userData);

    res.send(update);
  } catch (err) {
    next({err});
  }
}

export async function customerLogin(req, res, next) {
  const loginData = req.body;
  try {
    const response = await login(loginData);
    res.send(response);
  } catch (err) {
    next({err});
  }
}

export async function adminLogin(req, res, next) {
  const loginData = req.body;
  try {
    const response = await checkAdminLogin(loginData);
    res.send(response);
  } catch (err) {
    next({err});
  }
}
