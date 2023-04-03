
import {
  createNewStaff,
  findAllStaffs,
  getStaff,
  removeStaff,
  updateStaffData,
} from "../services/staff.service.js";

export async function createStaff(req, res, next) {
  let staffData = req.body;

  try {
    const newStaff = await createNewStaff(staffData);
    res.send(newStaff);
  } catch (err) {
    next({err});
  }
}

export async function getAllStaffs(req, res,next) {
  try{
  const allStaffs = await findAllStaffs();
  res.send(allStaffs);
}catch(err){
  next({err})
}
}
export async function getStaffDetails(req, res, next) {
  try {
    const staffDetails = await getStaff(req.params.id);
    res.send(staffDetails);
  } catch (err) {
    next({err});
  }
}

export async function updateStaff(req, res, next) {
  try {
    const staffId = req.params.id;
    const staffData = req.body;
    const update = await updateStaffData(staffId, staffData);

    res.send(update);
  } catch (err) {
    next({err});
  }
}

export async function deleteStaff(req, res, next) {
  try {
    const staff = await removeStaff(req.params.id);
    res.send(staff);
  } catch (err) {
    next({err});
  }
}
