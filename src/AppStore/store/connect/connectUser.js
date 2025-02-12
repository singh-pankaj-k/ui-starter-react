import { connect } from "react-redux";
import { saveAddressAsync } from "../reducers/userReducers";
import { flatAuthData } from "../../utils";

const saveUserAddress = dispatch => ( async ( reqObj ) => dispatch( saveAddressAsync( {
    reqObj
} ) ) );

function ConnectUser( Element ) {

    const mapStateToProps = state => {

        const { jwt, displayName } = flatAuthData( state?.auth );

        return {
            jwt,
            displayName
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            saveUserAddress: saveUserAddress( dispatch )
        };
    };

    return connect( mapStateToProps, mapDispatchToProps )( Element );
}

export default ConnectUser;
