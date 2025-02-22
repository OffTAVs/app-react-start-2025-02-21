import React from "react";
import { Button } from "react-native";

type MeuBotaoProps={
    titulo: string;
    onPress: () => void;
}

const MeuBotao :React.FC<MeuBotaoProps>=({titulo,onPress})=>{
    return(
        <Button onPress={onPress} title={titulo}></Button>
    );
    
}

export default MeuBotao;