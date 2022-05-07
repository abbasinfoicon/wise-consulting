import React from 'react'

const Modul = () => {
  return (
    <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex="-1">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span className="flaticon-cross"></span>
        </button>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="search-block clearfix">
                    <form>
                        <div className="form-group">
                            <input className="form-control" placeholder="Search Here..." type="text" required=""/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modul