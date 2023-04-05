import Container from "../container/container";
import Logo from "./logo";
import Search from "./search";
import UserMenu from "./user-menu";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm py-4 border-b-[1px]">
            <Container>
                <div className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0">
                    <Logo />
                    <Search />
                    <UserMenu />
                </div>
            </Container>
        </div>
    )
}
export default Navbar;

