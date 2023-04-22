
import { Layout } from '@/layouts/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ContextHeader } from "@/context/contextHeader";
import { Section1 } from "@/components/Section1";
import { Section2 } from '@/components/Section2';
import { useState } from 'react';
import { ItemCard } from '@/Objects/itemCard';
import { Section3 } from '@/components/Section3';

const IndexPage = () => {

    const [totalItems, setTotalItems] = useState<number>(0);
    const [itemCard, setItemCard] = useState<ItemCard[]>([]);

    return (
        <ContextHeader.Provider value={{ setTotalItems, totalItems, itemCard, setItemCard }}>
            <Layout>
                <>
                    <Section1></Section1>
                    <Section2></Section2>
                    <Section3></Section3>
                </>
            </Layout>
        </ContextHeader.Provider>
    )
};

export default IndexPage;
