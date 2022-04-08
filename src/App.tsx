import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import axios from 'axios';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WebsiteLayout from './pages/layouts/WebsiteLayout';

import AdminLayout from './pages/layouts/AdminLayout';
import ManagerProduct from './pages/ManagerProduct';
import ProductAdd from './pages/ProductAdd';
import { add, list, read, remove , update } from './api/product';
import { ProductType } from './types/product';
import ProductEdit from './pages/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import Signin from './pages/Singin';
import { CateType } from './types/category';
import ManagerCategory from './pages/Category/ManagerCategory';
import { addCate, listCate, removeCate, updateCate } from './api/category';
import CategoryAdd from './pages/Category/CategoryAdd';
import CategoryEdit from './pages/Category/CategoryEdit';
import { FormValues } from './types/user';
import { listUser, removeUser } from './api/auth';
import ManagerAuth from './pages/Auth/ManagerAuth';
import Product from './components/Product';
import ProductDetail from './pages/productDetail';




function App() {
  // const [count, setCount] = useState(0)
  const [products, setProduct] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);
  

  //Call API product
  useEffect(() => { 
    const getProducts = async () => {
      const { data } = await  list();
      setProduct(data);
    }
    getProducts();
  },[])
  const removeItem = async (id: number)=>{
      // Xóa trên ADI
      // const { data } = await remove(id);
      //reRender
      remove(id);
      setProduct(products.filter(item => item._id !== id));
  }
  const onHandleAdd = async (product: ProductType)=> {
    //call api
    const { data } = await add(product);
    setProduct([...products,data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    // console.log(product);
  const { data } = await update(product)
  setProduct(products.map(item => item._id == data._id ? data : item));
  }
  const ListProductDetail = async (id: number)=>{
    const { data } = await read(id)    
    setProduct(data);
    console.log(data);
    
  }

  const [categorys, setCategory] = useState<CateType[]>([])
  //Call API category
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listCate();
      setCategory(data);
    }
    getCategory();
  },[])
  const Cateremove = async (id: number)=>{
    // Xóa trên ADI
    // const { data } = await remove(id);
    //reRender
    removeCate(id);
    
    setCategory(categorys.filter(item => item._id !== id));
    
    
  }
  const CateonHandleAdd = async (category: CateType)=> {
    //call api
    const { data } = await addCate(category);
    setCategory([...categorys,data])
  }
  const CateonHandleUpdate = async (category: CateType) => {
    // console.log(category);
  const { data } = await updateCate(category)
  
  
  setCategory(categorys.map(item => item._id == data._id ? data : item));
  
  }

  const [auths, setAuth] = useState<FormValues[]>([]);
  //Call API category
  useEffect(() => {
    const getAuth = async () => {
      const { data } = await listUser();
      setAuth(data);
    }
    getAuth();
  },[])
  const removeAuth= async (id: number)=>{
    // Xóa trên ADI
    // const { data } = await remove(id);
    //reRender
    removeUser(id);
    console.log(id);
    
    setAuth(auths.filter(item => item._id !== id));
    
    
  }
  
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<WebsiteLayout/>}>
          <Route index element={<Home data={products}/>} />
          <Route path="product">
                  <Route index  element={<Product data={products}/>} />
                  <Route path=":id" element={<ProductDetail data={products} onListDetail={ListProductDetail}/>} />
              </Route>
          {/* <Route path="login" element={ <h1>LoginPage</h1> } /> */}   
              <Route path="signup" element= {<Signup/>}/>
          <Route path="signin" element= {<Signin/>}/>  
        </Route>
    
          

        <Route path="admin" element={<AdminLayout/>}> 
          <Route index element={<Navigate to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" >
                    <Route index  element={<ManagerProduct data={products} onRemove={removeItem}/>}/>
                    <Route path="add" element={<ProductAdd  onAdd={onHandleAdd}/>} />
                    <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
          </Route> 
          <Route path="category" >
                    <Route index  element={<ManagerCategory data={categorys} onRemove={Cateremove}/>}/>
                    <Route path="add" element={<CategoryAdd  onAdd={CateonHandleAdd}/>} />
                    <Route path=":id/edit" element={<CategoryEdit onUpdate={CateonHandleUpdate}/>} />
          </Route> 

          <Route path="auth" element={<ManagerAuth data={auths} onRemove={removeAuth}/>} />
        </Route>  
    </Routes>
    </div>
    

  )
}

export default App


