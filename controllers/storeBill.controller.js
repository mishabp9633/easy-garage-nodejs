import { createNewStoreBill, findStoreBill } from "../services/storeBill.service.js";

export async function createStoreBill(req, res, next) {
    const storeBillData = req.body;
    try {
      const storeBill = await createNewStoreBill(storeBillData);
      console.log(storeBill);
      res.send(storeBill);
    } catch (err) {
      next({err});
    }
  }
  export async function getStoreBill(req, res, next) {
    try {
      const storeBillDetails = await findStoreBill(req.params.id);
      res.send(storeBillDetails);
    } catch (err) {
      next({err});
    }
  }
  export async function updateStoreBill(req, res, next) {
    try {
      const storeBillId = req.params.id;
      const storeBillData = req.body;
      const update = await updateBill(storeBillId, storeBillData);
  
      res.send(update);
    } catch (err) {
      next({err});
    }
  }

 