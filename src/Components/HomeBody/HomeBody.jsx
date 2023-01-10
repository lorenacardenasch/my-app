import React, { useState } from 'react';
import "./Assets/styles.css";
// import product_dummy from './Assets/img/.jpeg'
import Axios from 'axios';
import { useEffect } from 'react';

const HomeBody = () => {

  const [itemsCategoria, setItemCategoria] = useState("");
  const [itemsCuentaCategoria, setItemCuentaCategoria] = useState("");


  useEffect(()=> {
    const getItemsCategoria = async ()=>{
      const url = 'http://localhost:3001/consultaCategorias';
      const result = await Axios.get(url)
      setItemCategoria(result.data.categorias) //guarda arreglo de categorias
      setItemCuentaCategoria(result.data.count_categorias)
    }
    getItemsCategoria()
  },[]);

  const [itemsProducto, setItemProducto] = useState("");
  const [itemsCuentaProducto, setItemCuentaProducto] = useState("");


  useEffect(()=> {
    const getItemsProducto = async ()=>{
      const url = 'http://localhost:3001/consultaProductos';
      const result = await Axios.get(url)
      setItemProducto(result.data.products) //guarda arreglo de productos
      setItemCuentaProducto(result.data.count_product)
    }
    getItemsProducto()
  },[]);

  const [itemsUsuario, setItemUsuario] = useState("");
  const [itemsCuentaUsuario, setItemCuentaUsuario] = useState("");


  useEffect(()=> {
    const getItemsUsuario = async ()=>{
      const url = 'http://localhost:3001/user/consultaUsuarios';
      const result = await Axios.get(url)
      setItemUsuario(result.data.users) //guarda arreglo de usuarios
      setItemCuentaUsuario(result.data.count_users)
    }
    getItemsUsuario()
  },[]);
  
      return (
    <div className='homeBody'>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>
       <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
              {/* <img className="img-profile rounded-circle" src="assets/images/dummy-avatar.jpg" width="60"> */}
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Cantidad de usuarios</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{itemsCuentaUsuario}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Cantidad de productos</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{itemsCuentaProducto}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de categorias
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{itemsCuentaCategoria}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user-check fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Ultimo usuario creado</h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                 {/*  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="assets/images/product_dummy.svg" alt="image dummy"> */}
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                <a target="_blank" rel="nofollow" href="/">View product detail</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Ultimo producto creado</h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                 {/*  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="assets/images/product_dummy.svg" alt="image dummy"> */}
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                <a target="_blank" rel="nofollow" href="/">View product detail</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categorias en la Base de datos</h6>
              </div>
              <div className="card-body">
                <div className="row">
              {itemsCategoria.map((itemCategorias)=>{
                    return(

                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">
                           {itemCategorias}
                          </div>
                        </div>
                      </div>

                    )
                })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Listado de productos</h6>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        Categoria 01
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                       Category 03
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        Category 03
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        Category 04
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <footer className="sticky-footer">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; Dashboard 2020</span>
        </div>
      </div>
    </footer>
  </div>
</div>
</div>
  )
}
export default HomeBody