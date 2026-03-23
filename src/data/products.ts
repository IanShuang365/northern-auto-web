import elitePro from '../assets/Diagnostics/Elite ii pro.jpg';
import nh3 from '../assets/Wheel-Balancers/NH-3-0.jpg';
import nh6 from '../assets/Wheel-Balancers/NH-6-0.jpg';
import ms906 from '../assets/Diagnostics/MS906PRO.jpg';
import tc100 from '../assets/Tire-Changers/TC-100-main.png';
import tc211 from '../assets/Tire-Changers/TC-211-Main.png';
import r134a from '../assets/AC-Machines/R134A AC Machine.jpg';
import r1234yf from '../assets/AC-Machines/R1234YF Machine Main.png';
import slideTop1 from '../assets/Tire-Changers/SlideTop-1.png';
import slideTop2 from '../assets/Tire-Changers/SlideTop-2.png';

export interface ProductData {
  id: string;
  slug: string;
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
    slug: 'elite-ii-pro',
    title: 'Elite II Pro Wheel Balancer',
    shortDescription: 'Advanced diagnostic wheel balancer with precision measurement technology',
    longDescription: `The Elite II Pro features cutting-edge Direct Drive technology that delivers unmatched precision and consistency. Designed for high-volume shops, this advanced system combines speed with accuracy to reduce customer returns and increase satisfaction.

With advanced diagnostic capabilities, the Elite II Pro handles the toughest job requirements while maintaining the highest quality standards.`,
    image: elitePro,
    price: '$6,500',
    specifications: [
      'Max Wheel Diameter: 36 inches',
      'Balancing Range: 2-60 lbs',
      'Speed: Up to 200 RPM',
      'Accuracy: ±2g',
      'Power: 220V, 3-phase',
      'Dimensions: 48" W x 36" D x 52" H',
    ],
    features: [
      'Advanced diagnostics',
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
      'Professional grade',
    ],
    category: 'Measurement & Diagnostics',
  },
  {
    id: '2',
    slug: 'nh-3-series',
    title: 'NH-3 Series Wheel Balancer',
    shortDescription: 'Industrial heavy-duty wheel balancer for commercial operations',
    longDescription: `The NH-3 Series represents the pinnacle of heavy-duty wheel balancing technology. Built for maximum durability and reliability, this professional-grade equipment delivers consistent results in demanding commercial environments.

Engineered for high-volume operations, the NH-3 combines precision with industrial-strength construction for reliable performance.`,
    image: nh3,
    price: '$8,900',
    specifications: [
      'Max Wheel Diameter: 40 inches',
      'Balancing Range: 5-100 lbs',
      'Speed: Up to 250 RPM',
      'Accuracy: ±1g',
      'Power: 220V, 3-phase',
      'Dimensions: 52" W x 40" D x 58" H',
    ],
    features: [
      'Heavy-duty construction',
      'Industrial-grade spindle',
      'Advanced bearing system',
      'Quick-change chuck',
      'Digital controls',
      'Professional grade',
    ],
    benefits: [
      'Maximum durability',
      'Reliable performance',
      'Industrial strength',
      'Commercial-ready',
      'Long service life',
      'Lower maintenance',
    ],
    category: 'Measurement & Diagnostics',
  },
  {
    id: '3',
    slug: 'nh-6-series',
    title: 'NH-6 Series Wheel Balancer',
    shortDescription: 'Premium wheel balancing system with advanced diagnostics',
    longDescription: `The NH-6 Series provides a perfect balance of advanced features and user-friendly operation. Designed for modern workshops that require both precision and efficiency, this system delivers professional-grade results with intuitive controls.

With integrated diagnostic capabilities, the NH-6 handles everything from standard balancing to advanced vehicle diagnostics.`,
    image: nh6,
    price: '$10,500',
    specifications: [
      'Max Wheel Diameter: 38 inches',
      'Balancing Range: 3-80 lbs',
      'Speed: Up to 220 RPM',
      'Accuracy: ±1.5g',
      'Power: 220V, 3-phase',
      'Dimensions: 50" W x 38" D x 55" H',
    ],
    features: [
      'Advanced diagnostics',
      'Integrated sensor system',
      'Digital display',
      'Quick-change spindle',
      'Safety certified',
      'Professional interface',
    ],
    benefits: [
      'Professional results',
      'Easy operation',
      'Diagnostic capable',
      'High accuracy',
      'Durable construction',
      'Warranty support',
    ],
    category: 'Measurement & Diagnostics',
  },
  {
    id: '4',
    slug: 'ms906pro-scanner',
    title: 'MS906PRO Advanced Diagnostic Scanner',
    shortDescription: 'Multi-brand diagnostic scanner with cloud connectivity',
    longDescription: `The MS906PRO is a state-of-the-art diagnostic scanner offering comprehensive vehicle system analysis across multiple brands and models. With cloud connectivity and real-time updates, stay ahead with the latest diagnostic data.

Developed for modern repair shops seeking advanced diagnostics with user-friendly operation.`,
    image: ms906,
    price: '$3,200',
    specifications: [
      'Compatible with: All major brands',
      'OBD Coverage: Full OBD-II',
      'Update: Cloud-based',
      'Display: 10.1" touchscreen',
      'Connectivity: WiFi and Bluetooth',
      'Storage: 1TB internal',
    ],
    features: [
      'Multi-brand support',
      'Real-time diagnostics',
      'Cloud connectivity',
      'Touchscreen interface',
      'Wireless updates',
      'Data logging',
    ],
    benefits: [
      'Comprehensive diagnostics',
      'Always updated',
      'Easy to use',
      'Professional reports',
      'Cost effective',
      'Multi-brand capable',
    ],
    category: 'Diagnostic Tools',
  },
  {
    id: '5',
    slug: 'tc-100-tire-changer',
    title: 'TC-100 Entry Series Tire Changer',
    shortDescription: 'Automated tire changer for light passenger vehicles',
    longDescription: `The TC-100 Entry Series brings professional tire changing capabilities to smaller shops. Featuring smooth automation and reliable operation, this tire changer handles light to medium duty applications with precision.

Designed for shops looking to increase efficiency without compromising on quality.`,
    image: tc100,
    price: '$8,500',
    specifications: [
      'Max Wheel Diameter: 24 inches',
      'Min Wheel Diameter: 10 inches',
      'Chuck Capacity: 5-30 lbs',
      'Power: 220V, single phase',
      'Air Pressure: 6-8 bar',
      'Dimensions: 68" W x 32" D x 46" H',
    ],
    features: [
      'Automatic operation',
      'LED display',
      'Precision chuck',
      'Safety guards',
      'Smooth automation',
      'Compact design',
    ],
    benefits: [
      'Increases efficiency',
      'Reduces labor time',
      'Improves safety',
      'Easy maintenance',
      'Reliable operation',
      'Cost effective',
    ],
    category: 'Tire Service',
  },
  {
    id: '6',
    slug: 'tc-211-tire-changer',
    title: 'TC-211 Professional Tire Changer',
    shortDescription: 'Standard rotating chuck model for professional workshops',
    longDescription: `The TC-211 represents the perfect balance of power and reliability. Featuring a professional rotating chuck design, this tire changer handles standard duty applications with ease and precision.

Built for high-volume shops that demand consistent performance throughout the day.`,
    image: tc211,
    price: '$9,200',
    specifications: [
      'Max Wheel Diameter: 28 inches',
      'Min Wheel Diameter: 12 inches',
      'Chuck Capacity: 10-40 lbs',
      'Power: 220V, single phase',
      'Air Pressure: 6-8 bar',
      'Dimensions: 72" W x 36" D x 50" H',
    ],
    features: [
      'Rotating chuck',
      'Heavy-duty design',
      'Fast operation',
      'Professional grade',
      'Durable construction',
      'Safety certified',
    ],
    benefits: [
      'High reliability',
      'Long service life',
      'Maximum efficiency',
      'Professional results',
      'Reduced downtime',
      'Better output',
    ],
    category: 'Tire Service',
  },
  {
    id: '7',
    slug: 'r134a-ac-machine',
    title: 'R134A AC Service Machine',
    shortDescription: 'Commercial AC service equipment for R134A systems',
    longDescription: `The R134A AC Machine provides comprehensive air conditioning service capabilities for R134A refrigerant systems. With precision controls and automatic diagnostics, this machine ensures proper AC system maintenance and repair.

Ideal for shops servicing modern vehicles with R134A refrigerant systems.`,
    image: r134a,
    price: '$4,200',
    specifications: [
      'Refrigerant: R134A',
      'Recovery Capacity: 30 lbs',
      'Recycling Rate: 50 lbs/hour',
      'Display: Digital LED',
      'Power: 220V, single phase',
      'Dimensions: 36" W x 24" D x 42" H',
    ],
    features: [
      'Automatic diagnostics',
      'Precision controls',
      'Quick connections',
      'Safety certified',
      'Easy operation',
      'Reliable performance',
    ],
    benefits: [
      'Proper AC service',
      'Environmentally safe',
      'Fast service time',
      'Professional results',
      'Cost effective',
      'Compliance ready',
    ],
    category: 'AC Service',
  },
  {
    id: '8',
    slug: 'r1234yf-ac-machine',
    title: 'R1234YF AC Service Machine',
    shortDescription: 'Modern AC service equipment for eco-friendly R1234YF systems',
    longDescription: `The R1234YF AC Machine is engineered for the next generation of air conditioning systems. Featuring advanced controls and safety features required for R1234YF refrigerant handling, this machine ensures compliant and professional AC service.

Essential for shops servicing new vehicles with eco-friendly refrigerant systems.`,
    image: r1234yf,
    price: '$6,500',
    specifications: [
      'Refrigerant: R1234YF',
      'Recovery Capacity: 35 lbs',
      'Recycling Rate: 60 lbs/hour',
      'Display: Digital touchscreen',
      'Power: 220V, single phase',
      'Dimensions: 38" W x 26" D x 44" H',
    ],
    features: [
      'Eco-friendly capable',
      'Advanced diagnostics',
      'Safety mechanisms',
      'Digital controls',
      'Auto shut-off',
      'Professional grade',
    ],
    benefits: [
      'Eco-friendly compliant',
      'Future-ready',
      'Advanced diagnostics',
      'Maximum safety',
      'Professional results',
      'Long-term investment',
    ],
    category: 'AC Service',
  },
  {
    id: '9',
    slug: 'slidetop-lift-1',
    title: 'SlideTop Lift Series 1',
    shortDescription: 'Vertical scissor mechanism lift with smooth operation',
    longDescription: `The SlideTop Series 1 combines vertical scissor mechanism reliability with smooth, stable operation. Designed for shops requiring efficient and safe vehicle lifting, this model provides professional-grade performance for daily service operations.

Safety certified and engineered for dependable operation in demanding workshop environments.`,
    image: slideTop1,
    price: '$7,200',
    specifications: [
      'Lift Capacity: 12,000 lbs',
      'Min Height: 3 inches',
      'Max Height: 72 inches',
      'Platform Width: 48 inches',
      'Platform Length: 108 inches',
      'Power: 220V, 3-phase',
    ],
    features: [
      'Vertical mechanism',
      'Smooth operation',
      'Safety guards',
      'Dual cylinders',
      'Manual lowering valve',
      'Heavy-duty construction',
    ],
    benefits: [
      'Safe operation',
      'Reliable performance',
      'Professional grade',
      'Long service life',
      'Easy maintenance',
      'Safety certified',
    ],
    category: 'Lifts & Equipment',
  },
  {
    id: '10',
    slug: 'slidetop-lift-2',
    title: 'SlideTop Lift Series 2',
    shortDescription: 'Symmetric column design for balanced lifting and access',
    longDescription: `The SlideTop Series 2 features a symmetric column design that provides superior weight distribution and balanced lifting. Perfect for workshops requiring excellent service access, this lift combines professional performance with operator comfort.

Engineered for maximum stability and safety in commercial environments.`,
    image: slideTop2,
    price: '$9,500',
    specifications: [
      'Lift Capacity: 14,000 lbs',
      'Min Height: 3.5 inches',
      'Max Height: 75 inches',
      'Platform Width: 50 inches',
      'Platform Length: 110 inches',
      'Power: 220V, 3-phase',
    ],
    features: [
      'Symmetric columns',
      'Easy access',
      'Professional grade',
      'Dual pump system',
      'Quick release valve',
      'Reinforced frame',
    ],
    benefits: [
      'Excellent access',
      'Balanced operation',
      'Professional results',
      'High stability',
      'Reduced fatigue',
      'Best in class',
    ],
    category: 'Lifts & Equipment',
  },
  {
    id: '11',
    slug: 'dual-system-ac-machine',
    title: 'Dual System AC Service Machine',
    shortDescription: 'Advanced AC service equipment for both R134A and R1234YF systems',
    longDescription: `The Dual System AC Machine is the ultimate versatile solution for shops requiring compatibility with both legacy and modern refrigerant systems. Featuring intelligent switching and integrated diagnostics, this machine automatically adapts to service either R134A or R1234YF refrigerant systems.

Perfect for progressive shops that need flexibility without investing in multiple machines.`,
    image: r134a,
    price: '$7,800',
    specifications: [
      'Refrigerant: R134A & R1234YF',
      'Recovery Capacity: 40 lbs',
      'Recycling Rate: 70 lbs/hour',
      'Display: Digital touchscreen',
      'Power: 220V, single phase',
      'Dimensions: 40" W x 28" D x 46" H',
    ],
    features: [
      'Dual refrigerant support',
      'Automatic detection',
      'Advanced diagnostics',
      'Quick connections',
      'Smart switching',
      'Professional grade',
    ],
    benefits: [
      'Universal compatibility',
      'Future proof investment',
      'Fast service time',
      'One machine solution',
      'Professional results',
      'Environmentally compliant',
    ],
    category: 'AC Service',
  },
  {
    id: '12',
    slug: 'tc-312-commercial-tire-changer',
    title: 'TC-312 Commercial Tire Changer',
    shortDescription: 'Heavy-duty commercial tire changer for high-volume operations',
    longDescription: `The TC-312 Commercial represents the ultimate in tire changing performance for demanding commercial environments. Built with reinforced components and advanced automation, this machine handles large diameter wheels and high-volume tire service operations with exceptional speed and reliability.

Engineered for commercial tire shops requiring maximum throughput and professional-grade durability.`,
    image: tc211,
    price: '$11,500',
    specifications: [
      'Max Wheel Diameter: 35 inches',
      'Min Wheel Diameter: 14 inches',
      'Chuck Capacity: 20-60 lbs',
      'Power: 220V, 3-phase',
      'Air Pressure: 6-8 bar',
      'Dimensions: 78" W x 40" D x 54" H',
    ],
    features: [
      'Commercial-grade construction',
      'Rotary turntable',
      'Bead-breaking jaw',
      'Pneumatic lifting',
      'Quick-change chuck',
      'Heavy-duty motor',
    ],
    benefits: [
      'Maximum productivity',
      'Handles large wheels',
      'High-volume capable',
      'Exceptional reliability',
      'Professional grade',
      'Long service life',
    ],
    category: 'Tire Service',
  },
];


export const getProductById = (id: string): ProductData | undefined => {
  // Try to find by numeric ID first
  let product = products.find(product => product.id === id);
  // If not found, try to find by slug
  if (!product) {
    product = products.find(product => product.slug === id);
  }
  return product;
};
