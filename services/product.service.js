import productModel from "../models/product.model.js";

export async function createNewStoreItem(storeData) {
  const newItem = await productModel.create({ ...storeData });
  return { newItem };
}

export async function findAllStoreItem() {
  const allStoreItem = await productModel.find();
  return { allStoreItem };
}

export async function findStoreItem(id) {
  const storeItem = await productModel.findById(id);
  return { storeItem };
}

export async function deletedStoreItem(id) {
  const deletedStoreItem = await productModel.findByIdAndDelete(id);
  return { deletedStoreItem };
}

export async function updateStore(storeId, storeData) {
  const updateStoreItem = await productModel.findByIdAndUpdate(
    storeId,
    storeData,
    {
      new: true,
    }
  );

  return { updateStoreItem };
}
