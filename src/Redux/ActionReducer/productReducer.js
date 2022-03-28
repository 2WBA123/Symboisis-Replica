import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BUY_PRODUCT } from '../../Services/services';
toast.configure()

// export const createUserAsync = createAsyncThunk(
// 	'employee/createUserAsync',
// 	async (payload) => {
//         try {
//             const res = await CREATE_USER(payload);
//             console.log(res);
// 			toast.success('User Created Successfully', { theme: "colored" })
//             return res
//         } catch (error) {
//             console.log(error.message)
//         }
// 	}
// );

export const buyProductAsync = createAsyncThunk(
	'products/buyProductAsync',
	async (payload) => {
        try {
            const res = await BUY_PRODUCT(payload);
            console.log(res);
			
			toast.success('Product Buy Successfully', { theme: "colored" })
            
            return res
			
        } catch (error) {
            console.log(error.message)
        }
	}
);

const d= new Date();
const date=d.toLocaleString();
export const productSlice = createSlice({
	name: 'products',
	initialState:{
	   Products:[],
	   Categories:[{name:"vivo",date:date},{name:"Techno",date:date},{name:"Samsung",date:date},
	               {name:"Apple",date:date},{name:"Nokia",date:date},{name:"Hawie",date:date}],
	   Users:[],
	   Cart:[]
	},
	reducers: {
		addProduct: (state, action) => {
			console.log("In Redux Reducer",state.Products)
			const product = {
				name:action.payload.name,
				price: action.payload.price,
				quantity:action.payload.quantity,
				category:action.payload.category,
				image:action.payload.imageUrl,
				detail:action.payload.detail
			};
			toast.success('Product Created Successfully', { theme: "colored" })
			state.Products.push(product);
			console.log("In Redux Reducer",state.Products)
			
		},
		deleteProduct: (state, action) => {
			console.log(state.Products)
			console.log("In Redux Reducer",action.payload)
		    state.Products.splice(action.payload,1);
			toast.success('Product deleted Successfully', { theme: "colored" })
			console.log(state.Products)	
		},
		updateProduct: (state, action) => {
			console.log("In Redux Reducer",action.payload)
			state.Products[action.payload.index].name=action.payload.name
			state.Products[action.payload.index].image=action.payload.imageUrl
			state.Products[action.payload.index].price=action.payload.price
			state.Products[action.payload.index].category=action.payload.category
			state.Products[action.payload.index].quantity=action.payload.quantity
			state.Products[action.payload.index].detail=action.payload.detail
			toast.success('Product Updated Successfully', { theme: "colored" })
		},
		addCategory: (state, action) => {
			console.log("In Redux Reducer",state.Products)
			const category = {
				name:action.payload.name,
				date: action.payload.date,
			};
			toast.success('Category Created Successfully', { theme: "colored" })
			state.Categories.push(category);
			console.log("In Redux Reducer",state.Products)
		},
		deleteCategory: (state, action) => {
			console.log(state.Products)
			console.log("In Redux Reducer",action.payload)
		    state.Categories.splice(action.payload,1);
			toast.success('Category deleted Successfully', { theme: "colored" })
			console.log(state.Products)	
		},
		updateCategory: (state, action) => {
			console.log("In Redux Reducer",action.payload)
			state.Categories[action.payload.index].name=action.payload.name
			state.Categories[action.payload.index].date=action.payload.date
			toast.success('Category Updated Successfully', { theme: "colored" })
		},
		addUser: (state, action) => {
			console.log("In Redux Reducer",state.Products)
			const users = {
				email:action.payload.email,
				password: action.payload.password,
			};
			toast.success('Category Created Successfully', { theme: "colored" })
			state.Users.push(users);
			console.log("In Redux Reducer",state.Products)
		},
		deleteUser: (state, action) => {
			console.log(state.Products)
			console.log("In Redux Reducer",action.payload)
		    state.Users.splice(action.payload,1);
			toast.success('Category deleted Successfully', { theme: "colored" })
			console.log(state.Products)	
		},
		addToCart: (state, action) => {
			console.log("In Redux Reducer",action.payload)
			toast.success('Product Added to Cart', { theme: "colored" })
			state.Cart.push(action.payload);
		},
	},
    extraReducers:{
        [buyProductAsync.fulfilled]: (state, action) => {
			console.log(action.payload)
			state=action.payload
		},
    }
});

export const { addProduct,deleteProduct,updateProduct,addCategory,deleteCategory,updateCategory,addUser,deleteUser,addToCart} = productSlice.actions;

export default productSlice.reducer;