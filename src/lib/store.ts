import { useState, useEffect } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  bullets: string[];
  price: number;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
}

const DEFAULT_SERVICES: Service[] = [
  {
    id: "s1",
    title: "Exterior Detail",
    description: "",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1200",
    price: 150,
    bullets: [
      "Spot-free hand wash",
      "Wheels & tires deep cleaned",
      "Streak-free glass cleaning",
      "Paint protection finish"
    ]
  },
  {
    id: "s2",
    title: "Interior Detail",
    description: "",
    image: "https://images.unsplash.com/photo-1550508544-783637a2472b?auto=format&fit=crop&q=80&w=1200",
    price: 150,
    bullets: [
      "Full vacuum (seats, carpets, mats)",
      "Surface wipe-down (dash, doors, vents)",
      "Glass cleaned",
      "Clean, fresh interior feel"
    ]
  },
  {
    id: "s3",
    title: "Full Detail",
    description: "",
    image: "https://images.unsplash.com/photo-1549317661-bc32c53f6061?auto=format&fit=crop&q=80&w=1200",
    price: 250,
    bullets: [
      "Complete interior + exterior reset",
      "Paint decontamination",
      "Trim restoration",
      "Deep interior cleaning"
    ]
  },
  {
    id: "s4",
    title: "Date Night Package",
    description: "",
    image: "https://images.unsplash.com/photo-1620857187652-32863fb79c4a?auto=format&fit=crop&q=80&w=1200",
    price: 85,
    bullets: [
      "Quick exterior wash",
      "Tire & wheel clean",
      "Interior vacuum",
      "Surface wipe + glass"
    ]
  },
  {
    id: "s5",
    title: "Ceramic Coating",
    description: "",
    image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=1200",
    price: 799,
    bullets: [
      "Long-term paint protection",
      "Water & dirt repellent",
      "Hand-applied coating",
      "Long-lasting shine"
    ]
  }
];

export function useStore() {
  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('outatime_services_v2');
    return saved ? JSON.parse(saved) : DEFAULT_SERVICES;
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    const saved = localStorage.getItem('outatime_leads');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('outatime_services_v2', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('outatime_leads', JSON.stringify(leads));
  }, [leads]);

  const updateService = (id: string, updated: Partial<Service>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
  };
  
  const addService = (service: Service) => {
    setServices(prev => [...prev, service]);
  };
  
  const removeService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const addLead = (lead: Omit<Lead, 'id' | 'date'>) => {
    const newLead: Lead = {
      ...lead,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString()
    };
    setLeads(prev => [newLead, ...prev]);
  };

  return {
    services,
    updateService,
    addService,
    removeService,
    leads,
    addLead
  };
}
