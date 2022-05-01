import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import AnimalCard from "./AnimalCard";

export interface IMyAnimalCard {
    animalTokenId: string;
    animalType: string;
    animalPrice: string;
}

interface MyAnimalCardProps extends IMyAnimalCard{
    saleStatus: boolean;
    account: string;
}

const MyAnimalCard: FC<MyAnimalCardProps> = ({animalType, animalTokenId, animalPrice, saleStatus, account}) => {
    return (<Box>
        <AnimalCard animalType={animalType} />
    </Box>)
}

export default MyAnimalCard;