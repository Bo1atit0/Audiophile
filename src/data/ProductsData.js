const ProductsData = {
  Headphones: [
    {
      id: 1,
      name: "XX99 MARK II HEADPHONES",
      stock: 10,
      slug: "xx99-mark-ii-headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio- quality sound.",
      price: "$2,999",
      image: "../assets/XX99_MARK_II_HEADPHONES.svg",
      features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.
      The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hours of battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
      inTheBox: [
        { quantity: "1x", item: "Headphone Unit" },
        { quantity: "2x", item: "Replacement Earcups" },
        { quantity: "1x", item: "User Manual" },
        { quantity: "1x", item: "3.5mm 5m Audio Cable" },
        { quantity: "1x", item: "Travel Bag" },
      ],
    },

    {
      id: 2,
      name: "XX99 MARK I HEADPHONES",
      stock: 10,
      slug: "xx99-mark-i-headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      price: "$1,750",
      image: "../assets/XX99_MARK_I_HEADPHONES.svg",
      features: `These headphones have been created from durable, high-quality materials tough enough to withstand daily use. The stylish yet durable design features a genuine leather head strap and premium earcups. Thickly padded with memory foam, these earcups deliver superior comfort for those who like to enjoy endless listening.`,
      inTheBox: [
        { quantity: "1x", item: "Headphone Unit" },
        { quantity: "2x", item: "Replacement Earcups" },
        { quantity: "1x", item: "User Manual" },
        { quantity: "1x", item: "3.5mm 5m Audio Cable" },
      ],
    },

    {
      id: 3,
      name: "XX59 HEADPHONES",
      stock: 10,
      slug: "xx59-headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable design features a genuine leather head strap and premium earcups.",
      price: "$899",
      image: "../assets/XX59_HEADPHONES.svg",
      features: `These headphones have been created from durable, high-quality materials tough enough to withstand daily use. The stylish yet durable design features a genuine leather head strap and premium earcups. Thickly padded with memory foam, these earcups deliver superior comfort for those who like to enjoy endless listening.`,
      inTheBox: [
        { quantity: "1x", item: "Headphone Unit" },
        { quantity: "2x", item: "Replacement Earcups" },
        { quantity: "1x", item: "User Manual" },
        { quantity: "1x", item: "3.5mm 5m Audio Cable" },
      ],
    },
  ],

  Speakers: [
    {
      id: 1,
      name: "ZX9 SPEAKER",
      stock: 10,
      slug: "zx9-speaker",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      price: "$4,500",
      image: "../assets/ZX9_SPEAKER.svg",
      features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and a headphone input. 
      Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5" aluminum alloy bass driver.`,
      inTheBox: [
        { quantity: "2x", item: "Speaker Unit" },
        { quantity: "2x", item: "Speaker Cloth Panel" },
        { quantity: "1x", item: "User Manual" },
        { quantity: "1x", item: "3.5mm 5m Audio Cable" },
        { quantity: "1x", item: "10m Optical Cable" },
      ],
    },

    {
      id: 2,
      name: "ZX7 SPEAKER",
      stock: 10,
      slug: "zx7-speaker",
      description:
        " Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      price: "$3,500",
      image: "../assets/ZX7_SPEAKER.svg",
      features: `Reap the advantages of a flat diaphragm tweeter combined with a high performance 6.5" bass driver. The ZX7 speaker's advanced acoustic design allows it to deliver a wide soundstage and precise imaging, delivering audio as it was intended.
      The ZX7 speaker is equipped with a 15m wireless range via Bluetooth 5.0, allowing you to enjoy your audio from nearly anywhere in your home. You can also connect via the optical input or the 3.5mm audio cable included with the speaker.`,
      inTheBox: [
        { quantity: "2x", item: "Speaker Unit" },
        { quantity: "2x", item: "Speaker Cloth Panel" },
        { quantity: "1x", item: "User Manual" },
        { quantity: "1x", item: "3.5mm 5m Audio Cable" },
        { quantity: "1x", item: "7m Optical Cable" },
      ],
    },
  ],

  Earpods: [
    {
      id: 1,
      name: "YX1 WIRELESS EARPHONES",
      stock: 10,
      slug: "yx1-wireless-earphones",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      price: "$599",
      image: "../assets/YX1_Earphones.svg",
      features: `Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
      Equipped with Bluetooth 5.0 wireless technology, these earphones deliver an ultra-low latency connection and exceptional audio quality whether you’re gaming, watching videos, or listening to music. Its advanced features include active noise cancellation, transparency mode, and a long-lasting battery that gives you up to 8 hours of listening pleasure on a single charge.`,
      inTheBox: [
        { quantity: "1x", item: "Earphone Unit" },
        { quantity: "2x", item: "Multi-size Earplugs" },
        { quantity: "1x", item: "User Manual" },
        { quantity: "1x", item: "USB-C Charging Cable" },
        { quantity: "1x", item: "Travel Pouch" },
      ],
    },
  ],
};

export default ProductsData;
