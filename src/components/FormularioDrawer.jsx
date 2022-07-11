import { Button, FormControl, Input, Stack, useToast } from "@chakra-ui/react";

import Contador from "./Contador";

const FormularioDrawer = ({ ...props }) => {
    const item = {
        id: Math.floor(Math.random() * 100),
        nombre: props.input,
        destinatario: props.destinatario,
        cantidad: props.cantidad,
        img: props.img,
    };

    const toast = useToast();

    const addItem = (e) => {
        e.preventDefault();
        if (props.input === "") {
            toast({
                title: "Error",
                description: "Ningun item puede estar vacio",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } else if (props.arrayItems.find((item) => item.nombre === props.input)) {
            toast({
                title: "Error",
                description: "El item ya existe",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } else {
            toast({ title: "Item agregado", status: "success", duration: 2000, isClosable: true });
            props.setArrayItems([...props.arrayItems, item]);
            props.setInput("");
            props.setDestinatario("");
            props.setCantidad(1);
            props.setImg("");
        }
    };

    return (
        <FormControl as="form" onSubmit={addItem}>
            <Stack>
                <Input
                    placeholder="Agregar item..."
                    value={props.input}
                    onChange={(e) => props.setInput(e.target.value)}
                />
                <Input
                    placeholder="Destinatario"
                    value={props.destinatario}
                    onChange={(e) => props.setDestinatario(e.target.value)}
                />
                <Input
                    placeholder="Agregar link imagen..."
                    value={props.img}
                    onChange={(e) => props.setImg(e.target.value)}
                />
                <Contador cantidad={props.cantidad} setCantidad={props.setCantidad} />
                <Button onClick={addItem}>Add</Button>
            </Stack>
        </FormControl>
    );
};

export default FormularioDrawer;
