import rootReducer from "./rootReducer"
const {configureStore} = require("@reduxjs/toolkit")



const store = configureStore({
    reducer : rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck : false
        })
    },
    devTools : true

})
export default store;