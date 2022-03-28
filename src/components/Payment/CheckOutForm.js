import { useElements, useStripe,CardNumberElement,
    CardCvcElement,
    CardExpiryElement,} from "@stripe/react-stripe-js";
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import Header from '../ProductHeader/Header'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";
import { buyProductAsync } from "../../Redux/ActionReducer/productReducer";
toast.configure()

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
//   hidePostalCode: true,
  
  style: {
    base: {
      iconColor: "rgb(240, 57, 122)",
      color: "rgb(240, 57, 122)",
      fontSize: "16px",
      fontFamily: '"Open Sans", sans-serif',
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
};

const CheckOutForm=({product,TAmount})=>{
  
    console.log(product)
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        //name:yup.string().required('name is rquired').min(1),
      });
    
      const paymentHandler = async () => {
          console.log("element",elements.getElement(CardNumberElement))
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardNumberElement),
        });
    
        if (!error) {
          console.log("Stripe 23 | token generated!", paymentMethod);
            const { id } = paymentMethod;
            if(TAmount)
            {

              const data ={
                amount: TAmount,
                id: id,
              }
            dispatch(buyProductAsync(data)).then((res)=>console.log(res))
            }else{
              const data ={
                amount: product.price,
                id: id,
              }
            dispatch(buyProductAsync(data)).then((res)=>console.log(res))
            }
            
            navigate('/')
        } else {
          console.log(error.message);
          toast.error(error.message, { theme: "colored" })
        }
      };

  return(
      <>
      <Header compo={"Payment"}/>
      <div className="bg-white h-screen flex flex-col justify-center sm:w-44 lg:w-full w-full items-center bg-opacity-30 px-10">
    <div className="grid"><p className=" text-red-400 font-bold text-2xl " >Make Payment</p></div>
    <Formik 
        initialValues={{}}
        validationSchema={schema}
        onSubmit={(values, actions) => {
            console.log("wahab onsubmit")
            // const data = {
            //    name:values.name,
            //    imageUrl:values.image,
            //    price:values.price,
            //    detail:values.detail,
            //    quantity:values.quantity
            // }
            //console.log(formdata)
            //dispatch(createProductAsync(formdata)).then((value)=>console.log(value));
            // Signup(data)
            paymentHandler();
            actions.resetForm();
        }}

    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
            /* and other goodies */
        }) => (
            <form className="bg-gray-100  shadow rounded px-4 pt-6 pb-8  my-10 sm:w-40 lg:w-1/2 border-2 border-red-500  " enctype="multipart/form-data" onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="quantity">
                        Card Number<span className="text-red-500"> *</span>
                    </label>
                    <CardNumberElement />
                    <h6 className="text-red-600 text-sm font-bold">{errors.quantity && touched.quantity && errors.quantity}</h6>
                </div>
                <div className="mb-4 grid grid-flow-col w-full">
                    <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="quantity">
                        Card Expiry<span className="text-red-500"> *</span>
                    </label>
                    <CardExpiryElement/>
                    <h6 className="text-red-600 text-sm font-bold">{errors.quantity && touched.quantity && errors.quantity}</h6>
                    </div>
                    <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="quantity">
                        CVC<span className="text-red-500"> *</span>
                    </label>
                    <CardCvcElement/>
                    <h6 className="text-red-600 text-sm font-bold">{errors.quantity && touched.quantity && errors.quantity}</h6>
                    </div>
                    
                </div>
                      {/* <CardElement  options={CARD_ELEMENT_OPTIONS} /> */}
                <div className="flex items-center justify-center">
                    <button className="bg-green-400 hover:bg-yellow-500 text-white font-bold py-2 px-4
                   rounded focus:outline-none focus:shadow-outline" type="submit">
                        Done
                    </button>
                </div>
            </form>
        )}
    </Formik>
</div>
      </>
    
       );
}
export default CheckOutForm;