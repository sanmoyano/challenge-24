import { createContext, useState, UseEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export const DataContext = createContext();
const { Provider } = DataContext;

const DataProvider = ({ children }) => {
    //ESTADOS DE FEEDBACK
    const toast = useToast();

    //ESTADOS DE LA APLICACION
    const [arrayItems, setArrayItems] = useState([]);
    const [input, setInput] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [image, setImage] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [openEdit, setOpenEdit] = useState(false);

    //OBJETO
    const item = {
        id: Math.floor(Math.random() * 100),
        name: input,
        cantidad: cantidad,
        destinatario: destinatario,
        image: image,
    };

    //LOCALSTORAGE
    useEffect(() => {
        const datos = localStorage.getItem("arrayItems");

        if (datos) {
            setArrayItems(JSON.parse(datos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("arrayItems", JSON.stringify(arrayItems));
    }, [arrayItems]);

    //FUNCIONES
    const addItem = (e) => {
        e.preventDefault();
        if (input === "") {
            toast({
                title: "Error",
                description: "El nombre del item no puede estar vacio",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } else if (arrayItems.find((item) => item.name === input)) {
            toast({
                title: "Advertencia",
                description: "El item ya existe",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
        } else {
            setArrayItems([...arrayItems, item]);
            setInput("");
            setCantidad(1);
            setImage("");
            setDestinatario("");
        }
    };

    const editItem = (id) => {
        const item = arrayItems.find((item) => item.id === id);

        setInput(item.name);
        setCantidad(item.cantidad);
        setImage(item.image);
        setDestinatario(item.destinatario);
    };

    const drawerEdit = () => {
        setOpenEdit(!openEdit);
    };

    const contextValue = {
        arrayItems,
        setArrayItems,
        input,
        setInput,
        cantidad,
        setCantidad,
        image,
        setImage,
        destinatario,
        setDestinatario,
        addItem,
        drawerEdit,
        openEdit,
        editItem,
    };

    return <Provider value={contextValue}>{children}</Provider>;
};

export default DataProvider;
