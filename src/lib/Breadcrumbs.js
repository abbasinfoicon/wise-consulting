import React from 'react'

const Breadcrumbs = ( props ) => {
  return (
    <div className={ 'rs-breadcrumbs ' + props.classbg } style={{ backgroundImage: `url(${props.bg_img})` }}>
        <div className="container">
            <div className="content-part text-center">
                <h1 className="breadcrumbs-title white-color mb-0">{ props.title }</h1>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumbs