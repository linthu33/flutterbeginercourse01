// controllers/todoController.js

// Mock data array
const todos = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  { userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  { userId: 1, id: 4, title: "et porro tempora", completed: true },
  { userId: 1, id: 5, title: "laboriosam mollitia et enim quasi adipisci quia provident illum", completed: false }
];

// Controller logic
const getTodos = (req, res) => {
  try {
    // Query parameter (_limit) ပါလာပါက သတ်မှတ်သလောက်သာ ဖြတ်ယူမည်
    const limit = parseInt(req.query._limit, 10);
    
    let result = todos;
    if (!isNaN(limit) && limit > 0) {
      result = todos.slice(0, limit);
    }

    // 200 OK Status နှင့်အတူ JSON Response ပြန်ပေးမည်
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error occurred", error: error.message });
  }
};

module.exports = {
  getTodos
};