import { Stack } from "@chakra-ui/react";

import ListaDeRegalos from "../components/ListaDeRegalos";
import DrawerEdit from "../components/DrawerEdit";

const Layout = () => {
    return (
        <Stack
            alignItems="center"
            bgImage={"url('https://source.unsplash.com/EZrVFJUysLk')"}
            bgPosition="center"
            bgSize="cover"
            height={{ base: "none", sm: "100%" }}
            justifyContent={"center"}
        >
            <ListaDeRegalos />
            <DrawerEdit />
        </Stack>
    );
};

export default Layout;
