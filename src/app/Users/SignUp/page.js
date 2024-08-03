"use client";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUp() {
  const router = useRouter();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
    terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer YOUR_TOKEN_HERE");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("firstName", values.firstName);
        urlencoded.append("lastName", values.lastName);
        urlencoded.append("username", values.username);
        urlencoded.append("email", values.email);
        urlencoded.append("password", values.password);

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
          redirect: "follow",
        };

        fetch("https://ottomonukbackup1.vercel.app/register", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            const data = JSON.parse(result);
            if (data.msg === "User already exists") {
              alert(data.msg);
            } else if (data.token) {
              router.push("/Users/Login");
              alert("Account created successfully");
            } else {
              alert("Invalid!");
            }
          })
          .catch((error) => console.log("error", error));
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="form-group">
            <input
              className={`form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.touched.username && formik.errors.username ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="username"
              placeholder="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              className={`form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              className={`form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            ) : null}
          </div>
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
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
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
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="form-check flex items-center">
            <input
              className="form-check-input mr-2"
              type="checkbox"
              name="terms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.terms}
            />
            <label className="form-check-label" htmlFor="terms">
              I accept the <span className="text-blue-500">Terms of Use</span> &amp; <span className="text-blue-500">Privacy Policy</span>
            </label>
            {formik.touched.terms && formik.errors.terms ? (
              <div className="text-red-500 text-sm">{formik.errors.terms}</div>
            ) : null}
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
          <div className="message text-red-500">
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm">{formik.errors.message}</div>
            ) : null}
          </div>
        </form>
        <div className="text-center mt-4">
          <p>Already have an account? <span 
            onClick={()=>{
              router.push('/Users/Login')
            }} className="text-blue-500 cursor-pointer">Login here</span></p>
        </div>
      </div>
    </div>
  );
}
