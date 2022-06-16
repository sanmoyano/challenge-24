import { Button, Input, Stack } from "@chakra-ui/react";

const Contador = ({ cantidad, setCantidad }) => {
    const sumar = () => {
        setCantidad(Number(cantidad) + 1);
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <Stack alignItems={"center"} direction={"row"} spacing={1}>
            <Button onClick={sumar}>+</Button>
            <Input
                as="input"
                type={"number"}
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
            />
            <Button onClick={restar}>-</Button>
        </Stack>
    );
};

export default Contador;
