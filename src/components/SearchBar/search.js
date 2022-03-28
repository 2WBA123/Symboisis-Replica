import React from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function Search() {
  const navigate = useNavigate();
  const state1 = useSelector(state => state);
    console.log(state1)
  const schema = yup.object().shape({
    search: yup.string().required(),
  });

  return (
    <div class="w-full flex-shrink items-center justify-center">
      <Formik
        initialValues={{ search:''}}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          navigate('/searched',{state:{search:values.search}})
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div class="flex  rounded border-2 border-red-500">
              <input
                type="text"
                name="search"
                list='search'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.search}
                class="px-4 py-2 w-80 outline-none "
                placeholder="Search by category"
              />
              <datalist id="search">
                {
                  state1.Product.Categories.map((val)=>(
                    <option value={val.name} />
                  ))
                }
                
              </datalist>
              <button class="flex items-center justify-center px-4 border-l bg-white">
                <svg
                  class="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>

  );
}

export default Search;
