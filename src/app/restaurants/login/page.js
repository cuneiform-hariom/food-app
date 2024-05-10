"use client"
import { restaurantLogin } from '@/redux/apis/restaurantapi';
import { useFormik } from 'formik'
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function RestaurantLogin() {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const initialValues = {
    email: "",
    password: ""
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = {
        email: values.email,
        password: values.password,
      }
      const res = await dispatch(restaurantLogin(data))
      console.log('res: ', res);
    }
  })

  const showHidePassword = () => {
    setShowPassword(!showPassword);
  }

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
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              autoComplete='off'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
              className="material-symbols-outlined eyeIcon"
              onClick={showHidePassword}
              style={{ opacity: "0.5" }}
            >
              {
                showPassword ? "visibility" : "visibility_off"
              }
            </span>
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
