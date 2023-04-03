import {
  createNewStoreItem,
  findAllStoreItem,
  findStoreItem,
  deletedStoreItem,
  updateStore,
} from "../services/product.service.js";

export async function createStoreItem(req, res, next) {
  let storeData = req.body;

  try {
    const newStoreItem = await createNewStoreItem(storeData);
    res.send(newStoreItem);
  } catch (err) {
    next({err});
  }
}

export async function getAllStoreItem(req, res,next) {
  try{

 
  const allStoreItem = await findAllStoreItem();
  res.send(allStoreItem);
}catch{
  next({err})
}
}

export async function getStoreItem(req, res, next) {
  try {
    const storeItemDetails = await findStoreItem(req.params.id);
    res.send(storeItemDetails);
  } catch (err) {
    next({err});
  }
}
export async function deleteStoreItem(req, res, next) {
  try {
    const store = await deletedStoreItem(req.params.id);
    res.send(store);
  } catch (err) {
    next({err});
  }
}

export async function updateStoreItem(req, res, next) {
  try {
    const storeId = req.params.id;
    const storeData = req.body;
    const update = await updateStore(storeId, storeData);

    res.send(update);
  } catch (err) {
    next({err});
  }
}
