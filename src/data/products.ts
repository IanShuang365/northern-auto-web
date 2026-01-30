import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';

export interface ProductData {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  price: string;
  specifications: string[];
  features: string[];
  benefits: string[];
  category: string;
}

export const products: ProductData[] = [
  {
    id: '1',
    title: 'Professional Wheel Balancer',
    shortDescription: 'With Direct Drive technology for precision balancing',
    longDescription: `Our Professional Wheel Balancer features cutting-edge Direct Drive technology that delivers unmatched precision and consistency. Designed for high-volume shops, this advanced system combines speed with accuracy to reduce customer returns and increase satisfaction.

With over 78 years of expertise in wheel balancing equipment, we've engineered this system to handle the toughest job requirements while maintaining the highest quality standards.`,
    image: product1,
    price: '$4,999',
    specifications: [
      'Max Wheel Diameter: 36 inches',
      'Balancing Range: 2-60 lbs',
      'Speed: Up to 200 RPM',
      'Accuracy: ±2g',
      'Power: 220V, 3-phase',
      'Dimensions: 48" W x 36" D x 52" H',
    ],
    features: [
      'Direct Drive Technology',
      'LED Display Screen',
      'Automatic Balancing Detection',
      'Quick-Change Spindle',
      'Digital Weight Display',
      'Heavy-duty Construction',
    ],
    benefits: [
      'Increases shop productivity',
      'Reduces customer complaints',
      'Improves ride quality',
      'Faster turnaround time',
      'Lower maintenance costs',
      'Built in the USA',
    ],
    category: 'Measurement & Diagnostics',
  },
  {
    id: '2',
    title: 'Advanced Wheel Aligner',
    shortDescription: '3D Wheel Alignment System with laser precision',
    longDescription: `Experience next-generation wheel alignment with our Advanced Wheel Aligner. This 3D system uses laser precision technology to ensure perfect wheel geometry every time. Ideal for both domestic and import vehicles.

The system guides technicians through the alignment process with clear visual feedback, reducing errors and improving efficiency. Fast ROI and increased customer satisfaction make this a must-have for modern shops.`,
    image: product2,
    price: '$12,999',
    specifications: [
      '3D Laser Measurement System',
      'Vehicle Database: 50,000+ models',
      'Measurement Range: ±10 degrees',
      'Precision: ±0.1 degrees',
      'Camera Resolution: 4K HD',
      'Wheel Size: 14-22 inches',
    ],
    features: [
      '3D Laser Technology',
      'Touchscreen Display',
      '360-Degree Turntable',
      'Real-Time Guidance System',
      'Cloud Connectivity',
      'Mobile App Integration',
    ],
    benefits: [
      'Triple alignment speed',
      'Higher customer satisfaction',
      'Reduces warranty claims',
      'Improves fuel efficiency for customers',
      'Increases profit margins',
      'Easy technician training',
    ],
    category: 'Alignment Systems',
  },
  {
    id: '3',
    title: 'Heavy-Duty Lift System',
    shortDescription: 'For Under Vehicle Services and Alignments',
    longDescription: `Built tough for the most demanding shop environments, our Heavy-Duty Lift System provides safe, reliable access to undercarriage work. With a 12,000 lbs capacity and advanced safety features, this lift delivers consistent performance day after day.

Safety is engineered into every aspect of this system. From redundant hydraulic systems to certified locking mechanisms, we ensure your technicians work with complete confidence.`,
    image: product3,
    price: '$8,499',
    specifications: [
      'Load Capacity: 12,000 lbs',
      'Lifting Height: Up to 72 inches',
      'Rise Time: 45 seconds',
      'Descent Speed: Adjustable',
      'Footprint: 10\' x 8\'',
      'Power: 208-240V, 1-phase',
    ],
    features: [
      'Two-Post Design',
      'Dual Hydraulic Cylinders',
      'Safety Locks at Multiple Heights',
      'Non-Slip Platforms',
      'Clear Wheel Path',
      'Certified by ADAS',
    ],
    benefits: [
      'OSHA compliant',
      'Reduces technician strain',
      'Increases work area access',
      'Improves safety record',
      'Minimal maintenance required',
      'Exceptional durability',
    ],
    category: 'Lifting Equipment',
  },
  {
    id: '4',
    title: 'Automatic Tire Changer',
    shortDescription: 'Fast and reliable tire changing equipment',
    longDescription: `Transform your tire service department with our Automatic Tire Changer. This machine automates the tire mounting and demounting process, dramatically increasing throughput while reducing technician fatigue and error.

Perfect for high-volume tire shops, the intuitive controls and robust construction make this a workhorse that pays for itself in months.`,
    image: product4,
    price: '$6,799',
    specifications: [
      'Wheel Size: 10-28 inches',
      'Max Wheel Weight: 100 lbs',
      'Mount/Demount Speed: 20-30 sec',
      'Bead Breaker Force: 3000 lbs',
      'Power: 220V, 3-phase',
      'Air Supply: 90-120 PSI',
    ],
    features: [
      'Automatic Arm Positioning',
      'Dual-Clutch System',
      'Quick-Change Spindle',
      'Pneumatic Controls',
      'Emergency Stop Button',
      'Heavy-Duty Frame',
    ],
    benefits: [
      'Increases tire mounting speed',
      'Reduces labor costs',
      'Improves tire quality',
      'Decreases technician fatigue',
      'Higher customer throughput',
      'USA manufactured',
    ],
    category: 'Tire Service Equipment',
  },
];

export const getProductById = (id: string): ProductData | undefined => {
  return products.find(product => product.id === id);
};
