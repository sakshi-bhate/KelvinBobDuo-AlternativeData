import React,{useState} from 'react'
import axios from 'axios'
import * as  yup from 'yup'
import {Formik} from 'formik'
import "./TrialForm.css"
import "./Login.css"


const BaseURL="http://127.0.0.1:8000/api/add/"

const NewValidationSchema=yup.object().shape({
    phone_no: yup.number().required().label("registered phone number").typeError('can only be a number'),
    pan_no: yup.string().required().label("pan-number"),
    udhyog_id: yup.number().required().label().typeError('can only be a number'),
    aadhar_no:yup.number().required().label().typeError('can only be a number'),
    ivrs_no:yup.string().required().label(),
    gst_no:yup.string().required().label(),
    upi_id:yup.string().required().label(),
})

// const HandlePost=(student,{resetForm})=>{
//     axios.post(`${BaseUrl}add/`,student).then(res=>{
//         if(res.status==200){
//             alert("added succesfuly")
//         }else{
//             Promise.reject()
//         }
//     }).catch((err)=>alert('something went wrong'))
// }

const HandlePost=(values)=>{
axios.post(BaseURL,values).then(res=>{
    if(res.status===200){
        alert("added succesfully")
    }else{
        console.log("rejected")
        Promise.reject()
    }
}).catch((err)=>alert('something went wrong'))
}

const TrialForm=()=>{
    const[data,Setdata]=useState([])
    return( <Formik initialValues={{phone_no:"", pan_no:"",udhyog_id:"",aadhar_no:"",ivrs_no:"",gst_no:"",upi_id:""}} validationSchema={NewValidationSchema} enableReinitialize onSubmit={HandlePost}>
        {({handleChange,handleSubmit,errors,touched,setFieldTouched})=>(
            <>
            <div className="page-wrapper p-t-130 p-b-100 font-poppins" style={{backgroundColor:'#000C22'}}> 
            {/* <img src={require('./assets/register.jpg') } className="Bg" style={{}}/> */}
            <div className="wrapper wrapper--w680">
            <div className="card card-4">
            <div className="card-body">
            <h2 className="title">Complete Profile</h2>
            <form>
                <div className="row row-space"  style={{width:'25rem'}}>
                <div className="col-2" style={{width:'10rem'}}>
                    <div className="input-group" style={{width:'15rem'}}>
                    <div class="form-group mb-3">
                        <label class="label" htmlFor='phone_no'>Phone Number<p style={{color:'#e4606d',display:'inline',fontSize:'1rem'}}>*</p></label>
                        <input type="text" className='form-control' id="phone_no" placeholder='Registered Contact Number' onChange={handleChange("phone_no")} onBlur={()=>setFieldTouched("phone_no")}/>
                    </div>
                    </div>
                    </div>
                    <div className="col-2" style={{width:'10rem'}}>
                <div className="input-group" style={{width:'15rem'}}>
                    <div class="form-group mb-3">
                    <label class="label" htmlFor='pan_no'>Pan Number<p style={{color:'#e4606d',display:'inline',fontSize:'1rem'}}>*</p></label>
                        <input type="text" className='form-control' id="pan_no" placeholder='Pan Number' onChange={handleChange("pan_no")} onBlur={()=>setFieldTouched("pan_no")}/>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row row-space"  style={{width:'25rem'}}>
               <div className="col-2" style={{width:'10rem'}} >
                    <div className="input-group" style={{width:'15rem'}}>
                    <div class="form-group mb-3">
                        <label class="label" htmlFor='udhyog_id'>udhyog Id<p style={{color:'#e4606d',display:'inline',fontSize:'1rem'}}>*</p></label>
                        <input type="text" className='form-control' id="udhyog_id" placeholder='MSME Registration ID' onChange={handleChange("udhyog_id")} onBlur={()=>setFieldTouched("udhyog_id")}/>
                    </div>
                    </div>
                </div>
                <div className="col-2" style={{width:'10rem'}}>
                    <div className="input-group" style={{width:'15rem'}}>
                       <div class="form-group mb-3">
                        <label class="label" htmlFor='aadhar_no'>Aadhaar card<p style={{color:'#e4606d',display:'inline',fontSize:'1rem'}}>*</p></label>
                        <input type="text" className='form-control' id="aadhar_no" placeholder='Aadhaar Number' onChange={handleChange("aadhar_no")} onBlur={()=>setFieldTouched("aadhar_no")}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row row-space" style={{width:'25rem'}}>
                <div className="col-2" style={{width:'10rem'}}>
                    <div className="input-group" style={{width:'15rem'}}>
                    <div class="form-group mb-3">
                        <label class="label" htmlFor='ivrs_no'>IVRS ID<p style={{color:'#e4606d',display:'inline',fontSize:'1rem'}}>*</p></label>
                        <input type="text" className='form-control' id="ivrs_no" placeholder='IVRS Number' onChange={handleChange("ivrs_no")} onBlur={()=>setFieldTouched("ivrs_no")}/>
                    </div>
                    </div>
                     <div className="input-group" style={{width:'15rem'}} >
                     <div class="form-group mb-3">
                     <label class="label" htmlFor='upi_id'>UPI ID<p style={{color:'#e4606d',display:'inline',fontSize:'1rem'}}>*</p></label>
                        <input type="text" className='form-control' id="upi_id" placeholder='UPI Id' onChange={handleChange("upi_id")} onBlur={()=>setFieldTouched("upi_id")}/>
                    </div>
                    </div>
                </div>
                <div className="col-2" style={{width:'10rem'}}>
                     <div className="input-group" style={{width:'15rem'}}>
                     <div class="form-group mb-3">
                    <label class="label" htmlFor='gst_no'>GST Number<p style={{color:'#e4606d',display:'inline',fontSize:'1rem'}}>*</p></label>
                        <input type="text" className='form-control' id="gst_no" placeholder='GST Number' onChange={handleChange("gst_no")} onBlur={()=>setFieldTouched("gst_no")}/>
                    </div>
                    </div>
                     <div className="input-group" style={{width:'15rem'}}>
                     <div class="form-group" style={{marginTop:'5rem', marginBottom:'-2rem',marginLeft:'5rem'}}>
                     <button type="submit" onClick={handleSubmit} className="form-control btn btn-primary rounded submit px-3">submit</button>
                      </div>
                    </div>
                </div>
                </div>
                   
                
               
            </form>
            </div>
            </div>
            </div>
            </div>
            </>
        )}

    </Formik>
    )
}
export default TrialForm