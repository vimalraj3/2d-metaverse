import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@metaverse/ui";
import api from "../../services/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.signin({ username, password });
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.userId);
      window.location.href = `/game?token=${response.token}`;
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to login");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Card className="w-full max-w-md bg-white/5 backdrop-blur-lg border-gray-700">
        <CardHeader>
          <h2 className="text-3xl font-bold text-white text-center">
            Welcome back
          </h2>
          <p className="text-gray-400 text-center mt-2">
            Enter your credentials to access your account
          </p>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 text-sm text-red-500 bg-red-500/10 rounded-md p-3">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Username
              </label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-800/50 border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800/50 border-gray-700 text-white"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
