export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToErrorPage = (navigate) => {
    navigate("/error")
}

export const goToProfilePage = (navigate) => {
    navigate("/profile")
}

export const goToProductsPage = (navigate, id) => {
    navigate(`/products/${id}`)
}