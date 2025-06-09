export interface Plant {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface PlantCardProps {
  plant: Plant;
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
        <p className={plant_card_description}>{plant.description}</p>
        <div className={plant_card_footer}>
          <span className={plant_card_price}>${plant.price.toFixed(2)}</span>
          <button
            className={plant_card_button}
            onClick={handleAdd}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
