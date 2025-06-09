import Header from './Header';
import { useSelector, useDispatch } from "react-redux";
import PlantCard from './PlantCard';
import plants, { aromaticPlants, medicinalPlants, lowMaintenancePlants } from './plants';
import './Products.css';

const Products = () => {
    // Filter plants by category
    const getPlantsByIds = (ids: string[]) => {
        return plants.filter(plant => ids.includes(plant.id));
    };

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
                            <PlantCard key={plant.id} plant={plant} />
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
