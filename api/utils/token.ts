import jwt from "jsonwebtoken";

const SECRET_KEY = "testing-secret";

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    throw new Error("Invalid token");
  }
};

export const generateToken = (id: number) => {
  return jwt.sign({ id }, SECRET_KEY, { expiresIn: "1h" });
};
