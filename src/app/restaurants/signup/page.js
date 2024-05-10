"use client"
import { restaurantRegister } from '@/redux/apis/restaurantapi';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function RestaurantSignUp() {

  const [showPassword, setShowPassword] = useState(false)
  const [showCnfPassword, setShowCnfPassword] = useState(false)

  const dispatch = useDispatch()

  const initialValues = {
    restaurantName: "",
    mobile: "",
    city: "",
    address: "",
    email: "",
    password: "",
    c_password: "",
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = {
        restaurantName: values.restaurantName,
        mobile: values.mobile,
        city: values.city,
        address: values.address,
        email: values.email,
        password: values.password,
      }
      const res = dispatch(restaurantRegister(data))
      console.log('res: ', res);
    }
  })

  const showHidePassword = () => {
    setShowPassword(!showPassword);
  }

  const showHideCnfPassword = () => {
    setShowCnfPassword(!showCnfPassword);
  }

  return (
    <div className="form-page">
      <h2 className='tcenter'>Restaurant Register</h2>
      <div className='loginform'>
        <form onSubmit={formik.handleSubmit}>
          <div className="inp-box">
            <label htmlFor="restaurantName">Restaurant Name</label>
            <input
              type="text"
              name="restaurantName"
              id="restaurantName"
              value={formik.values.restaurantName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="inp-box">
            <label htmlFor="mobile">Contact Number</label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
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
          <div className="inp-box">
            <label htmlFor="c_password">Confirm Password</label>
            <input
              type={showCnfPassword ? "text" : "password"}
              name="c_password"
              id="c_password"
              value={formik.values.c_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete='off'
            />
            <span
              className="material-symbols-outlined eyeIcon"
              onClick={showHideCnfPassword}
              style={{ opacity: "0.5" }}
            >
              {
                showCnfPassword ? "visibility" : "visibility_off"
              }
            </span>
          </div>
          <div className="inp-box">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="inp-box">
            <label htmlFor="address">Full Address</label>
            <textarea
              name="address"
              id="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={3}
            >

            </textarea>
          </div>

          <div className="submit-box">
            <button type="submit" className='sub-btn'>Register</button>
          </div>
        </form>

      </div>
      <p className="tcenter">Already have an account? <Link href="/restaurants/login">Login here!</Link> </p>
    </div>
  )
}
