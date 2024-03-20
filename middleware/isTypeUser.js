exports.checkClient = (req, res, next) => {
  const role = req.session.role;
  console.log(3, role);
  if (!role) {
    // Nếu không có vai trò được xác định, chuyển hướng hoặc trả về lỗi
    return res.status(403).json({ message: "Forbidden" });
  }
  if (role === "client" || role === "admin") {
    res.json({ role });
    return next();
  } else {
    // Nếu người dùng chưa đăng nhập, trả về một lỗi hoặc chuyển hướng đến trang đăng nhập
    return res.status(401).json({ message: "Unauthorized" });
    // Hoặc chuyển hướng đến trang đăng nhập
    // res.redirect('/login');
  }
};
exports.checkAdmin = (req, res, next) => {
  const role = req.session.role;
  if (!role) {
    // Nếu không có vai trò được xác định, chuyển hướng hoặc trả về lỗi
    return res.status(403).json({ message: "Forbidden" });
  }
  if (role === "admin") {
    return next();
  } else {
    // Nếu người dùng chưa đăng nhập, trả về một lỗi hoặc chuyển hướng đến trang đăng nhập
    return res.status(401).json({ message: "Unauthorized" });
    // Hoặc chuyển hướng đến trang đăng nhập
    // res.redirect('/login');
  }
};
exports.checkCounselor = (req, res, next) => {
  const role = req.session.role;
  if (!role) {
    // Nếu không có vai trò được xác định, chuyển hướng hoặc trả về lỗi
    return res.status(403).json({ message: "Forbidden" });
  }
  if (role === "counselor" || role === "admin") {
    return next();
  } else {
    // Nếu người dùng chưa đăng nhập, trả về một lỗi hoặc chuyển hướng đến trang đăng nhập
    return res.status(401).json({ message: "Unauthorized" });
    // Hoặc chuyển hướng đến trang đăng nhập
    // res.redirect('/login');
  }
};
