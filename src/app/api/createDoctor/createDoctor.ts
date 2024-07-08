import { NextApiRequest, NextApiResponse } from "next";
import Doctor from "../../../../model/Doctor";
import cloudinary from "@/utils/cloudinary";
import { connect } from "../../../../dbConfig/db";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  if (req.method === "POST") {
    try {
      const { name, department, gender, email, dob, photo } = req.body;

      if (!name || !department || !gender || !email || !dob || !photo) {
        return res
          .status(400)
          .json({ message: "Please fill all the details." });
      }

      const result = await cloudinary.uploader.upload(photo, {
        folder: "doctors",
      });

      const doctor = new Doctor({
        name,
        department,
        gender,
        email,
        dob,
        photoUrl: result.secure_url,
      });

      await doctor.save();

      res.status(201).json({ message: "Doctor created successfully", doctor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
