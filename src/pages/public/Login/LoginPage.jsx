import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const initialDatabaseName = state?.databaseName || "";
  const [databaseName, setDatabaseName] = useState(initialDatabaseName);
  

  useEffect(() => {
    if (initialDatabaseName) {
      setDatabaseName(initialDatabaseName);
    }
  }, [initialDatabaseName]);

  const handleLogin = async (data) => {
    const baseURL = "http://localhost:5000";
    const response = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.username,
        password: data.password,
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      setLoginError(result.message || "Login failed");
      return;
    }

    navigate("/web");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Image Container */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="images/LoginImage.png"
              alt="Login"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-800">
            <CardHeader className="space-y-2 text-center pb-6 border-b">
              <div className="w-full flex justify-center">
                <img
                  src="/images/resikel.png"
                  alt="Resikel Logo"
                  className="h-14 object-contain"
                />
              </div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Selamat Datang!
              </h1>
            </CardHeader>
            
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      {...register("username", {
                        required: "Username is required",
                      })}
                      className={`w-full ${
                        errors.username ? "border-red-500" : "border-gray-300"
                      } dark:border-gray-600 focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.username && (
                      <p className="text-sm text-red-500">
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className={`w-full ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } dark:border-gray-600 focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
                >
                  Login
                </Button>
              </form>
              
              {loginError && (
                <p className="text-red-500 text-sm text-center mt-4">
                  {loginError}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;