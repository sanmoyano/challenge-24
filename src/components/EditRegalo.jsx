import { Button, Input, Stack } from "@chakra-ui/react";
import { useContext } from "react";

import { DataContext } from "../context/DataProvider";

const EditRegalo = () => {
    const { arrayItems, setArrayItems, drawerEdit } = useContext(DataContext);

    console.log(arrayItems[0]);

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            minWidth="300px"
            p={6}
            position={"relative"}
        >
            <Stack
                alignItems="center"
                bgColor={"red.900"}
                justifyContent="center"
                left={"50%"}
                p={6}
                position={"absolute"}
                spacing={6}
                top={"50%"}
                transform={"translate(-50%, -50%)"}
                width={"100%"}
            >
                <Input value={arrayItems.name} />
                <Input value={arrayItems.cantidad} />
                <Input value={arrayItems.destinatario} />
                <Input value={arrayItems.img} />
                <Stack direction="row">
                    <Button>Guardar</Button>
                    <Button onClick={() => drawerEdit()}>Cancelar</Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default EditRegalo;
