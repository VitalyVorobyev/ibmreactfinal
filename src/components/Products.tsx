import Header from './Header';
import { useSelector, useDispatch } from "react-redux";
import PlantCard from './PlantCard';
import plants, { aromaticPlants, medicinalPlants, lowMaintenancePlants } from './plants';
import { addItem, removeItem } from '../datamodel/chartSlice';
import './Products.css';

const PlantByCategory = ({ category, plantsData }) => {
    const cartItems = useSelector((state) => state.shoppingCart.items);
    const dispatch = useDispatch();

    return (
        <div className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="products-grid">
                {plantsData.map((plant) => {
                    const quantity = cartItems.find(item => item.id === plant.id)?.quantity || 0;
                    return (
                        <PlantCard
                            key={plant.id}
                            plant={plant}
                            quantity={quantity}
                            onAdd={() => dispatch(addItem(plant))}
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
    const getPlantsByIds = (ids: string[]) => {
        return plants.filter(plant => ids.includes(plant.id));
    };

    const cartItems = useSelector((state) => state.shoppingCart.items);
    const dispatch = useDispatch();

    const aromaticPlantsData = getPlantsByIds(aromaticPlants);
    const medicinalPlantsData = getPlantsByIds(medicinalPlants);
    const lowMaintenancePlantsData = getPlantsByIds(lowMaintenancePlants);

    return (
        <div className="products-page">
            <Header />
            <div className="products-content">
                <div className="category-section">
                    <h2 className="category-title">Aromatic Plants</h2>
                    <div className="products-grid">
                        {aromaticPlantsData.map((plant) => (
                            const quantity = cartItems.find(item => item.id === plant.id)?.quantity || 0;
                            <PlantCard
                                key={plant.id}
                                plant={plant} />
                        ))}
                    </div>
                </div>

                <div className="category-section">
                    <h2 className="category-title">Medicinal Plants</h2>
                    <div className="products-grid">
                        {medicinalPlantsData.map((plant) => (
                            <PlantCard key={plant.id} plant={plant} />
                        ))}
                    </div>
                </div>

                <div className="category-section">
                    <h2 className="category-title">Low Maintenance Plants</h2>
                    <div className="products-grid">
                        {lowMaintenancePlantsData.map((plant) => (
                            <PlantCard key={plant.id} plant={plant} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
