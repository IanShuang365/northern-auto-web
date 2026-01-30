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
  // --- Additional Sample Products ---
  {
    id: '5',
    title: 'Digital Air Compressor',
    shortDescription: 'High-efficiency compressor for all tire types',
    longDescription: 'This digital air compressor delivers fast, accurate inflation for cars, trucks, and motorcycles. Its compact design and digital controls make it a must-have for any shop.',
    image: product1,
    price: '$1,299',
    specifications: [
      'Max Pressure: 175 PSI',
      'Tank Size: 30 gallons',
      'Voltage: 120V',
      'Noise Level: 68 dB',
      'Weight: 85 lbs',
    ],
    features: [
      'Digital Pressure Gauge',
      'Auto Shut-Off',
      'Portable Design',
      'Thermal Overload Protection',
      'Quick Connect Fittings',
    ],
    benefits: [
      'Saves time on inflation',
      'Reduces energy costs',
      'Easy to move and store',
      'Safe for all users',
      'Long service life',
    ],
    category: 'Air Tools',
  },
  {
    id: '6',
    title: 'Shop Press 20-Ton',
    shortDescription: 'Heavy-duty hydraulic press for shop use',
    longDescription: 'The 20-ton shop press is perfect for bending, pressing, and straightening metal parts. Its robust frame and easy operation make it ideal for any automotive workshop.',
    image: product2,
    price: '$2,499',
    specifications: [
      'Capacity: 20 tons',
      'Working Range: 0-40 inches',
      'Frame: Steel',
      'Pump: Manual Hydraulic',
      'Weight: 220 lbs',
    ],
    features: [
      'Adjustable Table',
      'Pressure Gauge',
      'Spring Return Ram',
      'Wide Base for Stability',
      'Easy-to-Use Controls',
    ],
    benefits: [
      'Handles tough jobs',
      'Improves shop safety',
      'Versatile for many tasks',
      'Durable construction',
      'Low maintenance',
    ],
    category: 'Shop Equipment',
  },
  {
    id: '7',
    title: 'Battery Tester Pro',
    shortDescription: 'Accurate battery diagnostics in seconds',
    longDescription: 'Quickly test and diagnose battery health with this professional-grade tester. Suitable for 6V and 12V batteries, with easy-to-read digital display.',
    image: product3,
    price: '$399',
    specifications: [
      'Voltage Range: 6V/12V',
      'Display: Digital LCD',
      'Clamp Length: 3 ft',
      'Weight: 1.2 lbs',
    ],
    features: [
      'Instant Results',
      'Reverse Polarity Protection',
      'Lightweight Design',
      'Multiple Test Modes',
      'Backlit Display',
    ],
    benefits: [
      'Reduces diagnostic time',
      'Prevents misdiagnosis',
      'Easy for all skill levels',
      'Portable and compact',
      'Affordable solution',
    ],
    category: 'Diagnostics',
  },
  {
    id: '8',
    title: 'Mobile Tool Cart',
    shortDescription: 'Organize and move tools with ease',
    longDescription: 'This mobile tool cart features three shelves, locking casters, and a sturdy handle. Keep your essential tools organized and always within reach.',
    image: product4,
    price: '$249',
    specifications: [
      'Shelves: 3',
      'Caster Size: 4 inches',
      'Material: Powder-coated Steel',
      'Weight Capacity: 350 lbs',
      'Dimensions: 36" x 18" x 33"',
    ],
    features: [
      'Locking Casters',
      'Ergonomic Handle',
      'Scratch-Resistant Finish',
      'Easy Assembly',
      'Spacious Shelves',
    ],
    benefits: [
      'Improves shop organization',
      'Easy to move',
      'Durable and long-lasting',
      'Saves time searching for tools',
      'Great value',
    ],
    category: 'Shop Equipment',
  },
];

export const getProductById = (id: string): ProductData | undefined => {
  return products.find(product => product.id === id);
};
