import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                
                    
                        {/* A publikus tartalom linkje */}
                        <Link to="/"></Link>
                  


                
            </nav>
            <article>
                {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
}

export default Layout;