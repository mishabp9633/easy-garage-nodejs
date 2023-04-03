import { createNewjobCard, findAllJobCard, getjobCardDetail, getJobCardDetailByToken, updateJobCard } from "../services/jobCard.service.js";

export async function createJobCard(req, res, next) {
  let jobCardData = req.body;

  try {
    const newCard = await createNewjobCard(jobCardData);
    res.send(newCard);
  } catch (err) {
    next({err});
  }
}
  
  export async function getAllJobCard(req, res,next) {
    try{
      const result = await findAllJobCard();
      res.send(result);
    }catch(err){
      next({err})
    }
  }
  export async function getJobCardDetailsToken(req, res, next) {
    const userId=req.body.user._id;
    try {
      const jobCard = await getJobCardDetailByToken(userId);
      console.log(userId);
      console.log(jobCard);

      res.send(jobCard);
    } catch (err) {
      next({err});
    }
  }

  export async function getJobCardDetails(req, res, next) {
    try {
      const result = await getjobCardDetail(req.params.id);
      res.send(result);
    } catch (err) {
      next({err});
    }
  }
  export async function updateJobCardDetails(req, res, next) {
    try {
      const jobCardId = req.params.id;
      const jobCardData = req.body;
      const update = await updateJobCard(jobCardId, jobCardData);
  
      res.send(update);
    } catch (err) {
      next({err});
    }
  }
  