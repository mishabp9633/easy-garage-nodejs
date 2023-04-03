import jobCardModel from "../models/jobCard.model.js";

export async function createNewjobCard(jobCardData) {
  const newCard = await jobCardModel.create({ ...jobCardData });

  const finalJobCard = await calculateJobCardTotals(newCard._id);

  return finalJobCard ;
}

export async function findAllJobCard() {
  const result = await jobCardModel
    .find()
    .populate("services staffs vehicle customer", [
      "title",
      "price",
      "name",
      "department",
      "registrationNumber",
      "model",
      "phone",
      "city",
    ]);

  return { result };
}
export async function getJobCardDetailByToken(userId) {
  const jobCard = await jobCardModel.find({customer:userId})
  .populate("services staffs vehicle customer", [
    "title",
    "price",
    "name",
    "department",
    "vehicleType",
    "model",
    "phone",
    "city",
  ]);
  if(!jobCard) {
    return {"message": 'No user with this id'}
  } else return { jobCard };
}

export async function getjobCardDetail(id) {
  const jobCard = await jobCardModel
    .findById(id)
    .populate("services staffs vehicle customer", [
      "title",
      "price",
      "name",
      "department",
      "vehicleType",
      "model",
      "phone",
      "city",
    ]);
  return jobCard;
}

export async function getjobCardById(id) {
  const jobCard = await jobCardModel.findById(id)
  return jobCard ;
}

export async function updateJobCard(jobCardId, jobCardData) {
  const findJobCard = await jobCardModel.findById(jobCardId);
  if(!findJobCard) return "no jobcard available"

  const jobCard = await jobCardModel.findByIdAndUpdate(jobCardId, jobCardData);

  const finalJobCard = await calculateJobCardTotals(jobCard._id);

  
  return { jobCard: finalJobCard };
}

export async function calculateJobCardTotals(jobCardId) {
  const jobCard = await jobCardModel
    .findById(jobCardId)
    .populate("customer services", ["name", "phone", "title", "price"]);
  if(!jobCard) return "no jobcard with this id"

  let totalServiceCharge = 0;
  let totalStoreBillAMount = 0;

  //total service charge
  await jobCard.services.forEach((service) => {
    totalServiceCharge += Number(service.price);
  });
  jobCard.totalServiceCharge = Number(totalServiceCharge).toFixed(2);

  //total store bil amount
  await jobCard.storeBills.forEach((storeBill) => {
    totalStoreBillAMount += Number(storeBill.totalPrice);
  });
  jobCard.totalStoreBillAmount = Number(totalStoreBillAMount).toFixed(2);

  //total amount
  const totalAmountCalc =
    Number(totalServiceCharge) +
    Number(totalStoreBillAMount) +
    Number(jobCard.extraCharges);
  jobCard.totalAmount = Number(totalAmountCalc).toFixed(2);

  await jobCard.save();

  return { jobCard };
}
