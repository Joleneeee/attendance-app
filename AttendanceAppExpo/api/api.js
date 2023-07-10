const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");
const mongoose = require("mongoose");

const Student = require("./models/studentModel");
const Lecturer = require("./models/lecturerModel");
const Checkin = require("./models/checkinModel");
const req = require("express/lib/request");
const app = express();

app.use(express.json());

// Routes
// saving user data in mongoDB

// POST - Create new data
// GET - Retrieve existing data
// PUT - Update exiasting data 

app.use(cors());

// User
app.post("/student", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// fetching user data by name and user ID from mongodb
app.get("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.find(
      { id },
      { _id: 0, name: true, course: true, email: true, password: true }
    );
    res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// update the fields in the mongoDB
app.put("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const UpdatedStudent = await Student.find(
      { id },
      { _id: 0, time: true, status: true, location: true }
    );

    if (!UpdatedStudent) {
      return res
        .status(404)
        .json({ message: `cannot find user with student ID ${id}` });
    }

    res.status(200).json(UpdatedStudent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/student", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// fetching user data by name and user ID from mongodb
app.get("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.find(
      { id },
      { _id: 0, email: true, password: true, name: true, course: true }
    );
    res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// login
app.get("/student/:email/:password", async (req, res) => {
  try {
    const { email } = req.params;
    const { password } = req.params;

    const student = await Student.find(
      { email, password },
      { _id: 0, email: true, password: true, name: true, course: true }
    );
    res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// update the fields in the mongoDB
app.put("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const UpdatedStudent = await Student.find(
      { id },
      { _id: 0, email: true, password: true, name: true, course: true }
    );

    if (!UpdatedStudent) {
      return res
        .status(404)
        .json({ message: `cannot find user with student ID ${id}` });
    }

    res.status(200).json(UpdatedStudent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Lecturer

app.post("/lecturer", async (req, res) => {
  try {
    const lecturer = await Lecturer.create(req.body);
    res.status(200).json(lecturer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// fetching user data by name and user ID from mongodb
app.get("/lecturer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lecturer = await Lecturer.find(
      { id },
      { _id: 0, name: true, subjects: true, email: true, password: true }
    );
    res.status(200).json(lecturer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// login
app.get("/lecturer/:email/:password", async (req, res) => {
  try {
    const { email } = req.params;
    const { password } = req.params;

    const lecturer = await Lecturer.find(
      { email, password },
      { _id: 0, name: true, subjects: true, email: true, password: true }
    );
    res.status(200).json(lecturer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// update the fields in the mongoDB
app.put("/lecturer/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const UpdateLecturer = await Lecturer.find(
      { id },
      { _id: 0, name: true, subjects: true, email: true, password: true }
    );

    if (!UpdatedLecturer) {
      return res
        .status(404)
        .json({ message: `cannot find user with lecturer ID ${id}` });
    }

    res.status(200).json(UpdateLecturer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Checkin

app.post("/checkin", async (req, res) => {
  try {
    const checkin = await Checkin.create(req.body);
    res.status(200).json(checkin);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// fetching user data by name and user ID from mongodb
app.get("/checkin/:checkinCode", async (req, res) => {
  try {
    const { checkinCode } = req.params;
    const checkin = await Checkin.find(
      { checkinCode },
      {
        _id: 0,
        checkinCode: true,
        subjectCode: true,
        students: true,
        time: true,
      }
    );
    res.status(200).json(checkin);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// update the fields in the mongoDB
app.put("/checkin/:checkinCode", async (req, res) => {
  try {
    const { checkinCode } = req.params;
    const { students } = req.body;

    const UpdateCheckin = await Checkin.findOneAndUpdate(
      { checkinCode },
      req.body,
      { new: true }
    );

    if (!UpdateCheckin) {
      return res
        .status(404)
        .json({ message: `cannot find checkin code ${checkinCode}` });
    }

    const updateCheckin = await Checkin.find(
      { checkinCode },
      {
        _id: 0,
        checkinCode: true,
        subjectCode: true,
        students: true,
        time: true,
      }
    );

    res.status(200).json(updateCheckin);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Connect to MongoDB Atlas database using Mongoose ORM.  Replace the connection string with your own
mongoose
  .connect(
    "mongodb+srv://admin:admin12345@cluster0.wwstlyi.mongodb.net/node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log("API is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
