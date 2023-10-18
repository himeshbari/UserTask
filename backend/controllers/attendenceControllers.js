import mongoose from "mongoose";



import Attendence from "../models/attendenceModel.js";

export const getAttendence = async (req, res) => {
  try {
    const attendence = await Attendence.find({});
    res.status(200).json({ success: true, data: attendence });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


// Aggregate 


// import mongoose from 'mongoose';
// import Attendence from '../models/attendenceModel.js'; // Import your Attendence model

// export const getAttendence = async (req, res) => {
//   try {
//     const fromDate = new Date(req.params.fromDate);
//     const toDate = new Date(req.params.toDate);
//     const locationId = new mongoose.Types.ObjectId(req.params.locationId); // Your location ID

//     const pipeline = [
//       {
//         $match: {
//           Date: {
//             $gte: fromDate,
//             $lte: toDate,
//           },
//           locationId: mongoose.Types.ObjectId(locationId),
//         },
//       },
//       {
//         $lookup: {
//           from: 'User',
//           localField: 'employeeId',
//           foreignField: '_id',
//           as: 'user',
//         },
//       },
//       {
//         $unwind: '$user',
//       },
//       {
//         $project: {
//           _id: 1,
//           userId: '$user.userId',
//           userFullName: '$user.userFullName',
//           Location: 1,
//           createdAs: 1,
//         },
//       },
//     ];

//     const attendence = await Attendence.aggregate(pipeline);

//     console.log(attendence);
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     mongoose.connection.close(); // Close the database connection
//   }
// };

// // Call the testAggregationPipeline function
// getAttendence();
