// Sumayachalbhurr — Maharashtra travel studio data
export const SUMAYA_DATA = {
  destinations: [
   
    {
      name: "Lonavala",
      country: "Western Ghats · Pune",
      tag: "Rilaxation and enjoyment",
      size: "tall",
      img: "/public/IMG_0661.JPG.jpeg",
      from: "5,999",
      duration: "2Days,1Night To 3Days,2Nights"
    },
    {
      name: "Mahabaleshwar",
      country: "Satara · Sahyadris",
      tag: "Explore Hills,Temples & Hidden Views",
      size: "wide",
      img: "/public/IMG_0649.JPG.jpeg",
      from: "₹9,999",
      duration: "2Days,1Night To 4Days,3Nights"
    },
    {
      name: "Konkan",
      country: "Sindhudurg · Konkan",
      tag: " Heaven by the Coast",
      size: "wide",
      img: "/public/IMG_0663.PNG",
      from: "₹7,999",
      duration: "2Days,1Night To 4Days,3Nights"
    },
   
     {
      name: "Kolhapur",
      country: "kolhapur,Maharashtra",
      tag: "Temples,Forts & Kolhapuri Flavors",
      size: "tall",
      img: "/public/IMG_0651.JPG.jpeg",
      from: "₹6,999",
      duration: "2Days,1Night To 3Days,2Nights"
    },
     {
      name: "Forts & Historical Places",
      country: "Sahyadri · Marathwada",
      tag: "Where History, Adventure & Maratha Glory Come Alive",
      size: "tall",
      img: "/public/IMG_0666.PNG",
      from: "₹8,600",
      duration: "1Day, To 2Day,1Night"
    },
     {
      name: "Ajanta & Ellora",
      country: "ch.Sambhaji Nagar · Maharashtra",
      tag: "Where History Lives In Stone",
      size: "wide",
      img: "/public/IMG_0650.JPG.jpeg",
      from: "₹8,900",
      duration: "2Days,1Night To 4Days,3Nights"
    },
    {
      name: "Nashik",
      country: "Nashik,Maharashtra",
      tag: "Where Spirituality Meets Luxury",
      size: "wide",
      img: "/public/IMG_0665.PNG",
      from: "₹6,999",
      duration: "2Days,1Night To 4Days,3Nights"
    },
   
    {
      name: "Matheran",
      country: "Raigad, Maharashtra",
      tag: "Misty Hills & Toy Train Paradise",
      size: "tall",
      img: "/public/IMG_0660.JPG.jpeg",
      from: "₹5,900",
      duration: "2Days,1Night To 3Days,2Nights"
    }
  ],
  itinerary: {
    title: "Sol Kadhi Coast,Malvan",
    sub: "Maharashtra · 5 nights · Designed by sumyachalabhurr...",
    facts: [
      { lbl: "Travelers", val: "2 — 4" },
      { lbl: "Pace", val: "Considered" },
      { lbl: "Budget", val: "15,000" }
    ],
    pins: [
      { x: 22, y: 40, label: "Devbag" },
      { x: 36, y: 46, label: "sindhudurg" },
      { x: 48, y: 58, label: "Tarkarli" },
      { x: 28, y: 70, label: "Amboli" }
    ],
    days: [
        {
        tab: "Mon",
        day: "Day 01",
        title: "Pune to the Devgad Coast",
        intro: "An early start down the Western Ghats, a Kolhapur misal break, and a seaside Shiva temple by dusk.",
        blocks: [
          { time: "06:30", title: "Depart Pune", desc: "An early start down the Sahyadris with the day's longest drive ahead — roughly eight hours to the coast.", tag: "Move" },
          { time: "11:00", title: "Tea & misal at Kolhapur", desc: "A halt for Kolhapuri misal and chai before the road drops toward the Konkan.", tag: "Eat" },
          { time: "18:00", title: "Kunkeshwar Mandir", desc: "The 'Kashi of South Konkan' — an ancient seaside Shiva temple. Arrive for evening aarti and sunset over the water.", tag: "Do" },
          { time: "20:00", title: "Overnight near Devgad", desc: "Check in to a coastal stay near Devgad after the long day's drive.", tag: "Stay" }
        ]
      },
      {
        tab: "Tue",
        day: "Day 02",
        title: "Vijaydurg Fort & on to Malvan",
        intro: "The oldest sea fort on the coast in the morning, Shivaji's island citadel by afternoon.",
        blocks: [
          { time: "09:30", title: "Vijaydurg Fort", desc: "The oldest sea fort on the coast — triple walls, twenty bastions and Maratha naval history. A local guide is worth it.", tag: "Do" },
          { time: "13:00", title: "Drive to Malvan", desc: "Continue down the coast to Malvan, the base for the Sindhudurg crossing.", tag: "Move" },
          { time: "15:30", title: "Sindhudurg Fort", desc: "A short boat ride from Malvan beach to Shivaji's island citadel, rising straight out of the sea.", tag: "Do" },
          { time: "20:00", title: "Overnight in Tarkarli", desc: "Settle into your Tarkarli stay for the next two nights.", tag: "Stay" }
        ]
      },
      {
        tab: "Wed",
        day: "Day 03",
        title: "Tarkarli — Beach & Scuba",
        intro: "Coral reefs before noon, white sand and a Konkan sunset after.",
        blocks: [
          { time: "08:00", title: "Morning scuba & snorkelling", desc: "Beginner-friendly dives over coral reefs with patient instructors — visibility is best before noon.", tag: "Do" },
          { time: "16:00", title: "Tarkarli Beach", desc: "Crystal-clear water and white sand, with parasailing and banana-boat rides on offer.", tag: "Do" },
          { time: "19:00", title: "Konkani dinner at the resort", desc: "A coastal thali by the sea — fresh seafood and sol kadhi.", tag: "Eat" }
        ]
      },
      {
        tab: "Thu",
        day: "Day 04",
        title: "Devbag, Sangam & Tsunami Island",
        intro: "Backwater dolphins, a low-tide sandbar, and a hidden beach with a lighthouse.",
        blocks: [
          { time: "09:00", title: "Devbag Sangam boat ride", desc: "Where the Karli River meets the Arabian Sea — dolphins are often spotted along the way.", tag: "Do" },
          { time: "12:00", title: "Tsunami Island", desc: "A sandbar at its best in low tide — jet ski, kayaking and banana rides in shallow, safe water.", tag: "Do" },
          { time: "16:30", title: "Nivti Beach", desc: "A quiet hidden-gem beach with a hilltop viewpoint and an old Portuguese lighthouse nearby.", tag: "Do" },
          { time: "20:00", title: "Last night on the coast", desc: "A final evening at your Tarkarli stay.", tag: "Stay" }
        ]
      },
      {
        tab: "Fri",
        day: "Day 05",
        title: "Amboli & Sawantwadi — Homeward",
        intro: "A heritage palace, a misty hill station, and the long climb home through Amboli.",
        blocks: [
          { time: "09:00", title: "Sawantwadi Palace", desc: "A heritage palace known for Ganjifa art and lacquerware toys — the perfect souvenir stop (closed 1–2 PM).", tag: "Do" },
          { time: "12:30", title: "Amboli Waterfalls", desc: "A misty Western Ghats hill station, spectacular in monsoon — the last big stop before the highway.", tag: "Do" },
          { time: "14:00", title: "Drive back to Pune", desc: "The long climb up through Amboli and on to the expressway home.", tag: "Move" }
        ]
      }
    ]
  },

  testimonials: [
 
   {
      quote: "We told Sumya Chala Bhurr we wanted a quiet week. They gave us a hidden Konkan coast experience we couldn't have found even after a year of searching.",
      name: "Rahul Mandhare",
      trip: "Tarkarli & Sindhudurg · 6 nights"
    },
    {
      quote: "What surprised us wasn't the resort or the food. It was the small handwritten note left on our dashboard every morning. Sumya Chala Bhurr really pays attention to the little things.",
      name: "Tanishka Daga",
      trip: "Mahabaleshwar · 4 nights"
    },
    {
      quote: "I've tried some of the biggest concierge travel services before, but none of them rerouted our trip at 6am because the monsoon shifted. Sumya Chala Bhurr handled it perfectly — twice.",
      name: "Raj Patil",
      trip: "Lonavala & Bhandardara · 5 nights"
    }
  ],

  pricing: [
    {
      label: "Compass",
      title: "Compass",
      price: "₹99",
      per: "flat planning fee",
      desc: "A planned trip you book yourself, with our routing and lodging picks. Best for confident travelers who want a curated frame.",
      features: [
        "Personalized day-by-day travel itinerary",
        "Stay recommendations based on your budget",
        "Hidden places & local experience suggestions",
        "Food & café recommendations",
        "One planning consultation before your trip",
        "Delivered on WhatsApp or email"
      ],
      cta: "Choose Compass"
    },
    {
      label: "Atlas",
      title: "Atlas",
      price: "₹199",
      per: "flat planning fee",
      desc: "End-to-end planning, all bookings made for you, on-call concierge during travel. Our most chosen tier.",
      features: [
        "Everything in Compass, plus —",
        "Complete trip route optimization",
        "Handpicked hotel & transport suggestions",
        "Custom itinerary for couples, friends, or family trips",
        "Live trip support during your journey",
        "Backup plans for weather or timing changes",
        "Priority planning with faster revisions"
      ],
      cta: "Choose Atlas",
      featured: true,
      pill: "Most chosen"
    },
    {
      label: "Cartographer",
      title: "Cartographer",
      price: "Bespoke",
      per: "As Per Planning",
      desc: "A private trip designer assigned to your party for the year. For travelers planning multiple trips or moving with extended family.",
      features: [
        "Private travel planner for your trips",
        "Fully personalized luxury itineraries",
        "Multi-destination travel planning",
        "Honeymoon / roadtrip / family-special planning",
        "Exclusive hidden gems & premium stay suggestions",
        "Flexible revisions and dedicated support",
        "Long-term vacation planning assistance"
      ],
      cta: "Request a call"
    }
  ],

  faqs: [
    {
      q: "How is Sumayachalbhurr different from a travel app?",
      a: "Every trip is designed by a named human — usually someone who has lived in or moved through Maharashtra for years. Apps optimize for available inventory; our planners optimize for what your trip should feel like, then negotiate the inventory around it. You speak with the same person from your first call until you're home."
    },
    {
      q: "Where do you operate?",
      a: "We currently plan trips across Maharashtra — the Sahyadri hill stations, the Konkan coast, the heritage circuit of Aurangabad and the caves, Mumbai and Pune city stays, and the wine country around Nashik. We're slowly expanding into neighbouring Goa and northern Karnataka by request."
    },
    {
      q: "How early should I begin planning?",
      a: "For most trips, One to Two weeks gives us the room to do our best work. Monsoon-season Lonavala and peak-winter Mahabaleshwar want eight weeks. We do take last-minute requests — the cost climbs, the surprise factor stays the same."
    },
    {
      q: "What does the price actually cover?",
      a: "Our planning fee is flat — ₹99 for Compass, ₹199 for Atlas — and separate from your trip cost. Hotels, transfers, guides, and meals are billed at supplier rate; we do not take commissions from properties, which is how we keep our recommendations honest. You'll see a single transparent ledger before any booking is made."
    },
    {
      q: "Can you handle multi-generational or accessibility needs?",
      a: "Yes. We plan for travelers in their nineties, families with infants, mobility devices, dietary specificity (Jain, Satvik, gluten-free), and quiet anniversaries that ask for separate transfers. Tell us early — we'll thread it through every line of the itinerary."
    },
    
  ]
};
