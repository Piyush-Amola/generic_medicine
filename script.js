const medicine_original = [
  {
    Name: "Daraprin",
    price: "Rs. 250",
    image: "https://dwaey.com/medrg/upload/1723992724.png",
    link: "#",
  },
  {
    Name: "Zytiga",
    price: "Rs. 75000",
    image:
      "https://assets.mrmed.in/product-images/product-images-1719919503102-367500702-Zytiga%20250mg%20Tablet_103434.jpg",
    link: "#",
  },
  {
    Name: "Glivec",
    price: "Rs. 6600",
    image:
      "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a0f76dfdb04146cfb0ec1f5099800eb6.jpg",
    link: "https://www.1mg.com/drugs/glivec-400mg-tablet-236606?srsltid=AfmBOornCUHbHOOOrbzDerFlKlCNwkmwUZQQ-SVLiJocqFiRtcstyCwq&wpsrc=Google+Organic+Search",
  },
  {
    Name: "Paracetamol",
    price: "Rs.20-30 per 10 tablets",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg",
    link: "https://www.1mg.com/search/all?filter=true&name=Paracetamol",
  },
  {
    Name: "Combiflam",
    Manufacturer: "Sanofi",
    price: "Rs.20-30 per 10 tablets",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/c/o/combiflam_tablet_20_s-1.png?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
    link: "https://www.1mg.com/search/all?filter=true&name=Combiflam",
  },
  {
    Name: "Disprin",
    Manufacturer: "Reckitt Benckiser",
    price: "Rs. 10-20 for 10 tablets",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfABbWyZY3yywBJtf60mpv4GyfpwTHVj5yGA&s",
    link: "https://www.1mg.com/otc/disprin-regular-325mg-effervescent-tablet-for-fast-relief-from-pain-headaches-migraines-otc543020",
  },
  {
    Name: "ORS",
    price: "Rs. 15-25 per sachet",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/W81928/prolyte-ors-orange-drink-sachet-21-gm-2-1654249497.jpg",
    link: "https://www.1mg.com/search/all?name=ors",
  },
  {
    Name: "Vicks Vaporub",
    Manufacturer: "Procter & Gamble",
    price: "Rs. 40-60 for 25g",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1677525570.jpg",
    link: "https://www.1mg.com/search/all?name=Vicks%20Vaporub&st=vivks%20vaporup&sl=Vicks%20Vapor,Vicks%20Vaporub&s=Vicks%20Vaporub",
  },
  {
    Name: "Digene",
    Manufacturer: "Abbott",
    price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/255390/digene-gel-acidity-gas-relief-200ml-mint-flavour-sugar-free-2-1710939921.jpg",
    link: "https://www.1mg.com/search/all?name=digene",
  },
  {
    Name: "Strepsils",
    Manufacturer: "Reckitt Benckiser",
    price: "Rs. 30-50 for a pack of 8-10 tablets",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/RX/ZI/IF/81505918/strepsils-blister.jpg",
    link: "https://www.1mg.com/categories/featured/top-brands/strepsils-884",
  },
  {
    Name: "Benadryl",
    Manufacturer: "Johnson & Johnson",
    price: "Rs. 50-80 per bottle (100 ml)",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
    link: "https://www.1mg.com/search/all?filter=true&name=Benadryl",
  },
  {
    Name: "Augmentin 1000 Duo Tablet",
    price: "Rs. 1000",
    image:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/bodminug3xmfcubbrdix.jpg?format=auto",
    link: "https://www.1mg.com/drugs/augmentin-1000-duo-tablet-163191",
  },
  {
    Name: "Crestor",
    Manufacturer: "Astrazeneca",
    price: "Rs.732",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jd-k1uea3upVeTJNmtS8y9ASkNOwsxN8Uw&s",
    link: "https://www.1mg.com/drugs/crestor-40mg-tablet-932668",
  },
  {
    Name: "Lantus",
    Manufacturer: "Sanofi India Ltd",
    price: "Rs. 634",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pt0WVYQOROwvBFQi4lo5Fy0HvifJla0VUw&s",
    link: "https://www.1mg.com/drugs/lantus-solostar-100iu-ml-solution-for-injection-69758",
  },
  {
    Name: "Tamiflu",
    Manufacturer: "Roche Products India Pvt Ltd",
    price: "Rs. 1238",
    image:
      "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_170422580.jpg",
    link: "https://www.1mg.com/drugs/tamiflu-75mg-capsule-682558",
  },
  {
    Name: "Eliquis",
    Manufacturer: "Pfizer Ltd",
    price: " Rs.1086",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/9/KS/UI/TA/136059498/eliquis-5mg-tablet.jpg",
    link: "https://www.1mg.com/drugs/eliquis-5mg-tablet-172700",
  },
];

const medicine_alternative = {
  Daraprin: [
    {
      Name: "Daramin",
      Manufacturer: "Na",
      price: "Rs. 15",
      image:
        "https://www.netmeds.com/images/product-v1/600x600/1136339/daramin_25mg_tablet_10s_742022_0_0.jpg",
      link: "https://www.1mg.com/drugs/daramin-25mg-tablet-201707",
    },
  ],
  Zytiga: [
    {
      Name: "Mytera",
      Manufacturer: "Mylan Pharma",
      price: "Rs. 15000",
      image:
        "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cx456kwzkuscoxk4bl4d.jpg?format=auto",
      link: "https://www.apollopharmacy.in/medicine/mytera-250mg-tablet-120-s",
    },
    {
      Name: "Abitate",
      Manufacturer: "RPG Life Sciences",
      price: "Rs. 29000",
      image:
        "https://assets.mrmed.in/product-images/product-images-1632405352428-700552497-100012_1.jpg",
      link: "https://www.apollopharmacy.in/medicine/abitate-250mg-tab-120-s",
    },
  ],
  Glivec: {
    Name: "Veenat",
    Manufacturer: "Natco Pharma",
    price: "Rs. 1500",
    image:
      "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a5f53d8d234d45a695d7c6f59707c652.jpg",
    link: "https://www.1mg.com/drugs/veenat-400-tablet-14360?srsltid=AfmBOoozkKt5QjS2GyIzsogcO_R2FtOGzBoVQFn3fwsoCUwofa590wBc&wpsrc=Google+Organic+Search",
  },
  Paracetamol: [
    {
      Name: "Crocin",
      Manufacturer: "GlaxoSmithKline",
      price: "Rs.20-30 per 10 tablets",
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/H45820/crocin-650-tablet-15-nos-3-1689759566.jpg",
      link: "https://www.1mg.com/search/all?name=crocin",
    },
    {
      Name: "Dolo 65",
      Manufacturer: "Micro labs",
      price: "Rs.20-30 per 10 tablets",
      image:
        "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_1.png",
      link: "https://www.1mg.com/search/all?name=dolo%2065",
    },
    {
      Name: "Calpol",
      Manufacturer: "GSK",
      price: "Rs.20-30 per 10 tablets",
      image: "https://drugstreet.in/wp-content/uploads/2023/12/1000046750.jpg",
      link: "https://www.1mg.com/search/all?name=calpol",
    },
  ],
  Combiflam: [
    {
      Name: "Ibuprofen",
      Manufacturer: "Abbott",
      price: "Rs.20-30 per 10 tablets",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/344827499/TG/YT/FY/192270567/ibuprofen-tablet-400mg.png",
      link: "https://www.1mg.com/search/all?filter=true&name=Ibuprofen",
    },
    {
      Name: "Brufen",
      Manufacturer: "Abbott",
      price: "Rs.20-30 per 10 tablets",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmWwHGkFj5M1SKY0GM-af-pHOyLMcLqRdQ&s",
      link: "https://www.1mg.com/search/all?name=brufen",
    },
  ],
  Disprin: [
    {
      Name: "Ecosprin",
      Manufacturer: "USV Ltd.",
      price: "Rs. 10-20 for 10 tablets",
      image:
        "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-012745/ecosprin-75-tablet-14_ecosprin-75-tablet-14--TM-TACR1-012745_1.png",
      link: "https://www.1mg.com/search/all?filter=true&name=Ecosprin",
    },
    {
      Name: "Aspirin",
      Manufacturer: "Bayer",
      price: "Rs. 10-20 for 10 tablets",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeIfr0UEUuInFvEhsJRyF3aVQKXuaMSIalA&s",
      link: "https://www.1mg.com/search/all?filter=true&name=Aspirin",
    },
    {
      Name: "Aspro",
      Manufacturer: "Nicholas Healtcare Limited",
      price: "Rs. 10-20 for 10 tablets",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvOcNgxiuLa4yDomGtmGL5e22x6BHuX5qQ&s",
      link: "#",
    },
  ],
  ORS: [
    {
      Name: "Electral",
      Manufacturer: "FDC Ltd",
      price: "Rs. 15-25 per sachet",
      image: "https://m.media-amazon.com/images/I/81jrDrIJoNL.jpg",
      link: "https://www.1mg.com/search/all?name=ors",
    },
    {
      Name: "ORSL",
      Manufacturer: "Dabur",
      price: "Rs. 15-25 per sachet",
      image:
        "https://images.apollo247.in/pub/media/catalog/product/o/r/ors0011_1-1-_1_.jpg",
      link: "https://www.1mg.com/search/all?name=ors",
    },
    {
      Name: "Peditral",
      Manufacturer: "Cipla",
      price: "Rs. 15-25 per sachet",
      image:
        "https://images.apollo247.in/pub/media/catalog/product/P/E/PED0040_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
      link: "https://www.1mg.com/search/all?name=ors",
    },
  ],
  "Vicks Vaporub": [
    {
      Name: "Zandu Balm",
      Manufacturer: "Emami",
      price: "Rs. 40-60 for 25g",
      image: "https://m.media-amazon.com/images/I/617dG3SoVKL.jpg",
      link: "https://www.1mg.com/search/all?filter=true&name=Zandu%20balm",
    },
    {
      Name: "Amrutanjan",
      Manufacturer: "Amrutanjan Healthcare",
      price: "Rs. 40-60 for 25g",
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/010715/amrutanjan-strong-doub-50-ml-2-1674209955.jpg?dim=400x0&dpr=1&q=100",
      link: "https://www.1mg.com/search/all?filter=true&name=Amrutanjan%20balm",
    },
    {
      Name: "Tiger Balm",
      Manufacturer: "Haw Par Healtcare",
      price: "Rs. 40-60 for 25g",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/jd1z9u80/body-pain-relief/v/n/b/30-red-ointment-30g-tiger-balm-original-imaf224hjngnfmhs.jpeg?q=90&crop=false",
      link: "https://www.1mg.com/search/all?name=tiger%20balm",
    },
  ],
  Digene: [
    {
      Name: "ENO",
      Manufacturer: "GlaxoSmithKline",
      price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle",
      image:
        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/home/mobile/homepage-header-carousal-1-v3_mobile.jpg?auto=format",
      link: "https://www.1mg.com/search/all?name=eno",
    },
    {
      Name: "Gelusil",
      Manufacturer: "Pfizer",
      price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle",
      image:
        "https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0002_3_1.jpg",
      link: "https://www.1mg.com/search/all?name=gelusil",
    },
  ],
  Strepsils: [
    {
      Name: "Vicks",
      Manufacturer: "Procter & Gamble",
      price: "Rs. 30-50 for a pack of 8-10 tablets",
      image:
        "https://images.ctfassets.net/umpxkz97ty8t/4tjmmu8xgFdItABWjhpWTA/88afdcd6055df8b4fac3fdea0098dfa5/VCD4-Packs.png",
      link: "https://www.1mg.com/search/all?name=vicks&filter=true&state=1&scroll_id=Rre-0688yDrQYBn-2UkFiY-vOvNzHZ9Vlp5wJSeiWio=",
    },
    {
      Name: "Dabur Honitus",
      Manufacturer: "Dabur India Ltd",
      price: "Rs. 30-50 for a pack of 8-10 tablets",
      image:
        "https://5.imimg.com/data5/UF/HY/GLADMIN-43545561/dabur-honitus-cough-drops.png",
      link: "https://www.1mg.com/search/all?name=dabur%20honitus",
    },
    {
      Name: "Cofsils",
      Manufacturer: "Cipla Healtcare",
      price: "Rs. 30-50 for a pack of 8-10 tablets",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2020/9/HW/ZE/YJ/14356045/cosils-orange.jpg",
      link: "https://www.1mg.com/search/all?name=cofsils",
    },
  ],
  Benadryl: [
    {
      Name: "Corex",
      Manufacturer: "Pfizer",
      price: "Rs. 50-80 per bottle (100 ml)",
      image:
        "https://shreedashrath.com/wp-content/uploads/2021/06/corex-600x600.jpg",
      link: "https://www.1mg.com/search/all?name=corex",
    },
    {
      Name: "Ascoril-D",
      Manufacturer: "Gzlenmark",
      price: "Rs. 50-80 per bottle (100 ml)",
      image:
        "https://images.apollo247.in/pub/media/catalog/product/a/s/asc0019.jpg",
      link: "https://www.1mg.com/search/all?filter=true&name=Ascoril",
    },
  ],
  "Augmentin 1000 Duo Tablet": [
    {
      Name: "Clavam",
      Manufacturer: "Alkem Laboratories ",
      price: "Rs. 193",
      image:
        "https://images.apollo247.in/pub/media/catalog/product/c/l/cla0004.jpg",
      link: "https://www.1mg.com/drugs/clavam-625-tablet-63841",
    },
  ],
  Crestor: [
    {
      Name: "Rosuvas",
      Manufacturer: "Sun Pharmaceutical Indsutries Ltd",
      price: "Rs. 277",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/6/425035920/PX/LR/WN/147700842/rosuvas-10-mg-tablet1-500x500.jpg",
      link: "https://www.1mg.com/drugs/rosuvas-10-tablet-113791",
    },
  ],
  Lantus: [
    {
      Name: "Basalog",
      Manufacturer: "Bicon",
      price: "Rs. 481",
      image:
        "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/0c379a5816da4e63b74cd6889b2d382a.jpg?format=auto",
      link: "https://www.1mg.com/drugs/basalog-100iu-ml-refill-cartridge-164232",
    },
  ],
  Tamiflu: [
    {
      Name: "Fluvir",
      Manufacturer: "Hetero Drugs Ltd",
      price: "Rs.447",
      image:
        "https://images.apollo247.in/pub/media/catalog/product/f/l/flu0174.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
      link: "https://www.1mg.com/drugs/fluvir-75mg-capsule-25088",
    },
  ],
  Eliquis: [
    {
      Name: "Apigat",
      Manufacturer: "Nacto Pharma Ltd",
      price: "Rs. 533",
      image:
        "https://www.practostatic.com/practopedia-images/v3/res-750/apigat-2-5-mg-tablet-30-s_15fa3947-9fad-47f2-bbed-8d5f500e66e9.JPG",
      link: "https://www.1mg.com/drugs/apigat-5-tablet-540276",
    },
  ],
};

function search() {
  const inputData = document
    .getElementById("medicinesearch")
    .value.toLowerCase()
    .trim();
  const showOriginalMedicine = document.getElementById("result");

  showOriginalMedicine.style.display = "block";
  if (inputData === "") {
    showOriginalMedicine.innerHTML =
      "<p>Please enter a medicine name to search.</p>";
    return;
  }
  document.querySelector(".detial").style.display = "none";

  const result = medicine_original.filter((medicine) =>
    medicine.Name.toLowerCase().includes(inputData)
  );

  display(result);
}

function display(result) {
  const showOriginalMedicine = document.getElementById("result");
  showOriginalMedicine.innerHTML = "";

  if (result.length === 0) {
    showOriginalMedicine.innerHTML = "<p>No results found</p>";
    return;
  }

  result.forEach((medicine) => {
    showOriginalMedicine.innerHTML += `
      <button id="original">Original Medicine </button>
      <div class="medicine-item">
        <img src="${medicine.image}" alt="${medicine.Name}">
        <div>
          <h3>Name : ${medicine.Name}</h3>
          <p>Manufacturer: ${medicine.Manufacturer || "N/A"}</p>
          <p>Per Unit Price : ${medicine.price}</p>
          <a href="${medicine.link}" target="_blank">Buy Now</a>
        </div>
      </div>
    `;
  });
}

document.getElementById("medicinesearch").addEventListener("input", search);

function alternativesSearch() {
  const inputData = document
    .getElementById("medicinesearch")
    .value.toLowerCase()
    .trim();
  const showMedicine = document.getElementById("result");
  showMedicine.style.display = "block";

  if (inputData === "") {
    showMedicine.innerHTML = "<p>Please enter a medicine name to search.</p>";
    return;
  }

  const originalMedicine = medicine_original.filter((medicine) =>
    medicine.Name.toLowerCase().includes(inputData)
  );

  const matchingOriginalMedicineName = originalMedicine[0]?.Name;
  const alternatives = matchingOriginalMedicineName
    ? medicine_alternative[matchingOriginalMedicineName] || []
    : [];

  displayWithAlternatives(originalMedicine, alternatives);
}

function displayWithAlternatives(originalMedicine, alternatives) {
  const showMedicine = document.getElementById("result");
  showMedicine.innerHTML = "";

  if (originalMedicine.length === 0 && alternatives.length === 0) {
    showMedicine.innerHTML = "<p>No results found</p>";
    return;
  }

  originalMedicine.forEach((medicine) => {
    showMedicine.innerHTML += `
      <button id="original">Original Medicine </button>
      <div class="medicine-item">
        <img src="${medicine.image}" alt="${medicine.Name}">
        <div>
          <h3>Name : ${medicine.Name}</h3>
          <p>Manufacturer: ${medicine.Manufacturer || "N/A"}</p>
          <p>Per Unit Price: ${medicine.price}</p>
          <a href="${medicine.link}" target="_blank">Buy Now</a>
        </div>
      </div>
    `;
  });

  if (alternatives.length > 0) {
    showMedicine.innerHTML += `<button id="alternatives">Best Alternatives</button>`;
    alternatives.forEach((medicine) => {
      showMedicine.innerHTML += `
        <div class="medicine-item">
          <img src="${medicine.image}" alt="${medicine.Name}">
          <div>
            <h3>Name : ${medicine.Name}</h3>
            <p>Manufacturer : ${medicine.Manufacturer || "N/A"}</p>
            <p>Per Unit Price: ${medicine.price}</p>
            <a href="${medicine.link}" target="_blank">Buy Now</a>
          </div>
        </div>
      `;
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("homeLink");
  if (homeLink) {
    homeLink.addEventListener("click", home);
  }

  function home(event) {
    event.preventDefault();

    const detailsElement = document.querySelector(".detial");
    const resultElement = document.querySelector("#result");
    const text = document.getElementById("medicinesearch");

    if (detailsElement) {
      detailsElement.style.display = "block";
    } else {
      console.error("Details element not found");
    }

    if (resultElement) {
      resultElement.style.display = "none";
    } else {
      console.error("Result element not found");
    }

    if (text) {
      text.value = "";
    } else {
      console.error("Medicinesearch input element not found");
    }
  }
});
