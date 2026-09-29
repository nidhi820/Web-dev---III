const express = require("express");
const router = express.Router();

const students = require("../data/students");

// GET /students
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: students.length,
        students: students
    });
});

// GET /students/:id
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid student ID"
        });
    }

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.status(200).json({
        success: true,
        student: student
    });
});

// POST /students
router.post("/", (req, res) => {
    const { name, age, gender, course } = req.body;

    if (!name || !age || !gender || !course) {
        return res.status(400).json({
            success: false,
            message: "Name, age, gender and course are required"
        });
    }

    const newStudent = {
        id: students.length > 0
            ? Math.max(...students.map(student => student.id)) + 1
            : 1,
        name,
        age,
        gender,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student created successfully",
        student: newStudent
    });
});

// PUT /students/:id
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid student ID"
        });
    }

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const { name, age, gender, course } = req.body;

    if (!name || !age || !gender || !course) {
        return res.status(400).json({
            success: false,
            message: "Name, age, gender and course are required"
        });
    }

    student.name = name;
    student.age = age;
    student.gender = gender;
    student.course = course;

    res.status(200).json({
        success: true,
        message: "Student updated successfully",
        student: student
    });
});

// DELETE /students/:id
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid student ID"
        });
    }

    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(studentIndex, 1);

    res.status(200).json({
        success: true,
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});

module.exports = router;