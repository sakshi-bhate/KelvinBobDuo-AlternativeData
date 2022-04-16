import React from 'react'
import * as Yup from 'yup'
import{Formik} from 'formik'
import axios from 'axios'

const BaseURL="http://127.0.0.1:8000/api/"

const NewValidationSchema=Yup.object().shape({
    name:Yup.string().required().label("Name"),
    phone:Yup.number().required().min(10).label("Phone"),
    email:Yup.string().email().required().label("Email"),
    school:Yup.string().label("School"),
    city:Yup.string().required().label("City"),
    state:Yup.string().required().label("State")
})

