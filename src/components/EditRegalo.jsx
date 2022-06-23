import { Button, Stack, Text } from "@chakra-ui/react";

const EditRegalo = ({ name, destinatario, cantidad, img }) => {
    return (
        <Stack bgColor={"red.900"} p={6} position={"relative"}>
            <Text>{name}</Text>
            <Text>{destinatario}</Text>
            <Text>{cantidad}</Text>
            <Text>{img}</Text>
            <Button>Guardar</Button>
            <Button>Cancelar</Button>
        </Stack>
    );
};

export default EditRegalo;
