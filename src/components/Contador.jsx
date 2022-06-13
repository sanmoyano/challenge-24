import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Contador = ({ cantidad }) => {
    const [cantidadActual, setCantidadActual] = useState(cantidad);

    const add = () => {
        if (cantidadActual) {
            setCantidadActual(cantidadActual + 1);
        }
    };

    const remove = () => {
        if (cantidadActual > 1) {
            setCantidadActual(cantidadActual - 1);
        }
    };

    return (
        <Stack alignItems={"center"} direction={"row"} spacing={1}>
            <Button onClick={add}>+</Button>
            <Input value={cantidadActual} onChange={(e) => setCantidadActual(e.target.value)} />
            <Button onClick={remove}>-</Button>
        </Stack>
    );
};

export default Contador;
