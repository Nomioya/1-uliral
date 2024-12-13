import { useState } from "react";
const userdata = [
    { id: 1, name: "Blitz", email: "Blitz@example.com" },
    { id: 2, name: "Techno4k", email: "Techno4k@example.com" },
    { id: 3, name: "Blitz", email: "Blitz@example.com" },
    { id: 4, name: "Senzu", email: "Senzu@example.com" },
    { id: 5, name: "Blitz", email: "Blitz@example.com" },
    { id: 6, name: "Jake", email: "Jake@example.com" },
    { id: 7, name: "Mae", email: "Mae@example.com" },
    { id: 8, name: "Senzu", email: "Senzu@example.com" },
    { id: 9, name: "Jake", email: "Jake@example.com" },
    { id: 10, name: "Techno4k", email: "Techno4k@example.com" },
    {id: 11,name: "Senzu",email: "Senzu@example.com",},
    {id: 12,name: "Nomio",email: "Nomios@example.com",},
  ];
export default function task5() {
    const [search, setSearch] = useState("");
  const filteredtask6 = userdata.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
    const [grid, setGrid] = useState(false);
    return (
        <div className="h-screen w-screen bg-white px-80 py-12 ">
            <div className="flex justify-between">
            <div className="text-2xl font-semibold text-black mb-4">Нийтлэлүүд</div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-6"
            onClick={() => setGrid(!grid)}
          >
            {grid ? "Жагсаалт харах руу шилжих" : "Grid лүү харах руу шилжих"}
          </button>
            </div>
          
    
          <div
            
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg text-black font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}