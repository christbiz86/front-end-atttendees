import React from 'react';

export default function Registrasi(){
    return(
        <div>
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <div className="card-box">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-8">
                        <h1><b>Registration Form</b></h1>
                        <p class="m-b-30"/>
                    </div>
                    
                    <form className="form-horizontal group-border-dashed" action="#">
                        <div className="form-group">
							<label className="col-sm-3 control-label">Company Name</label>
						    <div className="col-sm-6">
								<input type="text" className="form-control" required placeholder="Type something" />
							</div>
						</div>

                        <div className="form-group">
							<label className="col-sm-3 control-label">Jatah Cuti</label>
						    <div class="col-sm-3">
								<input data-parsley-type="number" type="text" class="form-control" required placeholder="Enter only numbers" />
							</div>
						</div>

                        <div className="form-group">
							<label className="col-sm-3 control-label">Toleransi Keterlambatan</label>
						    <div class="col-sm-3">
								<input data-parsley-type="number" type="text" class="form-control" required placeholder="Enter only numbers" />
							</div>
						</div>

                        <div className="form-group">
							<label className="col-sm-3 control-label">Owner Name</label>
						    <div className="col-sm-6">
								<input type="text" className="form-control" required placeholder="Type something" />
							</div>
						</div>

                        <div className="form-group">
							<label className="col-sm-3 control-label">Alamat</label>
						    <div className="col-sm-6">
								<input type="text" className="form-control" required placeholder="Type something" />
							</div>
						</div>

                        <div className="form-group">
							<label className="col-sm-3 control-label">Tanggal Lahir</label>
						    <div className="col-sm-6">
			                    <div className="input-group">
									<input type="text" className="form-control" placeholder="mm/dd/yyyy" id="datepicker-autoclose"/>
									<span className="input-group-addon bg-custom b-0 text-white"><i className="icon-calender"></i></span>
								</div>
			                </div>
						</div>

                        <div className="form-group">
							<label className="col-sm-3 control-label">Telepon</label>
						    <div class="col-sm-3">
								<input data-parsley-type="number" type="text" class="form-control" required placeholder="Enter only numbers" />
							</div>
						</div>

                        <div className="form-group">
							<label className="col-sm-3 control-label">E-Mail</label>
						    <div className="col-sm-6">
								<input type="email" className="form-control" required parsley-type="email" placeholder="Enter a valid e-mail" />
							</div>
						</div>

                        <div className="form-group">
							<label className="col-sm-3 control-label">Foto</label>
						    <div className="col-sm-6">
								<input type="file" className="filestyle" data-buttonname="btn-primary"/>
							</div>
						</div>
                    </form>
                </div>
            </div>
        </div>
        
    );
}