import './PlantCard.css';

import type { ShoppingCartItem } from '../datamodel/chartSlice';

interface PlantCardProps {
    plant: ShoppingCartItem;
    quantity: number;
    onAdd: () => void;
    onRemove: () => void;
}

export default function PlantCard(props: PlantCardProps) {
    return (
        <div className="plant_card">
            <img
                src={props.plant.imageUrl}
                alt={props.plant.name}
                className="plant_card_image"
            />
            <div className="plant_card_info">
                <h3 className="plant_card_name">{props.plant.name}</h3>
                <p className="plant_card_description">{props.plant.description}</p>
                <div className="plant_card_footer">
                    <span className="plant_card_price">${props.plant.price.toFixed(2)}</span>
                    <div className="plant_card_quantity">
                        <button
                            className="plant_card_add_button"
                            onClick={() => props.onAdd()}
                        >
                            +
                        </button>
                        <span className="plant_card_quantity_value">1</span>
                        <button
                            className="plant_card_remove_button"
                            onClick={() => props.onRemove()}
                        >
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
