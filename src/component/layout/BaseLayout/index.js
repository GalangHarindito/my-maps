
import { useEffect } from "react";
import Header from "component/fragment/header";
import Footer from "component/fragment/footer";
import SideBar from "component/fragment/sidebar";

const PageBase = ({children}) => {

    useEffect(() => {
        const app = document.getElementById('root');
        app.className = 'pagebase';
      }, []);

    return(
        <div>
            <Header />
            <SideBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PageBase;