import type { ShoppingCartItem } from '../datamodel/chartSlice';

const plants: ShoppingCartItem[] = [
    {
        id: '1',
        name: 'Aloe Vera',
        description: 'Aloe Vera is a succulent plant species of the genus Aloe. It is widely known for its medicinal and cosmetic uses.',
        price: 15.99,
        quantity: 1,
        imageUrl: '/aloe_vera.png'
    },
    {
        id: '2',
        name: 'Snake Plant',
        description: 'The Snake Plant, also known as Sansevieria, is a hardy houseplant that can survive in low light and requires minimal care.',
        price: 12.49,
        quantity: 1,
        imageUrl: '/snake_plant.png'
    },
    {
        id: '3',
        name: 'Lavender',
        description: 'Lavender is a fragrant herb known for its calming properties and beautiful purple flowers.',
        price: 9.99,
        quantity: 1,
        imageUrl: '/lavender.png'
    },
    {
        id: '4',
        name: 'Eucalyptus',
        description: 'Eucalyptus is an aromatic plant with a distinct fresh scent and medicinal properties.',
        price: 18.99,
        quantity: 1,
        imageUrl: '/eucalyptus.png'
    },
    {
        id: '5',
        name: 'Mint',
        description: 'Mint is a refreshing herb perfect for culinary uses and aromatherapy.',
        price: 7.99,
        quantity: 1,
        imageUrl: '/mint.png'
    },
    {
        id: '6',
        name: 'Chamomile',
        description: 'Chamomile is a daisy-like plant known for its calming tea and medicinal benefits.',
        price: 8.99,
        quantity: 1,
        imageUrl: '/chamomile.png'
    }
];

export const aromaticPlants = ['3', '4', '5']; // Lavender, Eucalyptus, Mint
export const medicinalPlants = ['1', '4', '6']; // Aloe Vera, Eucalyptus, Chamomile
export const lowMaintenancePlants = ['1', '2']; // Aloe Vera, Snake Plant

export default plants;
