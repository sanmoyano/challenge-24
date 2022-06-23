import { Stack } from "@chakra-ui/react";
import { useContext } from "react";

import { DataContext } from "../context/DataProvider";

import EditRegalo from "./EditRegalo";

const DrawerEdit = () => {
    const { openEdit } = useContext(DataContext);

    return (
        <Stack display={openEdit ? "flex" : "none"} heigth={"100%"} position={"absolute"}>
            <EditRegalo />
        </Stack>
    );
};

export default DrawerEdit;
