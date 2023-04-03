import serviceModel from "../models/service.model.js";

export async function createNewService(serviceData) {
  const findService = await serviceModel.findOne({
    title: serviceData.title,
  });
  if (findService) return "service already added!";

  const newService = await serviceModel.create({ ...serviceData });
  return { newService };
}

export async function findAllServices() {
  const allService = await serviceModel.find();
  return { allService };
}

export async function getservice(id) {
  const singleService = await serviceModel.findById(id);
  return { singleService };
}

export async function updateServiceData(serviceId, serviceData) {
  const updatedService = await serviceModel.findByIdAndUpdate(
    serviceId,
    serviceData,
    { new: true }
  );

  return { updatedService };
}

export async function removeService(id) {
  const service = await serviceModel.findByIdAndDelete(id);
  return { service };
}
