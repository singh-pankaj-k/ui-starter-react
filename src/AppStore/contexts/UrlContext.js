import PropTypes from "prop-types";
import { createContext } from "react";
import { getSchemeDomainPort } from "../services";


const UrlContext = createContext( null );

// Image api
const commonPartImage = "/images";
const localImagePort = "35000";

export const getUrl = () => ( {
    imageAPI: () => ( getSchemeDomainPort( localImagePort ) + commonPartImage ),
} );

export const UrlProvider = ( { children } ) => {

    return (
        <UrlContext.Provider
            value={ {
                url: getUrl()
            } }
        >
            { children }
        </UrlContext.Provider>
    );
};

UrlProvider.propTypes = {
    children: PropTypes.node
};

export default UrlContext;
