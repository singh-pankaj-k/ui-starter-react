import PropTypes from "prop-types";
import { VisitorProvider } from "./VisitorContext";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { ItemProvider } from "./ItemContext";
import { ItemsProvider } from "./ItemsContext";
import { OrderProvider } from "./OrderContext";
import { OrdersProvider } from "./OrdersContext";
import { SearchProvider } from "./SearchContext";


export const DataContextProvider = ( { children } ) => {

    return (
        <>
            <VisitorProvider>
                <SearchProvider>
                    <CartProvider>
                        <AuthProvider>
                            <UserProvider>
                                <ItemProvider>
                                    <ItemsProvider>
                                        <OrdersProvider>
                                            <OrderProvider>
                                                { children }
                                            </OrderProvider>
                                        </OrdersProvider>
                                    </ItemsProvider>
                                </ItemProvider>
                            </UserProvider>
                        </AuthProvider>
                    </CartProvider>
                </SearchProvider>
            </VisitorProvider>
        </>
    );
};

DataContextProvider.propTypes = {
    children: PropTypes.node
};

export default DataContextProvider;

export * from "./UrlContext";