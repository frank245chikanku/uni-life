import { useRecoilValue } from "recoil";
import Navbar from "../components/global/Navbar";
import Categories from "../components/home/Categories";
import { isAuthenticatedAtom } from "../recoil/atom";
import Footer from "../components/global/Footer";

const Classifications = () => {
    const auth = useRecoilValue(isAuthenticatedAtom)


    return (
        <div>
            <Navbar />
            {auth && <Categories />}
            <Footer />
        </div>
    )
}

export default Classifications