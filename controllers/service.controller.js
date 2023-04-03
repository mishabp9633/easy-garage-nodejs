import {
  findAllServices,
  getservice,
  createNewService,
  updateServiceData,
  removeService,
} from "../services/service.service.js";

export async function createService(req, res, next) {
  let serviceData = req.body;

  try {
    const newService = await createNewService(serviceData);
    res.send(newService);
  } catch (err) {
    next({err});
  }
}

export async function getAllservices(req, res,next) {
  try {
    const allService = await findAllServices();
    res.send(allService);
  } catch (err) {
    next({err});
  }
}

export async function getServiceDetails(req, res, next) {
  try {
    const serviceDetails = await getservice(req.params.id);
    res.send(serviceDetails);
    console.log(serviceDetails);
  } catch (err) {
    next({err});
  }
}

export async function updateService(req, res, next) {
  try {
    const serviceId = req.params.id;
    const serviceData = req.body;
    const update = await updateServiceData(serviceId, serviceData);

    res.send(update);
  } catch (err) {
    next({err});
  }
}

export async function deleteService(req, res, next) {
  try {
    const service = await removeService(req.params.id);
    res.send(service);
  } catch (err) {
    next({err});
  }
}
