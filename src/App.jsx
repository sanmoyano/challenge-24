import Layout from "./layout/Layout";
import DataProvider from "./context/DataProvider";
const App = () => {
    return (
        <DataProvider>
            <Layout />
        </DataProvider>
    );
};

export default App;
