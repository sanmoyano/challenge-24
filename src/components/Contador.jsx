import { Button, Input, Stack } from "@chakra-ui/react";

const Contador = ({ cantidad, setCantidad }) => {
    const sumar = () => {
        setCantidad(Number(cantidad) + 1);
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(Number(cantidad) - 1);
        }
    };

    return (
        <Stack direction={"row"} justifyContent={"space-between"}>
            <Button onClick={sumar}>+</Button>
            <Input
                type="number"
                value={cantidad}
                width="60px"
                onChange={(e) => setCantidad(e.target.value)}
            />
            <Button onClick={restar}>-</Button>
        </Stack>
    );
};

export default Contador;
