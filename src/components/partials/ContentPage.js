import React from 'react';
import { Switch,HashRouter, Route, withRouter } from "react-router-dom";
import FormPengajuan from '../cuti/FormPengajuan';
import ListPengajuan from '../cuti/ListPengajuan';


function ContentPage() {
  return (
    <div class="content-page">
    <div class="content">
        <div class="container">
                <Route exact path="/list" component={ListPengajuan} />
                <Route exact path="/cuti" component={FormPengajuan} />
        </div> 
    </div> 

        <footer class="footer text-right">
            © 2016. All rights reserved.
        </footer>

    </div>
    );
}

export default ContentPage;