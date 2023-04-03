import { HttpException } from "../exceptions/exceptions.js";
import bookingModel from "../models/booking.model.js"

export async function bookingNew(bookingData) {
    const booking = await bookingModel.create({ ...bookingData });
  
    return { booking };
  }

  export async function findAllBooking() {
    const bookings = await bookingModel.find().populate("name",[ "name"])
    .populate("vehicle",["registrationNumber"])
    .populate("services",["title"])
    
    return { bookings };
  }

  export async function findBookingDetail(id) {
    const booking = await bookingModel.findById(id)
    .populate("name",[ "name"])
    .populate("vehicle",["registrationNumber"])
    .populate("services",["title"])
    
    return { booking };
  }


  export async function getBookingDetailByUserId(userId) {
    const booking = await bookingModel.find({name: userId})
    .populate("name",[ "name"])
    .populate("vehicle",["registrationNumber"])
    .populate("services",["title"])
    
    if(!booking) {
      return {"message": 'No user with this id'}
    } else return { booking }
  }
  export async function bookingDelete(id) {
    const deleteBooking = await bookingModel.findByIdAndDelete(id);
    console.log(deleteBooking);
    return { deleteBooking };
  }
  export async function bookingDeleteByToken(userId) {
    const Booking =  await  bookingModel.findOne({name:userId});
    if(!Booking) throw new HttpException('400', "No booking is there")
    const bookingId = Booking._id
    const deleteBooking = await bookingModel.findByIdAndDelete(bookingId);
  
    console.log(deleteBooking);
    return { deleteBooking };
  }
 