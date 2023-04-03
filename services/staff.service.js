import staffModel from "../models/staff.model.js";

export async function createNewStaff(staffData) {
  const findStaff = await staffModel.findOne({ email: staffData.email });
  if (findStaff) return "staff already added!";

  const staff = await staffModel.create({ ...staffData });
  return { staff };
}

export async function findAllStaffs() {
  const result = await staffModel.find();
  return { result };
}

export async function getStaff(id) {
  const singleStaff = await staffModel.findById(id);
  return { singleStaff };
}

export async function updateStaffData(staffId, staffData) {
  const updatedStaff = await staffModel.findByIdAndUpdate(staffId, staffData, {
    new: true,
  });

  return { updatedStaff };
}

export async function removeStaff(id) {
  const staff = await staffModel.findByIdAndDelete(id);
  return { staff };
}
