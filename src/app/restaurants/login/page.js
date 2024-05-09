"use client"
import { useFormik } from 'formik'
import Link from 'next/link';

export default function RestaurantLogin() {
  const initialValues = {
    email: "",
    password: ""
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log('values: ', values);
    }
  })

  return (
    <div className="form-page">
      <h2 className='tcenter'>Restaurant Login</h2>
      <div className='loginform'>
        <form onSubmit={formik.handleSubmit}>
          <div className="inp-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="inp-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="submit-box">
            <button type="submit" className='sub-btn'>Login</button>
          </div>
        </form>

      </div>
      <p className="tcenter">Don't hane an account? <Link href="/restaurants/signup">Sign Up here!</Link> </p>
    </div>
  )
}
