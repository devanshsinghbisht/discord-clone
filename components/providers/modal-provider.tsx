"use client"

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { useState , useEffect } from "react";

export const ModalProvider = () => {
    const [isMounted , setIsMounter] = useState(false);

    useEffect(() => {
        setIsMounter(true);
    } , []);

    if(!isMounted){
        return null;
    }
    
    return (
        <>
            <CreateServerModal />
        </>
    )
}