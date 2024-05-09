import Link from "next/link"

const RestaurantHeader = () => {
    return (
        <div className="restHeader">
            <div className="logo">
                <Link href="/">
                    <img src="/assets/images/restaurantLogo.jpg" alt="" />
                </Link>
            </div>
            <div className="navlinks">
                <Link href="/">Home</Link>
                <Link href="/restaurants/login">Login</Link>
                <Link href="/restaurants/signup">Register</Link>
                <Link href="/logout">Logout</Link>
            </div>
        </div>
    )
}

export default RestaurantHeader
