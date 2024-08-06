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
      // Console log the form values
      console.log("Form values:", values);

      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams({
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.username,
          email: values.email,
          password: values.password,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
        };

        const response = await fetch("http://localhost:9001/register", requestOptions);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        const data = JSON.parse(result);
        if (data.msg === "User already exists") {
          alert(data.msg);
        } else if (data.token) {
          router.push("/Users/Login");
          alert("Account created successfully");
         
        } else {
          alert("An error occurred. Please try again.");
        }
      } catch (err) {
        console.error("There was an error:", err);
        alert("An error occurred. Please try again later.");
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {['username', 'firstName', 'lastName', 'email', 'password'].map(field => (
            <div key={field} className="form-group">
              <input
                className={`form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  formik.touched[field] && formik.errors[field] ? "border-red-500" : "border-gray-300"
                }`}
                type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field]}
              />
              {formik.touched[field] && formik.errors[field] && (
                <div className="text-red-500 text-sm">{formik.errors[field]}</div>
              )}
            </div>
          ))}
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
            {formik.touched.terms && formik.errors.terms && (
              <div className="text-red-500 text-sm">{formik.errors.terms}</div>
            )}
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Already have an account? <span onClick={() => router.push('/Users/Login')} className="text-blue-500 cursor-pointer">Login here</span></p>
        </div>
      </div>
    </div>
  );
}
