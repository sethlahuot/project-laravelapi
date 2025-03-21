import React from "react";
import {Link} from 'react-router-dom';

const footer = () => {
    return (
        <div>
            <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Copyright &copy; Your Website 2023</div>
                        <div>
                            <Link to="#" className="text-decoration-none">Privacy Policy</Link>
                            &middot;
                            <Link to="#" className="text-decoration-none">Terms &amp; Conditions</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default footer;