import { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { useCartContext } from "../../context/CartContext";

export default function Login() {
  const { handleLogin } = useCartContext();

  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Container>
        <div className="flex flex-col gap-10 bg-slate-200 p-10 max-w-[570px] mx-auto">
          <h1 className="text-[20px] font-bold text-center">خوش آمدید</h1>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              value={user.username}
              placeholder="نام کاربری"
              className="p-2 rounded text-right"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="رمز عبور"
              className="p-2 rounded text-right"
              onChange={handleChange}
            />
          </div>
          <Button
            variant="primary"
            className="hover:opacity-80 h-12"
            onClick={() => handleLogin(user.username, user.password)}
          >
            ورود
          </Button>
        </div>
      </Container>
    </div>
  );
}
