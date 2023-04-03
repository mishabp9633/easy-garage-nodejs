import { bookingDelete, bookingDeleteByToken, bookingNew, findAllBooking, findBookingDetail, getBookingDetailByUserId,  } from "../services/booking.service.js";

export async function createBooking(req, res, next) {
    let bookingData = req.body;
  
    try {
      const newBooking = await bookingNew(bookingData);
      res.send(newBooking);
      console.log(newBooking);
    } catch (err) {
      next({err});
    }
  }

  export async function getAllBooking(req, res,next) {
    try {
      const booking = await findAllBooking();
      res.send(booking);
    } catch (err) {
      next({err});
    }
  }

  export async function getBookingDetailsById(req, res, next) {
    try {
      const booking = await findBookingDetail(req.params.id);
      res.send(booking);
    } catch (err) {
      next({err});
    }
  }

  export async function getBookingDetailsByToken(req, res, next) {
    const userId = req.body.user._id;
  console.log('userId: ',userId);
    try {
      const bookingDetails = await getBookingDetailByUserId(userId);
      res.send(bookingDetails);
      console.log(bookingDetails);
    } catch (err) {
      next({err});
    }
  }
  export async function deleteBooking(req, res, next) {
    try {
      const booking = await bookingDelete(req.params.id);
      res.send(booking);
      console.log(booking);
    } catch (err) {
      next({err});
    }
  }


  export async function deleteBookingByToken(req, res, next) {
    const userId = req.body.user._id;
   
    
    console.log('userId: ',userId,);
    try {
      const booking = await bookingDeleteByToken(userId);
      res.send(booking);
      console.log(booking);
    } catch (err) {
      next({err});
    }
  }