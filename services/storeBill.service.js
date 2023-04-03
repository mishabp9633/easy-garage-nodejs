import storeBillModel from "../models/storeBill.model.js";
import { calculateJobCardTotals, getjobCardById } from "./jobCard.service.js";

export async function createNewStoreBill(storeBillData) {
    
    // jobCard, items [{product,name,quantity,price}], discount

    let subTotal = 0;
    let totalPrice = 0;

    // calculate subTotal
    await storeBillData.items.forEach((item) => {
        subTotal += Number(item.price * item.quantity).toFixed(2);
    });

    // calculate totalPrice
    totalPrice =Number(subTotal) - Number(storeBillData.discount).toFixed(2);

    const storeBill = await storeBillModel.create({ ...storeBillData, subTotal, totalPrice });
    console.log(storeBill);
    const jobCard = await getjobCardById(storeBill.jobCard)
    if(!jobCard) return " no jobcard available "
    console.log(jobCard);

    jobCard.storeBills = [...jobCard.storeBills, storeBill._id]

    jobCard.save();

    // await calculateJobCardTotals(jobCard._id);

  return { storeBill };
}






export async function findStoreBill(id) {
  const storeBill = await storeBillModel.findById(id);
  return { storeBill };
}



export async function updateBill(storeBillId, storeBillData) {
  const findStoreBill = await storeBillModel.findById(jobCardId);
  if(!findStoreBill) return "no storeBill available"
  const updateStoreBill = await storeBillModel.findByIdAndUpdate(
    storeBillId,
    storeBillData,
    {
      new: true,
    }
  );

  return { updateStoreBill };
}


export async function calculateStoreBillTotals(storeBillId) {
  const storeBill = await storeBillModel
    .findById(storeBillId)
  if(!storeBill) return "no storeBill with this id"
 // jobCard, items [{product,name,quantity,price}], discount

 let subTotal = 0;
 let totalPrice = 0;

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
