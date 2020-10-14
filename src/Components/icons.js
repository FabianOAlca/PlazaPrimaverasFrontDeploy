import React from 'react';

function icons(props){

  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center deep orange-text text-darken-4"><i className="material-icons">local_grocery_store</i></h2>
              <h5 className="center">Productos locales y frescos</h5>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center deep orange-text text-darken-4"><i className="material-icons">local_pharmacy</i></h2>
              <h5 className="center">Consultorios y medicamentos</h5>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center deep orange-text text-darken-4"><i className="material-icons">local_laundry_service</i></h2>
              <h5 className="center">Limpieza de ropa y accesorios</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default icons;