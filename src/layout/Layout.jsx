import { Stack } from "@chakra-ui/react";

import ListaDeRegalos from "../components/ListaDeRegalos";

const Layout = () => {
    return (
        <Stack
            alignItems="center"
            bgImage={"url('https://source.unsplash.com/EZrVFJUysLk')"}
            bgPosition="center"
            bgSize="cover"
            height="100%"
            justifyContent={"center"}
        >
            <ListaDeRegalos />
        </Stack>
    );
};

export default Layout;
