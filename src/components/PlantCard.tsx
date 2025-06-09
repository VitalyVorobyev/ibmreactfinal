import './PlantCard.css';

import type { ShoppingCartItem } from '../datamodel/chartSlice';

interface PlantCardProps {
  plant: ShoppingCartItem;
}

export default function PlantCard({ plant }: PlantCardProps) {
    const handleAdd = () => {
    };

    return (
        <div className="plant_card">
            <img
                src={plant.imageUrl}
                alt={plant.name}
                className="plant_card_image"
            />
            <div className="plant_card_info">
                <h3 className="plant_card_name">{plant.name}</h3>
                <p className="plant_card_description">{plant.description}</p>
                <div className="plant_card_footer">
                    <span className="plant_card_price">${plant.price.toFixed(2)}</span>
                    <div className="plant_card_quantity">
                        <button
                            className="plant_card_add_button"
                            onClick={handleAdd}
                        >
                            <i className="bi bi-plus"></i>
                        </button>
                        <span className="plant_card_quantity_value">1</span>
                        <button
                            className="plant_card_remove_button"
                            onClick={() => {}}
                        >
                            <i className="bi bi-dash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
