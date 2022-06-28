const getUsers = (req, res, next) => {
  return res.status(200).json({
    name: "윤승근",
    age: 29,
  });
}

const postUser = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  return res.status(201).json({
    email,
    password,
  });
}

export {
  getUsers,
  postUser,
}