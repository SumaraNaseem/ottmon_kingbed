"use client";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form values:", values);  // Log input values to the console

      try {
        const myHeaders = new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        });

        const urlencoded = new URLSearchParams({
          email: values.email,
          password: values.password,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
        };

        const response = await fetch("http://localhost:9001/auth", requestOptions);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        const data = JSON.parse(result);
        const { token, email } = data || {};

        if (token) {
          if (email === "buttehtesham86@gmail.com") {
            router.push("/admin");
          } else {
            router.push("/NewPaymentCardSetup");
          }
          localStorage.setItem("token", token);
        } else {
          alert("Invalid credentials! Please try again.");
        }
        router.push("/NewPaymentCardSetup");
      } catch (error) {
        console.error("There was an error:", error);
        alert("An error occurred. Please try again later.");
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="form-group">
            <input
              className={`form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <input
              className={`form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
              }`}
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>
          <button
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            Don&apos;t have an account?{" "}
            <span
              onClick={() => router.push(`/Users/SignUp`)}
              className="text-blue-500 cursor-pointer"
            >
              Create an Account
            </span>
          </p>
          <p className="mt-2">
            Forgot password?{" "}
            <a href="/forgottenpassword" className="text-blue-500">
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
