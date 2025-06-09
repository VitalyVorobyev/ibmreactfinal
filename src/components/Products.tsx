import { useEffect } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from "react-redux";
import PlantCard from './PlantCard';
import type { ShoppingCartItem } from '../datamodel/chartSlice';
import type { RootState } from '../datamodel/store';
import { addItem, removeItem } from '../datamodel/chartSlice';
import './Products.css';

interface PlantByCategoryProps {
    title: string;
    plantsData: ShoppingCartItem[];
}

const PlantByCategory = (props:PlantByCategoryProps) => {
    const dispatch = useDispatch();

    return (
        <div className="category-section">
            <h2 className="category-title">{props.title}</h2>
            <div className="products-grid">
                {props.plantsData.map((plant) => {
                    return (
                        <PlantCard
                            key={plant.id}
                            plant={plant}
                            onAdd={() => dispatch(addItem(plant.id))}
                            onRemove={() => dispatch(removeItem(plant.id))}
                        />
                    );
                })}
            </div>
        </div>
    );
}

const Products = () => {
    // Filter plants by category
    const cartItems = useSelector((state: RootState) => state.shoppingCart.items);
    const aromaticPlants = useSelector((state: RootState) => state.shoppingCart.aromaticPlants);
    const medicinalPlants = useSelector((state: RootState) => state.shoppingCart.medicinalPlants);
    const lowMaintenancePlants = useSelector((state: RootState) => state.shoppingCart.lowMaintenancePlants);

    const getPlantsByIds = (ids: string[]) => {
        return cartItems.filter(plant => ids.includes(plant.id));
    };

    // useEffect(() => {
    //     // This effect could be used to fetch or update plant data if needed
    // }, [cartItems]);

    const aromaticPlantsData = getPlantsByIds(aromaticPlants);
    const medicinalPlantsData = getPlantsByIds(medicinalPlants);
    const lowMaintenancePlantsData = getPlantsByIds(lowMaintenancePlants);

    return (
        <div className="products-page">
            <Header />
            <div className="products-content">
                <PlantByCategory
                    title="Aromatic Plants"
                    plantsData={aromaticPlantsData}
                />
                <PlantByCategory
                    title="Medicinal Plants"
                    plantsData={medicinalPlantsData}
                />
                <PlantByCategory
                    title="Low Maintenance Plants"
                    plantsData={lowMaintenancePlantsData}
                />
            </div>
        </div>
    );
};

export default Products;
